"use client";

import { useState, useEffect, useRef } from "react";

// ─── 아이콘 컴포넌트 ───────────────────────────────────────────────
function IconHospital() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  );
}
function IconStethoscope() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4.8 2.3A.3.3 0 105 2H4a2 2 0 00-2 2v5a6 6 0 006 6 6 6 0 006-6V4a2 2 0 00-2-2h-1a.2.2 0 10.3.3" />
      <path d="M8 15v1a6 6 0 006 6 6 6 0 006-6v-4" />
      <circle cx="20" cy="10" r="2" />
    </svg>
  );
}
function IconTest() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14.5 2v8.5L20 17a3 3 0 01-3 5H7a3 3 0 01-3-5l5.5-6.5V2" />
      <line x1="8.5" y1="2" x2="15.5" y2="2" />
    </svg>
  );
}
function IconDiagnosis() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="16" y1="13" x2="8" y2="13" />
      <line x1="16" y1="17" x2="8" y2="17" />
      <polyline points="10 9 9 9 8 9" />
    </svg>
  );
}
function IconTreatment() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  );
}
function IconAlert() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
      <line x1="12" y1="9" x2="12" y2="13" />
      <line x1="12" y1="17" x2="12.01" y2="17" />
    </svg>
  );
}
function IconSearch() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="8" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  );
}
function IconKey() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 11-7.778 7.778 5.5 5.5 0 017.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4" />
    </svg>
  );
}
function IconCheck() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
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

// ─── API 키 설정 모달 ──────────────────────────────────────────────
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
          background: "rgba(10, 18, 35, 0.98)",
          border: "1px solid rgba(0,229,255,0.2)",
          boxShadow: "0 0 60px rgba(0,229,255,0.08)",
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
      className="flex items-center gap-3 px-4 py-3 rounded-xl mb-6"
      style={{ background: s.bg, border: `1px solid ${s.border}` }}
    >
      <span
        className="inline-block w-2.5 h-2.5 rounded-full flex-shrink-0"
        style={{ background: s.dot, boxShadow: `0 0 8px ${s.dot}` }}
      />
      <div>
        <span className="font-bold mr-2" style={{ color: s.color }}>{s.label}</span>
        <span className="text-sm" style={{ color: "var(--text-secondary)" }}>{message}</span>
      </div>
    </div>
  );
}

