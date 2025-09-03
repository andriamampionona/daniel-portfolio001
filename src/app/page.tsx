"use client"
import Apropos from "@/components/Apropos";
import Contact from "@/components/contact/contacter";
import Experiences from "@/components/experience/experience";
import HomePage from "@/components/home";
import { Particles } from "@/components/magicui/particles";
import Projects from "@/components/projets";
import MyServices from "@/components/services/page";


import { useActiveSection } from "../../hooks/useActiveSection";
import CompetencesSection from "@/components/competance/Competance";
import { useState } from "react";
import { Menu } from "lucide-react";


const navItems = [
  { href: "#accueil", label: "Accueil" },
  { href: "#apropos", label: "À propos" },
  { href: "#experiencess", label: "Expériences" },
  { href: "#competence", label: "Compétences" },
  { href: "#service", label: "Services" },
  { href: "#projets", label: "Projets" },
  { href: "#contact", label: "Contact" },
];
export default function Home() {

  const [mobil, setMobil] = useState(true);

  const mobile = () => {setMobil(!mobil)}

  


  const active = useActiveSection(navItems.map((item) => item.href.replace("#", ""))); 
  return (
    <>
    <div className="fixed overflow-visible w-full z-50 bg-secondary h-10 ">
         <nav className="">
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 hidden sm:flex">
            
             
{navItems.map(({ href, label }) => {
  const id = href.replace("#", "");
  const isActive = active === id;

  return (
    <a
      href={href}
      key={href}
      className={`px-3 py-2 text-sm font-medium he transition-all duration-300 ${
        isActive
          ? "text-primary border-b-2 border-primary"
          : "text-foreground hover:border-b-[1px] hover:border-primary"
      }`}
      aria-current={isActive ? 'page' : undefined}
    >
      {label}
    </a>
  );
})}
        
        </div>
        <div className="flex flex-row z-5000 bg-secondary w-1/3 backdrop-opacity-90">
        
          <Menu onClick={mobile} className="sm:hidden text-2xl mt-2 ml-2"></Menu>
          { mobil && <div id="mobile-menu" className="sm:hidden">
            <div className="space-y-1 px-2 pt-2 pb-3 flex flex-col h-screen">
               <a onClick={mobile} href="#accueil" aria-current="page" className=" border-b-[1px] border-primary px-3 py-2 text-sm font-medium text-white">Accueil</a>
                    <a onClick={mobile}  href="#apropos" className="px-3 py-2 text-sm font-medium text-foreground hover:border-b-[1px]  hover:border-primary animate-in">A propos</a>
                    <a onClick={mobile}  href="#experiencess" className="px-3 py-2 text-sm font-medium text-foreground hover:border-b-[1px]  hover:border-primary animate-in">Experiences</a>
                    <a onClick={mobile}  href="#competence" className=" px-3 py-2 text-sm font-medium text-foreground hover:border-b-[1px]  hover:border-primary animate-in">Compétences</a>
                    <a onClick={mobile}  href="#service" className=" px-3 py-2 text-sm font-medium text-foreground hover:border-b-[1px]  hover:border-primary animate-in">Mes service</a>
                    <a onClick={mobile}  href="#projets" className=" px-3 py-2 text-sm font-medium text-foreground hover:border-b-[1px]  hover:border-primary animate-in">Mes projets</a>
                    <a onClick={mobile}  href="#contact" className=" px-3 py-2 text-sm font-medium text-foreground hover:border-b-[1px]  hover:border-primary animate-in">Me contacter</a>
                   
            </div>
          </div>}
          </div>
        </nav>
    </div>
    
    <div className="flex flex-col items-center  min-h-screen  gap-20 p-5 sm:p-10 lg:p-20">
  
      <div className="absolute overflow-hidden h-svh w-full" >
        <Particles />
      </div>
     
      <main className="mt-15 flex flex-col gap-3 row-start-2 sm:items-start ">             
        
        <div id="accueil" className="min-h-screen w-full m-2 text-center sm:text-left md:text-left lg:text-left space-y-5">
          <HomePage/>
        </div>
        
        <div id="apropos" className=" animate-accordion-up pt-16 min-h-screen bg-blend-darken border-t-2  border-amber-50 w-full">
          <Apropos/>
        </div>
        
        
        <div id="experiencess" className=" animate-accordion-up pt-16 min-h-screen bg-blend-darken border-t-2  border-amber-50 w-full">
          <Experiences/>
          {/* <CompetencesSection/> */}
        </div>
        
        <div id="competence" className=" animate-accordion-up pt-16 min-h-screen bg-blend-darken border-t-2  border-amber-50 w-full">
          <CompetencesSection/>
        </div>
        
        

        
        <div id="service" className=" animate-accordion-up pt-16 min-h-screen bg-blend-darken border-t-2  border-amber-50 w-full">
          <MyServices/>
        </div>
        
        
        <div id="projets" className=" animate-accordion-up pt-16 min-h-screen bg-blend-darken border-t-2  border-amber-50 w-full">
          <Projects/>
        </div>
        
        <div id="contact" className=" animate-accordion-up pt-16 min-h-screen bg-blend-darken border-t-2  border-amber-50 w-full">
          <Contact/>
        </div>
        
        
                
       
        
      </main>
      <footer className="text-center items-center justify-center">
        
        <p>Copyright &copy;</p>
        <p>2025</p>
      </footer>
    </div>
  </>
  );
}
