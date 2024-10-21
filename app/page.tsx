import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import RecentProjects from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/FloatingNavBar";
import { navLink } from "@/constants";
import Image from "next/image";
import Contacts from "../components/Contact";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav className="" navItems={navLink}/>
        <Hero />
        <Grid />
        <RecentProjects />
        <Contacts />
      </div>
    </main>
  );
}
