import { IconCloudDemo } from "@/components/icons";
import { AuroraText } from "@/components/magicui/aurora-text";
import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button";
// import { ShimmerButton } from "@/components/magicui/shimmer-button";
import { TypingAnimation } from "@/components/magicui/typing-animation";


import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        
        <div className="sm:flex-row  flex flex-col gap-4 items-center justify-between w-full max-w-3xl">
          <div className="">
            <h1 className="text-4xl font-bold tracking-tighter md:text-5xl lg:text-7xl">
              Daniel <AuroraText>Nomenjanahary</AuroraText>
            </h1>
  
            <TypingAnimation className="sm:text-2xl text-white">Developpeur web full-stack</TypingAnimation>
          </div>
          <div className="">
            <Image 
              className="rounded-full"
              alt="Daniel Nomenjanahary"
              src={"/daniel-001.png"}
              width={300}
              height={300}
            />
          </div>
          
        </div>
        <div className="">
            <InteractiveHoverButton>Contactez-moi</InteractiveHoverButton>
          </div>
        
        

       
       
        <IconCloudDemo></IconCloudDemo>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
