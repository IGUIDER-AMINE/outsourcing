import Banner from "@/components/home/Banner";
import About from "@/components/home/About";
import Testimonials from "@/components/home/Testimonials";
import Accordions from "@/components/accordion/Accordions";

export default function Home() {
  return (
    <main className="">
      <Banner />
      <About />
      <Testimonials />
      <Accordions />
    </main>
  );
}
