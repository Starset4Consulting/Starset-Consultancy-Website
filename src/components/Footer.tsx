import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Footer() {
  return (
    <footer className="bg-background border-t">
      <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
      <div className="flex justify-center space-x-6 md:order-2">
  <Button variant="ghost" size="icon" asChild>
    <a href="https://www.facebook.com/share/p/188YX3cv9h/" target="_blank" rel="noopener noreferrer">
      <Facebook className="h-5 w-5" />
    </a>
  </Button>
  <Button variant="ghost" size="icon" asChild>
    <a href="https://x.com/StarsetServices" target="_blank" rel="noopener noreferrer">
      <Twitter className="h-5 w-5" />
    </a>
  </Button>
  <Button variant="ghost" size="icon" asChild>
    <a href="https://www.linkedin.com/company/starset-consultancy-services/" target="_blank" rel="noopener noreferrer">
      <Linkedin className="h-5 w-5" />
    </a>
  </Button>
  <Button variant="ghost" size="icon" asChild>
    <a href="https://www.instagram.com/starset_consultancy/" target="_blank" rel="noopener noreferrer">
      <Instagram className="h-5 w-5" />
    </a>
  </Button>
</div>

        <div className="mt-8 md:order-1 md:mt-0">
          <Link to="/" className="flex items-center justify-center gap-2">
            <img 
              src="https://starset4consulting.github.io/Social-clients/Starset_Log-removebg-preview.png" 
              alt="Starset Logo" 
              className="h-[5.5rem] w-[5.5rem]"
            />
            <span className="font-bold text-lg">Starset Consultancy</span>
          </Link>
          <p className="mt-2 text-center text-xs leading-5 text-muted-foreground">
            &copy; {new Date().getFullYear()} Starset Consultancy Services. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
