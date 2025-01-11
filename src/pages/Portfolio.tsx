import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';

const projects = {
  software: [
    {
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with real-time inventory management',
      image: 'https://images.unsplash.com/photo-1661956602116-aa6865609028?auto=format&fit=crop&q=80&w=800',
      tech: ['React', 'Node.js', 'PostgreSQL'],
      link: '#'
    },
    {
      title: 'Healthcare App',
      description: 'Mobile application for patient monitoring and healthcare management',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800',
      tech: ['React Native', 'Firebase', 'GraphQL'],
      link: '#'
    },
    {
      title: 'AI Analytics Dashboard',
      description: 'Real-time analytics platform with machine learning capabilities',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
      tech: ['Vue.js', 'Python', 'TensorFlow'],
      link: '#'
    }
  ],
  hardware: [
    {
      title: 'Smart Home System',
      description: 'IoT-based home automation system with custom PCB design',
      image: 'https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&q=80&w=800',
      tech: ['Arduino', 'ESP32', 'Custom PCB'],
      link: '#'
    },
    {
      title: 'Industrial Automation',
      description: 'Custom embedded system for manufacturing process control',
      image: 'https://images.unsplash.com/photo-1537432376769-00f5c2f4c8d2?auto=format&fit=crop&q=80&w=800',
      tech: ['PLC', 'SCADA', 'Industrial IoT'],
      link: '#'
    },
    {
      title: 'Medical Device',
      description: 'FDA-compliant medical monitoring device with custom firmware',
      image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=800',
      tech: ['Embedded C', 'RTOS', 'Medical Sensors'],
      link: '#'
    }
  ]
};

export default function Portfolio() {
  return (
    <div className="min-h-screen pt-16">
      <div className="container px-4 sm:px-6 lg:px-8 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold mb-6">Our Portfolio</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our successful projects and innovative solutions
          </p>
        </motion.div>

        <Tabs defaultValue="software" className="space-y-8">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2">
            <TabsTrigger value="software">Software Projects</TabsTrigger>
            <TabsTrigger value="hardware">Hardware Projects</TabsTrigger>
          </TabsList>

          {['software', 'hardware'].map((category) => (
            <TabsContent key={category} value={category}>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects[category].map((project, index) => (
                  <motion.div
                    key={project.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card className="overflow-hidden h-full">
                      <div className="aspect-video relative overflow-hidden">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="object-cover w-full h-full transform hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <CardHeader>
                        <CardTitle>{project.title}</CardTitle>
                        <CardDescription>{project.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.tech.map((tech) => (
                            <span
                              key={tech}
                              className="px-2 py-1 bg-primary/10 text-primary rounded-md text-sm"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                        <Button variant="outline" className="w-full" asChild>
                          <a href={project.link} target="_blank" rel="noopener noreferrer">
                            View Project <ExternalLink className="ml-2 h-4 w-4" />
                          </a>
                        </Button>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </div>
  );
}