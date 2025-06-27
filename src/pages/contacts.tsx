import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function Contacts() {
  const [copied, setCopied] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [likes, setLikes] = useState(0);
  const [isLiking, setIsLiking] = useState(false);
  const [showWeChat, setShowWeChat] = useState(false);
  const email = "alexzhaolixiuqi@gmail.com";
  const phone = "+65 83514349";
  const XiaohongshuIconPath = '/SimpleIconsXiaohongshu.svg';

  // Load likes on component mount
  useEffect(() => {
    fetch('/api/likes')
      .then(res => res.json())
      .then(data => setLikes(data.likes))
      .catch(err => console.error('Error loading likes:', err));
  }, []);

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

  async function handleLike() {
    if (isLiking) return; // Prevent multiple clicks
    
    setIsLiking(true);
    try {
      const response = await fetch('/api/likes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      
      if (response.ok) {
        const data = await response.json();
        setLikes(data.likes);
      }
    } catch (error) {
      console.error('Error updating likes:', error);
    } finally {
      setIsLiking(false);
    }
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
        
        {/* Like Button */}
        <div className="like-section">
          <button 
            className="like-button" 
            onClick={handleLike}
            disabled={isLiking}
            title="Like my portfolio!"
          >
            ❤️ {likes}
          </button>
        </div>

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
            <i className="fab fa-bilibili"></i> Bilibili
          </a>
          <a href="https://www.xiaohongshu.com/user/profile/60dab21800000000010008b1?// xsec_token=YBhin4_bHCQVOB8iXjNepE4R2ptIB7JXB2Mr8fFog9SE8=&xsec_source=app_share&xhsshare=CopyLink&appuid=60dab21800000000010008b1&apptime=1750996947&share_id=2dfd40a8f4914fcda62c42d6abef1fb3"
          target="_blank" rel="noopener noreferrer" className="social-link xiaohongshu" title="I dump my videos here like how I use ins stories">
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4em' }}>
              <img src={XiaohongshuIconPath} alt="小红书" style={{ width: '1.2em', height: '1.2em', verticalAlign: 'middle' }} /> 小红书
            </span>
          </a>
          <a
            href="#"
            className="social-link wechat"
            title="Scan to add me on WeChat"
            onClick={e => { e.preventDefault(); setShowWeChat(true); }}
          >
            <i className="fab fa-weixin"></i> 微信Wechat
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
      {showWeChat && (
        <div className="popup-overlay" onClick={() => setShowWeChat(false)}>
          <div className="popup-message" onClick={e => e.stopPropagation()}>
            <button className="popup-close" onClick={() => setShowWeChat(false)}>&times;</button>
            <span style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
              <h4><b>Scan to add me on WeChat</b></h4>
              <Image
                src='/wechatQRcode.jpg'
                alt="WeChat QR Code"
                width={220}
                height={220}
                style={{
                  maxWidth: '90vw',
                  height: 'auto',
                  borderRadius: '12px',
                  boxShadow: '0 2px 12px rgba(30,136,229,0.10)',
                  display: 'block'
                }}
              />
            </span>
          </div>
        </div>
      )}
    </div>
  );
} 