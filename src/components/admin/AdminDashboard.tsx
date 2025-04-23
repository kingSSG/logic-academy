
import { useState, useEffect } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';

interface BannerSlide {
  id: number;
  imageUrl: string;
  title: string;
  subtitle: string;
}

interface Testimonial {
  id: number;
  text: string;
  name: string;
  title: string;
  avatar: string;
  rating: number;
}

const AdminDashboard = () => {
  const { toast } = useToast();
  
  // Banner Slides State
  const [bannerSlides, setBannerSlides] = useState<BannerSlide[]>([
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
  ]);
  
  const [newSlide, setNewSlide] = useState<Omit<BannerSlide, 'id'>>({
    imageUrl: '',
    title: '',
    subtitle: ''
  });
  
  // Testimonials State
  const [testimonials, setTestimonials] = useState<Testimonial[]>([
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
  ]);
  
  const [newTestimonial, setNewTestimonial] = useState<Omit<Testimonial, 'id'>>({
    text: '',
    name: '',
    title: '',
    avatar: '',
    rating: 5
  });
  
  // Handle Banner Slide Form Input
  const handleSlideChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setNewSlide({ ...newSlide, [name]: value });
  };
  
  // Add Banner Slide
  const handleAddSlide = () => {
    if (!newSlide.imageUrl || !newSlide.title || !newSlide.subtitle) {
      toast({
        title: "Error",
        description: "Please fill in all fields for the banner slide.",
        variant: "destructive"
      });
      return;
    }
    
    const id = bannerSlides.length > 0 ? Math.max(...bannerSlides.map(slide => slide.id)) + 1 : 1;
    setBannerSlides([...bannerSlides, { ...newSlide, id }]);
    setNewSlide({ imageUrl: '', title: '', subtitle: '' });
    
    toast({
      title: "Success!",
      description: "Banner slide has been added.",
    });
  };
  
  // Delete Banner Slide
  const handleDeleteSlide = (id: number) => {
    setBannerSlides(bannerSlides.filter(slide => slide.id !== id));
    toast({
      title: "Success!",
      description: "Banner slide has been deleted.",
    });
  };
  
  // Handle Testimonial Form Input
  const handleTestimonialChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setNewTestimonial({ 
      ...newTestimonial, 
      [name]: name === 'rating' ? parseInt(value) || 5 : value
    });
  };
  
  // Add Testimonial
  const handleAddTestimonial = () => {
    if (!newTestimonial.name || !newTestimonial.text || !newTestimonial.title) {
      toast({
        title: "Error",
        description: "Please fill in all required fields for the testimonial.",
        variant: "destructive"
      });
      return;
    }
    
    // If avatar is not provided, use initials
    let avatar = newTestimonial.avatar;
    if (!avatar && newTestimonial.name) {
      const nameParts = newTestimonial.name.split(' ');
      if (nameParts.length >= 2) {
        avatar = `${nameParts[0][0]}${nameParts[1][0]}`;
      } else {
        avatar = nameParts[0][0];
      }
    }
    
    const id = testimonials.length > 0 ? Math.max(...testimonials.map(t => t.id)) + 1 : 1;
    setTestimonials([...testimonials, { ...newTestimonial, avatar, id }]);
    setNewTestimonial({
      text: '',
      name: '',
      title: '',
      avatar: '',
      rating: 5
    });
    
    toast({
      title: "Success!",
      description: "Testimonial has been added.",
    });
  };
  
  // Delete Testimonial
  const handleDeleteTestimonial = (id: number) => {
    setTestimonials(testimonials.filter(t => t.id !== id));
    toast({
      title: "Success!",
      description: "Testimonial has been deleted.",
    });
  };
  
  // In a real app, we would save to a database when data changes
  useEffect(() => {
    // Save data to localStorage as a simple persistence mechanism
    localStorage.setItem('bannerSlides', JSON.stringify(bannerSlides));
    localStorage.setItem('testimonials', JSON.stringify(testimonials));
  }, [bannerSlides, testimonials]);
  
  // Load data from localStorage on initial load
  useEffect(() => {
    const savedSlides = localStorage.getItem('bannerSlides');
    const savedTestimonials = localStorage.getItem('testimonials');
    
    if (savedSlides) {
      try {
        setBannerSlides(JSON.parse(savedSlides));
      } catch (e) {
        console.error('Error loading banner slides:', e);
      }
    }
    
    if (savedTestimonials) {
      try {
        setTestimonials(JSON.parse(savedTestimonials));
      } catch (e) {
        console.error('Error loading testimonials:', e);
      }
    }
  }, []);
  
  return (
    <div className="container mx-auto p-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-logic-800">Admin Dashboard</h1>
        <Button onClick={() => window.location.href = '/'} variant="outline">Back to Site</Button>
      </div>
      
      <Tabs defaultValue="banner" className="space-y-4">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="banner">Banner Slides</TabsTrigger>
          <TabsTrigger value="testimonials">Testimonials</TabsTrigger>
        </TabsList>
        
        {/* Banner Slides Tab */}
        <TabsContent value="banner" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Add New Banner Slide</CardTitle>
              <CardDescription>Create a new slide for the homepage banner carousel.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="imageUrl">Image URL</Label>
                  <Input
                    id="imageUrl"
                    name="imageUrl"
                    value={newSlide.imageUrl}
                    onChange={handleSlideChange}
                    placeholder="https://example.com/image.jpg"
                  />
                </div>
                
                <div>
                  <Label htmlFor="title">Title</Label>
                  <Input
                    id="title"
                    name="title"
                    value={newSlide.title}
                    onChange={handleSlideChange}
                    placeholder="Slide Title"
                  />
                </div>
                
                <div>
                  <Label htmlFor="subtitle">Subtitle</Label>
                  <Input
                    id="subtitle"
                    name="subtitle"
                    value={newSlide.subtitle}
                    onChange={handleSlideChange}
                    placeholder="Slide Subtitle"
                  />
                </div>
                
                <Button onClick={handleAddSlide} className="w-full bg-logic-500 hover:bg-logic-600">
                  Add Slide
                </Button>
              </div>
            </CardContent>
          </Card>
          
          <h2 className="text-xl font-semibold mt-6 mb-4">Current Banner Slides</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {bannerSlides.map(slide => (
              <Card key={slide.id}>
                <CardContent className="p-0">
                  <div className="relative">
                    <img 
                      src={slide.imageUrl} 
                      alt={slide.title} 
                      className="w-full h-40 object-cover"
                    />
                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                      <div className="text-white text-center p-4">
                        <h3 className="font-semibold">{slide.title}</h3>
                        <p className="text-sm mt-1">{slide.subtitle}</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-4">
                    <Button 
                      onClick={() => handleDeleteSlide(slide.id)} 
                      variant="destructive" 
                      className="w-full"
                    >
                      Delete
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
        
        {/* Testimonials Tab */}
        <TabsContent value="testimonials" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Add New Testimonial</CardTitle>
              <CardDescription>Add a new student or parent review.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="testimonialName">Name</Label>
                  <Input
                    id="testimonialName"
                    name="name"
                    value={newTestimonial.name}
                    onChange={handleTestimonialChange}
                    placeholder="John Doe"
                  />
                </div>
                
                <div>
                  <Label htmlFor="testimonialTitle">Title/Description</Label>
                  <Input
                    id="testimonialTitle"
                    name="title"
                    value={newTestimonial.title}
                    onChange={handleTestimonialChange}
                    placeholder="Computer Science Student"
                  />
                </div>
                
                <div>
                  <Label htmlFor="testimonialText">Testimonial Text</Label>
                  <Textarea
                    id="testimonialText"
                    name="text"
                    value={newTestimonial.text}
                    onChange={handleTestimonialChange}
                    placeholder="Write the testimonial here..."
                    rows={3}
                  />
                </div>
                
                <div>
                  <Label htmlFor="testimonialAvatar">Avatar (Initials or Image URL)</Label>
                  <Input
                    id="testimonialAvatar"
                    name="avatar"
                    value={newTestimonial.avatar}
                    onChange={handleTestimonialChange}
                    placeholder="JD or https://example.com/avatar.jpg"
                  />
                  <p className="text-sm text-gray-500 mt-1">Leave blank to use initials from name.</p>
                </div>
                
                <div>
                  <Label htmlFor="testimonialRating">Rating (1-5)</Label>
                  <Input
                    id="testimonialRating"
                    name="rating"
                    type="number"
                    min="1"
                    max="5"
                    value={newTestimonial.rating}
                    onChange={handleTestimonialChange}
                  />
                </div>
                
                <Button onClick={handleAddTestimonial} className="w-full bg-logic-500 hover:bg-logic-600">
                  Add Testimonial
                </Button>
              </div>
            </CardContent>
          </Card>
          
          <h2 className="text-xl font-semibold mt-6 mb-4">Current Testimonials</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {testimonials.map(testimonial => (
              <Card key={testimonial.id}>
                <CardContent className="p-4">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 rounded-full bg-logic-100 text-logic-800 flex items-center justify-center font-bold text-lg">
                      {testimonial.avatar.length <= 2 ? testimonial.avatar : ''}
                    </div>
                    <div>
                      <h3 className="font-semibold">{testimonial.name}</h3>
                      <p className="text-sm text-gray-600">{testimonial.title}</p>
                    </div>
                  </div>
                  
                  <div className="flex mb-2">
                    {[1, 2, 3, 4, 5].map(star => (
                      <svg 
                        key={star}
                        className={`w-5 h-5 ${star <= testimonial.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  
                  <p className="text-gray-700 italic mb-4">"{testimonial.text}"</p>
                  
                  <Button 
                    onClick={() => handleDeleteTestimonial(testimonial.id)} 
                    variant="destructive" 
                    className="w-full"
                  >
                    Delete
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default AdminDashboard;
