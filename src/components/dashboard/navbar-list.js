import { MdDashboard } from "react-icons/md";
import { GoHome } from "react-icons/go";
import { RiHome3Line } from "react-icons/ri";

const items = [
  {
    link: "/dashboard",
    icon: <MdDashboard className="h-5 w-5 mr-1" />,
    text: "Inicio",
  },
  {
    link: "/dashboard/areas",
    icon: <GoHome className="h-5 w-5 mr-1" />,
    text: "Areas",
  },
  {
    link: "/dashboard/departments",
    icon: <RiHome3Line className="h-5 w-5 mr-1" />,
    text: "Departamentos",
  },
];

export default items;
