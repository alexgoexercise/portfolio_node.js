import Image from 'next/image';
import { useState } from 'react';
import { skills } from '../content/skills';

export default function About() {
  const [showPopup, setShowPopup] = useState(false);
  const handleSkillClick = (skill: string) => {
    const searchQuery = encodeURIComponent(skill);
    window.open(`https://www.google.com/search?q=${searchQuery}`, '_blank');
  };

  function handleImageClick() {
    setShowPopup(true);
  }

  function handleClosePopup() {
    setShowPopup(false);
  }

  return (
    <div className="resume">
      <header>
        <div className="header-left">
          <h1>ALEX</h1>
          <h2>ZHAO LIXIUQI 赵李修齐</h2>
          <p>Singapore | alexzhaolixiuqi@gmail.com | +65 83514349</p>
        </div>
        <div className="header-photo">
          <div className="photo-box">
            <Image src="/photo1.jpg" 
            alt="Alex Zhao's Photo" 
            onClick={handleImageClick}
            width={120} 
            height={180} 
            style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 'inherit', cursor: 'pointer'}} 
            title="click me!"
            />
          </div>
        </div>
      </header>

      <section className="summary">
        <h3>SUMMARY</h3>
          <p>
          Motivated and disciplined Computer Engineering professional with a Bachelor&apos;s 
          degree from the National University of Singapore and currently pursuing a 
          Master&apos;s specialization in Machine Intelligence. A strong self-learner with a 
          demonstrated ability to master new domains and deliver results across diverse 
          technical challenges. Experienced in <strong>embedded systems development</strong>, <strong>robotics</strong> , and <strong>full-stack development</strong>. 
          Fluent in English and Mandarin, with a proven track record of effective collaboration 
          within cross-cultural, global teams. Committed to driving innovation 
          and excellence in every project.
          </p>

      </section>

      <section className="education">
        <h3>EDUCATION</h3>
        <div className="edu-block">
          <div className="edu-details">
            <strong>Bachelor of Engineering (Computer Engineering)</strong><br />
            National University of Singapore<br />
            <ul>
              <li>GPA: 4.33</li>
              <li>Holder of Science & Technology Scholarship, 2021 - 2025</li>
              <li>Vice President and Publicity Director of NUS Voices, 2022 - 2023</li>
            </ul>
          </div>
          <div className="edu-dates">Aug 2021 - May 2025</div>
        </div>

        <div className="edu-block">
          <div className="edu-details">
            <strong>Master of Science (ECE, Machine Intelligence Track)</strong><br />
            National University of Singapore<br />
            <ul>
              <li>Planning to graduate in Dec 2026</li>
            </ul>
          </div>
          <div className="edu-dates">Aug 2025 - Dec 2026 (Expected)</div>
        </div>
      </section>

      <section className="experience">
        <h3>PROFESSIONAL EXPERIENCE</h3>
        <div className="exp-block">
          <div className="exp-details">
            <strong>Continental Automotive SG Pte Ltd</strong><br />
            Worked with design teams and senior software engineers to build the food delivery robot.<br />
            <ul>
              <li>Utilised ROS, Docker and OpenCV to design solutions for robot perception related issues.</li>
              <li>Performed LIDAR point cloud filtering to improve the accuracy of robot perception.</li>
              <li>Developed a LINUX desktop application to perform LIDAR-camera calibration.</li>
              <li>Partnered with team members to conduct daily road tests and participated in the product demo to investors.</li>
            </ul>
          </div>
          <div className="exp-dates">Jul 2023 - Dec 2023</div>
        </div>
      </section>

      <section className="projects">
        <h3>PROJECTS</h3>
        <div className="proj-block">
          <div className="proj-details">
            <strong>AR Laser Tag++</strong><br />
            National University of Singapore<br />
            <ul>
              <li>Designed, tested and maintained the wearable systems of the AR Laser Tag game including the gun, vest and motion sensor unit.</li>
              <li>Applied knowledge in Arduino, circuit design and soldering to complete the hardware design.</li>
              <li>Performed data collection to collect user data to train the ML model such that the users are able to perform special attacks triggered by special movements.</li>
            </ul>
          </div>
          <div className="proj-dates">2024</div>
        </div>

        <div className="proj-block">
          <div className="proj-details">
            <strong>RTOS Car Racing</strong><br />
            National University of Singapore<br />
            <ul>
              <li>Developed a real-time operating system for a robot car using ARM architecture to compete in a racing competition.</li>
            </ul>
          </div>
          <div className="proj-dates">2024</div>
        </div>

        <div className="proj-block">
          <div className="proj-details">
            <strong>Personal Portfolio Website</strong><br />
            Personal Project<br />
            <ul>
              <li>Built a modern, responsive portfolio website using Next.js, TypeScript, and React.</li>
              <li>Implemented interactive features including image galleries, video integration, and dynamic content management.</li>
              <li>Designed dual-theme interface (academic and music) with smooth animations and enhanced user experience.</li>
              <li>Deployed on Vercel with optimized performance and SEO best practices.</li>
            </ul>
          </div>
          <div className="proj-dates">2025</div>
        </div>
      </section>

      <section className="skills">
        <h3>SKILLS</h3>
        <div className="skills-list">
          {skills.sort((a, b) => b.level - a.level).map(skill => (
            <button
              key={skill.name}
              onClick={() => handleSkillClick(skill.name)}
              className="skill-tag"
              title={`Search for ${skill.name}`}
            >
              {skill.name}
            </button>
          ))}
        </div>
      </section>

      {showPopup && (
        <div className="popup-overlay" onClick={handleClosePopup}>
          <div className="popup-message" onClick={e => e.stopPropagation()}>
            <button className="popup-close" onClick={handleClosePopup}>&times;</button>
            <span>
              <h1>Nice you found out that this is click-able</h1>
              <p>
                now try to find more clickable buttons?
              </p>
            </span>
          </div>
        </div>
      )}
    </div>
  );
} 