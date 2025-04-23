
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
}

const services: Service[] = [
  {
    id: 1,
    title: "One-on-One Tutoring",
    description: "Personalized tutoring sessions tailored to individual learning styles and needs.",
    icon: "👨‍🏫"
  },
  {
    id: 2,
    title: "Group Study Programs",
    description: "Collaborative learning environments fostering peer-to-peer knowledge sharing.",
    icon: "👥"
  },
  {
    id: 3,
    title: "Online Courses",
    description: "Flexible, self-paced online courses covering a wide range of subjects and skills.",
    icon: "💻"
  },
  {
    id: 4,
    title: "Exam Preparation",
    description: "Structured preparation programs for standardized tests and academic exams.",
    icon: "📝"
  },
  {
    id: 5,
    title: "Coding Bootcamps",
    description: "Intensive programming courses for beginners and advanced learners alike.",
    icon: "⌨️"
  },
  {
    id: 6,
    title: "Career Counseling",
    description: "Expert guidance on educational and career pathways tailored to individual goals.",
    icon: "🧭"
  }
];

const ServicesSection = () => {
  return (
    <section id="services" className="bg-gray-50 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-title mx-auto">Our Services</h2>
          <p className="text-gray-600 max-w-3xl mx-auto mt-4">
            At Logic EdTech, we offer a comprehensive range of educational services designed to help students achieve their academic goals and develop essential skills for future success.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <Card key={service.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="text-4xl mb-4">{service.icon}</div>
                <CardTitle className="text-xl text-logic-800">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <div className="inline-block px-6 py-3 bg-logic-800 text-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <p className="font-semibold">Can't find what you're looking for?</p>
            <p className="text-sm text-logic-100">Contact us for custom educational solutions.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
