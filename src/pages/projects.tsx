import dynamic from 'next/dynamic';
import Image from 'next/image';

const Slider = dynamic(() => import('react-slick'), { ssr: false });

const RightArrow = '/right-arrow-circle-svgrepo-com.svg';
const LeftArrow = '/left-arrow-circle-svgrepo-com.svg';
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
      <Image src={RightArrow} alt="Next" width={36} height={36} style={{ width: '2.2em', height: '2.2em' }} />
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
      <Image src={LeftArrow} alt="Previous" width={36} height={36} style={{ width: '2.2em', height: '2.2em' }} />
    </div>
  );
}

type Project = {
  title: string;
  description: string | string[];
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
      tags: ["Arduino", "Machine Learning", "Hardware Design"]
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
          <p>
            {Array.isArray(project.description)
              ? project.description.map((line, idx) => <div key={idx}>{line}</div>)
              : project.description}
          </p>
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