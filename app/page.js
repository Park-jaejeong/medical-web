"use client";

import { useState, useEffect, useRef } from "react";
import { useTheme } from "next-themes";
import { 
  Camera, 
  Image as ImageIcon, 
  X, 
  Upload, 
  FileText, 
  Search, 
  Key, 
  Check, 
  AlertTriangle, 
  Stethoscope, 
  Hospital, 
  TestTube, 
  ClipboardCheck, 
  ShieldCheck,
  Sun,
  Moon,
  Eye,
  EyeOff,
  Mic,
  MicOff,
  Monitor,
  Smartphone
} from "lucide-react";

// ─── 아이콘 컴포넌트 ───────────────────────────────────────────────
function IconHospital({ size = 24, className = "", color = "currentColor", ...props }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
      <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  );
}
function IconStethoscope({ size = 24, className = "", color = "currentColor", ...props }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
      <path d="M4.8 2.3A.3.3 0 105 2H4a2 2 0 00-2 2v5a6 6 0 006 6 6 6 0 006-6V4a2 2 0 00-2-2h-1a.2.2 0 10.3.3" />
      <path d="M8 15v1a6 6 0 006 6 6 6 0 006-6v-4" />
      <circle cx="20" cy="10" r="2" />
    </svg>
  );
}
function IconTest({ size = 24, className = "", color = "currentColor", ...props }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
      <path d="M14.5 2v8.5L20 17a3 3 0 01-3 5H7a3 3 0 01-3-5l5.5-6.5V2" />
      <line x1="8.5" y1="2" x2="15.5" y2="2" />
    </svg>
  );
}
function IconDiagnosis({ size = 24, className = "", color = "currentColor", ...props }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
      <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="16" y1="13" x2="8" y2="13" />
      <line x1="16" y1="17" x2="8" y2="17" />
      <polyline points="10 9 9 9 8 9" />
    </svg>
  );
}
function IconTreatment({ size = 24, className = "", color = "currentColor", ...props }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  );
}
function IconAlert({ size = 20, className = "", color = "currentColor", ...props }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
      <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
      <line x1="12" y1="9" x2="12" y2="13" />
      <line x1="12" y1="17" x2="12.01" y2="17" />
    </svg>
  );
}
function IconSearch({ size = 20, className = "", color = "currentColor", ...props }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
      <circle cx="11" cy="11" r="8" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  );
}
function IconKey({ size = 18, className = "", color = "currentColor", ...props }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
      <path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 11-7.778 7.778 5.5 5.5 0 017.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4" />
    </svg>
  );
}
function IconCheck({ size = 16, className = "", color = "currentColor", ...props }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}
function IconClose() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}
function IconEye({ show }) {
  return show ? (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94" />
      <path d="M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19" />
      <line x1="1" y1="1" x2="23" y2="23" />
    </svg>
  ) : (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}
function IconSun() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="5" />
      <line x1="12" y1="1" x2="12" y2="3" />
      <line x1="12" y1="21" x2="12" y2="23" />
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
      <line x1="1" y1="12" x2="3" y2="12" />
      <line x1="21" y1="12" x2="23" y2="12" />
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
    </svg>
  );
}
function IconMoon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
    </svg>
  );
}

