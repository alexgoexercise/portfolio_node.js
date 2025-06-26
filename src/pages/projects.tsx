import dynamic from 'next/dynamic';
import Image from 'next/image';

const Slider = dynamic(() => import('react-slick'), { ssr: false });

const rightArrow = '/right-arrow-circle-svgrepo-com.svg';
const leftArrow = '/left-arrow-circle-svgrepo-com.svg';
const Pro1 = '/Pro1.jpg';
const Pro2 = '/Pro2.jpg';
const Pro3 = '/Pro3.jpg';
const Pro4 = '/Pro4.jpg';
const rtos1 = '/rtos1.jpg';
const rtos2 = '/rtos2.jpg';
const Port1 = '/Portfolio1.jpg';
const Port2 = '/Portfolio2.jpg';

type ArrowProps = {
  className?: string;
  onClick?: () => void;
  currentSlide?: number;
  slideCount?: number;
};

function NextArrow(props: ArrowProps) {
  const { className, onClick, currentSlide = 0, slideCount = 0 } = props;
  if (currentSlide >= (slideCount - 1)) return null;
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

function PrevArrow(props: ArrowProps) {
  const { className, onClick, currentSlide = 0 } = props;
  if (currentSlide === 0) return null;
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

type Project = {
  title: string;
  description: string;
  images: string[];
  tags: string[];
};

type SliderSettings = {
  dots: boolean;
  infinite: boolean;
  speed: number;
  slidesToShow: number;
  slidesToScroll: number;
  arrows: boolean;
  adaptiveHeight: boolean;
};

export default function Projects() {
  const projects: Project[] = [
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
    },
    {
      title: "Personal Website",
      description: "Personal Website built with node.js + react tech stack.",
      images:[
        Port1,
        Port2,
      ],
      tags: ["node.js", "react", "typescript", "vercel"]
    }
  ];

  const sliderSettings: SliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    adaptiveHeight: true,
  };

  const handleTagClick = (tag: string) => {
    const searchQuery = encodeURIComponent(tag);
    window.open(`https://www.google.com/search?q=${searchQuery}`, '_blank');
  };

  return (
    <div className="project-container">
      {projects.map((project) => (
        <div key={project.title} className="project-card">
          <h2>{project.title}</h2>
          <p>{project.description}</p>
          <div className="slider-wrapper" style={{ position: 'relative' }}>
            <Slider
              {...sliderSettings}
              nextArrow={<NextArrow />}
              prevArrow={<PrevArrow />}
            >
              {project.images.map((img, index) => (
                <div key={index}>
                  <Image
                    src={img}
                    alt={`Slide ${index}`}
                    width={600}
                    height={400}
                    style={{
                      height: '100%',
                      width: 'auto',
                      maxWidth: '100%',
                      objectFit: 'contain',
                      borderRadius: '12px',
                      display: 'block',
                      margin: '0 auto',
                      background: '#f8f8f8',
                    }}
                    draggable={false}
                  />
                </div>
              ))}
            </Slider>
          </div>
          <div className="tags">
            {project.tags.map((tag) => (
              <button
                key={tag}
                className="skill-tag"
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