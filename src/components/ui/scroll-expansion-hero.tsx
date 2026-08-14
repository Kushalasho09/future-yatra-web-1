'use client';

import {
  useEffect,
  useRef,
  useState,
  ReactNode,
} from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform, useMotionValueEvent } from 'framer-motion';

interface ScrollExpandMediaProps {
  mediaType?: 'video' | 'image';
  mediaSrc: string;
  posterSrc?: string;
  bgImageSrc: string;
  title?: string;
  date?: string;
  scrollToExpand?: string;
  textBlend?: boolean;
  children?: ReactNode;
}

const ScrollExpandMedia = ({
  mediaType = 'video',
  mediaSrc,
  posterSrc,
  bgImageSrc,
  title,
  date,
  scrollToExpand,
  textBlend,
  children,
}: ScrollExpandMediaProps) => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [showContent, setShowContent] = useState<boolean>(false);

  useEffect(() => {
    const checkIfMobile = (): void => {
      if (typeof window !== 'undefined') {
        setIsMobile(window.innerWidth < 768);
      }
    };

    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'center center'],
  });

  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    if (latest >= 0.85) {
      setShowContent(true);
    } else {
      setShowContent(false);
    }
  });

  // Calculate dynamic dimensions
  const mediaWidth = useTransform(
    scrollYProgress,
    [0, 1],
    [300, isMobile ? 650 : 1250]
  );

  const mediaHeight = useTransform(
    scrollYProgress,
    [0, 1],
    [350, isMobile ? 450 : 650]
  );

  const textTranslateX = useTransform(
    scrollYProgress,
    [0, 1],
    [0, isMobile ? 120 : 150]
  );

  const bgOpacity = useTransform(scrollYProgress, [0, 1], [1, 0.2]);

  const firstWord = title ? title.split(' ')[0] : '';
  const restOfTitle = title ? title.split(' ').slice(1).join(' ') : '';

  return (
    <div
      ref={sectionRef}
      className='transition-colors duration-700 ease-in-out overflow-x-hidden relative my-8 sm:my-16'
    >
      <section className='relative flex flex-col items-center justify-start min-h-[90vh] sm:min-h-[100vh]'>
        <div className='relative w-full flex flex-col items-center min-h-[90vh] sm:min-h-[100vh]'>
          
          {/* Background Image with opacity transform */}
          <motion.div
            className='absolute inset-0 z-0 h-full'
            style={{ opacity: bgOpacity }}
          >
            <Image
              src={bgImageSrc}
              alt='Background'
              width={1920}
              height={1080}
              className='w-screen h-screen object-cover object-center'
              priority
            />
            <div className='absolute inset-0 bg-black/40' />
          </motion.div>

          <div className='container mx-auto flex flex-col items-center justify-start relative z-10 px-4'>
            <div className='flex flex-col items-center justify-center w-full h-[80vh] sm:h-[90vh] relative'>
              
              {/* Media Expanding Container */}
              <motion.div
                className='absolute z-0 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-2xl overflow-hidden'
                style={{
                  width: mediaWidth,
                  height: mediaHeight,
                  maxWidth: '95vw',
                  maxHeight: '85vh',
                  boxShadow: '0px 0px 50px rgba(0, 0, 0, 0.5)',
                }}
              >
                {mediaType === 'video' ? (
                  mediaSrc.includes('youtube.com') ? (
                    <div className='relative w-full h-full pointer-events-none'>
                      <iframe
                        width='100%'
                        height='100%'
                        src={
                          mediaSrc.includes('embed')
                            ? mediaSrc +
                              (mediaSrc.includes('?') ? '&' : '?') +
                              'autoplay=1&mute=1&loop=1&controls=0&showinfo=0&rel=0&disablekb=1&modestbranding=1'
                            : mediaSrc.replace('watch?v=', 'embed/') +
                              '?autoplay=1&mute=1&loop=1&controls=0&showinfo=0&rel=0&disablekb=1&modestbranding=1&playlist=' +
                              mediaSrc.split('v=')[1]
                        }
                        className='w-full h-full rounded-xl'
                        frameBorder='0'
                        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                        allowFullScreen
                      />
                      <div className='absolute inset-0 bg-black/20 rounded-xl' />
                    </div>
                  ) : (
                    <div className='relative w-full h-full pointer-events-none'>
                      <video
                        src={mediaSrc}
                        poster={posterSrc}
                        autoPlay
                        muted
                        loop
                        playsInline
                        preload='auto'
                        className='w-full h-full object-cover rounded-xl'
                        controls={false}
                        disablePictureInPicture
                        disableRemotePlayback
                      />
                      <div className='absolute inset-0 bg-black/20 rounded-xl' />
                    </div>
                  )
                ) : (
                  <div className='relative w-full h-full'>
                    <Image
                      src={mediaSrc}
                      alt={title || 'Media content'}
                      width={1280}
                      height={720}
                      className='w-full h-full object-cover rounded-xl'
                    />
                    <div className='absolute inset-0 bg-black/30 rounded-xl' />
                  </div>
                )}

                <div className='flex flex-col items-center text-center relative z-10 mt-4 transition-none'>
                  {date && (
                    <p className='text-lg sm:text-2xl text-cyan-200 font-semibold drop-shadow'>
                      {date}
                    </p>
                  )}
                  {scrollToExpand && (
                    <p className='text-sky-200 font-medium text-center text-xs sm:text-base mt-2 drop-shadow'>
                      {scrollToExpand}
                    </p>
                  )}
                </div>
              </motion.div>

              {/* Title Translating Outwards */}
              <div
                className={`flex items-center justify-center text-center gap-4 w-full relative z-10 transition-none flex-col ${
                  textBlend ? 'mix-blend-difference' : 'mix-blend-normal'
                }`}
              >
                <motion.h2
                  className='text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight drop-shadow-2xl'
                  style={{ x: textTranslateX }}
                >
                  {firstWord}
                </motion.h2>
                <motion.h2
                  className='text-3xl sm:text-5xl lg:text-6xl font-extrabold text-center text-white tracking-tight drop-shadow-2xl'
                  style={{ x: textTranslateX }}
                >
                  {restOfTitle}
                </motion.h2>
              </div>
            </div>

            {/* Revealed Content Section */}
            <motion.section
              className='flex flex-col w-full px-4 py-8 md:px-16 lg:py-16'
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: showContent ? 1 : 0.8, y: showContent ? 0 : 20 }}
              transition={{ duration: 0.5 }}
            >
              {children}
            </motion.section>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ScrollExpandMedia;
