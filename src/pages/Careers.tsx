import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  Briefcase,
  MapPin,
  Clock,
  GraduationCap,
  Code,
  Cpu,
  Users,
  Send
} from 'lucide-react';

const openings = [
  {
    title: 'Database Engineer',
    department: 'Engineering',
    location: 'Remote',
    type: 'Part-time',
    experience: 'Fresher',
    skills: ['MySQL', 'Supabase', 'Cloud Databse', 'MongoDB']
  },
  {
    title: 'Testing Engineer',
    department: 'Quality Assurance (QA)',
    location: 'Remote',
    type: 'Full-time',
    experience: '2+ years',
    skills: ['Manual Testing', 'Automation Testing', 'Database Testing']
  },
  {
    title: 'DevOps Engineer',
    department: 'Operations',
    location: 'Remote',
    type: 'Full-time',
    experience: '2+ years',
    skills: ['CI/CD Pipelines', 'Cloud Platforms', 'Version Control']
  },
  {
    title: 'Client Acquisition',
    department: 'Sales Department',
    location: 'On-Site, Bidar',
    type: 'Full-time',
    experience: 'Fresher',
    skills: ['Sales Strategy', 'Presentation Skills', 'CRM Tools', 'Communication']
  }
];

const benefits = [
  {
    icon: Users,
    title: 'Collaborative Culture',
    description: 'Work with talented professionals in a supportive environment'
  },
  {
    icon: GraduationCap,
    title: 'Learning & Development',
    description: 'Continuous learning opportunities and professional growth'
  },
  {
    icon: Code,
    title: 'Latest Technology',
    description: 'Work with cutting-edge tools and technologies'
  },
  {
    icon: Cpu,
    title: 'Innovation Focus',
    description: 'Contribute to groundbreaking projects and solutions'
  }
];

export default function Careers() {
  // URL for the Google Form
  const formURL = "https://forms.gle/orJ29syJ474igJcZ9";

  // Function to open the form link
  const handleApplyNow = () => {
    window.open(formURL, "_blank"); // Opens in a new tab
  };

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
          <h1 className="text-4xl font-bold mb-6">Join Our Team</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Be part of a team that's shaping the future of technology. We're always
            looking for talented individuals to join our mission.
          </p>
        </motion.div>

        {/* Benefits Section */}
        <section className="mb-24">
          <h2 className="text-3xl font-bold text-center mb-12">Why Join Starset?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full">
                  <CardContent className="pt-6">
                    <benefit.icon className="h-12 w-12 text-primary mb-4" />
                    <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                    <p className="text-muted-foreground">{benefit.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Current Openings */}
        <section>
          <h2 className="text-3xl font-bold text-center mb-12">Current Openings</h2>
          <div className="space-y-6">
            {openings.map((job, index) => (
              <motion.div
                key={job.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card>
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle>{job.title}</CardTitle>
                        <CardDescription className="mt-2">
                          <div className="flex flex-wrap gap-4">
                            <span className="flex items-center gap-1">
                              <Briefcase className="h-4 w-4" />
                              {job.department}
                            </span>
                            <span className="flex items-center gap-1">
                              <MapPin className="h-4 w-4" />
                              {job.location}
                            </span>
                            <span className="flex items-center gap-1">
                              <Clock className="h-4 w-4" />
                              {job.type}
                            </span>
                          </div>
                        </CardDescription>
                      </div>
                      {/* Apply Now Button - opens Google Form in a new tab */}
                      <Button onClick={handleApplyNow}>
                        Apply Now
                        <Send className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold mb-2">Required Experience</h4>
                        <p className="text-muted-foreground">{job.experience}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Key Skills</h4>
                        <div className="flex flex-wrap gap-2">
                          {job.skills.map((skill) => (
                            <span
                              key={skill}
                              className="px-2 py-1 bg-primary/10 text-primary rounded-md text-sm"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
