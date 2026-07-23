import { useMemo, useState } from "react";
import { questions, scaleLabels } from "./data/questions";
import { types } from "./data/types";
import { scoreTest, type Result } from "./scoring";
import "./App.css";

type Stage = "intro" | "test" | "results";

const PER_PAGE = 9;

export default function App() {
  const [stage, setStage] = useState<Stage>("intro");
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [page, setPage] = useState(0);
  const [result, setResult] = useState<Result | null>(null);

  const shuffled = useMemo(() => {
    // stable pseudo-shuffle so items of same type aren't clustered
    return [...questions].sort((a, b) => ((a.id * 7) % 108) - ((b.id * 7) % 108));
  }, []);

  const totalPages = Math.ceil(shuffled.length / PER_PAGE);
  const pageItems = shuffled.slice(page * PER_PAGE, page * PER_PAGE + PER_PAGE);
  const answeredCount = Object.keys(answers).length;
  const progress = Math.round((answeredCount / questions.length) * 100);
  const pageComplete = pageItems.every((q) => answers[q.id] != null);

  function setAnswer(id: number, value: number) {
    setAnswers((a) => ({ ...a, [id]: value }));
  }

  function next() {
    if (page < totalPages - 1) {
      setPage((p) => p + 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const r = scoreTest(answers);
      setResult(r);
      setStage("results");
      window.scrollTo({ top: 0 });
    }
  }

  function restart() {
    setAnswers({});
    setPage(0);
    setResult(null);
    setStage("intro");
  }

  if (stage === "intro") {
    return (
      <div className="wrap">
        <Header />
        <main className="intro">
          <p className="eyebrow">Professional Enneagram Assessment · 108 items</p>
          <h1>Discover your Enneagram type, wing, and depth.</h1>
          <p className="lead">
            Hana is a complete, best-practice Enneagram inventory. Answer 108 statements
            honestly and you'll receive a full analysis of your dominant type (1–9), your
            wing, your core motivations and fears, and your growth and stress directions.
          </p>
          <div className="intro-grid">
            <div className="card"><span>108</span>total questions</div>
            <div className="card"><span>12</span>items per type</div>
            <div className="card"><span>9</span>types analyzed</div>
            <div className="card"><span>18</span>wing profiles</div>
          </div>
          <button className="cta" onClick={() => setStage("test")}>Begin the assessment →</button>
          <p className="fineprint">Takes about 15 minutes. Rate each statement by how true it is of you.</p>
        </main>
        <Footer />
      </div>
    );
  }

  if (stage === "test") {
    return (
      <div className="wrap">
        <Header />
        <div className="progressbar" aria-label="progress">
          <div className="progressbar-fill" style={{ width: `${progress}%` }} />
        </div>
        <p className="progress-label">{answeredCount} of {questions.length} answered · Page {page + 1} of {totalPages}</p>
        <main className="test">
          {pageItems.map((q, i) => (
            <div className="question" key={q.id}>
              <p className="q-num">{page * PER_PAGE + i + 1}</p>
              <p className="q-text">{q.text}</p>
              <div className="scale">
                {scaleLabels.map((s) => (
                  <button
                    key={s.value}
                    className={`opt ${answers[q.id] === s.value ? "sel" : ""}`}
                    onClick={() => setAnswer(q.id, s.value)}
                  >
                    <span className="dot" />
                    <span className="opt-label">{s.label}</span>
                  </button>
                ))}
              </div>
            </div>
          ))}
          <div className="nav">
            {page > 0 && (
              <button className="ghost" onClick={() => { setPage((p) => p - 1); window.scrollTo({ top: 0 }); }}>
                ← Back
              </button>
            )}
            <button className="cta" disabled={!pageComplete} onClick={next}>
              {page < totalPages - 1 ? "Next →" : "See my results →"}
            </button>
          </div>
          {!pageComplete && <p className="fineprint center">Please answer every statement on this page to continue.</p>}
        </main>
        <Footer />
      </div>
    );
  }

  // RESULTS
  const r = result!;
  const t = types[r.primaryType];
  const wing = t.wings.find((w) => w.key === r.wingKey)!;

  return (
    <div className="wrap">
      <Header />
      <main className="results">
        <p className="eyebrow">Your result</p>
        <h1 className="result-title">
          {t.name} — {t.nickname}
          <span className="wing-badge">{r.wingKey}</span>
        </h1>
        <p className="result-sub">{wing.name}: {wing.summary}</p>

        {/* score bars */}
        <section className="section">
          <h2>Your type profile</h2>
          <div className="bars">
            {r.sorted.map((tn) => (
              <div className="bar-row" key={tn}>
                <span className="bar-label">
                  {tn}. {types[tn].nickname}
                </span>
                <div className="bar-track">
                  <div
                    className={`bar-fill ${tn === r.primaryType ? "primary" : ""}`}
                    style={{ width: `${Math.max(r.percentages[tn], 3)}%` }}
                  />
                </div>
                <span className="bar-pct">{r.percentages[tn]}%</span>
              </div>
            ))}
          </div>
        </section>

        {/* overview */}
        <section className="section">
          <h2>Overview</h2>
          <p>{t.overview}</p>
          <div className="meta-grid">
            <Meta label="Center" value={t.center} />
            <Meta label="Core desire" value={t.coreDesire} />
            <Meta label="Core fear" value={t.coreFear} />
            <Meta label="Key motivation" value={t.keyMotivation} />
          </div>
        </section>

        {/* wing */}
        <section className="section">
          <h2>Your wing — {r.wingKey}: {wing.name}</h2>
          <p>{wing.traits}</p>
          <details className="details">
            <summary>See both wings of Type {r.primaryType}</summary>
            {t.wings.map((w) => (
              <div className="wing-block" key={w.key}>
                <h4>{w.key} — {w.name}</h4>
                <p>{w.traits}</p>
              </div>
            ))}
          </details>
        </section>

        {/* strengths / challenges */}
        <section className="section two-col">
          <div>
            <h3>Strengths</h3>
            <ul className="good">{t.strengths.map((s, i) => <li key={i}>{s}</li>)}</ul>
          </div>
          <div>
            <h3>Growth challenges</h3>
            <ul className="bad">{t.challenges.map((s, i) => <li key={i}>{s}</li>)}</ul>
          </div>
        </section>

        {/* dynamics */}
        <section className="section">
          <h2>Levels & dynamics</h2>
          <div className="dyn">
            <div><h4>At their best</h4><p>{t.atBest}</p></div>
            <div><h4>Under stress →</h4><p>{t.underStress}</p></div>
            <div><h4>When growing →</h4><p>{t.whenGrowing}</p></div>
          </div>
        </section>

        <div className="nav center">
          <button className="ghost" onClick={() => window.print()}>Print / Save as PDF</button>
          <button className="cta" onClick={restart}>Retake the test</button>
        </div>
      </main>
      <Footer />
    </div>
  );
}

function Meta({ label, value }: { label: string; value: string }) {
  return (
    <div className="meta">
      <span className="meta-label">{label}</span>
      <span className="meta-value">{value}</span>
    </div>
  );
}

function Header() {
  return (
    <header className="site-header">
      <div className="logo">
        <svg viewBox="0 0 32 32" width="28" height="28" fill="none" aria-label="Hana">
          <circle cx="16" cy="16" r="13" stroke="currentColor" strokeWidth="1.6" />
          <path d="M16 3 L27 22 L5 22 Z" stroke="currentColor" strokeWidth="1.4" />
          <path d="M16 3 L16 29 M5 22 L27 22 M8.5 12 L23.5 12" stroke="currentColor" strokeWidth="1" opacity="0.5" />
        </svg>
        <span>Hana</span>
      </div>
      <span className="header-tag">Enneagram Assessment</span>
    </header>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <p>Hana · A professional Enneagram assessment. For self-understanding and reflection — not a clinical or diagnostic instrument.</p>
    </footer>
  );
}
