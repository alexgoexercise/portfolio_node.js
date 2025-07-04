import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { bandsList, Band } from '@/content/bands';
import { projects, Project } from '@/content/projects';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

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
  const handleTagClick = (tag: string) => {
    const searchQuery = encodeURIComponent(tag);
    window.open(`https://www.google.com/search?q=${searchQuery}`, '_blank');
  };

  const handleExternalClick = (project: Project, e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent card click
    if (project.url) {
      window.open(project.url, '_blank');
    }
  };

  const handleExternalKeyDown = (project: Project, e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      e.stopPropagation();
      if (project.url) {
        window.open(project.url, '_blank');
      }
    }
  };

  return (
    <div className="project-container">
      {projects.map((project) => (
        <div 
          key={project.title} 
          className="project-card"
        >
          <div className="project-header">
            <h2>{project.title}</h2>
            {project.url && (
              <div 
                className="click-notice"
                onClick={(e) => handleExternalClick(project, e)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => handleExternalKeyDown(project, e)}
              >
                <span>{project.clickNotice}</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            )}
          </div>
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
  const handleBandClick = (band: Band, e: React.MouseEvent) => {
    e.preventDefault();
    // Always navigate to the band detail page when clicking the card
    window.location.href = `/band/${band.id}`;
  };

  const handleBandKeyDown = (band: Band, e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      window.location.href = `/band/${band.id}`;
    }
  };

  const handleExternalClick = (band: Band, e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent card click
    if (band.externalUrl) {
      window.open(band.externalUrl, '_blank');
    }
  };

  const handleExternalKeyDown = (band: Band, e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      e.stopPropagation();
      if (band.externalUrl) {
        window.open(band.externalUrl, '_blank');
      }
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
              onKeyDown={(e) => handleBandKeyDown(band, e)}
            >
              {band.externalUrl && (
                <div 
                  className="click-notice drumming-click-notice"
                  onClick={(e) => handleExternalClick(band, e)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => handleExternalKeyDown(band, e)}
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