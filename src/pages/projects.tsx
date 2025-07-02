import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { bandsList } from '@/content/bands';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Pro1 = '/Pro1.jpg';
const Pro2 = '/Pro2.jpg';
const Pro3 = '/Pro3.jpg';
const Pro4 = '/Pro4.jpg';
const Pro5 = '/Pro5.jpg';
const rtos1 = '/rtos1.jpg';
const rtos2 = '/rtos2.jpg';
const rtos3 = '/rtos3.jpg';
const Port1 = '/Portfolio1.jpg';
const Port2 = '/Portfolio2.jpg';

type Project = {
  title: string;
  description: string | string[];
  images: string[];
  tags: string[];
  url?: string;
  clickNotice?: string;
};

export default function Projects() {
  const router = useRouter();
  const [isDrummingMode, setIsDrummingMode] = useState(false);

  useEffect(() => {
    if (router.query.music === '1') {
      setIsDrummingMode(true);
    }
  }, [router.query.music]);

  return (
    <div className={isDrummingMode ? 'drumming-theme' : 'academic-theme'}>
      <div className="switch-container">
        <div 
          className="switch"
          onClick={() => setIsDrummingMode((prev) => !prev)}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              setIsDrummingMode((prev) => !prev);
            }
          }}
        >
          <span>{isDrummingMode ? 'Music Journey' : 'Academic Projects'}</span>
        </div>
      </div>

      {isDrummingMode ? <DrummingPortfolio /> : <AcademicPortfolio />}
    </div>
  );
}

function AcademicPortfolio() {
  const projects: Project[] = [
    {
      title: "AR Laser Tag++",
      description: [
        "Developed wearable system with gun, vest, and sensors for AR gaming.",
        "The hardware logic is built based on Arduino (IR transimission between the gun and vest for shooting, LED flashing for health display and so on), then is integrated with socket programming (in charge by my other teammate) to communicate with the host machine.",
        "The game supports up to 2 players, each players can perform special attack or simply shoot from the 'hand gun' to deal damage to the opponent."
      ],
      images: [
        Pro1,
        Pro2,
        Pro3,
        Pro4,
        Pro5,
      ],
      tags: ["Arduino", "Machine Learning", "Hardware Design"],
      url: "https://youtu.be/j6V-k7JI1kU?si=eQzZtGNRQTZ5DoNx",
      clickNotice: "Click to watch the demo video (my personal part)"
    },
    {
      title: "RTOS Car Racing",
      description: ["Utilised an RTOS to develop an ARM-based autonomous robotic car under competitive race conditions.",
        "Finished among the higher-ranking competitors in the final race."
      ],
      images: [
        rtos1,
        rtos2,
        rtos3,
      ],
      tags: ["RTOS", "Embedded C", "ARM Architecture"],
      url: "https://youtu.be/wuBXb3VTfQs?si=vmmgp4It8mhxug4X",
      clickNotice: "Click to watch the demo video"
    },
    {
      title: "Personal Website",
      description: "Personal Website built with node.js + react tech stack.",
      images:[
        Port1,
        Port2,
      ],
      tags: ["node.js", "react", "typescript", "vercel"],
      url: "https://github.com/alexgoexercise/portfolio_node.js",
      clickNotice: "Click to view source code"
    }
  ];

  const handleTagClick = (tag: string) => {
    const searchQuery = encodeURIComponent(tag);
    window.open(`https://www.google.com/search?q=${searchQuery}`, '_blank');
  };

  const handleCardClick = (project: Project) => {
    if (project.url) {
      window.open(project.url, '_blank');
    }
  };

  return (
    <div className="project-container">
      {projects.map((project) => (
        <div 
          key={project.title} 
          className={`project-card ${project.url ? 'clickable-card' : ''}`}
          onClick={() => handleCardClick(project)}
          role={project.url ? 'button' : undefined}
          tabIndex={project.url ? 0 : undefined}
          onKeyDown={(e) => {
            if (project.url && (e.key === 'Enter' || e.key === ' ')) {
              e.preventDefault();
              handleCardClick(project);
            }
          }}
        >
          {project.url && (
            <div className="click-notice">
              <span>{project.clickNotice}</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          )}
          <h2>{project.title}</h2>
          <div>
            {Array.isArray(project.description)
              ? project.description.map((line, idx) => <p key={idx}>{line}</p>)
              : <p>{project.description}</p>}
          </div>
          <div className="slider-wrapper">
            <Swiper
              modules={[Navigation, Pagination]}
              spaceBetween={30}
              slidesPerView={1}
              navigation={true}
              pagination={{ clickable: true }}
              loop={true}
              className="project-swiper"
            >
              {project.images.map((img, index) => (
                <SwiperSlide key={index}>
                  <Image
                    src={img}
                    alt={`Slide ${index}`}
                    width={600}
                    height={400}
                    className="slider-image"
                    draggable={false}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="tags">
            {project.tags.map((tag) => (
              <button
                key={tag}
                className="skill-tag"
                onClick={(e) => {
                  e.stopPropagation();
                  handleTagClick(tag);
                }}
                title={`Search for ${tag} on Google`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

function DrummingPortfolio() {
  const handleBandClick = (band: any, e: React.MouseEvent) => {
    e.preventDefault();
    // Always navigate to the band detail page when clicking the card
    window.location.href = `/band/${band.id}`;
  };

  const handleExternalClick = (band: any, e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent card click
    if (band.externalUrl) {
      window.open(band.externalUrl, '_blank');
    }
  };

  return (
    <div className="drumming-portfolio">
      <section className="drumming-section">
        <h2 className="drumming-section-title">
          My Music Journey
        </h2>
        <div className="drumming-grid">
          {bandsList.map((band) => (
            <div 
              key={band.id} 
              className="drumming-card band-card"
              onClick={(e) => handleBandClick(band, e)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  handleBandClick(band, e as any);
                }
              }}
            >
              {band.externalUrl && (
                <div 
                  className="click-notice drumming-click-notice"
                  onClick={(e) => handleExternalClick(band, e)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      handleExternalClick(band, e as any);
                    }
                  }}
                >
                  <span>{band.clickNotice}</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              )}
              <div className="drumming-media">
                {band.image && (
                  <Image
                    src={band.image}
                    alt={band.name}
                    width={800}
                    height={600}
                  />
                )}
              </div>
              <h3 className="drumming-card-title">{band.name}</h3>
              <p className="drumming-card-period">{band.period}</p>
              <p className="drumming-card-content">{band.description}</p>
              <div className="drumming-tags">
                {band.tags.map((tag, i) => (
                  <button
                    key={i}
                    className="drumming-tag"
                    title={`Search for ${tag} on Google`}
                    onClick={e => {
                      e.stopPropagation();
                      window.open(`https://www.google.com/search?q=${encodeURIComponent(tag)}`, '_blank');
                    }}
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
} 