
import { Button } from '@/components/ui/button';

const AboutSection = () => {
  return (
    <section id="about" className="section-container">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="space-y-6">
          <h2 className="section-title">About Logic EdTech</h2>
          <p className="text-gray-600 leading-relaxed">
            Logic EdTech is a leading educational technology company dedicated to transforming the learning experience.
            Founded in 2015, we have been at the forefront of combining innovative teaching methodologies with cutting-edge
            technology to create immersive and effective learning environments.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Our mission is to make quality education accessible to everyone, regardless of their location or background.
            We believe that education is the most powerful tool for personal growth and societal progress.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
            <div className="bg-logic-50 p-4 rounded-lg border border-logic-100">
              <h3 className="font-bold text-logic-800 text-lg mb-2">Our Mission</h3>
              <p className="text-gray-600">Empowering learners with adaptive, accessible education solutions.</p>
            </div>
            <div className="bg-logic-50 p-4 rounded-lg border border-logic-100">
              <h3 className="font-bold text-logic-800 text-lg mb-2">Our Vision</h3>
              <p className="text-gray-600">A world where quality education is a right, not a privilege.</p>
            </div>
          </div>
          <Button className="mt-4 bg-logic-500 hover:bg-logic-600">Learn More About Us</Button>
        </div>
        
        <div className="relative">
          <div className="rounded-lg overflow-hidden shadow-xl">
            <img 
              src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80" 
              alt="Students learning with technology"
              className="w-full h-auto"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 bg-logic-800 text-white p-6 rounded-lg shadow-lg hidden md:block">
            <div className="text-4xl font-bold">7+</div>
            <div>Years of Excellence</div>
          </div>
          <div className="absolute -top-6 -right-6 bg-logic-500 text-white p-6 rounded-lg shadow-lg hidden md:block">
            <div className="text-4xl font-bold">10k+</div>
            <div>Students Taught</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
