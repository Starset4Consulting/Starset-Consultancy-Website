import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { motion } from 'framer-motion';
import { FaReact, FaPython, FaJsSquare, FaFigma, FaAws, FaGoogle, FaGithub, FaHtml5, FaCss3Alt, FaJava } from 'react-icons/fa';
import { DiPostgresql, DiFirebase } from 'react-icons/di';
import { IoLogoNodejs } from 'react-icons/io';
import { useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Code2, 
  Smartphone, 
  Globe, 
  Monitor,
  Cpu, 
  Microchip, 
  ArrowRight 
} from 'lucide-react';
import { Link } from 'react-router-dom';

const icons = [
  { name: 'React', color: '#61DAFB', shape: 'circle', icon: <FaReact size={40} /> },
  { name: 'Python', color: '#306998', shape: 'circle', icon: <FaPython size={40} /> },
  { name: 'Node.js', color: '#68A063', shape: 'circle', icon: <IoLogoNodejs size={40} /> },
  { name: 'Figma', color: '#F24E1E', shape: 'square', icon: <FaFigma size={40} /> },
  { name: 'PostgreSQL', color: '#336791', shape: 'circle', icon: <DiPostgresql size={40} /> },
  { name: 'AWS', color: '#FF9900', shape: 'square', icon: <FaAws size={40} /> },
  { name: 'GCP', color: '#4285F4', shape: 'circle', icon: <FaGoogle size={40} /> },
  { name: 'Firebase', color: '#FFCA28', shape: 'circle', icon: <DiFirebase size={40} /> },
  { name: 'Java', color: '#007396', shape: 'square', icon: <FaJava size={40} /> },
  { name: 'JavaScript', color: '#F7DF1E', shape: 'circle', icon: <FaJsSquare size={40} /> },
  { name: 'HTML', color: '#E34F26', shape: 'square', icon: <FaHtml5 size={40} /> },
  { name: 'CSS', color: '#1572B6', shape: 'square', icon: <FaCss3Alt size={40} /> },
  // { name: 'Tailwind CSS', color: '#38BDF8', shape: 'circle', icon: <FaCss3Alt size={40} /> },
  { name: 'GitHub', color: '#333', shape: 'square', icon: <FaGithub size={40} /> },
];
const services = [
  { icon: Code2, title: 'Website Development', description: 'Custom websites that drive results' },
  { icon: Smartphone, title: 'Mobile Apps', description: 'Native iOS and Android applications' },
  { icon: Globe, title: 'Web Integration', description: 'Seamless web application integration' },
  { icon: Monitor, title: 'Desktop Apps', description: 'Powerful desktop solutions' },
  { icon: Cpu, title: 'Circuit Design', description: 'Professional circuit solutions' }, // Replaced Circuit with Cpu
  { icon: Cpu, title: 'Embedded Systems', description: 'Smart embedded system design' },
  { icon: Microchip, title: 'Chipset Design', description: 'Custom chipset prototyping' },
];

const FloatingIcons = () => {
  const radius = 200; // Radius of the circular pattern
  const center = { x: 50, y: 50 }; // Center of the circle as a percentage

  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <motion.div
        className="relative"
        style={{
          width: `${radius * 2}px`,
          height: `${radius * 2}px`,
        }}
        animate={{
          rotate: [0, 360],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {icons.map((icon, index) => {
          const angle = (index / icons.length) * 2 * Math.PI; // Calculate the angle for each icon
          const x = radius * Math.cos(angle);
          const y = radius * Math.sin(angle);

          return (
            <motion.div
              key={icon.name}
              className="absolute"
              initial={{
                left: `calc(50% + ${x}px - 20px)`,
                top: `calc(50% + ${y}px - 20px)`,
              }}
              animate={{
                left: [
                  `calc(50% + ${x}px - 20px)`, // Original position
                  `calc(50% - 20px)`, // Center position
                  `calc(50% + ${x}px - 20px)`, // Back to original position
                ],
                top: [
                  `calc(50% + ${y}px - 20px)`, // Original position
                  `calc(50% - 20px)`, // Center position
                  `calc(50% + ${y}px - 20px)`, // Back to original position
                ],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatDelay: (icons.length - 1) * 2,
                delay: index * 2, // Stagger animation for each icon
              }}
            >
              {icon.icon}
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
};




export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden pt-16">
        <div className="absolute inset-0 z-0">
          <Canvas camera={{ position: [0, 0, 5] }}>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} />
            <OrbitControls enableZoom={false} />
          </Canvas>
        </div>

        {/* Floating Icons */}
        <FloatingIcons />

        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl sm:text-6xl font-bold tracking-tight">
              Bridging Software and Hardware Innovation
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
              We transform ideas into reality through cutting-edge technology solutions
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/services">
            <button className="bg-blue-500 text-white py-2 px-6 rounded-lg">Explore Services</button>
              </Link>
              <Link to="/contact">
            <button className="border border-gray-500 text-white py-2 px-6 rounded-lg">Get in Touch</button>
              </Link>
          </div>
          </motion.div>
        </div>
      </section>
      {/* Services Section */}
      <section className="py-24 bg-muted/50">
        <div className="container px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-16">Our Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <service.icon className="h-12 w-12 text-primary mb-4" />
                    <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                    <p className="text-muted-foreground">{service.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="container px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Ideas?</h2>
          <p className="text-lg mb-10 opacity-90">
            Let's collaborate to bring your vision to life with our expertise
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link to="/contact" className="group">
              Start Your Project
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}