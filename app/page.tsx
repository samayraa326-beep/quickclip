"use client";

import { useState } from "react";

const prices: Record<string, number> = {
  Reel: 299,
  YouTube: 799,
  Short: 249,
  Podcast: 399,
  Ad: 699,
  Wedding: 1299,
  Other: 499,
};

const formats = ["Reel", "Short", "YouTube", "Podcast", "Ad", "Wedding", "Other"];

export default function Home() {
  const [open, setOpen] = useState(false);
  const [sent, setSent] = useState(false);
  const [type, setType] = useState("Reel");
  const [length, setLength] = useState("< 30 sec");
  const [deadline, setDeadline] = useState("6 hours");

  const price =
    (prices[type] || 499) +
    (deadline === "1 hour" ? 250 : deadline === "3 hours" ? 150 : 0) +
    (length === "10+ min" ? 400 : length === "3–10 min" ? 200 : 0);

  return (
    <main>
      <nav>
        <div className="brand">
          <span className="brandmark">Q</span>
          <b>quick<span>clip</span></b>
        </div>
        <div className="navlinks">
          <a href="#how">How it works</a>
          <a href="#why">Why QuickClip</a>
          <button className="navcta" onClick={() => setOpen(true)}>Get started</button>
        </div>
      </nav>

      <section className="demo-section"><div className="demo-copy"><span className="eyebrow">QUICKCLIP</span><h2>Get your edited video in less than 30 min.</h2><p>Tell us what you need. Get offers from professionals who fit your video.</p><div className="demo-points"><span>✓ See ratings & experience</span><span>✓ Compare who responds</span><span>✓ Pick the one you like</span></div></div><div className="phone"><div className="phone-notch"/><div className="phone-screen"><div className="phone-status"><span>9:41</span><span>● ● ▰</span></div><div className="appbar"><div className="phone-brand"><span>Q</span><b>quickclip</b></div><span className="dots">•••</span></div><div className="demo-stage stage-one"><small className="stage-label">1 · YOUR REQUEST</small><h3>What are you making?</h3><div className="request-chips"><span>Travel Reel</span><span>30–60 sec</span><span>Captions</span></div><div className="brief-box">Fast cuts • cinematic music • subtitles</div><button className="phone-action">Send request <b>→</b></button></div><div className="demo-stage stage-two"><div className="matching"><span className="pulse-dot"/> 3 professionals are responding</div><div className="match-line"/><div className="found">MATCH FOUND</div></div><div className="demo-stage stage-three"><small className="stage-label">2 · CHOOSE WHO YOU LIKE</small><div className="mobile-person accepted-person"><div className="mobile-avatar">A</div><div className="person-info"><b>Arjun S. <span>✓</span></b><small>4.9 ★ · 3 yrs experience</small><small>Reels · Motion graphics · Captions</small></div><strong>Choose</strong></div><div className="mobile-person"><div className="mobile-avatar">M</div><div className="person-info"><b>Mehak R.</b><small>4.8 ★ · 2 yrs experience</small><small>Short-form · Color grading</small></div><button>View</button></div><div className="mobile-person"><div className="mobile-avatar">K</div><div className="person-info"><b>Kunal P.</b><small>5.0 ★ · 4 yrs experience</small><small>Effects · Sound design</small></div><button>View</button></div><div className="choose-note">Review their work, price and qualifications — then continue with your choice.</div></div></div></div></section>

      <section className="content-showcase"><div className="showcase-head"><div><span className="eyebrow">ANY CONTENT. ONE PLACE.</span><h2>Whatever you create, get it edited.</h2></div><p>Different styles. Different stories. One simple way to get them ready to post.</p></div><div className="content-cards"><article className="content-card travel"><span>TRAVEL</span><b>Chase the moment.</b><i>▶</i></article><article className="content-card funny"><span>FUNNY</span><b>Make them stop scrolling.</b><i>▶</i></article><article className="content-card emotional"><span>EMOTIONAL</span><b>Let the story hit.</b><i>▶</i></article><article className="content-card podcast"><span>PODCAST</span><b>Turn conversations into clips.</b><i>▶</i></article></div></section>\n\n      <section className="hero">
        <div className="hero-copy">
          <div className="pill">✦ On-demand video editing</div>
          <h1>Get your video<br /><em>in less than 30 min.</em></h1>
          <p>Tell us what you’re creating, share your footage and get professional editing when you need it.</p>
          <button className="primary" onClick={() => setOpen(true)}>
            Start a video request <span>→</span>
          </button>
          <div className="trust">
            <span>✓ Transparent pricing</span>
            <span>✓ Fast turnaround</span>
            <span>✓ Simple workflow</span>
          </div>
        </div>

        <div className="hero-card">
          <div className="mini-top"><span>QUICKCLIP</span><span className="live">● LIVE</span></div>
          <div className="preview"><div className="play">▶</div><div className="timeline"><i /><i /><i /><i /><i /></div></div>
          <div className="preview-info">
            <div><b>Your next video</b><small>Professional editing</small></div>
            <strong>From ₹299</strong>
          </div>
        </div>
      </section>

      <section id="how" className="section">
        <div className="section-head">
          <div><span className="eyebrow">HOW IT WORKS</span><h2>From raw footage to ready to post.</h2></div>
          <p>Everything you need to turn your content into a finished video, without the back-and-forth.</p>
        </div>
        <div className="steps">
          {["Describe", "Upload", "Request", "Receive"].map((item, index) => (
            <article key={item}>
              <div className="number">0{index + 1}</div>
              <h3>{item}</h3>
              <p>{[
                "Choose your format, length and editing style.",
                "Add the footage and a quick creative brief.",
                "See your estimate and submit the request.",
                "Get your finished video when it’s ready.",
              ][index]}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="reviews"><div className="showcase-head"><div><span className="eyebrow">LOVED BY USERS</span><h2>People notice the difference.</h2></div><p>Real reactions to the things that matter: quality, speed and price.</p></div><div className="review-grid"><article><div className="review-top"><span className="review-avatar">R</span><div><b>Riya Mehta</b><small>Travel creator</small></div><strong>★★★★★</strong></div><p>“The cuts matched my travel footage perfectly. I got the vibe I wanted without spending hours explaining it.”</p><div className="review-meta"><span>₹299</span><span>Fast turnaround</span></div></article><article><div className="review-top"><span className="review-avatar">A</span><div><b>Aditya Jain</b><small>Content creator</small></div><strong>★★★★★</strong></div><p>“Loved that I could compare people before choosing. The price was clear and the final video looked premium.”</p><div className="review-meta"><span>₹399</span><span>Great quality</span></div></article><article><div className="review-top"><span className="review-avatar">N</span><div><b>Neha Kapoor</b><small>Podcast host</small></div><strong>★★★★★</strong></div><p>“I needed clips quickly and got exactly what I asked for. Super simple process and genuinely affordable.”</p><div className="review-meta"><span>₹499</span><span>Worth the price</span></div></article></div></section>\n\n      <section id="why" className="why">
        <div>
          <span className="eyebrow">MADE FOR CREATORS</span>
          <h2>Spend less time managing edits.</h2>
          <p>QuickClip turns your requirements into a clear editing request so you can focus on creating, publishing and growing.</p>
        </div>
        <div className="stats">
          <div><b>Fast</b><span>Turnaround options</span></div>
          <div><b>Clear</b><span>Upfront estimates</span></div>
          <div><b>Simple</b><span>One request, one workflow</span></div>
        </div>
      </section>

      <footer>
        <div className="brand"><span className="brandmark">Q</span><b>quick<span>clip</span></b></div>
        <span>Professional video editing, on demand.</span>
      </footer>

      {open && (
        <div className="overlay">
          <div className="modal">
            <button className="x" onClick={() => setOpen(false)}>×</button>

            {sent ? (
              <>
                <div className="success-icon">✓</div>
                <span className="eyebrow">REQUEST RECEIVED</span>
                <h2>Your request is live.</h2>
                <p className="muted">We’re finding the right person for your video. We’ll update the request once someone accepts it.</p>
                <div className="status">
                  <span>●</span>
                  <div><b>Finding someone for your edit</b><small>Your request is being matched</small></div>
                </div>
                <button className="primary wide" onClick={() => { setSent(false); setOpen(false); }}>Done</button>
              </>
            ) : (
              <>
                <span className="eyebrow">VIDEO REQUEST</span>
                <h2>Tell us about your video.</h2>

                <div className="formgrid">
                  <label>
                    What are you making?
                    <select value={type} onChange={(e) => setType(e.target.value)}>
                      {formats.map((format) => <option key={format}>{format}</option>)}
                    </select>
                  </label>

                  <label>
                    Video length
                    <select value={length} onChange={(e) => setLength(e.target.value)}>
                      <option>&lt; 30 sec</option>
                      <option>30–60 sec</option>
                      <option>1–3 min</option>
                      <option>3–10 min</option>
                      <option>10+ min</option>
                    </select>
                  </label>

                  <label>
                    Content type
                    <select defaultValue="Talking head">
                      <option>Talking head</option>
                      <option>Gaming</option>
                      <option>Vlog</option>
                      <option>Educational</option>
                      <option>Cinematic</option>
                      <option>Product</option>
                      <option>Podcast</option>
                      <option>Meme / Entertainment</option>
                      <option>Other</option>
                    </select>
                  </label>

                  <label>
                    Editing needed
                    <select defaultValue="Basic cuts">
                      <option>Basic cuts</option>
                      <option>Cuts + captions</option>
                      <option>Transitions + effects</option>
                      <option>Color + sound</option>
                      <option>Full edit</option>
                    </select>
                  </label>

                  <label>
                    Turnaround
                    <select value={deadline} onChange={(e) => setDeadline(e.target.value)}>
                      <option>1 hour</option>
                      <option>3 hours</option>
                      <option>6 hours</option>
                      <option>24 hours</option>
                    </select>
                  </label>

                  <label className="full">
                    Creative brief
                    <textarea placeholder="Describe the style, references, captions, music, or anything else..." />
                  </label>

                  <label className="full">
                    Upload footage
                    <input type="file" multiple />
                  </label>
                </div>

                <div className="estimate">
                  <span>Estimated starting price<strong>Based on your selections</strong></span>
                  <b>₹{price}</b>
                </div>

                <button className="primary wide" onClick={() => setSent(true)}>
                  Submit request <span>→</span>
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </main>
  );
}