import homeContent from '../content/homeContent';
import { useState } from 'react';
import Link from 'next/link';

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
            {[
              { name: 'Java', level: 80 },
              { name: 'C', level: 65 },
              { name: 'C++', level: 90 },
              { name: 'Python', level: 70},
              { name: 'JavaScript', level: 40 },
              { name: 'FPGA programming', level: 30 },
              { name: 'Embedded System Development', level: 90 },
              { name: 'React', level: 30 },
            ].map((skill) => (
              <div className="skill-item" key={skill.name}>
                <span className="skill-name">{skill.name}</span>
                <div className="skill-bar">
                  <div className="skill-fill" style={{ width: `${skill.level}%` }}></div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="contact">
          <h2>
            <Link href="/contacts">{homeContent.contact.heading}</Link>
          </h2>
          <p>
            Email: <span id="email">alexzhaolixiuqi@gmail.com</span>
            <button onClick={handleCopyEmail} className="copy-btn">Copy</button>
            {copied && <span className="copied-message">&#10003; Copied!</span>}
          </p>
          <p className="social-links">
            <a href="https://www.linkedin.com/in/zhao-lixiuqi-73420926b" target="_blank" rel="noopener noreferrer" title="HIRE MEEEEEE">LinkedIn</a> |
            <a href="https://www.instagram.com/alex_go_sleep?igsh=MWJsZXlzbTg1bWV6cQ==" target="_blank" rel="noopener noreferrer" title="Follow me on Instagram?"> Instagram</a> |
            <a href="https://youtube.com/@alexgosleep-v9i?si=OdaBSALU5vuD5PBv" target="_blank" rel="noopener noreferrer" title="Subscribe to my channel please"> YouTube</a> |
            <a href="https://b23.tv/2sfFe5M" target="_blank" rel="noopener noreferrer" title="Bilibili is a Chinese video platform"> Bilibili</a>
          </p>
        </section>
      </div>
    </>
  );
}
