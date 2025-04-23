
import { useState } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent, CardHeader } from '@/components/ui/card';

interface Testimonial {
  id: number;
  text: string;
  name: string;
  title: string;
  avatar: string;
  rating: number;
}

const defaultTestimonials: Testimonial[] = [
  {
    id: 1,
    text: "Logic EdTech transformed my learning experience. Their personalized approach helped me ace my exams and build confidence in my abilities.",
    name: "Sarah Johnson",
    title: "Computer Science Student",
    avatar: "SJ",
    rating: 5
  },
  {
    id: 2,
    text: "The coding bootcamp was intense but incredibly rewarding. I went from knowing nothing about programming to landing a junior developer job in just 3 months!",
    name: "Michael Chen",
    title: "Software Developer",
    avatar: "MC",
    rating: 5
  },
  {
    id: 3,
    text: "As a parent, I've seen remarkable improvement in my daughter's grades and confidence since she started with Logic. The tutors are patient, knowledgeable, and truly care about their students.",
    name: "Lisa Williams",
    title: "Parent",
    avatar: "LW",
    rating: 4
  },
  {
    id: 4,
    text: "Logic's exam preparation program was exactly what I needed to pass my certification. The structured approach and practice tests were invaluable.",
    name: "James Rodriguez",
    title: "IT Professional",
    avatar: "JR",
    rating: 5
  },
];

const TestimonialsSection = () => {
  // In a real app, you would fetch this data from an API
  const [testimonials] = useState<Testimonial[]>(defaultTestimonials);

  const renderStars = (rating: number) => {
    return Array(5).fill(0).map((_, i) => (
      <svg 
        key={i} 
        className={`w-5 h-5 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`} 
        fill="currentColor" 
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  return (
    <section id="testimonials" className="section-container">
      <div className="text-center mb-12">
        <h2 className="section-title mx-auto">Student Reviews</h2>
        <p className="text-gray-600 max-w-3xl mx-auto mt-4">
          Don't just take our word for it. Hear from our students and parents about their experiences with Logic EdTech.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {testimonials.map((testimonial) => (
          <Card key={testimonial.id} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <CardHeader className="pb-2">
              <div className="flex items-center space-x-4">
                <Avatar>
                  <AvatarImage src={testimonial.avatar.includes('/') ? testimonial.avatar : undefined} alt={testimonial.name} />
                  <AvatarFallback className="bg-logic-100 text-logic-800">{testimonial.avatar}</AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="font-semibold text-logic-800">{testimonial.name}</h3>
                  <p className="text-sm text-gray-500">{testimonial.title}</p>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex mb-2">
                {renderStars(testimonial.rating)}
              </div>
              <p className="text-gray-600 italic">"{testimonial.text}"</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;
