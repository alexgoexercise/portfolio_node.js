// @ts-ignore
import '../pages/Projects.css';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import { useState } from 'react';

// @ts-ignore
const Slider: any = dynamic(() => import('react-slick'), { ssr: false });

const rightArrow = '/right-arrow-circle-svgrepo-com.svg';
const leftArrow = '/left-arrow-circle-svgrepo-com.svg';
const Pro1 = '/Pro1.jpg';
const Pro2 = '/Pro2.jpg';
const Pro3 = '/Pro3.jpg';
const Pro4 = '/Pro4.jpg';
const rtos1 = '/rtos1.jpg';
const rtos2 = '/rtos2.jpg';

function NextArrow(props: any) {
  const { className, onClick } = props;
  return (
    <div
      className={`custom-arrow next-arrow slick-arrow ${className || ""}`}
      onClick={onClick}
      aria-label="Next"
      role="button"
      tabIndex={0}
    >
      <Image src={rightArrow} alt="Next" width={36} height={36} style={{ width: '2.2em', height: '2.2em' }} />
    </div>
  );
}

function PrevArrow(props: any) {
  const { className, onClick } = props;
  return (
    <div
      className={`custom-arrow prev-arrow slick-arrow ${className || ""}`}
      onClick={onClick}
      aria-label="Previous"
      role="button"
      tabIndex={0}
    >
      <Image src={leftArrow} alt="Previous" width={36} height={36} style={{ width: '2.2em', height: '2.2em' }} />
    </div>
  );
}

export default function Projects() {
  const projects = [
    {
      title: "AR Laser Tag++",
      description: "Wearable system with gun, vest, and sensors for AR gaming. Built with Arduino and trained ML model on sensor data.",
      images: [
        Pro1,
        Pro2,
        Pro3,
        Pro4,
      ],
      tags: ["Arduino", "Machine Learning", "Hardware Design"]
    },
    {
      title: "RTOS Car Racing",
      description: "RTOS built for ARM-based autonomous robot car in race conditions.",
      images: [
        rtos1,
        rtos2,
      ],
      tags: ["RTOS", "Embedded C", "ARM"]
    }
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    centerMode: true,
    centerPadding: "0px",
    adaptiveHeight: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  const handleTagClick = (tag: string) => {
    const searchQuery = encodeURIComponent(tag);
    window.open(`https://www.google.com/search?q=${searchQuery}`, '_blank');
  };

  return (
    <div className="project-container">
      {projects.map((project, idx) => (
        <div key={idx} className="project-card">
          <h2>{project.title}</h2>
          <p>{project.description}</p>
          <Slider {...sliderSettings} className="project-slider">
            {project.images.map((img, index) => (
              <div key={index} className="slide-img" style={{width: "auto"}}>
                <Image src={img} alt={`Slide ${index}`} width={400} height={300} style={{ width: '100%', height: 'auto', borderRadius: 'inherit' }} />
              </div>
            ))}
          </Slider>
          <div className="tags">
            {project.tags.map((tag, i) => (
              <button 
                key={i} 
                className="tag" 
                onClick={() => handleTagClick(tag)}
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