import type { Metadata } from "next";
import "./globals.css";
 import { ThemeProvider } from "@/components/theme-provider"


export const metadata: Metadata = {
  title: "Daniel Nomenjanahary | Devélopeur NextJS Junior",
  description: "Un developpeur web fullstack , Ingénieur en Informatique de Ecole Nationale d'Informatique (ENI) , Université de Fianarantsoa Madagascar | daniel nomenjanahary portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
    <html lang="en" suppressHydrationWarning>
      <body
        className={`antialiased`}
      >
        <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
      </body>
    </html>
    </>
  );
}
