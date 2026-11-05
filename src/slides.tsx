import { useEffect, useState, type CSSProperties, type ReactNode } from 'react'
import QRCode from 'qrcode'
import { LINKS, MEDIA } from './media'

export interface SlideDef {
  title: string
  notes: string
  className?: string
  noBrand?: boolean
  render: () => ReactNode
}

const pop = (i: number): CSSProperties => ({ ['--i' as string]: i })
const A = (p: string) => `./assets/${p}`

function Phone({ src, alt, style, className = '' }: { src: string; alt: string; style?: CSSProperties; className?: string }) {
  return (
    <div className={`phone ${className}`} style={style}>
      <img src={A(src)} alt={alt} />
    </div>
  )
}

function Tag({ children }: { children: ReactNode }) {
  return <span className="tag">{children}</span>
}

/* ---------- 01 Cover ---------- */
const Cover = () => (
  <div className="cover">
    <svg className="route" viewBox="0 0 1920 1080" aria-hidden>
      <path d="M-40 900 C 300 760, 420 1040, 760 880 S 1180 560, 1500 720 S 1800 520, 1980 360" />
    </svg>
    <img className="cover-wz" src={A('weitzman-logo.svg')} alt="Stuart Weitzman School of Design, University of Pennsylvania" />
    <div className="cover-text">
      <div className="kicker pop" style={pop(0)}>GIS Day 2026 · University of Pennsylvania</div>
      <h1 className="mega pop" style={pop(1)}>
        A Travel Diary<br />That <span className="hl">Doesn’t End</span>
      </h1>
      <p className="sub pop" style={pop(2)}>From transportation research to building TripLibre with AI</p>
      <p className="who pop" style={pop(3)}><b>Zhanchao Yang</b> · MCP &amp; MUSA, University of Pennsylvania</p>
    </div>
    <div className="cover-logo pop" style={pop(2)}>
      <img src={A('triplibre-logo.png')} alt="TripLibre app icon" />
    </div>
  </div>
)

/* ---------- 02 Where it all started ---------- */
const Started = () => (
  <div className="split">
    <div className="col-text">
      <div className="kicker pop" style={pop(0)}>02 · The starting point</div>
      <h2 className="h1 pop" style={pop(1)}>Where it<br />all started</h2>
      <p className="lead pop" style={pop(2)}>
        Erick Guerra’s <b>Introduction to Transportation Planning</b> — my first look at a household travel survey.
      </p>
    </div>
    <div className="col-visual">
      <div className="diary card pop" style={pop(2)}>
        <div className="diary-title">Travel diary <small>HHTS</small></div>
        {[1, 2, 3].map(n => (
          <div className="diary-row" key={n}>
            <span className="dot">{n}</span>
            <span className="blank">From ________</span>
            <span className="blank">To ________</span>
            <span className="blank short">Mode ____</span>
          </div>
        ))}
        <div className="diary-hint">…and so on, for every trip, every day.</div>
        <svg className="pencil" viewBox="0 0 220 40" aria-hidden>
          <polygon points="0,20 28,6 28,34" fill="#ffd8b0" stroke="#22193a" strokeWidth="4" strokeLinejoin="round" />
          <rect x="28" y="6" width="150" height="28" fill="#ffc93c" stroke="#22193a" strokeWidth="4" />
          <rect x="178" y="6" width="36" height="28" rx="8" fill="#ff7eb3" stroke="#22193a" strokeWidth="4" />
        </svg>
      </div>
    </div>
  </div>
)

