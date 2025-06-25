import '../pages/About.css';
import Image from 'next/image';

export default function About() {
  const handleSkillClick = (skill: string) => {
    const searchQuery = encodeURIComponent(skill);
    window.open(`https://www.google.com/search?q=${searchQuery}`, '_blank');
  };

  return (
    <div className="resume">
      <header>
        <div className="header-left">
          <h1>ALEX</h1>
          <h2>ZHAO LIXIUQI</h2>
          <p>Singapore | alexzhaolixiuqi@gmail.com | +65 83514349</p>
        </div>
        <div className="header-photo">
          <div className="photo-box">
            <Image src="/photo1.jpg" alt="Alex Zhao's Photo" width={120} height={180} style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 'inherit' }} />
          </div>
        </div>
      </header>

      <section className="summary">
        <h3>SUMMARY</h3>
        <p>
          Motivated and disciplined student with a Bachelor's degree in Computer Engineering from NUS,
          currently pursuing a Master's in the same field with a specialization in Machine Intelligence.
          Strong self-learner with a proven ability to explore new domains and adapt quickly to diverse tasks.
          Experienced in <strong>embedded systems development</strong>, <strong>robotics</strong>, and
          <strong> software development</strong>. Fluent in English and Mandarin, and well-versed in
          collaborating with cross-cultural, global teams.
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
          <div className="edu-dates">Aug 2025 - Dec 2026 (planned)</div>
        </div>
      </section>

      <section className="experience">
        <h3>PROFESSIONAL EXPERIENCE</h3>
        <div className="exp-block">
          <div className="exp-details">
            <strong>Continental Automotive SG Pte Ltd</strong><br />
            Worked with design teams and senior software engineers to build the food delivery robot.<br />
            <ul>
              <li>Utilised ROS, Docker and OpenCV to design solutions for robot perception related issues</li>
              <li>Performed data collection and LiDAR - Camera Calibration</li>
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
              <li>Performed data collection to collect user data to train the ML model.</li>
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
      </section>

      <section className="skills">
        <h3>SKILLS</h3>
        <div className="skills-list">
          <button onClick={() => handleSkillClick("Embedded System")} className="skill-tag">Embedded System</button>
          <button onClick={() => handleSkillClick("Computer Vision")} className="skill-tag">Computer Vision</button>
          <button onClick={() => handleSkillClick("Machine Learning")} className="skill-tag">Machine Learning</button>
          <button onClick={() => handleSkillClick("Java Python C C++")} className="skill-tag">Java, Python, C, C++</button>
          <button onClick={() => handleSkillClick("Robotics")} className="skill-tag">Robotics</button>
          <button onClick={() => handleSkillClick("Software Development")} className="skill-tag">Software Development</button>
        </div>
      </section>
    </div>
  );
} 