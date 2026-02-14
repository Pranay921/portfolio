
import { Footer } from '@/components/layout/Footer';
import { Header } from '@/components/layout/Header';
import { About } from '@/components/sections/About';


import { Hero } from '@/components/sections/Hero';
import { Mission } from '@/components/sections/Mission';
import { Portfolio, projectsData } from '@/components/sections/Portfolio';
import { Services } from '@/components/sections/Services';
import { Skills } from '@/components/sections/Skills';


import { LanguageProvider } from '@/contexts/LanguageContext';
import { ThemeProvider } from '@/contexts/ThemeContext';

const Index = () => {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <div className="min-h-screen">
          <Header />
          <main>
            <Hero />
            <About />
            <Mission />
            <Skills />

            <Portfolio />
            <Services />


          </main>
          <Footer />
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
};

export default Index;