/* ---------- 03 From data to research ---------- */
const Research = () => {
  const x = (h: number) => 90 + (h / 8) * 740
  const y = (v: number) => 400 - v * 300
  const f = (h: number) => 0.18 + 0.78 * Math.exp(-Math.pow((h - 3.3) / 2.6, 2) * 0.9)
  const pts = Array.from({ length: 41 }, (_, k) => k * 0.2).map((h, k) => `${k ? 'L' : 'M'}${x(h).toFixed(1)} ${y(f(h)).toFixed(1)}`).join(' ')
  return (
    <div className="split">
      <div className="col-text">
        <div className="kicker pop" style={pop(0)}>03 · From data to research</div>
        <h2 className="h1 pop" style={pop(1)}>Telework,<br />in hours</h2>
        <div className="stats">
          <div className="stat sun pop" style={pop(2)}><b>34,800</b><span>person-days</span></div>
          <div className="stat mint pop" style={pop(3)}><b>19,164</b><span>workers</span></div>
        </div>
        <p className="small pop" style={pop(4)}>Twin Cities Travel Behavior Inventory<br />2019 · 2021 · 2023 · Penn MCP thesis</p>
      </div>
      <div className="col-visual">
        <figure className="card chart pop" style={pop(2)}>
          {MEDIA.thesisFigure ? (
            <img src={A(MEDIA.thesisFigure.replace(/^assets\//, ''))} alt="Thesis figure: weekday trips by daily telework hours" />
          ) : (
            <svg viewBox="0 0 880 520" role="img" aria-label="Schematic: weekday trips rise with daily telework hours, turn near 3.3 hours, then fall.">
              <line x1="90" y1="400" x2="840" y2="400" className="axis" />
              <line x1="90" y1="400" x2="90" y2="60" className="axis" />
              <path d={pts} className="curve" pathLength={1} />
              <line x1={x(3.3)} y1={y(f(3.3))} x2={x(3.3)} y2="400" className="turn" />
              <circle cx={x(3.3)} cy={y(f(3.3))} r="14" className="peak" />
              <text x={x(3.3) + 24} y={y(f(3.3)) - 14} className="ann">turning point ≈ 3.3 h</text>
              <text x="465" y="450" textAnchor="middle" className="axl">daily telework hours</text>
              <text x="40" y="230" textAnchor="middle" className="axl" transform="rotate(-90 40 230)">weekday trips</text>
            </svg>
          )}
          {!MEDIA.thesisFigure && <Tag>Schematic redraw — no y-values · thesis figure to be added</Tag>}
        </figure>
      </div>
    </div>
  )
}

/* ---------- 04 Seeing the other side ---------- */
const OtherSide = () => (
  <div className="split">
    <div className="col-visual">
      <figure className="card mapcard pop" style={pop(1)}>
        <svg viewBox="0 0 800 640" role="img" aria-label="Illustration: a GPS trace wandering around a spot where the participant sat still.">
          <rect width="800" height="640" fill="#e8f3d6" />
          {[100, 240, 380, 520].map(v => <rect key={'h' + v} x="0" y={v} width="800" height="34" fill="#fff" />)}
          {[120, 300, 500, 680].map(v => <rect key={'v' + v} x={v} y="0" width="34" height="640" fill="#fff" />)}
          <rect x="560" y="300" width="200" height="140" rx="16" fill="#9fd8f5" />
          <path
            className="trace"
            pathLength={1}
            d="M400 330 C 330 270, 250 330, 290 400 S 450 470, 500 380 S 470 250, 380 250 S 250 270, 230 340 S 330 500, 450 470 S 590 380, 540 300 S 430 215, 340 235"
          />
          <g transform="translate(400 360)">
            <circle r="26" fill="#ff6b4a" stroke="#22193a" strokeWidth="6" />
            <circle r="9" fill="#fff" />
          </g>
        </svg>
        <Tag>Illustrative redraw</Tag>
      </figure>
    </div>
    <div className="col-text">
      <div className="kicker pop" style={pop(0)}>04 · Seeing the other side</div>
      <h2 className="h1 pop" style={pop(1)}>Then I joined the survey</h2>
      <p className="lead pop" style={pop(2)}>
        I took part in Philadelphia’s household travel survey effort — and saw how hard it is to <b>observe</b> travel.
      </p>
      <div className="quote pop" style={pop(3)}>The GPS dot wandered while I sat still.</div>
    </div>
  </div>
)

/* ---------- 05 What if ---------- */
const WhatIf = () => (
  <div className="center">
    <div className="kicker pop" style={pop(0)}>05 · The idea</div>
    <h2 className="mega pop" style={pop(1)}>What if the diary<br /><span className="hl">never ended?</span></h2>
    <div className="layers">
      {[
        ['Raw', 'what the phone recorded', 'stone'],
        ['Inferred', 'what the app guesses', 'sky'],
        ['Corrected', 'what you say is true', 'lime'],
      ].map(([a, b, c], k) => (
        <div key={a} className={`layer ${c} pop`} style={pop(k + 3)}>
          <b>{a}</b><span>{b}</span>
        </div>
      ))}
    </div>
    <p className="small pop" style={pop(6)}>Your data stays yours: no account, no server. Corrections never overwrite the raw trace.</p>
  </div>
)

/* ---------- 06 Meet TripLibre ---------- */
const Meet = () => (
  <div className="meet">
    <div className="meet-text">
      <div className="kicker pop" style={pop(0)}>06 · Meet TripLibre</div>
      <h2 className="mega pop" style={pop(1)}>Meet<br />TripLibre</h2>
      <p className="lead pop" style={pop(2)}>A personal travel diary on your iPhone, with you in charge.</p>
      <Tag>Simulator screenshots · demo data</Tag>
    </div>
    {MEDIA.demoVideo ? (
      <video className="demo card" src={A(MEDIA.demoVideo.replace(/^assets\//, ''))} controls muted playsInline />
    ) : (
      <div className="phones">
        <Phone src="release/01-today.jpg" alt="TripLibre Today screen" className="ph1" />
        <Phone src="release/03-fix-a-trip.jpg" alt="TripLibre trip correction sheet" className="ph2" />
        <Phone src="release/05-map.jpg" alt="TripLibre map screen" className="ph3" />
      </div>
    )}
  </div>
)

/* ---------- 07 Couldn't build alone ---------- */
const TEAM = [
  { name: 'Zhanchao', role: 'The Researcher', job: 'Direction, requirements, decisions, final say', c: 'coral', g: 'Z' },
  { name: 'ChatGPT', role: 'The Thinker', job: 'Planning, trade-offs, task breakdown', c: 'mint', g: '◔' },
  { name: 'Claude Code', role: 'The Builder', job: 'Implementation', c: 'sun', g: '✳' },
  { name: 'Codex', role: 'The Reviewer', job: 'Code review', c: 'sky', g: '</>' },
]
const Team = () => (
  <div className="center">
    <div className="kicker pop" style={pop(0)}>07 · The team</div>
    <h2 className="h1 pop" style={pop(1)}>I couldn’t build this alone</h2>
    <div className="team">
      {TEAM.map((t, k) => (
        <div key={t.name} className={`member ${t.c} pop`} style={{ ...pop(k + 2), ['--tilt' as string]: `${[-2, 1.5, -1.5, 2][k]}deg` }}>
          <div className="avatar">{t.g}</div>
          <b>{t.name}</b>
          <em>{t.role}</em>
          <span>{t.job}</span>
        </div>
      ))}
    </div>
    <p className="small pop" style={pop(7)}>Representative roles, not exclusive boundaries. I’m a transportation researcher, not an iOS developer.</p>
  </div>
)

/* ---------- 08 How I got started ---------- */
const Started2 = () => (
  <div className="center">
    <div className="kicker pop" style={pop(0)}>08 · How I got started</div>
    <h2 className="h1 pop" style={pop(1)}>I started with a problem,<br />not a codebase.</h2>
    <div className="steps">
      {[
        ['01', 'Describe', 'What should the app actually do?', 'sun'],
        ['02', 'Prototype', 'Build the smallest working version.', 'bubblegum'],
        ['03', 'Iterate', 'Try it, find mistakes, improve.', 'sky'],
      ].map(([n, t, d, c], k) => (
        <div key={n} className="step-wrap pop" style={pop(k + 2)}>
          <div className={`step ${c}`}>
            <i>{n}</i>
            <b>{t}</b>
            <span>{d}</span>
          </div>
          {k < 2 && <div className="arrow" aria-hidden>→</div>}
        </div>
      ))}
    </div>
    <p className="closing pop" style={pop(6)}>No complete roadmap. No software team. Just a research question and a working prototype.</p>
  </div>
)

/* ---------- 10 Atlanta field test (issues #4–#6) ---------- */
const Story = () => (
  <div className="center">
    <div className="kicker pop" style={pop(0)}>10 · One field test, three issues</div>
    <h2 className="h1 pop" style={pop(1)}>Atlanta, October 1</h2>
    <p className="lead tester pop" style={pop(2)}>I was the test engineer. I filed what I saw.</p>
    <div className="panels three">
      {[
        ['Find the problem', '#4', 'The timeline froze for hours while raw data kept piling up. In a concert hall, indoor GPS drift flipped the phone to “moving” (20:01 → 20:04) while it never moved.', 'bubblegum'],
        ['Human in the loop', '#5', 'Back up the raw data, replay the day, compare with what actually happened. Raw data preserved. My own edits untouched.', 'sun'],
        ['Respond to behavior', '#6', 'Data weren’t lost, but the app looked frozen. So show it: “in progress” is not “not recorded”.', 'lime'],
      ].map(([a, b, c, col], k) => (
        <div key={a} className={`panel ${col} pop`} style={pop(k + 3)}>
          <div className="panel-n">{k + 1}</div>
          <b>{a}</b>
          <code>Issue {b}</code>
          <span>{c}</span>
        </div>
      ))}
    </div>
    <Tag>Real GitHub issues from the TripLibre repository</Tag>
  </div>
)

/* ---------- 10 Less is better ---------- */
const Less = () => (
  <div className="versus">
    <div className="vs-side left pop" style={pop(0)}>
      <div className="kicker">09 · Sometimes, less is better</div>
      <h3>Automatic</h3>
      <p>Detect every place type by itself.</p>
      <div className="nope">✕ too much inference</div>
    </div>
    <div className="vs-badge pop" style={pop(3)}>vs</div>
    <div className="vs-side right pop" style={pop(1)}>
      <h3>You label it</h3>
      <p>Home. Office. Hotel. Your words.</p>
      <Phone src="release/08-places.jpg" alt="TripLibre Places screen with user-labelled places" className="vs-phone" />
      <div className="yes">✓ the one I kept</div>
      <Tag>Issue #56 · PR #59</Tag>
    </div>
  </div>
)

/* ---------- 11 The loop ---------- */
const Loop = () => (
  <div className="center">
    <div className="kicker pop" style={pop(0)}>11 · How a change gets made</div>
    <h2 className="h1 pop" style={pop(1)}>The loop</h2>
    <div className="loop">
      {[
        ['Issue', 'I write down the problem', 'sun'],
        ['Discuss & solve', 'Claude Code builds it, tested in the iOS simulator', 'mint'],
        ['Pull request', 'Changes arrive for review', 'sky'],
        ['Auto-review', 'Codex reviews the PR automatically', 'bubblegum'],
        ['Final check', 'Zhanchao decides', 'coral'],
        ['Merge', 'It joins the app', 'lime'],
      ].map(([a, b, c], k) => (
        <div key={a} className="loop-wrap pop" style={pop(k + 2)}>
          <div className={`loop-step ${c}`}><i>{k + 1}</i><b>{a}</b><span>{b}</span></div>
          {k < 5 && <div className="loop-arrow" aria-hidden>→</div>}
        </div>
      ))}
    </div>
    <div className="loop-back pop" style={pop(8)}>↻ Field test → new problems → back to the issue</div>
    <div className="loop-eg pop" style={pop(9)}>
      <b>Example · one-tap stop stamp (#32 → PR #53)</b> Codex flagged: a stamp 10 s after a stay could make a stop shorter than the 60 s minimum. Fixed in <code>8a26c25</code> with a test.
    </div>
  </div>
)

/* ---------- 11 What worked ---------- */
const Worked = () => (
  <div className="split">
    <div className="col-text wide">
      <div className="kicker pop" style={pop(0)}>12 · What actually worked?</div>
      <h2 className="h1 pop" style={pop(1)}>It works.<br />With limits.</h2>
      <div className="bigstats">
        <div className="bs sun pop" style={pop(2)}><b>14</b><span>releases, v0.1.0 → v2.1.0</span></div>
        <div className="bs mint pop" style={pop(3)}><b>112</b><span>tests, incl. 14 synthetic days</span></div>
        <div className="bs sky pop" style={pop(4)}><b>0.827 → 0.939</b><span>whole-day agreement, 5 held-out days</span></div>
      </div>
    </div>
    <div className="col-visual">
      <div className="limits card pop" style={pop(5)}>
        <b>Still limited</b>
        <ul>
          <li>One person, 17 days</li>
          <li>No formal benchmark yet</li>
          <li>iPhone only (iOS 17+)</li>
        </ul>
      </div>
    </div>
  </div>
)

/* ---------- 12 What I learned ---------- */
const Learned = () => (
  <div className="center">
    <div className="kicker pop" style={pop(0)}>13 · What I learned</div>
    <h2 className="h1 pop" style={pop(1)}>Three things</h2>
    <div className="takeaways">
      {[
        ['AI can write the code.', 'I still decide what is worth building.', 'coral'],
        ['Review is the work.', 'Every fix started with someone asking “wait, is that right?”', 'sun'],
        ['Validity doesn’t automate.', 'Research method and accountability stay human.', 'mint'],
      ].map(([a, b, c], k) => (
        <div key={a} className={`take ${c} pop`} style={pop(k + 2)}>
          <i>{k + 1}</i>
          <b>{a}</b>
          <span>{b}</span>
        </div>
      ))}
    </div>
  </div>
)

/* ---------- 13 Thank you ---------- */
function QR({ url }: { url: string }) {
  const [src, setSrc] = useState('')
  useEffect(() => {
    QRCode.toDataURL(url, { margin: 1, width: 480, color: { dark: '#22193a', light: '#ffffff' } }).then(setSrc)
  }, [url])
  return src ? <img src={src} alt={`QR code linking to ${url}`} /> : null
}

const Thanks = () => {
  const url = LINKS.appStore ?? LINKS.product
  return (
    <div className="split thanks">
      <div className="col-text wide">
        <div className="kicker pop" style={pop(0)}>14 · Thank you</div>
        <h2 className="h2 pop" style={pop(1)}>What should researchers build when building software is{' '}<span className="hl">no longer the biggest barrier?</span></h2>
        <p className="small pop" style={pop(3)}>
          Thank you, Erick Guerra and everyone at Penn.<br />Zhanchao Yang · MCP &amp; MUSA<br />University of Pennsylvania
        </p>
      </div>
      <div className="col-visual">
        <div className="qr card pop" style={pop(2)}>
          <img className="qr-logo" src={A('triplibre-logo.png')} alt="" />
          <QR url={url} />
          <b>Try TripLibre</b>
          {LINKS.appStore ? (
            <a className="store-badge" href={LINKS.appStore} target="_blank" rel="noreferrer">
              <img src={A('app-store-badge.png')} width={193} height={65} alt="Download TripLibre on the App Store" />
            </a>
          ) : (
            <span>{url.replace('https://', '')}</span>
          )}
        </div>
      </div>
    </div>
  )
}

export const SLIDES: SlideDef[] = [
  { title: "A Travel Diary That Doesn't End", noBrand: true, className: 'is-cover', render: Cover,
    notes: 'Welcome. This is a short personal story: how a transportation researcher who worked with household travel survey data ended up building an app with AI. About one third of the talk is the research background; AI comes in later. (~1 min)' },
  { title: 'Where It All Started', render: Started,
    notes: 'My interest in household travel surveys began in Erick Guerra’s Introduction to Transportation Planning course at Penn. A travel diary asks people to remember and write down every trip. Keep this short. (~1 min)' },
  { title: 'From Data to Research', render: Research,
    notes: 'My MCP thesis used three waves of the Twin Cities Travel Behavior Inventory (2019, 2021, 2023): 34,800 person-days and 19,164 workers. I measured telework in hours rather than yes/no. The relationship with weekday trips is nonlinear, with a turning point near 3.3 hours. NOTE: the chart is a schematic redraw with no y-values, not the thesis figure. Add the real figure via MEDIA.thesisFigure. (~1.5 min)' },
  { title: 'Seeing the Other Side', render: OtherSide,
    notes: 'I also participated in Philadelphia’s household travel survey effort. I make no claim of operational responsibility; I was close enough to see how hard it is to observe travel. GPS traces can wander while a person sits still. The drawing is illustrative, a redraw of the qualitative observation in issue #48, not a benchmark. (~1.5 min)' },
  { title: 'What If the Diary Never Ended?', render: WhatIf,
    notes: 'A survey is bounded: a few days, then it ends. What if a person kept their own diary, continuously, and could correct it? Three layers: raw record, inferred trips, your corrections. Raw is never overwritten. No account, no server; export only when you choose. Be careful: a tool’s continuity is not the same as a validated sample. (~1.5 min)' },
  { title: 'Meet TripLibre', render: Meet,
    notes: 'Product reveal. These are App Store screenshots from the simulator with demo data, not recorded activity. Walk through Today, correcting a trip, and the map. If a real screen recording is available, set MEDIA.demoVideo. (~1.5 min)' },
  { title: "I Couldn't Build This Alone", render: Team,
    notes: 'I am a transportation researcher, not an iOS developer. Zhanchao: research direction, requirements, product decisions, final acceptance. ChatGPT: planning, design reasoning, trade-offs. Claude Code: implementation. Codex: code review. These are representative roles, not exclusive; the AI tools are tools, not autonomous employees. (~1 min)' },
  { title: 'How I Got Started', render: Started2,
    notes: 'I started with a problem, not a codebase. Describe what the app should do. Build the smallest working version. Try it, find mistakes, improve. No complete roadmap, no software team. (~1 min)' },
  { title: 'Sometimes, Less Is Better', render: Less,
    notes: 'A tempting design: infer the type of every place automatically. I chose the simpler one: users label their own places. Issue #56 says automatic POI type detection is not a requirement; PR #59 implements user-labelled place types. Less inference means fewer confident mistakes. (~1 min)' },
  { title: 'One Field Test, Three Issues', render: Story,
    notes: 'This is the one story I want you to remember. October 1, Atlanta: I was the test engineer, walking around with the app. Issue #4 — identify the problem: the timeline froze for hours although raw location and motion data kept accumulating. In a concert hall the collector flipped stationary at about 20:01 and back to moving at about 20:04 while the phone did not move. In the issue I listed likely causes — these were assumptions, not confirmed facts. Issue #5 — human in the loop: I backed up the raw data, replayed the day through the fixed inference, compared the result with the activity chain I actually lived, kept raw observations and my locked edits untouched, and added the day as a regression test. The AI helps; I decide what counts as correct. Issue #6 — behavior-based response: the data were not lost, but the app looked frozen to the person using it. The fix is to show in-progress and pending states. [Add your own feeling at that moment here — what did you think when the timeline stopped?] (~3 min)' },
  { title: 'The Loop', render: Loop,
    notes: 'The Atlanta story is one turn of a loop I use for every change. 1 Issue: I write the problem down. 2 Discuss and solve: Claude Code implements it and tests it in the iOS simulator. 3 Pull request. 4 Codex reviews automatically. 5 Final check: I decide — nothing merges without me. 6 Merge. Then a field test finds the next problem and the loop restarts. Concrete example, issue #32 one-tap stop stamping, PR #53: Codex flagged (P2) that a stamp 10 s after a stay could create a stop shorter than the 60 s minimum (about 39 s estimated); fixed in commit 8a26c25 with test shortStopKeepsItsMinimumNextToAStay (34 s to 60 s). Git does not record which tool wrote which line, so do not claim it. (~1.5 min)' },
  { title: 'What Actually Worked?', render: Worked,
    notes: '14 GitHub releases from v0.1.0 (2026-09-28) to v2.1.0 (2026-10-25). 112 tests, including 14 synthetic scenarios (README figure). A calibration moved whole-day agreement from 0.827 to 0.939 on 5 held-out days. All accuracy numbers come from one person over 17 days: no formal benchmark, no other people, phones or cities. v2.1.0 passed App Store review and is now on the App Store, free for iOS 17 or later; the remaining platform limit is that it is iPhone only. (~1 min)' },
  { title: 'What I Learned', render: Learned,
    notes: 'AI made implementation far more accessible to me. It did not remove the need for research judgment: deciding what to build, reviewing what was built, and validating it. Do not claim speed, cost or accuracy gains that were not measured. (~1 min)' },
  { title: 'Thank You / Try TripLibre', render: Thanks,
    notes: 'Close with the question, then thanks. The QR code goes straight to TripLibre on the App Store (free, iOS 17+); the product site is triplibre.hhtdiary.org. Three takeaways: why TripLibre was created, how a researcher used AI to build it, and why human judgment and research validity still matter. (~1 min)' },
]
