import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  Users,
  Target,
  Lightbulb,
  Shield,
  Award,
  Rocket
} from 'lucide-react';

const team = [
  {
    name: 'Sheshank Sonji',
    role: 'CEO & Founder',
    image: 'https://starset4consulting.github.io/Social-clients/Shashi.jpeg?auto=format&fit=crop&q=80&w=200',
    bio: 'Expert in Full-Stack & AI Solutions.'
  },
  {
    name: 'Abdul Aziz',
    role: 'Managing Director',
    image: 'https://starset4consulting.github.io/Social-clients/image3.jpg?auto=format&fit=crop&q=80&w=200',
    bio: 'Expert in embedded systems and software architecture'
  },
  {
    name: 'Vaishnavi',
    role: 'Head of Design',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200',
    bio: 'Best UI/UX designer with focus on user-centered design'
  },
  {
    name: '?',
    role: 'Lead Engineer',
    // image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200',
    bio: 'It can be you so what are you waiting for apply visiting our careers section '
  }
];

const values = [
  {
    icon: Target,
    title: 'Innovation First',
    description: 'Pushing boundaries with cutting-edge solutions'
  },
  {
    icon: Users,
    title: 'Client Partnership',
    description: 'Building lasting relationships through collaboration'
  },
  {
    icon: Lightbulb,
    title: 'Creative Excellence',
    description: 'Delivering unique and effective solutions'
  },
  {
    icon: Shield,
    title: 'Quality Assurance',
    description: 'Maintaining highest standards in every project'
  }
];

// const achievements = [
//   {
//     year: '2023',
//     title: 'Industry Innovation Award',
//     description: 'Recognized for breakthrough in IoT solutions'
//   },
//   {
//     year: '2022',
//     title: 'Best Tech Workplace',
//     description: 'Awarded for exceptional company culture'
//   },
//   {
//     year: '2021',
//     title: 'Global Expansion',
//     description: 'Opened offices in Asia and Europe'
//   }
// ];

export default function About() {
  return (
    <div className="min-h-screen pt-16">
      <div className="container px-4 sm:px-6 lg:px-8 py-24">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <h1 className="text-4xl font-bold mb-6">About Starset</h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We are a team of passionate innovators dedicated to bridging the gap between
            software and hardware solutions. Our expertise spans across multiple domains,
            enabling us to deliver comprehensive technology solutions.
          </p>
        </motion.div>

        {/* Core Values */}
        <section className="mb-24">
          <h2 className="text-3xl font-bold text-center mb-12">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="text-center h-full">
                  <CardContent className="pt-6">
                    <value.icon className="h-12 w-12 mx-auto mb-4 text-primary" />
                    <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Team Section */}
        <section className="mb-24">
          <h2 className="text-3xl font-bold text-center mb-12">Our Leadership Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="text-center h-full">
                  <CardContent className="pt-6">
                    <Avatar className="h-24 w-24 mx-auto mb-4">
                      <AvatarImage src={member.image} alt={member.name} />
                      <AvatarFallback>{member.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                    <CardTitle className="mb-2">{member.name}</CardTitle>
                    <p className="text-primary font-medium mb-2">{member.role}</p>
                    <p className="text-muted-foreground">{member.bio}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Achievements */}
        {/* <section>
          <h2 className="text-3xl font-bold text-center mb-12">Our Achievements</h2>
          <div className="max-w-3xl mx-auto">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.year}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start gap-4 mb-8"
              >
                <div className="flex-shrink-0">
                  <Award className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <div className="text-sm text-primary font-medium mb-1">
                    {achievement.year}
                  </div>
                  <h3 className="text-lg font-semibold mb-1">{achievement.title}</h3>
                  <p className="text-muted-foreground">{achievement.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section> */}
      </div>
    </div>
  );
}