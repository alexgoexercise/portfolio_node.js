import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { bandsData } from '@/content/bands';
import styles from './Band.module.css';
import React from 'react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function BandPage() {
  const router = useRouter();
  const { id } = router.query;
  
  const band = id && bandsData[id as keyof typeof bandsData];

  if (!band) {
    return <div>Loading...</div>;
  }

  band.performances.forEach(performance => console.log('Performance images:', performance.images));

  return (
    <div className="drumming-theme">
      <div className={styles.bandDetailPage}>
        {/* Back Button */}
        <Link href="/projects?music=1" className="back-button">
          <span className="back-arrow">←</span>
          <span className="back-text">Back to Bands</span>
        </Link>

        {/* Band Description Section */}
        <section className={styles.bandDetailSection}>
          <div className={styles.bandHeader}>
            <h1>{band.name}</h1>
            <p className={styles.bandPeriod}>{band.period}</p>
            <p className={styles.bandRole}>{band.role}</p>
          </div>
          <div className={styles.bandMainImage}>
            <Image
              src={band.image}
              alt={band.name}
              width={600}
              height={600}
              className="slider-image"
            />
          </div>
          <div className={styles.bandDescription}>
            {band.description.split('\n').map((paragraph, index) => (
              <p key={index}>{paragraph.trim()}</p>
            ))}
          </div>
          <div className={styles.bandTags}>
            {band.tags.map((tag, i) => (
              <button
                key={i}
                className={styles.bandTag}
                title={`Search for ${tag} on Google`}
                onClick={() => {
                  window.open(`https://www.google.com/search?q=${encodeURIComponent(tag)}`, '_blank');
                }}
              >
                {tag}
              </button>
            ))}
          </div>
        </section>

        {/* Events Section */}
        <section className={styles.bandPerformancesSection}>
          <h2>Events</h2>
          <div className={styles.performancesGrid}>
            {band.performances.map((performance, index) => {
              // Check if this performance has any images with video URLs
              const hasVideos = performance.images?.some(img => img.url);
              
              return (
                <div 
                  key={index} 
                  className={`${styles.performanceCard} ${hasVideos ? styles.performanceCardWithVideo : ''}`}
                >
                  {performance.images?.length > 0 ? (
                    <div className={styles.sliderWrapper}>
                      <Swiper
                        modules={[Navigation, Pagination]}
                        spaceBetween={30}
                        slidesPerView={1}
                        navigation={true}
                        pagination={{ clickable: true }}
                        loop={true}
                        className="performance-swiper"
                        autoHeight={true}
                      >
                        {performance.images.map((img, index) => (
                          <SwiperSlide key={index}>
                            {img.url ? (
                              <div className={styles.videoImageContainer}>
                                <a
                                  href={img.url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="performance-image-link"
                                >
                                  <Image
                                    src={img.src}
                                    alt={performance.title}
                                    width={600}
                                    height={400}
                                    className="slider-image"
                                    draggable={false}
                                  />
                                  <div className={styles.playButtonOverlay}>
                                    <div className={styles.playButton}>
                                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M8 5v14l11-7z" fill="currentColor"/>
                                      </svg>
                                    </div>
                                  </div>
                                </a>
                              </div>
                            ) : (
                              <Image
                                src={img.src}
                                alt={performance.title}
                                width={600}
                                height={400}
                                className="slider-image"
                                draggable={false}
                              />
                            )}
                          </SwiperSlide>
                        ))}
                      </Swiper>
                    </div>
                  ) : (
                    <div className={styles.sliderWrapper + ' no-image-fallback'}>
                      <span className={styles.noImageText}>No image available</span>
                    </div>
                  )}
                  <div className={styles.performanceContent}>
                    <h3>{performance.title}</h3>
                    <p className="performance-date">{performance.date}</p>
                    <p className="performance-venue">{performance.venue}</p>
                    <p className="performance-description">{performance.description}</p>
                    {hasVideos && (
                      <div className={styles.videoIndicator}>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M8 5v14l11-7z" fill="currentColor"/>
                        </svg>
                        <span>Click images to watch videos</span>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </div>
    </div>
  );
} 