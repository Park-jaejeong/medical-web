import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { symptoms, suspectedDisease, doctorOpinion, apiKey, images } = await request.json();

    // 사용자가 입력한 키 우선, 없으면 서버 환경변수 사용 (fallback)
    const resolvedKey = apiKey?.trim() || process.env.GEMINI_API_KEY;

    if (!resolvedKey) {
      return NextResponse.json(
        { error: "Gemini API 키가 필요합니다. 설정에서 API 키를 입력해주세요." },
        { status: 401 }
      );
    }

    const genAI = new GoogleGenerativeAI(resolvedKey);

    const hasSymptoms = symptoms && symptoms.trim().length > 0;
    const hasSuspectedDisease = suspectedDisease && suspectedDisease.trim().length > 0;

    const hasImages = images && images.length > 0;
    if (!hasSymptoms && !hasSuspectedDisease && !hasImages) {
      return NextResponse.json(
        { error: "증상, 추정병명 또는 시각 자료 중 최소 하나 이상을 입력해주세요." },
        { status: 400 }
      );
    }

    const model = genAI.getGenerativeModel({ model: "gemini-3.5-flash" });

    // 프롬프트 구성
    const promptText = `당신은 대한민국의 경험 많은 의료 전문가입니다. 
환자가 호소하는 증상(또는 환자와 의사 간의 대화 내용)과 첨부된 의료 이미지(X-ray, 검사 결과지 등)를 함께 분석하여 신뢰할 수 있는 정보를 제공해주세요.

환자 증상 입력 내용: "${symptoms || "증상 입력 없음"}"
${suspectedDisease ? `의사 추정 병명: "${suspectedDisease}"` : ""}

참고사항: 
- 입력 내용이 환자와 의사 간의 대화 형식일 경우, 대화의 문맥을 파악하여 환자가 호소하는 주관적 증상과 의사가 관찰한 객관적 소견을 모두 추출하여 분석에 반영하세요.
${suspectedDisease ? `- 의사가 추정 병명(${suspectedDisease})을 제공했습니다.
  1) 이 추정 병명의 일반적이고 대표적인 주요 증세 및 의학적 특징들을 'suspectedDiseaseSymptoms' 항목에 2~3문장으로 명확히 서술하십시오.
  2) 환자의 증상들이 해당 추정 병명과 어떻게 연관되는지 'suspectedDiseaseAnalysis' 항목에 상세히 설명하고, 이를 바탕으로 나머지 진료과, 검사, 예상 질환, 치료 방향을 이 추정 병명에 초점을 맞추어 더욱 구체화하세요.` : ""}
${hasImages ? `- 환자가 시각 자료(X-ray, 검사 결과 캡처 등)를 함께 첨부했습니다.${doctorOpinion ? `\n  추가로 의사가 남긴 영상 판독 참고 의견이 있습니다: "${doctorOpinion}"\n  이 의견을 적극 반영하여 시각 자료를 분석하십시오.` : ""}\n  이미지에 나타난 병변, 수치, 소견을 바탕으로 상세한 'imageAnalysis' 판독 소견을 작성해주시고, 이를 바탕으로 나머지 분석을 구체화해주세요.` : ""}

다음 JSON 형식으로만 응답하세요 (다른 텍스트 없이):
{
${suspectedDisease ? `  "suspectedDiseaseSymptoms": "추정 병명(${suspectedDisease})의 일반적인 대표 증세 및 임상 소견에 대한 객관적 설명 (2~3문장 요약)",` : ""}
${suspectedDisease ? `  "suspectedDiseaseAnalysis": "추정 병명(${suspectedDisease})과 입력된 환자 증상 간의 연관성 분석 및 종합 소견",` : ""}
${hasImages ? `  "imageAnalysis": "첨부된 시각 자료(사진)에 대한 구체적인 판독 소견 및 결론 (3~4문장 요약)",` : ""}
  "departments": [
    {
      "name": "진료과명",
      "reason": "이 진료과를 추천하는 이유 (이미지 소견 포함 가능)",
      "priority": "primary" 또는 "secondary"
    }
  ],
  "examinations": [
    {
      "name": "검사명",
      "purpose": "이 검사의 목적",
      "type": "혈액검사" 또는 "영상검사" 또는 "기능검사" 또는 "기타"
    }
  ],
  "diagnoses": [
    {
      "name": "예상 질환명",
      "probability": "높음" 또는 "중간" 또는 "낮음",
      "description": "소견 설명 (이미지 분석 내용 반영)"
    }
  ],
  "treatments": [
    {
      "category": "치료 카테고리",
      "description": "구체적인 치료 방법",
      "urgency": "즉시" 또는 "단기" 또는 "장기"
    }
  ],
  "urgencyLevel": "응급" 또는 "빠른진료" 또는 "일반진료",
  "urgencyMessage": "긴급도에 대한 안내",
  "disclaimer": "이 정보는 의료 참고용이며 실제 진단은 전문의와 상담하시기 바랍니다."
}

규칙:
- 이미지가 제공되었다면 이미지에서 확인할 수 있는 의학적 특징을 분석에 적극 반영할 것
- JSON 외의 텍스트 절대 금지
- 마크다운 코드블록(\`\`\`json) 금지`;

    // 멀티모달 데이터 구성
    const contentParts = [promptText];
    
    if (images && images.length > 0) {
      images.forEach(img => {
        contentParts.push({
          inlineData: {
            data: img.base64,
            mimeType: img.mimeType
          }
        });
      });
    }

    const result = await model.generateContent(contentParts);
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
