import homeContent from '../content/homeContent';
import { useState } from 'react';
import Link from 'next/link';
import { skills } from '../content/skills';

export default function Home() {
  const [copied, setCopied] = useState(false);

  function handleCopyEmail() {
    const email = "alexzhaolixiuqi@gmail.com";
    navigator.clipboard.writeText(email)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      })
      .catch((err) => console.error("Copy failed:", err));
  }

  return (
    <>
      <div className="home">
        <section className="hero">
          <h1>{homeContent.hero.heading}</h1>
          <p>{homeContent.hero.subheading}</p>
        </section>

        <section className="about">
          <h2>
            <Link href="/about">{homeContent.about.heading}</Link>
          </h2>
          <div>
            {homeContent.about.content.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>
        </section>

        <section className="skills">
          <h2>
            <Link href="/projects">{homeContent.skills.heading}</Link>
          </h2>
          <div className="skill-list">
            {skills
              .sort((a, b) => b.level - a.level)
              .map((skill) => {
                // Interpolate between two gradients based on skill level
                // 0%: #b3b8f8 to #b39ddb (light), 100%: #667eea to #764ba2 (dark)
                const lightStart = [179, 184, 248]; // #b3b8f8
                const lightEnd = [179, 157, 219];  // #b39ddb
                const darkStart = [102, 126, 234]; // #667eea
                const darkEnd = [118, 75, 162];    // #764ba2
                const t = skill.level / 100;
                const lerp = (a: number, b: number) => Math.round(a + (b - a) * t);
                const startColor = `rgb(${lerp(lightStart[0], darkStart[0])},${lerp(lightStart[1], darkStart[1])},${lerp(lightStart[2], darkStart[2])})`;
                const endColor = `rgb(${lerp(lightEnd[0], darkEnd[0])},${lerp(lightEnd[1], darkEnd[1])},${lerp(lightEnd[2], darkEnd[2])})`;
                return (
                  <div className="skill-item" key={skill.name}>
                    <button
                      className="skill-tag"
                      style={{
                        background: `linear-gradient(135deg, ${startColor} 0%, ${endColor} 100%)`
                      }}
                      onClick={() => window.open(`https://www.google.com/search?q=${encodeURIComponent(skill.name)}`, '_blank')}
                      title={`Search for ${skill.name}`}
                    >
                      {skill.name}
                    </button>
                  </div>
                );
              })}
          </div>
        </section>

        <section className="contact">
          <h2>
            <Link href="/contacts">{homeContent.contact.heading}</Link>
          </h2>
          <p>
            <span id="email">
            Email:  alexzhaolixiuqi@gmail.com
            </span>
            <button onClick={handleCopyEmail} className="copy-btn">Copy</button>
          </p>
          <p>
            Phone: +65 83514349 (Sg)
          </p>
          <p className="social-links">
            <a href="https://www.linkedin.com/in/zhao-lixiuqi-73420926b" target="_blank" rel="noopener noreferrer" title="HIRE MEEEEEE">LinkedIn</a> |
            <a href="https://www.instagram.com/alex_go_sleep?igsh=MWJsZXlzbTg1bWV6cQ==" target="_blank" rel="noopener noreferrer" title="Follow me on Instagram?"> Instagram</a> |
            <a href="https://youtube.com/@alexgosleep-v9i?si=OdaBSALU5vuD5PBv" target="_blank" rel="noopener noreferrer" title="Subscribe to my channel please"> YouTube</a> |
            <a href="https://b23.tv/2sfFe5M" target="_blank" rel="noopener noreferrer" title="Bilibili is a Chinese video platform"> Bilibili</a>
          </p>
        </section>
      </div>
      {copied && (
        <div className="toast-copied">
          Copied to clipboard!
        </div>
      )}
    </>
  );
}
