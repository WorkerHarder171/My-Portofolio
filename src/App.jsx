import Navbar from "@/components/navigation/Navbar";
import Jumbotron from "@/components/section/Jumbotron";
import About from "@/components/section/About";
import Experience from "@/components/section/Experience";
import Project from "@/components/section/Project";

export default function App() {
  return (
    <div className="bg-[#151817]">
      <Navbar />
      <Jumbotron />
      <About />
      <Experience />
      <Project />
    </div>
  );
}
