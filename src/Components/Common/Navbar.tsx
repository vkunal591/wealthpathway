"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import Sidebar from "./MobileMenu";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { usePathname } from "next/navigation";

const aboutus = [
  {
    name: "Why Wealth1",
    image: "/assets/webdev.png",
    path: "/why-wealth",
    id: "why-wealth", // Unique ID for submenu
  },
  {
    name: "Our Statement",
    image: "/assets/webdev.png",
    path: "/our-statement",
    id: "our-statemetn", // Unique ID for submenu
  },
  {
    name: "Team",
    image: "/assets/webdev.png",
    path: "/team",
    id: "team", // Unique ID for submenu
  },

  {
    name: "Media",
    image: "/assets/webdev.png",
    path: "/about/media",
    id: "media", // Unique ID for submenu
  },
];

const pms = [
  {
    name: "PMS Overview",
    image: "/assets/webdev.png",
    path: "/pms/pms-overview",
    id: "pms-overview", // Unique ID for submenu
  },
  {
    name: "FAQs",
    image: "/assets/webdev.png",
    path: "/pms/faqs",
    id: "faqs", // Unique ID for submenu
  },
  {
    name: "Product",
    image: "/assets/webdev.png",
    path: "/pms/product",
    id: "product", // Unique ID for submenu
  },

  {
    name: "Analytics",
    image: "/assets/webdev.png",
    path: "/pms/analatics",
    id: "analatics", // Unique ID for submenu
  },
  {
    name: "Stallion",
    image: "/assets/webdev.png",
    path: "/pms/stallion",
    id: "stallion", // Unique ID for submenu
  },
  {
    name: "INVasset",
    image: "/assets/webdev.png",
    path: "/pms/invassest",
    id: "invassest", // Unique ID for submenu
  },
];

const aif = [
  {
    name: "AIF Overview",
    image: "/assets/webdev.png",
    path: "/aif/aif-overview",
    id: "pms-overview", // Unique ID for submenu
  },
  {
    name: "FAQs",
    image: "/assets/webdev.png",
    path: "/ait/faqs",
    id: "faqs", // Unique ID for submenu
  },
  {
    name: "Product",
    image: "/assets/webdev.png",
    path: "/aif/product",
    id: "product", // Unique ID for submenu
  },

  {
    name: "Analytics",
    image: "/assets/webdev.png",
    path: "/aif/analatics",
    id: "analatics", // Unique ID for submenu
  },
];

const reports = [
  {
    name: "PMS Reports",
    image: "/assets/webdev.png",
    path: "/reports/pms-reports",
    id: "pms-reports", // Unique ID for submenu
  },
  {
    name: "AIF Reports",
    image: "/assets/webdev.png",
    path: "/aif/aif-reports",
    id: "aif-reports", // Unique ID for submenu
  },
  {
    name: "Magzine",
    image: "/assets/webdev.png",
    path: "/reports/magzine",
    id: "magzine", // Unique ID for submenu
  },
];

const events = [
  {
    name: "Physical Events",
    image: "/assets/webdev.png",
    path: "/events/physical-events",
    id: "physical-events", // Unique ID for submenu
  },

  {
    name: "Virtual Events",
    image: "/assets/webdev.png",
    path: "/events/virtual-events",
    id: "virtual-events", // Unique ID for submenu
  },
];