// ─── 로딩 스켈레톤 ─────────────────────────────────────────────────
function LoadingSkeleton() {
  return (
    <div className="mt-10">
      <div className="flex items-center justify-center gap-2 mb-8">
        <div className="w-3 h-3 rounded-full dot-1" style={{ background: "var(--accent-cyan)" }} />
        <div className="w-3 h-3 rounded-full dot-2" style={{ background: "var(--accent-teal)" }} />
        <div className="w-3 h-3 rounded-full dot-3" style={{ background: "var(--accent-cyan)" }} />
        <span className="ml-2 text-sm" style={{ color: "var(--text-muted)" }}>AI가 증상을 분석하고 있습니다...</span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="glass-card p-6">
            <div className="skeleton h-6 w-32 mb-4" />
            <div className="space-y-2">
              <div className="skeleton h-4 w-full" />
              <div className="skeleton h-4 w-4/5" />
              <div className="skeleton h-4 w-3/5" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── 결과 섹션 카드 ────────────────────────────────────────────────
function ResultSection({ icon, title, color, children, delay }) {
  return (
    <div className={`glass-card p-6 fade-in-up result-card-${delay}`} style={{ opacity: 0 }}>
      <div className="flex items-center gap-3 mb-5">
        <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: color + "22", color }}>
          {icon}
        </div>
        <h3 className="text-base font-bold" style={{ color }}>{title}</h3>
      </div>
      {children}
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
              className="flex-shrink-0 mt-0.5 text-xs px-2 py-0.5 rounded-full font-medium"
              style={d.priority === "primary"
                ? { background: "rgba(0,229,255,0.15)", color: "#00e5ff", border: "1px solid rgba(0,229,255,0.3)" }
                : { background: "rgba(144,202,249,0.1)", color: "#90caf9", border: "1px solid rgba(144,202,249,0.2)" }
              }
            >
              {d.priority === "primary" ? "1차" : "2차"}
            </span>
            <div>
              <p className="font-semibold text-sm mb-0.5" style={{ color: "var(--text-primary)" }}>{d.name}</p>
              <p className="text-xs" style={{ color: "var(--text-muted)" }}>{d.reason}</p>
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
              className="flex-shrink-0 mt-0.5 text-xs px-2 py-0.5 rounded-full font-medium"
              style={{ background: (typeColor[e.type] || "#78909c") + "22", color: typeColor[e.type] || "#78909c", border: `1px solid ${(typeColor[e.type] || "#78909c")}44` }}
            >
              {e.type}
            </span>
            <div>
              <p className="font-semibold text-sm mb-0.5" style={{ color: "var(--text-primary)" }}>{e.name}</p>
              <p className="text-xs" style={{ color: "var(--text-muted)" }}>{e.purpose}</p>
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
            <div className="flex items-center justify-between mb-1">
              <p className="font-semibold text-sm" style={{ color: "var(--text-primary)" }}>{d.name}</p>
              <span className="text-xs px-2 py-0.5 rounded-full font-medium" style={{ background: probBg[d.probability] || probBg["낮음"], color: probColor[d.probability] || probColor["낮음"] }}>
                가능성 {d.probability}
              </span>
            </div>
            <div className="h-1.5 rounded-full mb-1.5" style={{ background: "rgba(255,255,255,0.06)" }}>
              <div
                className="h-full rounded-full transition-all duration-700"
                style={{ width: probBar[d.probability] || "25%", background: probColor[d.probability] || probColor["낮음"], boxShadow: `0 0 6px ${probColor[d.probability] || "#66bb6a"}66` }}
              />
            </div>
            <p className="text-xs" style={{ color: "var(--text-muted)" }}>{d.description}</p>
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
              <div className="w-2 h-2 rounded-full mt-1.5" style={{ background: "currentColor" }} />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-0.5">
                <p className="font-semibold text-sm" style={{ color: "var(--text-primary)" }}>{t.category}</p>
                <span className="text-xs" style={{ color: urgencyStyle[t.urgency]?.color || "#78909c" }}>
                  ({urgencyStyle[t.urgency]?.label || t.urgency})
                </span>
              </div>
              <p className="text-xs" style={{ color: "var(--text-muted)" }}>{t.description}</p>
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
  const [symptoms, setSymptoms] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [apiKey, setApiKey] = useState("");
  const [showApiModal, setShowApiModal] = useState(false);

  // localStorage에서 API 키 불러오기
  useEffect(() => {
    const saved = localStorage.getItem("gemini_api_key");
    if (saved) setApiKey(saved);
  }, []);

  const handleSaveApiKey = (key) => {
    setApiKey(key);
    if (key) {
      localStorage.setItem("gemini_api_key", key);
    } else {
      localStorage.removeItem("gemini_api_key");
    }
  };

  const handleAnalyze = async () => {
    if (!symptoms.trim()) return;

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
        body: JSON.stringify({ symptoms, apiKey }),
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

  return (
    <div className="min-h-screen" style={{ fontFamily: "var(--font-noto), sans-serif" }}>
      {/* ── API 키 설정 모달 ── */}
      <ApiKeyModal
        isOpen={showApiModal}
        onClose={() => setShowApiModal(false)}
        savedKey={apiKey}
        onSave={handleSaveApiKey}
      />

      {/* ── 헤더 ── */}
      <header
        className="sticky top-0 z-40 px-6 py-4"
        style={{ background: "rgba(7, 12, 24, 0.9)", backdropFilter: "blur(20px)", borderBottom: "1px solid rgba(0,229,255,0.08)" }}
      >
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ background: "linear-gradient(135deg, #00acc1, #006064)" }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
            </div>
            <div>
              <h1 className="text-base font-bold gradient-text">의료웹</h1>
              <p className="text-xs" style={{ color: "var(--text-muted)" }}>AI 증상 분석 시스템</p>
            </div>
          </div>

          {/* 헤더 오른쪽: API 키 상태 + 설정 버튼 */}
          <div className="flex items-center gap-2">
            {/* API 키 상태 표시 */}
            <div
              className="hidden sm:flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full"
              style={{
                background: apiKey ? "rgba(76,175,80,0.1)" : "rgba(255,152,0,0.1)",
                border: apiKey ? "1px solid rgba(76,175,80,0.25)" : "1px solid rgba(255,152,0,0.25)",
                color: apiKey ? "#a5d6a7" : "#ffcc80",
              }}
            >
              <span
                className="w-1.5 h-1.5 rounded-full"
                style={{ background: apiKey ? "#4caf50" : "#ff9800", boxShadow: apiKey ? "0 0 6px #4caf50" : "none" }}
              />
              {apiKey ? "API 키 설정됨" : "API 키 미설정"}
            </div>

            {/* API 키 설정 버튼 */}
            <button
              onClick={() => setShowApiModal(true)}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium transition-all hover:brightness-125"
              style={{
                background: "rgba(0,229,255,0.08)",
                border: "1px solid rgba(0,229,255,0.2)",
                color: "var(--accent-cyan)",
              }}
            >
              <IconKey />
              <span className="hidden sm:inline">API 키 설정</span>
            </button>
          </div>
        </div>
      </header>

      {/* ── API 키 미설정 배너 ── */}
      {!apiKey && (
        <div
          className="px-6 py-3 text-center text-sm"
          style={{ background: "rgba(255,152,0,0.08)", borderBottom: "1px solid rgba(255,152,0,0.15)" }}
        >
          <span style={{ color: "#ffcc80" }}>
            ⚠️ Gemini API 키가 필요합니다.{" "}
            <button
              onClick={() => setShowApiModal(true)}
              className="underline font-bold"
              style={{ color: "#ffa726" }}
            >
              여기서 설정하기 →
            </button>
          </span>
        </div>
      )}

      {/* ── 히어로 섹션 ── */}
      <section className="px-6 pt-16 pb-12">
        <div className="max-w-3xl mx-auto text-center">
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm mb-6"
            style={{ background: "rgba(0,188,212,0.08)", border: "1px solid rgba(0,188,212,0.2)", color: "var(--text-secondary)" }}
          >
            <IconSearch />
            증상을 입력하면 AI가 즉시 분석합니다
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
            <span className="gradient-text">AI 의료 안내</span>
            <br />
            <span style={{ color: "var(--text-primary)" }}>어디가 아프신가요?</span>
          </h2>

          <p className="text-base md:text-lg mb-10 leading-relaxed" style={{ color: "var(--text-secondary)" }}>
            증상을 자세히 설명하면, AI가 적합한 진료과와 필요한 검사,
            <br className="hidden md:block" />
            예상 질환 및 치료 방향을 안내해 드립니다.
          </p>

          {/* 입력 영역 */}
          <div className="glass-card p-6 text-left" style={{ transition: "none" }}>
            <label className="block text-sm font-medium mb-3" style={{ color: "var(--text-secondary)" }}>
              증상을 자세히 입력해 주세요
            </label>

            <textarea
              className="symptom-textarea w-full p-4"
              rows={5}
              placeholder="예) 3일 전부터 오른쪽 아랫배가 심하게 아프고, 미열이 있으며, 누르면 통증이 더 심해집니다. 오심도 있습니다."
              value={symptoms}
              onChange={(e) => setSymptoms(e.target.value)}
              onKeyDown={(e) => { if (e.key === "Enter" && (e.ctrlKey || e.metaKey)) handleAnalyze(); }}
            />

            {/* 증상 예시 태그 */}
            <div className="mt-4 mb-5">
              <p className="text-xs mb-2" style={{ color: "var(--text-muted)" }}>빠른 선택:</p>
              <div className="flex flex-wrap gap-2">
                {SYMPTOM_EXAMPLES.map((tag) => (
                  <button key={tag} className="symptom-tag" onClick={() => handleTagClick(tag)}>{tag}</button>
                ))}
              </div>
            </div>

            <button
              className="btn-primary w-full flex items-center justify-center gap-2"
              onClick={handleAnalyze}
              disabled={loading || !symptoms.trim()}
            >
              {loading ? (
                <>
                  <div className="w-4 h-4 rounded-full border-2 border-white/30 border-t-white animate-spin" />
                  분석 중...
                </>
              ) : (
                <>
                  <IconStethoscope />
                  {apiKey ? "AI 증상 분석하기" : "API 키 설정 후 분석하기"}
                </>
              )}
            </button>

            <p className="text-center text-xs mt-3" style={{ color: "var(--text-muted)" }}>
              Ctrl + Enter로도 분석할 수 있습니다
            </p>
          </div>
        </div>
      </section>

      {/* ── 결과 섹션 ── */}
      <section id="results" className="px-6 pb-20">
        <div className="max-w-5xl mx-auto">
          {loading && <LoadingSkeleton />}

          {error && !loading && (
            <div
              className="flex items-start gap-3 p-4 rounded-xl mt-8"
              style={{ background: "rgba(244, 67, 54, 0.08)", border: "1px solid rgba(244, 67, 54, 0.25)" }}
            >
              <IconAlert />
              <div>
                <p className="font-semibold text-sm mb-1" style={{ color: "#ef9a9a" }}>오류 발생</p>
                <p className="text-sm" style={{ color: "var(--text-secondary)" }}>{error}</p>
                {error.includes("API 키") && (
                  <button
                    onClick={() => setShowApiModal(true)}
                    className="text-xs underline mt-2 inline-block"
                    style={{ color: "var(--accent-cyan)" }}
                  >
                    API 키 설정하기 →
                  </button>
                )}
              </div>
            </div>
          )}

          {result && !loading && (
            <div className="mt-10">
              <div className="text-center mb-6">
                <h3 className="text-xs font-medium uppercase tracking-widest mb-1" style={{ color: "var(--accent-teal)" }}>AI 분석 결과</h3>
                <p className="text-sm" style={{ color: "var(--text-muted)" }}>
                  입력하신 증상: <em style={{ color: "var(--text-secondary)" }}>&ldquo;{symptoms}&rdquo;</em>
                </p>
              </div>

              {result.urgencyLevel && <UrgencyBadge level={result.urgencyLevel} message={result.urgencyMessage} />}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {result.departments && <DepartmentsSection departments={result.departments} />}
                {result.examinations && <ExaminationsSection examinations={result.examinations} />}
                {result.diagnoses && <DiagnosesSection diagnoses={result.diagnoses} />}
                {result.treatments && <TreatmentsSection treatments={result.treatments} />}
              </div>

              <div className="disclaimer p-4 mt-6 flex items-start gap-3">
                <span style={{ color: "#ffa726", flexShrink: 0 }}>⚠️</span>
                <p className="text-xs leading-relaxed" style={{ color: "#ffcc80" }}>
                  <strong>의료 면책 고지:</strong>{" "}
                  {result.disclaimer || "이 정보는 AI가 생성한 의료 참고 정보이며, 실제 진료를 대체할 수 없습니다. 정확한 진단과 치료는 반드시 의료 전문가와 상담하시기 바랍니다."}
                </p>
              </div>

              <div className="text-center mt-6">
                <button
                  className="btn-primary"
                  onClick={() => { setResult(null); setSymptoms(""); window.scrollTo({ top: 0, behavior: "smooth" }); }}
                >
                  다른 증상 분석하기
                </button>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ── 특징 소개 섹션 ── */}
      {!result && !loading && (
        <section className="px-6 pb-20">
          <div className="max-w-5xl mx-auto">
            <h3 className="text-center text-sm font-medium uppercase tracking-widest mb-8" style={{ color: "var(--text-muted)" }}>주요 기능</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { icon: <IconHospital />, color: "#00e5ff", title: "진료과 추천", desc: "증상에 맞는 1, 2차 진료과를 우선순위별로 안내" },
                { icon: <IconTest />, color: "#ce93d8", title: "필요한 검사", desc: "혈액검사, 영상검사 등 필요한 검사 항목을 설명" },
                { icon: <IconDiagnosis />, color: "#ffa726", title: "예상 질환", desc: "가능성 높은 질환을 확률과 함께 설명" },
                { icon: <IconTreatment />, color: "#a5d6a7", title: "치료 방향", desc: "약물, 수술, 생활습관 개선 등 치료 방향 안내" },
              ].map((item) => (
                <div key={item.title} className="glass-card p-5 text-center">
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center mx-auto mb-3" style={{ background: item.color + "18", color: item.color }}>
                    {item.icon}
                  </div>
                  <h4 className="font-bold text-sm mb-1.5" style={{ color: item.color }}>{item.title}</h4>
                  <p className="text-xs leading-relaxed" style={{ color: "var(--text-muted)" }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── 푸터 ── */}
      <footer className="py-8 px-6 text-center" style={{ borderTop: "1px solid rgba(0,229,255,0.06)", color: "var(--text-muted)" }}>
        <p className="text-xs">© 2026 의료웹 · AI 증상 분석 의료 안내 시스템</p>
        <p className="text-xs mt-1">본 서비스는 의료 참고용이며 전문의 진료를 대체하지 않습니다.</p>
      </footer>
    </div>
  );
}
