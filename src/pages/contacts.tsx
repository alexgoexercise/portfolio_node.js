import Image from 'next/image';
import { useState } from 'react';

export default function Contacts() {
  const [copied, setCopied] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const email = "alexzhaolixiuqi@gmail.com";
  const phone = "+65 83514349";

  function handleCopyEmail() {
    navigator.clipboard.writeText(email)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      });
  }

  function handleImageClick() {
    setShowPopup(true);
  }

  function handleClosePopup() {
    setShowPopup(false);
  }

  return (
    <div className="contacts-page-bg">
      <div className="contact-card">
        <Image
          src="/photo1.jpg"
          alt="Alex Zhao"
          className="contact-photo"
          width={120}
          height={120}
          style={{ objectFit: 'cover', borderRadius: '50%', cursor: 'pointer' }}
          onClick={handleImageClick}
          title="Click me!"
        />
        <h2 className="contact-name">Alex Zhao</h2>
        <p className="contact-role">Let&apos;s connect!</p>
        <div className="contact-info">
          <div className="contact-row">
            <span className="contact-label">Email:</span>
            <span className="contact-value">{email}</span>
            <button className="copy-btn" onClick={handleCopyEmail} title="Copy Email">📋</button>
          </div>
          <div className="contact-row">
            <span className="contact-label">Phone:</span>
            <span className="contact-value">{phone}</span>
          </div>
        </div>
        <div className="contact-socials">
          <a href="https://www.linkedin.com/in/zhao-lixiuqi-73420926b" target="_blank" rel="noopener noreferrer" className="social-link linkedin" title="HIRE MEEEEEE">
            <i className="fab fa-linkedin"></i> LinkedIn
          </a>
          <a href="https://www.instagram.com/alex_go_sleep?igsh=MWJsZXlzbTg1bWV6cQ==" target="_blank" rel="noopener noreferrer" className="social-link instagram" title="Follow me on Instagram?">
            <i className="fab fa-instagram"></i> Instagram
          </a>
          <a href="https://youtube.com/@alexgosleep-v9i?si=OdaBSALU5vuD5PBv" target="_blank" rel="noopener noreferrer" className="social-link youtube" title="Subscribe to my channel please">
            <i className="fab fa-youtube"></i> YouTube
          </a>
          <a href="https://b23.tv/2sfFe5M" target="_blank" rel="noopener noreferrer" className="social-link bilibili" title="Bilibili is a Chinese video platform">
            <i className="icon-bilibili"></i> Bilibili
          </a>
        </div>
      </div>
      {copied && (
        <div className="toast-copied">
          Copied to clipboard!
        </div>
      )}
      {showPopup && (
        <div className="popup-overlay" onClick={handleClosePopup}>
          <div className="popup-message" onClick={e => e.stopPropagation()}>
            <button className="popup-close" onClick={handleClosePopup}>&times;</button>
            <span>
              <h2><b>HIRE ME BECAUSE:</b></h2><br />
              1. I still have a pool of brain cells to contribute;<br />
              2. I am willing to over work (if it&apos;s properly paid);<br />
              3. I have no gf commitment and can work extra long;
            </span>
          </div>
        </div>
      )}
    </div>
  );
} 