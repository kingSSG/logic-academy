
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

interface BannerSlide {
  id: number;
  imageUrl: string;
  title: string;
  subtitle: string;
}

const defaultSlides: BannerSlide[] = [
  {
    id: 1,
    imageUrl: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80',
    title: 'Unlock Your Learning Potential',
    subtitle: 'Join Logic EdTech and transform the way you learn'
  },
  {
    id: 2,
    imageUrl: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80',
    title: 'Master the Art of Programming',
    subtitle: 'From beginner to expert with our personalized courses'
  },
  {
    id: 3,
    imageUrl: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80',
    title: 'Learn at Your Own Pace',
    subtitle: 'Flexible schedules designed to fit into your busy life'
  }
];

const HeroBanner = () => {
  // In a real app, you would fetch this data from an API
  const [slides, setSlides] = useState<BannerSlide[]>(defaultSlides);
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Auto-rotate slides
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000);
    
    return () => clearInterval(interval);
  }, [slides.length]);
  
  // Manual navigation
  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };
  
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };
  
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };
  
  return (
    <div className="relative h-[500px] md:h-[500px] overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
        >
          <div className="absolute inset-0 bg-black/40 z-10" />
          <img
            src={slide.imageUrl}
            alt={slide.title}
            className="absolute inset-0 w-full h-full object-cover"
          />
          
          <div className="relative z-20 flex flex-col items-center justify-center h-full text-center px-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 animate-fade-in">
              {slide.title}
            </h1>
            <p className="text-xl md:text-2xl text-white mb-8 max-w-2xl animate-fade-in">
              {slide.subtitle}
            </p>
            <div className="animate-fade-in">
              <Button className="bg-logic-500 hover:bg-logic-600 text-white">
                Get Started Today
              </Button>
            </div>
          </div>
        </div>
      ))}
      
      {/* Navigation */}
      <div className="absolute bottom-5 left-0 right-0 flex justify-center space-x-2 z-30">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full ${
              index === currentSlide ? 'bg-white' : 'bg-white/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
      
      {/* Arrow Controls */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full z-30"
        aria-label="Previous slide"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full z-30"
        aria-label="Next slide"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
};

export default HeroBanner;
