import React from 'react';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Code2,
  Smartphone,
  Globe,
  Monitor,
  Cpu,
  Microchip,
} from 'lucide-react';
import {
  FaReact,
  FaPython,
  FaJsSquare,
  FaFigma,
  FaAws,
  FaGoogle,
  FaGithub,
  FaHtml5,
  FaCss3Alt,
  FaJava,
} from 'react-icons/fa';
import { DiPostgresql, DiFirebase } from 'react-icons/di';
import { IoLogoNodejs } from 'react-icons/io';

const softwareServices = [
  {
    icon: Code2,
    title: 'Website Development',
    description:
      'Custom websites built with modern technologies and best practices.',
    features: [
      'Responsive Design',
      'SEO Optimization',
      'Performance Focused',
      'Modern UI/UX',
    ],
  },
  {
    icon: Smartphone,
    title: 'Mobile App Development',
    description: 'Native and cross-platform mobile applications.',
    features: [
      'iOS Development',
      'Android Development',
      'Cross-platform Solutions',
      'App Store Optimization',
    ],
  },
  {
    icon: Globe,
    title: 'Web Integration',
    description: 'Seamless integration of web applications and services.',
    features: [
      'API Development',
      'Third-party Integration',
      'Cloud Solutions',
      'Microservices',
    ],
  },
  {
    icon: Monitor,
    title: 'Desktop Applications',
    description: 'Powerful desktop software solutions.',
    features: [
      'Cross-platform Support',
      'Native Performance',
      'Custom UI',
      'System Integration',
    ],
  },
];

const hardwareServices = [
  {
    icon: Cpu,
    title: 'Circuit Design',
    description: 'Professional circuit design and optimization.',
    features: [
      'Schematic Design',
      'PCB Layout',
      'Signal Integrity',
      'Thermal Analysis',
    ],
  },
  {
    icon: Cpu,
    title: 'Embedded Systems',
    description: 'Custom embedded system solutions.',
    features: [
      'Firmware Development',
      'Real-time Systems',
      'IoT Solutions',
      'Hardware Integration',
    ],
  },
  {
    icon: Microchip,
    title: 'Chipset Prototyping',
    description: 'Advanced chipset design and prototyping.',
    features: ['FPGA Development', 'ASIC Design', 'Verification', 'Testing'],
  },
];

const icons = [
  { name: 'React', color: '#61DAFB', icon: <FaReact size={40} /> },
  { name: 'Python', color: '#306998', icon: <FaPython size={40} /> },
  { name: 'Node.js', color: '#68A063', icon: <IoLogoNodejs size={40} /> },
  { name: 'Figma', color: '#F24E1E', icon: <FaFigma size={40} /> },
  { name: 'PostgreSQL', color: '#336791', icon: <DiPostgresql size={40} /> },
  { name: 'AWS', color: '#FF9900', icon: <FaAws size={40} /> },
  { name: 'GCP', color: '#4285F4', icon: <FaGoogle size={40} /> },
  { name: 'Firebase', color: '#FFCA28', icon: <DiFirebase size={40} /> },
  { name: 'Java', color: '#007396', icon: <FaJava size={40} /> },
  { name: 'JavaScript', color: '#F7DF1E', icon: <FaJsSquare size={40} /> },
  { name: 'HTML', color: '#E34F26', icon: <FaHtml5 size={40} /> },
  { name: 'CSS', color: '#1572B6', icon: <FaCss3Alt size={40} /> },
];

const FloatingIcons = () => {
  const containerStyle = {
    position: 'absolute',
    bottom: '82.5%', // Position the slider 10% from the bottom (adjust as needed)
    left: '0',
    width: '100%',
    overflow: 'hidden', // Ensure no overflow is visible
  };

  const trackStyle = {
    display: 'flex',
    gap: '40px', // Space between icons
    whiteSpace: 'nowrap',
  };

  return (
    <div style={containerStyle}>
      <motion.div
        className="slider-track"
        style={trackStyle}
        animate={{ x: ['0%', '-100%'] }} // Slide from right to left
        transition={{
          duration: 10, // Adjust the speed of the sliding animation
          repeat: Infinity, // Loop endlessly
          ease: 'linear',
        }}
      >
        {/* Duplicate the icons list to make the animation seamless */}
        {[...icons, ...icons].map((icon, index) => (
          <motion.div
            key={`${icon.name}-${index}`}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '80px',
              height: '80px',
            }}
          >
            {icon.icon}
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};


export default function Services() {
  return (
    <div className="relative min-h-screen pt-16">
      <FloatingIcons />
      <div className="container px-4 sm:px-6 lg:px-8 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold mb-6">Our Services</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive software and hardware solutions tailored to your
            needs
          </p>
        </motion.div>

        <Tabs defaultValue="software" className="space-y-8">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="software">Software Services</TabsTrigger>
            <TabsTrigger value="hardware">Hardware Services</TabsTrigger>
          </TabsList>

          <TabsContent value="software" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {softwareServices.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card>
                    <CardHeader>
                      {React.createElement(service.icon, {
                        className: 'h-8 w-8 text-primary mb-2',
                      })}
                      <CardTitle>{service.title}</CardTitle>
                      <CardDescription>{service.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {service.features.map((feature) => (
                          <li
                            key={feature}
                            className="flex items-center gap-2"
                          >
                            <Monitor className="h-4 w-4 text-primary" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="hardware" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {hardwareServices.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card>
                    <CardHeader>
                      {React.createElement(service.icon, {
                        className: 'h-8 w-8 text-primary mb-2',
                      })}
                      <CardTitle>{service.title}</CardTitle>
                      <CardDescription>{service.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {service.features.map((feature) => (
                          <li
                            key={feature}
                            className="flex items-center gap-2"
                          >
                            <Cpu className="h-4 w-4 text-primary" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
