import { Hero } from "@/components/home/hero";
import { Solutions } from "@/components/home/solutions";
import { About } from "@/components/home/about";
import { Benefits } from "@/components/home/benefits";
import { Process } from "@/components/home/process";
import { Contact } from "@/components/home/contact";
import { Faq } from "@/components/home/faq";

export default function Page() {
  return (
    <main id="conteudo">
      <Hero />
      <Solutions />
      <About />
      <Benefits />
      <Process />
      <Contact />
      <Faq />
    </main>
  );
}
