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

      <section className="demo-section"><div className="demo-copy"><span className="eyebrow">HOW QUICKCLIP WORKS</span><h2>From your raw video<br/><em>to your final edit.</em></h2><p>AI creates the first edit. A professional can refine it. Every improvement helps QuickClip understand how different content should be edited.</p></div><div className="phone"><div className="phone-notch"/><div className="phone-screen"><div className="phone-status"><span>9:41</span><span>● ● ▰</span></div><div className="appbar"><div className="phone-brand"><span>Q</span><b>quickclip</b></div><span className="dots">•••</span></div><div className="ai-stage ai-upload"><div className="flow-step">01 <span>CREATOR</span></div><h3>Upload your video</h3><div className="ai-video raw"><span>RAW VIDEO</span><b>▶</b><small>Travel Reel · 42 sec</small></div><div className="flow-button">Start AI edit <b>→</b></div></div><div className="ai-stage ai-thinking"><div className="flow-step">02 <span>QUICKCLIP AI</span></div><div className="ai-orb"><span>Q</span><i/><i/></div><h3>AI is editing your video</h3><div className="ai-progress"><i/></div><small>Finding highlights · cuts · captions · pacing</small></div><div className="ai-stage ai-draft"><div className="flow-step">03 <span>AI FIRST EDIT</span></div><h3>Your first edit is ready</h3><div className="ai-video edited"><span>AI EDIT</span><b>▶</b><small>Captions · Fast cuts · Music</small></div><div className="review-chip">Professional review available</div></div><div className="ai-stage ai-pro"><div className="flow-step">04 <span>PROFESSIONAL</span></div><div className="pro-card"><div className="pro-avatar">A</div><div><b>Arjun S. ✓</b><small>4.9 ★ · Reels specialist</small></div><span>REVIEWING</span></div><div className="change-card"><span>AI draft</span><b>+</b><span>Professional refinements</span></div><h3>Final edit approved</h3></div><div className="ai-stage ai-learn"><div className="flow-step">05 <span>QUICKCLIP AI</span></div><div className="learn-icon">✓</div><h3>AI gets smarter</h3><p>Professional changes become feedback for future edits.</p><div className="learn-tags"><span>Travel · pacing</span><span>Captions · style</span><span>Highlights · timing</span></div></div></div></div></section>

      <section className="reviews"><div className="showcase-head"><div><span className="eyebrow">LOVED BY USERS</span><h2>People notice the difference.</h2></div><p>Real reactions to the things that matter: quality, speed and price.</p></div><div className="review-grid"><article><div className="review-top"><span className="review-avatar">R</span><div><b>Riya Mehta</b><small>Travel creator</small></div><strong>★★★★★</strong></div><p>“The cuts matched my travel footage perfectly. I got the vibe I wanted without spending hours explaining it.”</p><div className="review-meta"><span>₹299</span><span>Fast turnaround</span></div></article><article><div className="review-top"><span className="review-avatar">A</span><div><b>Aditya Jain</b><small>Content creator</small></div><strong>★★★★★</strong></div><p>“Loved that I could compare people before choosing. The price was clear and the final video looked premium.”</p><div className="review-meta"><span>₹399</span><span>Great quality</span></div></article><article><div className="review-top"><span className="review-avatar">N</span><div><b>Neha Kapoor</b><small>Podcast host</small></div><strong>★★★★★</strong></div><p>“I needed clips quickly and got exactly what I asked for. Super simple process and genuinely affordable.”</p><div className="review-meta"><span>₹499</span><span>Worth the price</span></div></article></div></section>\n\n      <section id="why" className="why"><div className="vision"><span className="eyebrow">OUR VISION</span><h2>Make professional editing accessible to every creator.</h2><p>The right professional. <b>A reasonable price. A fast turnaround.</b></p><strong>QuickClip — where great content meets great editing.</strong></div></section>

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