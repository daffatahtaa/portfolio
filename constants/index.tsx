import { CiFaceSmile } from "react-icons/ci";
import { FaFileArchive, FaHome } from "react-icons/fa";
import { SiAboutdotme } from "react-icons/si";
import { TbMailFast } from "react-icons/tb";

export const navLink = [
  {
    name: "Home",
    link: "/",
    icon: <FaHome />,
  },
  {
    name: "About",
    link: "#about",
    icon: <SiAboutdotme />,
  },
  {
    name: "Projects",
    link: "#projects",
    icon: <FaFileArchive />,
  },
  {
    name: "Testimonials",
    link: "#testimonials",
    icon: <CiFaceSmile />,
  },
  {
    name: "Contact",
    link: "#contact",
    icon: <TbMailFast />,
  },
];
