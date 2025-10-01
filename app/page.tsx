import Image from "next/image";
import About from "./_components/About";
import Contact from "./_components/Contact";
import Projects from "./_components/Projects";
import Skills from "./_components/Skills";

export default function Home() {
  return (
    <>
      <section className="min-h-fit bg-black lg:min-h-screen mb-5 lg:mb-0 flex items-center justify-center" id="home">
        <div className="container mx-auto px-6 py-20">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="flex-1 text-center lg:text-left animate__animated animate__fadeInDown">
              <div className="mb-6">
                <p className="font-bold text-lg mb-2">QUEM SOU?</p>
                <h1 className="text-4xl lg:text-6xl font-bold mb-4">
                  Meu nome é <span className="font-bold text-blue-400">Gabriel</span>, e eu sou desenvolvedor web.
                </h1>
                <p className="text-xl text-muted-foreground max-w-2xl">
                  Sou um desenvolvedor web apaixonado por tecnologia, e atualmente estou focado em desenvolvimento web com
                  <span className="font-bold text-blue-400"> ReactJS</span> e <span className="font-bold text-blue-400">NextJS</span>.
                </p>
              </div>
            </div>
            <div className="flex-1 flex justify-center lg:justify-end">
              <div className="relative">
                <div className="relative w-56 h-56 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full flex items-center justify-center">
                  <Image
                    src="/assets/perfil.jpeg"
                    alt="Foto de perfil"
                    fill
                    className="rounded-full object-cover"
                  />
                </div>
                <div className="absolute top-[5%] right-[5%] w-10 h-10 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-white animate-pulse"></div>
                <div className="absolute bottom-[5%] left-[5%] w-8 h-8 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full bg-white animate-pulse delay-1000"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <About />
      <Projects />
      <Skills />
      <Contact />
    </>
  );
}