function IconImageUpload() {
  return (
    <div className="flex flex-col items-center justify-center gap-2 p-4">
      <div className="w-12 h-12 rounded-full bg-cyan-500/10 flex items-center justify-center text-cyan-500">
        <Upload size={24} />
      </div>
      <p className="text-xs font-medium text-slate-500 dark:text-slate-400">이미지 업로드 (X-ray, 검사지 등)</p>
    </div>
  );
}
function ApiKeyModal({ isOpen, onClose, savedKey, onSave }) {
  const [inputKey, setInputKey] = useState(savedKey || "");
  const [showKey, setShowKey] = useState(false);
  const [saved, setSaved] = useState(false);
  const inputRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      setInputKey(savedKey || "");
      setSaved(false);
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen, savedKey]);

  const handleSave = () => {
    onSave(inputKey.trim());
    setSaved(true);
    setTimeout(() => {
      onClose();
      setSaved(false);
    }, 900);
  };

  const handleDelete = () => {
    setInputKey("");
    onSave("");
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ background: "rgba(0,0,0,0.7)", backdropFilter: "blur(8px)" }}
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div
        className="w-full max-w-md rounded-2xl p-6"
        style={{
          background: "var(--bg-card)",
          border: "1.5px solid var(--border-color)",
          boxShadow: "var(--glow-cyan)",
        }}
      >
        {/* 모달 헤더 */}
        <div className="flex items-center justify-between mb-5">
          <div className="flex items-center gap-3">
            <div
              className="w-9 h-9 rounded-xl flex items-center justify-center"
              style={{ background: "rgba(0,229,255,0.12)", color: "var(--accent-cyan)" }}
            >
              <IconKey />
            </div>
            <div>
              <h2 className="font-bold text-sm" style={{ color: "var(--text-primary)" }}>
                Gemini API 키 설정
              </h2>
              <p className="text-xs" style={{ color: "var(--text-muted)" }}>
                브라우저에만 저장, 서버에 전송하지 않습니다
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-lg flex items-center justify-center transition-colors"
            style={{ color: "var(--text-muted)" }}
          >
            <IconClose />
          </button>
        </div>

        {/* 보안 안내 */}
        <div
          className="rounded-xl p-3 mb-5 text-xs leading-relaxed"
          style={{
            background: "rgba(0,229,255,0.04)",
            border: "1px solid rgba(0,229,255,0.1)",
            color: "var(--text-muted)",
          }}
        >
          🔒 <strong style={{ color: "var(--text-secondary)" }}>보안 안내:</strong> 입력한 API 키는{" "}
          <strong style={{ color: "var(--accent-cyan)" }}>이 브라우저의 localStorage에만</strong>{" "}
          저장됩니다. 서버나 외부로 전송되지 않으며, 배포된 코드에도 포함되지 않습니다.
          <br />
          <a
            href="https://aistudio.google.com/app/apikey"
            target="_blank"
            rel="noopener noreferrer"
            className="underline mt-1 inline-block"
            style={{ color: "var(--accent-cyan)" }}
          >
            Google AI Studio에서 무료 API 키 발급 →
          </a>
        </div>

        {/* 입력 필드 */}
        <div className="mb-4">
          <label
            className="block text-xs font-medium mb-2"
            style={{ color: "var(--text-secondary)" }}
          >
            API 키
          </label>
          <div className="relative">
            <input
              ref={inputRef}
              type={showKey ? "text" : "password"}
              value={inputKey}
              onChange={(e) => setInputKey(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSave()}
              placeholder="AIzaSy..."
              className="w-full px-4 py-3 rounded-xl text-sm pr-12"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.1)",
                color: "var(--text-primary)",
                outline: "none",
                fontFamily: "monospace",
                letterSpacing: showKey ? "0" : "0.1em",
              }}
            />
            <button
              type="button"
              onClick={() => setShowKey((v) => !v)}
              className="absolute right-3 top-1/2 -translate-y-1/2"
              style={{ color: "var(--text-muted)" }}
            >
              <IconEye show={!showKey} />
            </button>
          </div>
        </div>

        {/* 버튼 그룹 */}
        <div className="flex gap-2">
          {savedKey && (
            <button
              onClick={handleDelete}
              className="px-4 py-2.5 rounded-xl text-sm font-medium transition-colors"
              style={{
                background: "rgba(244,67,54,0.1)",
                border: "1px solid rgba(244,67,54,0.25)",
                color: "#ef9a9a",
              }}
            >
              삭제
            </button>
          )}
          <button
            onClick={handleSave}
            disabled={!inputKey.trim()}
            className="flex-1 py-2.5 rounded-xl text-sm font-bold flex items-center justify-center gap-2 transition-all"
            style={{
              background: saved
                ? "rgba(76,175,80,0.2)"
                : inputKey.trim()
                ? "linear-gradient(135deg, #00acc1, #006064)"
                : "rgba(255,255,255,0.06)",
              border: saved ? "1px solid rgba(76,175,80,0.4)" : "none",
              color: saved ? "#a5d6a7" : inputKey.trim() ? "white" : "var(--text-muted)",
              cursor: inputKey.trim() ? "pointer" : "not-allowed",
            }}
          >
            {saved ? (
              <>
                <IconCheck />
                저장됨
              </>
            ) : (
              "저장하기"
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

// ─── 긴급도 배지 ───────────────────────────────────────────────────
function UrgencyBadge({ level, message }) {
  const styles = {
    응급: {
      bg: "rgba(244, 67, 54, 0.15)",
      border: "rgba(244, 67, 54, 0.4)",
      color: "#ef9a9a",
      dot: "#f44336",
      label: "🚨 응급",
    },
    빠른진료: {
      bg: "rgba(255, 152, 0, 0.12)",
      border: "rgba(255, 152, 0, 0.35)",
      color: "#ffcc80",
      dot: "#ff9800",
      label: "⚠️ 빠른진료 권장",
    },
    일반진료: {
      bg: "rgba(76, 175, 80, 0.1)",
      border: "rgba(76, 175, 80, 0.3)",
      color: "#a5d6a7",
      dot: "#4caf50",
      label: "✅ 일반진료",
    },
  };
  const s = styles[level] || styles["일반진료"];
  return (
    <div
      className="flex items-start gap-3 px-4 py-3 rounded-xl max-w-full"
      style={{ background: s.bg, border: `1px solid ${s.border}` }}
    >
      <span
        className="inline-block w-2.5 h-2.5 rounded-full flex-shrink-0 mt-1"
        style={{ background: s.dot, boxShadow: `0 0 8px ${s.dot}` }}
      />
      <div className="flex-1 min-w-0">
        <span className="font-bold mr-2 whitespace-nowrap block sm:inline-block text-base" style={{ color: s.color }}>{s.label}</span>
        <span className="text-base font-medium" style={{ color: "var(--text-secondary)", wordBreak: "break-word" }}>{message}</span>
      </div>
    </div>
  );
}

// ─── 로딩 스켈레톤 ─────────────────────────────────────────────────
function LoadingSkeleton() {
  return (
    <div className="flex-1 flex flex-col items-center justify-center gap-4 py-12">
      <div className="w-16 h-16 border-4 border-[var(--border-color)] border-t-[var(--accent-primary)] rounded-full animate-spin"></div>
      <p className="text-sm font-bold uppercase tracking-widest animate-pulse gradient-text">Processing Medical Data...</p>
    </div>
  );
}

// ─── 결과 섹션 카드 ────────────────────────────────────────────────
function ResultSection({ icon, title, color, children, delay }) {
  const { resolvedTheme } = useTheme();

  // 테마별 컬러 매핑 (dark 모드 색상 vs light 모드 가독성이 높은 어두운 색상)
  const colorMap = {
    "#00e5ff": { dark: "#00e5ff", light: "#006b76" }, // 추천 진료과 (하늘색 -> 짙은 청록색)
    "#ce93d8": { dark: "#ce93d8", light: "#7b1fa2" }, // 필요한 검사 (연보라 -> 짙은 보라색)
    "#ffa726": { dark: "#ffa726", light: "#d84315" }, // 예상 질환 (연주황 -> 짙은 주황/갈색)
    "#a5d6a7": { dark: "#a5d6a7", light: "#2e7d32" }, // 치료 방향 (연초록 -> 짙은 초록색)
  };

  const activeColor = colorMap[color] 
    ? (resolvedTheme === "dark" ? colorMap[color].dark : colorMap[color].light)
    : color;

  return (
    <div className={`sharp-card p-0 overflow-hidden fade-in-up result-card-${delay} h-full flex flex-col`}>
      <div className="px-3 py-2 border-b border-[var(--border-color)] bg-[var(--bg-secondary)] flex items-center gap-2 shrink-0">
        <div className="w-5 h-5 flex items-center justify-center flex-shrink-0" style={{ color: activeColor }}>
          {icon}
        </div>
        <h3 className="text-base font-bold uppercase tracking-wider" style={{ color: activeColor }}>{title}</h3>
      </div>
      <div className="p-4 bg-[var(--bg-card)] flex-1 overflow-y-auto text-sm leading-relaxed">
        {children}
      </div>
    </div>
  );
}

// ─── 진료과 섹션 ───────────────────────────────────────────────────
function DepartmentsSection({ departments }) {
  return (
    <ResultSection icon={<IconHospital />} title="추천 진료과" color="#00e5ff" delay={1}>
      <ul className="space-y-3">
        {departments.map((d, i) => (
          <li key={i} className="flex items-start gap-3">
            <span
              className="flex-shrink-0 mt-0.5 text-sm px-2 py-0.5 rounded-full font-bold"
              style={d.priority === "primary"
                ? { background: "rgba(0,229,255,0.15)", color: "#00b8cc", border: "1px solid rgba(0,229,255,0.3)" }
                : { background: "rgba(144,202,249,0.1)", color: "#64b5f6", border: "1px solid rgba(144,202,249,0.2)" }
              }
            >
              {d.priority === "primary" ? "1차" : "2차"}
            </span>
            <div>
              <p className="font-bold text-base mb-1" style={{ color: "var(--text-primary)" }}>{d.name}</p>
              <p className="text-sm font-medium" style={{ color: "var(--text-muted)" }}>{d.reason}</p>
            </div>
          </li>
        ))}
      </ul>
    </ResultSection>
  );
}

// ─── 검사 섹션 ─────────────────────────────────────────────────────
function ExaminationsSection({ examinations }) {
  const typeColor = { 혈액검사: "#ef5350", 영상검사: "#ab47bc", 기능검사: "#42a5f5", 기타: "#78909c" };
  return (
    <ResultSection icon={<IconTest />} title="필요한 검사" color="#ce93d8" delay={2}>
      <ul className="space-y-3">
        {examinations.map((e, i) => (
          <li key={i} className="flex items-start gap-3">
            <span
              className="flex-shrink-0 mt-0.5 text-sm px-2 py-0.5 rounded-full font-bold"
              style={{ background: (typeColor[e.type] || "#78909c") + "22", color: typeColor[e.type] || "#78909c", border: `1px solid ${(typeColor[e.type] || "#78909c")}44` }}
            >
              {e.type}
            </span>
            <div>
              <p className="font-bold text-base mb-1" style={{ color: "var(--text-primary)" }}>{e.name}</p>
              <p className="text-sm font-medium" style={{ color: "var(--text-muted)" }}>{e.purpose}</p>
            </div>
          </li>
        ))}
      </ul>
    </ResultSection>
  );
}

// ─── 예상 병명 섹션 ────────────────────────────────────────────────
function DiagnosesSection({ diagnoses }) {
  const probColor = { 높음: "#ef5350", 중간: "#ffa726", 낮음: "#66bb6a" };
  const probBg = { 높음: "rgba(239,83,80,0.12)", 중간: "rgba(255,167,38,0.12)", 낮음: "rgba(102,187,106,0.12)" };
  const probBar = { 높음: "80%", 중간: "50%", 낮음: "25%" };
  return (
    <ResultSection icon={<IconDiagnosis />} title="예상 질환" color="#ffa726" delay={3}>
      <ul className="space-y-4">
        {diagnoses.map((d, i) => (
          <li key={i}>
            <div className="flex items-center justify-between mb-2">
              <p className="font-bold text-base" style={{ color: "var(--text-primary)" }}>{d.name}</p>
              <span className="text-sm px-2 py-0.5 rounded-full font-bold" style={{ background: probBg[d.probability] || probBg["낮음"], color: probColor[d.probability] || probColor["낮음"] }}>
                가능성 {d.probability}
              </span>
            </div>
            <div className="h-1.5 rounded-full mb-2" style={{ background: "rgba(255,255,255,0.06)" }}>
              <div
                className="h-full rounded-full transition-all duration-700"
                style={{ width: probBar[d.probability] || "25%", background: probColor[d.probability] || probColor["낮음"], boxShadow: `0 0 6px ${probColor[d.probability] || "#66bb6a"}66` }}
              />
            </div>
            <p className="text-sm font-medium" style={{ color: "var(--text-muted)" }}>{d.description}</p>
          </li>
        ))}
      </ul>
    </ResultSection>
  );
}

// ─── 치료 방향 섹션 ────────────────────────────────────────────────
function TreatmentsSection({ treatments }) {
  const urgencyStyle = { 즉시: { color: "#ef5350", label: "즉시" }, 단기: { color: "#ffa726", label: "단기" }, 장기: { color: "#66bb6a", label: "장기" } };
  return (
    <ResultSection icon={<IconTreatment />} title="치료 방향" color="#a5d6a7" delay={4}>
      <ul className="space-y-3">
        {treatments.map((t, i) => (
          <li key={i} className="flex items-start gap-3">
            <div className="flex-shrink-0 mt-0.5" style={{ color: urgencyStyle[t.urgency]?.color || "#78909c" }}>
              <div className="w-2 h-2 rounded-full mt-2" style={{ background: "currentColor" }} />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <p className="font-bold text-base" style={{ color: "var(--text-primary)" }}>{t.category}</p>
                <span className="text-sm font-bold" style={{ color: urgencyStyle[t.urgency]?.color || "#78909c" }}>
                  ({urgencyStyle[t.urgency]?.label || t.urgency})
                </span>
              </div>
              <p className="text-sm font-medium" style={{ color: "var(--text-muted)" }}>{t.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </ResultSection>
  );
}

// ─── 증상 예시 태그 ────────────────────────────────────────────────
const SYMPTOM_EXAMPLES = [
  "두통과 발열", "복통과 설사", "흉통과 호흡곤란",
  "기침과 가래", "관절 통증과 부종", "어지러움과 구토",
  "피부 발진과 가려움", "소변 시 통증", "손발 저림", "눈 충혈과 통증",
];

// ─── 메인 페이지 ───────────────────────────────────────────────────
export default function Home() {
  const [viewMode, setViewMode] = useState("pc"); // "pc" | "mobile"
  const [symptoms, setSymptoms] = useState("");
  const [suspectedDisease, setSuspectedDisease] = useState("");
  const [doctorOpinion, setDoctorOpinion] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [apiKey, setApiKey] = useState("");
  const [showApiModal, setShowApiModal] = useState(false);
  const [images, setImages] = useState([]); // [{file, preview, base64}]
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const recognitionRef = useRef(null);
  const fileInputRef = useRef(null);

  // 리사이즈 관련 상태
  const [leftWidth, setLeftWidth] = useState(35);
  const isDragging = useRef(false);

  // 마운트 확인 (FOUC 방지)
  useEffect(() => {
    setMounted(true);
  }, []);

  // localStorage에서 API 키 불러오기
  useEffect(() => {
    const savedKey = localStorage.getItem("gemini_api_key");
    if (savedKey) setApiKey(savedKey);
  }, []);

  // 패널 리사이즈 이벤트 처리
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!isDragging.current) return;
      const newWidth = (e.clientX / window.innerWidth) * 100;
      // 최소 20%, 최대 80% 범위 제한
      if (newWidth > 20 && newWidth < 80) {
        setLeftWidth(newWidth);
      }
    };
    const handleMouseUp = () => {
      if (isDragging.current) {
        isDragging.current = false;
        document.body.style.cursor = 'default';
        document.body.style.userSelect = 'auto'; // 드래그 종료 시 텍스트 선택 가능
      }
    };
    
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  const startDrag = () => {
    isDragging.current = true;
    document.body.style.cursor = 'col-resize';
    document.body.style.userSelect = 'none'; // 드래그 중 텍스트 선택 방지
  };

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const processFiles = (files) => {
    if (!files.length) return;

    const validFiles = files.filter(file => file.type.startsWith('image/'));
    if (!validFiles.length) return;

    validFiles.forEach(file => {
      const reader = new FileReader();
      reader.onloadend = () => {
        const newImg = {
          file,
          preview: URL.createObjectURL(file),
          base64: reader.result.split(',')[1],
          mimeType: file.type
        };

        setImages(current => {
          if (current.length >= 5) {
            alert("이미지는 최대 5장까지만 업로드 가능합니다.");
            return current;
          }
          return [...current, newImg];
        });
      };
      reader.readAsDataURL(file);
    });
  };

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    processFiles(files);
    
    // input 초기화 (같은 파일 다시 선택 가능하게)
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  // Ctrl+V 붙여넣기 이벤트 핸들러
  useEffect(() => {
    const handlePaste = (e) => {
      // 입력창(textarea 등)에 포커스가 있을 때도 이미지가 있다면 가로채기
      const items = e.clipboardData?.items;
      if (!items) return;

      const files = [];
      for (let i = 0; i < items.length; i++) {
        if (items[i].type.indexOf("image") !== -1) {
          const file = items[i].getAsFile();
          if (file) files.push(file);
        }
      }

      if (files.length > 0) {
        processFiles(files);
      }
    };

    window.addEventListener("paste", handlePaste);
    return () => window.removeEventListener("paste", handlePaste);
  }, []);

  const removeImage = (index) => {
    setImages(prev => {
      const newImages = [...prev];
      URL.revokeObjectURL(newImages[index].preview);
      newImages.splice(index, 1);
      return newImages;
    });
  };

  const handleSaveApiKey = (key) => {
    setApiKey(key);
    if (key) {
      localStorage.setItem("gemini_api_key", key);
    } else {
      localStorage.removeItem("gemini_api_key");
    }
  };

  // 음성 인식 시작/중지 핸들러
  const toggleRecording = () => {
    if (isRecording) {
      recognitionRef.current?.stop();
      setIsRecording(false);
      return;
    }

    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
      alert("이 브라우저는 음성 인식을 지원하지 않습니다.");
      return;
    }

    if (!recognitionRef.current) {
      const recognition = new SpeechRecognition();
      recognition.lang = "ko-KR";
      recognition.interimResults = true;
      recognition.continuous = true;

      recognition.onresult = (event) => {
        let transcript = "";
        for (let i = event.resultIndex; i < event.results.length; i++) {
          transcript += event.results[i][0].transcript;
        }
        
        // 실시간으로 기존 증상에 추가 (마지막 부분만 업데이트하는 방식은 복잡하므로 단순 추가)
        if (event.results[event.results.length - 1].isFinal) {
          setSymptoms(prev => {
            const lastChar = prev.trim().slice(-1);
            const separator = (prev.trim() && lastChar !== "." && lastChar !== "?" && lastChar !== "!") ? ". " : " ";
            return prev.trim() + (prev ? separator : "") + transcript.trim();
          });
        }
      };

      recognition.onerror = (e) => {
        console.error("Speech Recognition Error:", e);
        let msg = "음성 인식 중 오류가 발생했습니다.";
        if (e.error === 'not-allowed') msg = "마이크 사용 권한이 없습니다. 브라우저 설정에서 마이크를 허용해주세요.";
        else if (e.error === 'no-speech') msg = "말소리가 감지되지 않았습니다. 다시 확인해주세요.";
        else if (e.error === 'network') msg = "네트워크 연결 문제로 음성 인식이 중단되었습니다.";
        else if (e.error === 'audio-capture') msg = "마이크를 찾을 수 없거나 사용 중입니다.";
        
        alert(msg);
        setIsRecording(false);
      };

      recognition.onend = () => {
        setIsRecording(false);
      };

      recognitionRef.current = recognition;
    }

    recognitionRef.current.start();
    setIsRecording(true);
  };

  const handleAnalyze = async () => {
    if (!symptoms.trim() && !suspectedDisease.trim() && images.length === 0) return;

    if (!apiKey.trim()) {
      setShowApiModal(true);
      return;
    }

    setLoading(true);
    setResult(null);
    setError(null);

    try {
      const res = await fetch("/api/analyze", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ 
          symptoms, 
          suspectedDisease,
          doctorOpinion,
          apiKey,
          images: images.map(img => ({
            base64: img.base64,
            mimeType: img.mimeType
          }))
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "분석 중 오류가 발생했습니다.");
        return;
      }

      setResult(data);
      setTimeout(() => {
        document.getElementById("results")?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 100);
    } catch {
      setError("네트워크 오류가 발생했습니다. 다시 시도해주세요.");
    } finally {
      setLoading(false);
    }
  };

  const handleTagClick = (tag) => {
    setSymptoms((prev) => {
      if (!prev.trim()) return tag;
      if (prev.includes(tag)) return prev;
      return prev + ", " + tag;
    });
  };

  const isMobileView = viewMode === "mobile";

  return (
    <div className={`w-full h-screen transition-all duration-300 ${isMobileView ? "bg-[#18120c] flex items-center justify-center p-4 overflow-y-auto" : "bg-[var(--bg-primary)]"}`}>
      <div 
        className={`transition-all duration-300 overflow-hidden flex ${
          isMobileView 
            ? "w-[400px] h-[820px] border-[12px] border-[#3b2f23] rounded-[44px] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)] relative flex-shrink-0 flex-col" 
            : "w-full h-full flex-col md:flex-row"
        } bg-[var(--bg-primary)]`}
        style={{ fontFamily: "var(--font-noto), sans-serif" }}
      >
        {/* 모바일 노치(Notch) 시뮬레이터 */}
        {isMobileView && (
          <div className="absolute top-2 left-1/2 -translate-x-1/2 w-28 h-5 bg-[#3b2f23] rounded-full z-50 flex items-center justify-center">
            <div className="w-2.5 h-2.5 rounded-full bg-black/40 mr-1.5" />
            <div className="w-10 h-1 rounded-full bg-black/40" />
          </div>
        )}

        {/* ── API 키 설정 모달 ── */}
        <ApiKeyModal
          isOpen={showApiModal}
          onClose={() => setShowApiModal(false)}
          savedKey={apiKey}
          onSave={handleSaveApiKey}
        />

        {/* ── 좌측 입력 패널 ── */}
        <aside 
          className={`w-full flex flex-col border-b md:border-b-0 bg-[var(--bg-secondary)] overflow-y-auto shrink-0 relative z-10 ${
            isMobileView ? "h-[50%] border-b border-[var(--border-color)]" : "h-[50vh] md:h-full"
          }`}
          style={{ width: !isMobileView && mounted && window.innerWidth >= 768 ? `${leftWidth}%` : '100%' }}
        >
        
        {/* 헤더 */}
        <header className="px-6 py-4 border-b border-[var(--border-color)] flex items-center justify-between sticky top-0 bg-[var(--bg-secondary)] z-20">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 flex items-center justify-center bg-[var(--text-primary)] text-[var(--bg-primary)] rounded-[var(--radius-sm)]">
              <IconStethoscope size={18} />
            </div>
            <div>
              <h1 className="text-sm font-bold tracking-tight uppercase" style={{ color: "var(--text-primary)" }}>의료웹 Console</h1>
              <p className="text-[10px] uppercase tracking-widest" style={{ color: "var(--text-muted)" }}>SYS.DIAG_v2.0</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {/* PC/모바일 뷰 전환 메뉴 */}
            <div className="flex items-center border border-[var(--border-color)] bg-[var(--bg-card)] rounded-[var(--radius-sm)] overflow-hidden mr-1">
              <button
                onClick={() => setViewMode("pc")}
                className={`px-2 py-1.5 flex items-center gap-1 text-[10px] font-bold uppercase transition-all ${
                  viewMode === "pc"
                    ? "bg-[var(--text-primary)] text-[var(--bg-primary)]"
                    : "hover:bg-[var(--bg-primary)]/50 text-[var(--text-muted)]"
                }`}
                title="PC 화면"
              >
                <Monitor size={11} />
                PC
              </button>
              <button
                onClick={() => setViewMode("mobile")}
                className={`px-2 py-1.5 flex items-center gap-1 text-[10px] font-bold uppercase transition-all ${
                  viewMode === "mobile"
                    ? "bg-[var(--text-primary)] text-[var(--bg-primary)]"
                    : "hover:bg-[var(--bg-primary)]/50 text-[var(--text-muted)]"
                }`}
                title="모바일 화면"
              >
                <Smartphone size={11} />
                Mob
              </button>
            </div>

            <button
              onClick={toggleTheme}
              className="w-8 h-8 border border-[var(--border-color)] flex items-center justify-center hover:bg-[var(--text-primary)] hover:text-[var(--bg-primary)] transition-colors rounded-[var(--radius-sm)]"
              aria-label="테마 전환"
            >
              {!mounted ? <div className="w-4 h-4" /> : (theme === "dark" || (theme === "system" && resolvedTheme === "dark") ? <Sun size={14} /> : <Moon size={14} />)}
            </button>
            <button
              onClick={() => setShowApiModal(true)}
              className="w-8 h-8 border border-[var(--border-color)] flex items-center justify-center hover:bg-[var(--text-primary)] hover:text-[var(--bg-primary)] transition-colors rounded-[var(--radius-sm)] relative"
              title="API 키 설정"
            >
              <IconKey size={14} />
              <span className={`absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full border border-[var(--bg-secondary)] ${apiKey ? 'bg-[var(--accent-green)]' : 'bg-[var(--accent-secondary)] animate-pulse'}`} />
            </button>
          </div>
        </header>

        {/* API 미설정 경고 */}
        {!apiKey && (
          <div className="disclaimer px-6 py-2 text-xs flex justify-between items-center">
            <span className="font-medium" style={{ color: "var(--accent-secondary)" }}>! API_KEY_REQUIRED</span>
            <button onClick={() => setShowApiModal(true)} className="underline hover:text-[var(--text-primary)]">설정</button>
          </div>
        )}

        {/* 입력 폼 영역 */}
        <div className="flex-1 p-6 flex flex-col gap-6">
          
          <div className="text-[11.5px] leading-relaxed p-3 border border-cyan-500/30 bg-cyan-500/5 dark:bg-cyan-500/10 text-cyan-800 dark:text-cyan-300 rounded-[var(--radius-sm)] flex gap-2 font-medium">
            <span className="flex-shrink-0">ℹ️</span>
            <span><strong>안내:</strong> 1번(Symptoms Input), 2번(추정병명), 3번(Visual Data) 항목 중 최소 하나는 입력해야 진단 실행이 가능합니다.</span>
          </div>

          <div>
            <div className="flex justify-between items-end mb-2">
              <label className="text-xs font-bold uppercase tracking-wider" style={{ color: "var(--text-primary)" }}>
                1. Symptoms Input
              </label>
            </div>
            <div className="relative">
              <textarea
                className="symptom-textarea w-full p-4 pr-12"
                rows={6}
                placeholder="환자의 증상을 구체적으로 기술하십시오. (예: 3일 전부터 우하복부 통증, 미열, 오심)"
                value={symptoms}
                onChange={(e) => setSymptoms(e.target.value)}
                onKeyDown={(e) => { if (e.key === "Enter" && (e.ctrlKey || e.metaKey)) handleAnalyze(); }}
              />
              <button
                onClick={toggleRecording}
                className={`absolute top-3 right-3 p-2 border border-[var(--border-color)] transition-all rounded-[var(--radius-sm)] ${
                  isRecording 
                     ? 'bg-[var(--accent-secondary)] text-white' 
                     : 'bg-[var(--bg-card)] hover:bg-[var(--text-primary)] hover:text-[var(--bg-card)] text-[var(--text-muted)]'
                }`}
                title={isRecording ? "녹음 중지" : "음성 입력"}
              >
                {isRecording ? <MicOff size={16} /> : <Mic size={16} />}
              </button>
            </div>
            <p className="text-[10px] mt-1 text-right" style={{ color: "var(--text-muted)" }}>PRESS CTRL+ENTER TO EXECUTE</p>
            
            <div className="mt-4 mb-2">
              <p className="text-[10px] font-bold uppercase tracking-widest mb-2" style={{ color: "var(--text-muted)" }}>Quick Tags</p>
              <div className="flex flex-wrap gap-1.5">
                {SYMPTOM_EXAMPLES.map((tag) => (
                  <button key={tag} className="symptom-tag" onClick={() => handleTagClick(tag)}>{tag}</button>
                ))}
              </div>
            </div>

            <div className="mt-6 flex flex-col gap-2">
              <label className="text-xs font-bold uppercase tracking-wider" style={{ color: "var(--text-primary)" }}>
                2. 추정병명 (선택사항)
              </label>
              <input
                type="text"
                className="symptom-textarea w-full p-3.5 text-sm"
                placeholder="추정하는 병명을 입력하십시오. (예: 뇌졸중, 급성 맹장염)"
                value={suspectedDisease}
                onChange={(e) => setSuspectedDisease(e.target.value)}
                onKeyDown={(e) => { if (e.key === "Enter") handleAnalyze(); }}
              />
            </div>
          </div>

          <div>
             <div className="flex justify-between items-center mb-2">
              <label className="text-xs font-bold uppercase tracking-wider" style={{ color: "var(--text-primary)" }}>
                3. VISUAL DATA (X-RAY, ECG 등 / MAX 5)
              </label>
            </div>
            <div className="flex flex-wrap gap-2 mb-3 text-[10px] font-bold uppercase tracking-wide" style={{ color: "var(--text-muted)" }}>
              <span className="flex items-center gap-1 bg-[var(--bg-card)] px-2 py-1 rounded border border-[var(--border-color)]"><ImageIcon size={12}/> 파일 첨부</span>
              <span className="flex items-center gap-1 bg-[var(--bg-card)] px-2 py-1 rounded border border-[var(--border-color)]"><Camera size={12}/> 사진 촬영</span>
              <span className="flex items-center gap-1 text-cyan-600 dark:text-cyan-400 bg-cyan-500/10 px-2 py-1 rounded border border-cyan-500/20">📸 Ctrl+V 붙여넣기</span>
            </div>
            
            <div className="mb-3">
              <input
                type="text"
                className="symptom-textarea w-full p-3 text-xs"
                placeholder="영상의학적 소견이나 의사의 사전 의견을 입력하세요. (판독 시 적극 참고)"
                value={doctorOpinion}
                onChange={(e) => setDoctorOpinion(e.target.value)}
                onKeyDown={(e) => { if (e.key === "Enter") handleAnalyze(); }}
              />
            </div>

            <div className="grid grid-cols-5 gap-2">
              {images.map((img, idx) => (
                <div key={idx} className="relative group aspect-square border border-[var(--border-color)] bg-[var(--bg-primary)] rounded-[var(--radius-sm)] overflow-hidden">
                  <img src={img.preview} alt="첨부" className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 transition-all" />
                  <button 
                    onClick={() => removeImage(idx)}
                    className="absolute top-0 right-0 w-5 h-5 bg-[var(--text-primary)] text-[var(--bg-primary)] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <X size={12} />
                  </button>
                </div>
              ))}
              
              {images.length < 5 && (
                <button 
                  onClick={() => fileInputRef.current?.click()}
                  className="aspect-square border border-dashed border-[var(--border-color)] flex flex-col items-center justify-center hover:bg-[var(--text-primary)] hover:text-[var(--bg-primary)] text-[var(--text-muted)] transition-colors rounded-[var(--radius-sm)] gap-1"
                >
                  <Upload size={16} />
                </button>
              )}
            </div>
            <input 
              ref={fileInputRef} type="file" accept="image/*" multiple className="hidden" 
              onChange={handleImageChange}
            />
          </div>

          <div className="mt-auto pt-4 pb-12 md:pb-0">
            <button
              className="btn-primary w-full flex items-center justify-center gap-2 py-4"
              onClick={handleAnalyze}
              disabled={loading || (!symptoms.trim() && !suspectedDisease.trim() && images.length === 0)}
            >
              {loading ? (
                <>
                  <div className="w-4 h-4 border-2 border-black/30 border-t-black animate-spin rounded-full" />
                  ANALYZING...
                </>
              ) : (
                <>
                  <IconStethoscope size={18} />
                  {apiKey ? "RUN DIAGNOSIS" : "API KEY REQUIRED"}
                </>
              )}
            </button>
          </div>
        </div>
      </aside>

      {/* ── 중앙 리사이즈 핸들 ── */}
      {!isMobileView && (
        <div 
          className="hidden md:flex flex-col items-center justify-center w-2 cursor-col-resize shrink-0 z-20 group relative bg-[var(--bg-primary)]"
          onMouseDown={startDrag}
        >
          <div className="absolute inset-y-0 left-0 w-[1px] bg-[var(--border-color)] group-hover:bg-[var(--accent-primary)] transition-colors" />
          <div className="h-8 w-1 rounded-full bg-[var(--border-color)] group-hover:bg-[var(--accent-primary)] transition-colors" />
        </div>
      )}

      {/* ── 우측 대시보드 ── */}
      <main className={`w-full bg-[var(--bg-primary)] overflow-y-auto p-4 md:p-6 relative min-w-0 ${
        isMobileView ? "h-[50%]" : "h-[50vh] md:h-full flex-1"
      }`} id="results">
        <div className="w-full h-full flex flex-col">
          
          {loading && <LoadingSkeleton />}

          {error && !loading && (
            <div className="sharp-card p-6 border-l-4 border-l-[var(--accent-secondary)]">
              <div className="flex items-start gap-4">
                <IconAlert />
                <div>
                  <h3 className="text-sm font-bold mb-2 uppercase" style={{ color: "var(--accent-secondary)" }}>System Error</h3>
                  <p className="text-sm" style={{ color: "var(--text-secondary)" }}>{error}</p>
                </div>
              </div>
            </div>
          )}

          {result && !loading && (
            <div className="flex flex-col gap-4 fade-in-right pb-4 flex-1 min-h-0">
              
              <div className="flex flex-col md:flex-row md:items-start justify-between pb-2 border-b border-[var(--border-color)] gap-4 shrink-0">
                <div className="shrink-0">
                  <h2 className="text-lg font-bold uppercase tracking-wide">Analysis Report</h2>
                  <p className="text-xs mb-1" style={{ color: "var(--text-muted)" }}>
                    {symptoms ? `QUERY: ${symptoms}` : (suspectedDisease ? `추정병명 분석 모드: ${suspectedDisease}` : "시각 자료 분석 모드")}
                  </p>
                  {suspectedDisease && (
                    <p className="text-sm font-bold" style={{ color: "var(--accent-secondary)" }}>추정 병명: {suspectedDisease}</p>
                  )}
                </div>
                {result.urgencyLevel && (
                  <div className="flex-1 min-w-0 w-full ml-0 md:ml-4">
                    <UrgencyBadge level={result.urgencyLevel} message={result.urgencyMessage} />
                  </div>
                )}
              </div>

              {result.imageAnalysis && (
                <div className="sharp-card p-4 bg-[var(--bg-card)] border border-[#4caf50]/30 fade-in-up shrink-0"
                     style={{
                       background: "linear-gradient(135deg, rgba(76, 175, 80, 0.05), rgba(0, 0, 0, 0))"
                     }}>
                  <div className="flex items-center gap-2 mb-2">
                    <ImageIcon size={16} style={{ color: "#4caf50" }} />
                    <h3 className="text-sm font-bold uppercase tracking-wider" style={{ color: "#4caf50" }}>
                      시각 자료 판독 소견 (결론)
                    </h3>
                  </div>
                  <p className="text-sm font-medium leading-relaxed" style={{ color: "var(--text-primary)" }}>
                    {result.imageAnalysis}
                  </p>
                </div>
              )}

              {result.suspectedDiseaseSymptoms && (
                <div className="sharp-card p-5 bg-[var(--bg-secondary)] border border-[var(--accent-primary)]/30 fade-in-up result-card-1 shrink-0 relative overflow-hidden"
                     style={{
                       background: "linear-gradient(135deg, rgba(0, 229, 255, 0.03), rgba(0, 0, 0, 0))",
                       boxShadow: "0 0 15px rgba(0, 229, 255, 0.05)"
                     }}>
                  <div className="absolute top-0 left-0 w-[4px] h-full bg-[var(--accent-primary)]" />
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-[var(--accent-primary)]/10 text-[var(--accent-primary)]">
                      <Stethoscope size={18} />
                    </div>
                    <div>
                      <h3 className="text-base font-bold tracking-wide" style={{ color: "var(--text-primary)" }}>
                        🩺 추정 병명 주요 증상 및 증세
                      </h3>
                      <p className="text-[10px] uppercase tracking-wider" style={{ color: "var(--text-muted)" }}>
                        Suspected Disease Symptoms: {suspectedDisease}
                      </p>
                    </div>
                  </div>
                  <p className="text-sm font-medium leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                    {result.suspectedDiseaseSymptoms}
                  </p>
                </div>
              )}

              {result.suspectedDiseaseAnalysis && (
                <div className="sharp-card p-4 bg-[var(--bg-secondary)] border-l-4 border-l-[var(--accent-primary)] fade-in-up result-card-1 shrink-0">
                  <h3 className="text-base font-bold mb-2 uppercase tracking-wider" style={{ color: "var(--text-primary)" }}>
                    🩺 추정 병명 연관성 분석
                  </h3>
                  <p className="text-sm font-medium leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                    {result.suspectedDiseaseAnalysis}
                  </p>
                </div>
              )}

              {/* Bento-style Grid for Results */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 flex-1 min-h-0">
                {result.departments && <DepartmentsSection departments={result.departments} />}
                {result.diagnoses && <DiagnosesSection diagnoses={result.diagnoses} />}
                {result.examinations && <div className="lg:col-span-2 h-full"><ExaminationsSection examinations={result.examinations} /></div>}
                {result.treatments && <div className="lg:col-span-2 h-full"><TreatmentsSection treatments={result.treatments} /></div>}
              </div>

              <div className="disclaimer p-4 flex items-start gap-3 mt-4">
                <span className="font-bold text-[var(--accent-secondary)]">!</span>
                <p className="text-[11px] leading-relaxed uppercase" style={{ color: "var(--text-muted)" }}>
                  {result.disclaimer || "의료 면책 고지: 본 시스템은 AI 기반의 보조 도구로, 실제 진단을 대체할 수 없습니다. 즉각적인 조치가 필요한 경우 응급실(119)에 연락하십시오."}
                </p>
              </div>

            </div>
          )}

          {/* Idle State / Features */}
          {!result && !loading && !error && (
            <div className="flex-1 flex flex-col justify-center max-w-3xl mx-auto w-full opacity-60 min-h-[400px]">
              <div className="mb-8 pb-2 text-center">
                <h3 className="text-lg font-bold text-[var(--text-primary)]">주요 기능</h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 2xl:grid-cols-4 gap-4">
                {[
                  { icon: <IconHospital size={28} color="#00e5ff" />, title: "진료과 추천", desc: "증상에 맞는 1, 2차 진료과를 우선순위별로 안내" },
                  { icon: <IconTest size={28} color="#ce93d8" />, title: "필요한 검사", desc: "혈액검사, 영상검사 등 필요한 검사 항목을 설명" },
                  { icon: <IconDiagnosis size={28} color="#ffa726" />, title: "예상 질환", desc: "가능성 높은 질환을 확률과 함께 설명" },
                  { icon: <IconTreatment size={28} color="#a5d6a7" />, title: "치료 방향", desc: "약물, 수술, 생활습관 개선 등 치료 방향 안내" },
                ].map((item) => (
                  <div key={item.title} className="sharp-card p-6 flex flex-col items-center text-center border border-[var(--border-color)] bg-[var(--bg-card)] hover:border-[var(--text-primary)] transition-all hover:-translate-y-1 cursor-default">
                    <div className="mb-4 w-14 h-14 flex items-center justify-center rounded-2xl" style={{ background: "var(--bg-primary)" }}>
                      {item.icon}
                    </div>
                    <h4 className="font-bold mb-2 text-[var(--text-primary)]">{item.title}</h4>
                    <p className="text-xs leading-relaxed" style={{ color: "var(--text-secondary)" }}>{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>
      </div>
    </div>
  );
}
