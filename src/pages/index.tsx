import Link from 'next/link';
import { skills } from '../content/skills';
import { FaUser, FaProjectDiagram, FaEnvelope } from 'react-icons/fa';

export default function Home() {

  return (
    <div className="home">
      <section className="hero">
        <div className="hero-name-block minimal">
          <h1 className="hero-title">Alex</h1>
          <div className="hero-signature">
            <span className="hero-signature-latin">Zhao Lixiuqi</span>
          </div>
        </div>
        <p className="hero-subtitle">Engineer • Developer • Musician</p>
      </section>

      <section className="nav-cards">
        <Link href="/about" className="nav-card">
          <FaUser size={36} />
          <h2>About</h2>
          <p>Learn more about my background, education, and experience.</p>
        </Link>
        <Link href="/projects" className="nav-card">
          <FaProjectDiagram size={36} />
          <h2>Projects</h2>
          <p>See my academic, professional, and music projects.</p>
        </Link>
        <Link href="/contacts" className="nav-card">
          <FaEnvelope size={36} />
          <h2>Contacts</h2>
          <p>Get in touch or connect on social media.</p>
        </Link>
      </section>

      <section className="skills-preview">
        <h3>Top Skills</h3>
        <div className="skill-list">
          {skills
            .sort((a, b) => b.level - a.level)
            .map((skill) => {
              // Interpolate between two gradients based on skill level
              const lightStart = [179, 184, 248]; // #b3b8f8
              const lightEnd = [179, 157, 219];  // #b39ddb
              const darkStart = [102, 126, 234]; // #667eea
              const darkEnd = [118, 75, 162];    // #764ba2
              const t = skill.level / 100;
              const lerp = (a: number, b: number) => Math.round(a + (b - a) * t);
              const startColor = `rgb(${lerp(lightStart[0], darkStart[0])},${lerp(lightStart[1], darkStart[1])},${lerp(lightStart[2], darkStart[2])})`;
              const endColor = `rgb(${lerp(lightEnd[0], darkEnd[0])},${lerp(lightEnd[1], darkEnd[1])},${lerp(lightEnd[2], darkEnd[2])})`;
              return (
                <button
                  className="skill-tag"
                  key={skill.name}
                  style={{
                    background: `linear-gradient(135deg, ${startColor} 0%, ${endColor} 100%)`
                  }}
                  onClick={() => window.open(`https://www.google.com/search?q=${encodeURIComponent(skill.name)}`, '_blank')}
                  title={`Search for ${skill.name}`}
                >
                  {skill.name}
                </button>
              );
            })}
        </div>
      </section>
    </div>
  );
}
