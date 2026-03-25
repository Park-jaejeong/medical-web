import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { symptoms, apiKey } = await request.json();

    // 사용자가 입력한 키 우선, 없으면 서버 환경변수 사용 (fallback)
    const resolvedKey = apiKey?.trim() || process.env.GEMINI_API_KEY;

    if (!resolvedKey) {
      return NextResponse.json(
        { error: "Gemini API 키가 필요합니다. 설정에서 API 키를 입력해주세요." },
        { status: 401 }
      );
    }

    const genAI = new GoogleGenerativeAI(resolvedKey);

    if (!symptoms || symptoms.trim().length === 0) {
      return NextResponse.json(
        { error: "증상을 입력해주세요." },
        { status: 400 }
      );
    }

    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

    const prompt = `당신은 대한민국의 경험 많은 의료 전문가입니다. 
환자가 호소하는 증상을 분석하여 아래 JSON 형식으로 정확하게 응답해주세요.

환자 증상: "${symptoms}"

다음 JSON 형식으로만 응답하세요 (다른 텍스트 없이):
{
  "departments": [
    {
      "name": "진료과명",
      "reason": "이 진료과를 추천하는 이유 (1~2문장)",
      "priority": "primary" 또는 "secondary"
    }
  ],
  "examinations": [
    {
      "name": "검사명",
      "purpose": "이 검사의 목적 (1문장)",
      "type": "혈액검사" 또는 "영상검사" 또는 "기능검사" 또는 "기타"
    }
  ],
  "diagnoses": [
    {
      "name": "예상 질환명 (한국어)",
      "probability": "높음" 또는 "중간" 또는 "낮음",
      "description": "간략한 설명 (1~2문장)"
    }
  ],
  "treatments": [
    {
      "category": "치료 카테고리 (예: 약물치료, 수술치료, 생활습관 개선, 물리치료, 응급처치 등)",
      "description": "구체적인 치료 방법 설명",
      "urgency": "즉시" 또는 "단기" 또는 "장기"
    }
  ],
  "urgencyLevel": "응급" 또는 "빠른진료" 또는 "일반진료",
  "urgencyMessage": "긴급도에 대한 간단한 안내 메시지",
  "disclaimer": "이 정보는 의료 참고용이며 실제 진단은 전문의와 상담하시기 바랍니다."
}

규칙:
- departments는 1~3개, examinations는 2~5개, diagnoses는 2~4개, treatments는 2~4개
- 모든 내용은 반드시 한국어로 작성
- JSON 외의 텍스트는 절대 포함하지 마세요
- 마크다운 코드블록(\`\`\`json)도 사용하지 마세요`;

    const result = await model.generateContent(prompt);
    const responseText = result.response.text().trim();

    // JSON 파싱 (마크다운 코드블록 제거)
    let cleanJson = responseText;
    if (cleanJson.startsWith("```")) {
      cleanJson = cleanJson.replace(/^```json?\s*/i, "").replace(/\s*```$/, "");
    }

    const data = JSON.parse(cleanJson);

    return NextResponse.json(data);
  } catch (error) {
    console.error("AI 분석 오류:", error);

    if (error instanceof SyntaxError) {
      return NextResponse.json(
        { error: "AI 응답 파싱 오류가 발생했습니다. 다시 시도해주세요." },
        { status: 500 }
      );
    }

    return NextResponse.json(
      {
        error:
          "분석 중 오류가 발생했습니다. API 키를 확인하거나 잠시 후 다시 시도해주세요.",
      },
      { status: 500 }
    );
  }
}
