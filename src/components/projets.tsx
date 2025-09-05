"use client"

import React, { useState } from "react";
import Image from "next/image";
import { TypingAnimation } from "./magicui/typing-animation";

import { Card, CardContent, CardHeader } from "./ui/card";
import { Database, JapaneseYen } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { motion } from "framer-motion";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: "easeOut" },
};

const hoverEffect = {
  scale: 1.03,
  transition: { type: "spring" as const, stiffness: 300 },
};

export default function Projects() {
  const [activeSlideHotel, setActiveSlideHotel] = useState(0);
  const [activeSlideGantt, setActiveSlideGantt] = useState(0);
  const [activeSlidePortfolio, setActiveSlidePortfolio] = useState(0);

  // Nombre d'images par carousel
  const hotelSlidesCount = 2;
  const ganttSlidesCount = 2;
  const portfolioSlidesCount = 2;

  // Fonction pour afficher les dots de pagination
  function PaginationDots({
    count,
    activeIndex,
    onChange,
  }: {
    count: number;
    activeIndex: number;
    onChange: (index: number) => void;
  }) {
    return (
      <div className="flex justify-center mt-2 space-x-2">
        {Array.from({ length: count }).map((_, idx) => (
          <button
            key={idx}
            aria-label={`Aller à la slide ${idx + 1}`}
            onClick={() => onChange(idx)}
            className={`w-3 h-3 rounded-full transition-colors ${
              idx === activeIndex ? "bg-blue-600" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    );
  }

  // Wrapper pour rendre les flèches plus visibles et stylisées
  function StyledCarousel(props: {
    value: number;
    onValueChange: (v: number) => void;
    children: React.ReactNode;
    slidesCount: number;
    className?: string;
  }) {
    const { value, onValueChange, children, slidesCount, className } = props;

    return (
      <div className={`${className ?? ""} relative`}>
        <Carousel>
          <CarouselContent>{children}</CarouselContent>
          <button
            aria-label="Slide précédente"
            onClick={() => onValueChange((value - 1 + slidesCount) % slidesCount)}
            className="absolute top-1/2 left-2 -translate-y-1/2 rounded-full bg-white bg-opacity-70 p-2 shadow hover:bg-opacity-100 transition"
          >
            ‹
          </button>
          <button
            aria-label="Slide suivante"
            onClick={() => onValueChange((value + 1) % slidesCount)}
            className="absolute top-1/2 right-2 -translate-y-1/2 rounded-full bg-white bg-opacity-70 p-2 shadow hover:bg-opacity-100 transition"
          >
            ›
          </button>
        </Carousel>
        <PaginationDots count={slidesCount} activeIndex={value} onChange={onValueChange} />
        <p className="text-center text-xs text-muted-foreground mt-1">
          Slide {value + 1} / {slidesCount}
        </p>
      </div>
    );
  }

  return (
    <div className="font-mono max-w-7xl mx-auto px-6 py-10 flex flex-col gap-8" >
      
      
      <TypingAnimation className="text-2xl text-center sm:text-left lg:text-6xl md:text-5xl sm:text-4xl font-[family-name:var(--font-geist-sans)]">
        Mes projets
      </TypingAnimation>

      <div className="flex flex-col gap-12">
        {/* Projet 1 - Hotel */}
        <motion.div
          className="flex flex-col lg:flex-row border-2 border-card rounded-3xl p-5 gap-6 cursor-pointer"
          initial="initial"
          animate="animate"
          variants={fadeUp}
          whileHover={hoverEffect}
        >
          <div className="relative w-full lg:w-1/2 h-64 lg:h-auto rounded-2xl overflow-hidden shadow-md">
            <h2 className="text-2xl font-mono mb-4">Gestion d’Hôtel</h2>
            <StyledCarousel
              value={activeSlideHotel}
              onValueChange={setActiveSlideHotel}
              slidesCount={hotelSlidesCount}
              className="rounded-2xl overflow-hidden h-full"
            >
              <CarouselItem>
                <Image
                  src="/hotel.png"
                  alt="Gestion d'hôtel"
                  width={800}
                  height={450}
                  className="object-cover rounded-2xl"
                  priority
                />
              </CarouselItem>
              <CarouselItem>
                <Image
                  src="/hotel2.png"
                  alt="Gestion d'hôtel 2"
                  width={800}
                  height={450}
                  className="object-cover rounded-2xl"
                />
              </CarouselItem>
            </StyledCarousel>
          </div>

          <Card className="w-full lg:w-1/2 flex flex-col justify-center p-6 shadow-lg">
            <CardHeader className="text-sm font-semibold">⛩️ 🏢 Hotel management 🏢 ⛩️</CardHeader>
            <CardContent className="text-xs text-muted-foreground leading-relaxed">
              <p>👉👉🏿 C’est une application pour la gestion fluide d’un hôtel.</p>
              <p>
                Le système permet aux responsables de suivre facilement les réservations clients. Les données sont centralisées sur Neon Database, et la communication client est facilitée par
                l’emailing.
              </p>
              <p>
                Cette application a été développée avec Next.js et Spring Boot (RESTful API). Elle est hébergée sur Vercel.
              </p>
            </CardContent>
          </Card>
        </motion.div>

        {/* Projet 2 - GANTT */}
        <motion.div
          className="flex flex-col lg:flex-row border-2 border-card rounded-3xl p-5 gap-6 cursor-pointer"
          initial="initial"
          animate="animate"
          variants={fadeUp}
          transition={{ delay: 0.1 }}
          whileHover={hoverEffect}
        >
          <div className="w-full lg:w-1/2 rounded-2xl shadow-md overflow-hidden">
            <h2 className="text-2xl font-mono mb-4">Ordonnancement des tâches (GANTT)</h2>
            <StyledCarousel
              value={activeSlideGantt}
              onValueChange={setActiveSlideGantt}
              slidesCount={ganttSlidesCount}
              className="m-6 rounded-2xl overflow-hidden"
            >
              <CarouselItem>
                <Image
                  src="/gantt1.png"
                  alt="Diagramme GANTT 1"
                  width={800}
                  height={450}
                  className="rounded-2xl"
                  priority
                />
              </CarouselItem>
              <CarouselItem>
                <Image
                  src="/gantt2.png"
                  alt="Diagramme GANTT 2"
                  width={800}
                  height={450}
                  className="rounded-2xl"
                />
              </CarouselItem>
            </StyledCarousel>
          </div>

          <Card className="w-full lg:w-1/2 flex flex-col justify-center p-6 shadow-lg">
            <CardHeader className="text-sm font-semibold">🪡➕ Ordonnancement des tâches (GANTT)</CardHeader>
            <CardContent className="text-xs text-muted-foreground leading-relaxed space-y-4">
              <p>C’est une application de recherche opérationnelle.</p>
              <p>
                Le système aide les chefs de projets à organiser leurs tâches en leur permettant de connaître la date de fin prévue.
              </p>
              <p className="flex items-center gap-2">
                <JapaneseYen />
                Ce projet a été conçu avec Next.js pour le frontend et Flask (Python) pour le backend.
              </p>
              <p className="flex items-center gap-2">
                <Database />
                PostgreSQL est utilisé pour le stockage des données.
              </p>
            </CardContent>
          </Card>
        </motion.div>

        {/* Projet 3 - Portfolio */}
        <motion.div
          className="flex flex-col lg:flex-row border-2 border-card rounded-3xl p-5 gap-6 cursor-pointer"
          initial="initial"
          animate="animate"
          variants={fadeUp}
          transition={{ delay: 0.2 }}
          whileHover={hoverEffect}
        >
          <div className="w-full lg:w-1/2 rounded-2xl shadow-md overflow-hidden">
            <h2 className="text-2xl font-mono mb-4">Daniel Nomenjanahary Portfolio</h2>
            <StyledCarousel
              value={activeSlidePortfolio}
              onValueChange={setActiveSlidePortfolio}
              slidesCount={portfolioSlidesCount}
              className="m-6 rounded-2xl overflow-hidden"
            >
              <CarouselItem>
                <Image
                  src="/portfolio-daniel.png"
                  alt="Portfolio Daniel Nomenjanahary"
                  width={800}
                  height={450}
                  className="rounded-2xl"
                  priority
                />
              </CarouselItem>
              <CarouselItem>
                <Image
                  src="/portfolio2.png"
                  alt="Portfolio Daniel Nomenjanahary"
                  width={800}
                  height={450}
                  className="rounded-2xl"
                />
              </CarouselItem>
            </StyledCarousel>
          </div>

          <Card className="w-full lg:w-1/2 flex flex-col justify-center p-6 shadow-lg">
            <CardHeader className="text-sm font-semibold">🪡➕ Daniel Nomenjanahary Portfolio</CardHeader>
            <CardContent className="text-xs text-muted-foreground leading-relaxed space-y-4">
              <p>C’est mon propre site web.</p>
              <p>Ce site a été conçu avec Next.js v15 et déployé sur Vercel.</p>
              <p className="flex items-center gap-2">
                <JapaneseYen />
                Ce site web a été conçu avec Next.js v15 et déployé sur Vercel.
              </p>
            </CardContent>
          </Card>
        </motion.div>


      </div>
    </div>
  );
}