export default function Navbar() {
  const [scrollingDown, setScrollingDown] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const controls = useAnimation();
  const pathname = usePathname(); // Get current route
  const [activeSubmenuId, setActiveSubmenuId] = useState<string | null>(null); // Track active submenu by ID

  const handleMouseEnter = (submenuId: string) => {
    setActiveSubmenuId(submenuId); // Set the submenu as active on hover
  };

  const handleMouseLeave = () => {
    setTimeout(() => {
      setActiveSubmenuId(null); // Reset the active submenu when mouse leaves
    }, 500);
  };

  const handleClick = (submenuId: string) => {
    // Toggle submenu visibility on click (open if closed, close if already open)
    setActiveSubmenuId((prev) => (prev === submenuId ? null : submenuId));
  };

  // Define menuItems with submenus for "Services" and "Industries"
  const menuItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about-us", submenu: aboutus },
    { name: "PMS", path: "/pms", submenu: pms },
    {
      name: "AIF",
      path: "/aif",
      submenu: aif,
    },
    { name: "Reports", path: "/reports", submenu: reports },
    { name: "Events", path: "/events", submenu: events },
  ];

  const handleLinkClick = () => setActiveSubmenuId(null);

  const handleScroll = () => {
    if (typeof window !== "undefined") {
      const currentScrollY = window.scrollY;

      // Detect scroll direction
      if (currentScrollY > lastScrollY) {
        setScrollingDown(true);
      } else {
        setScrollingDown(false);
      }

      // Update last scroll position
      setLastScrollY(currentScrollY);
    }
  };

  useEffect(() => {
    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  useEffect(() => {
    if (scrollingDown) {
      controls.start({ opacity: 0, transition: { duration: 0.3 } });
    } else {
      controls.start({ opacity: 1, transition: { duration: 0.3 } });
    }
  }, [scrollingDown, controls]);

  return (
    <motion.nav
      className="flex items-center justify-between bg-[#ededede8] z-[5000] shadow-xl text-green-50 w-11/12 m-auto p-4 rounded-xl fixed left-1/2 -translate-x-1/2 top-7"
      animate={controls}
    >
      <div className="w-1/2 lg:w-1/5 flex items-center justify-start">
        <Link href={"/"}>
          <Image
            src={"/logofinal.png"}
            width={150}
            height={70}
            unoptimized
            priority
            alt="PMS & AIF Investments"
            className="h-16 lg:h-auto "
          />
        </Link>
      </div>
      <div className="w-3/5 items-center justify-between gap-4 hidden lg:flex">
        <ul className="hidden max-w-6xl lg:flex justify-between items-center gap-8 text-blue-900">
          {menuItems?.map((item) => (
            <div
              key={item.name}
              className="relative group"
              onMouseEnter={() => handleMouseEnter(item.name)} // Hover behavior
            >
              <Link href={item.path} className="border-none outline-none">
                <li
                  className={`m-auto text-lg hover:text-gray-900  transition-all ease-in-out ${
                    pathname === item.path
                      ? "border-b-4 border-blue-900 text-blue-900 font-bold"
                      : "text-gray-700 hover:text-gray-900 transition duration-200"
                  }`}
                  onClick={(e: any) => {
                    if (item?.submenu) e?.preventDefault(); // Prevent link navigation to enable click behavior
                    handleClick(item?.name); // Toggle submenu on click
                  }}
                >
                  {item.name}
                </li>
              </Link>

              {/* Submenu */}
              {item.submenu && (
                <div
                  className={`absolute top-20 left-[-15rem] w-[35vw] mt-2 rounded-2xl bg-gray-50 text-blue-900 shadow-lg ${
                    activeSubmenuId === item.name ? "block" : "hidden"
                  }`}
                  onMouseLeave={handleMouseLeave} // Reset on mouse leave
                >
                  <ul className="space-y-2 p-2 grid grid-cols-1 lg:grid-cols-2">
                    {item?.submenu?.map((subItem: any) => (
                      <li key={subItem.id}>
                        <Link
                          href={subItem.path}
                          onClick={handleLinkClick}
                          className={`px-4 py-2 text-base ${
                            pathname == "/pms/invassest"
                              ? "text-[#0A2B58]"
                              : "text-gray-700"
                          } rounded-xl hover:bg-gray-200 flex justify-start items-center gap-4`}
                        >
                          {/* <span className="text-3xl rounded-full p-3 group-hover:bg-white">
                            <Image
                              src={subItem?.image}
                              width={50}
                              height={50}
                              alt="Icon"
                              className="w-7 h-7 filter invert"
                            />
                          </span> */}
                          {subItem.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </ul>
      </div>
      <div className="w-1/2 lg:w-2/5 flex justify-end lg:justify-center items-center">
        <Link
          href={"/"}
          className="w-1/3 hidden text-gray-700 hover:text-gray-900 lg:inline-block"
        >
          Member Login
        </Link>

        <motion.div
          whileHover={{
            scale: 1.1,
            boxShadow: "0px 5px 15px gray",
          }}
          whileTap={{ scale: 0.95 }}
          className="rounded-full"
        >
          <Link
            href={"/"}
            className={`p-3 lg:px-8 font-bold text-center hidden lg:flex text-base ${
              pathname === "/pms/invassest" ? "bg-[#B28C3D]" : "bg-blue-950"
            } text-gray-50 rounded-full items-center justify-center transition-all`}
          >
            Contact Us
            <IoIosArrowRoundForward className="text-2xl font-extrabold hidden lg:inline-block" />
          </Link>
        </motion.div>
        <Sidebar />
      </div>
    </motion.nav>
  );
}
