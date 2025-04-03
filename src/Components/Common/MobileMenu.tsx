"use client";

import Link from "next/link";
import { IoIosMenu } from "react-icons/io";
import { useEffect, useState } from "react";
import Image from "next/image";
import Accordion from "./FooterAccordion";
import SocialMediaLinks from "./SocialMediaLinks";

export const MobileMenu = [
  { id: 1, label: "Privacy Policy", path: "/privacy-policy" },
  {
    id: 2,
    label: "Terms And Conditions",
    path: "/terms-and-conditions",
  },
];

const aboutus = [
  {
    label: "Why Wealth",
    image: "/assets/webdev.png",
    href: "/services/aboutus",
    id: "why-wealth", // Unique ID for submenu
  },
  {
    label: "Our Statement",
    image: "/assets/webdev.png",
    href: "/about/our-statement",
    id: "our-statemetn", // Unique ID for submenu
  },
  {
    label: "Team",
    image: "/assets/webdev.png",
    href: "/about/team",
    id: "team", // Unique ID for submenu
  },

  {
    label: "Media",
    image: "/assets/webdev.png",
    href: "/about/media",
    id: "media", // Unique ID for submenu
  },
];

const pms = [
  {
    label: "PMS Overview",
    image: "/assets/webdev.png",
    href: "/pms/pms-overview",
    id: "pms-overview", // Unique ID for submenu
  },
  {
    label: "FAQs",
    image: "/assets/webdev.png",
    href: "/pms/faqs",
    id: "faqs", // Unique ID for submenu
  },
  {
    label: "Product",
    image: "/assets/webdev.png",
    href: "/pms/product",
    id: "product", // Unique ID for submenu
  },

  {
    label: "Analytics",
    image: "/assets/webdev.png",
    href: "/pms/analatics",
    id: "analatics", // Unique ID for submenu
  },
  {
    label: "Stallion",
    image: "/assets/webdev.png",
    href: "/pms/stallion",
    id: "stallion", // Unique ID for submenu
  },
  {
    label: "INVasset",
    image: "/assets/webdev.png",
    href: "/pms/invassest",
    id: "invassest", // Unique ID for submenu
  },
];

const aif = [
  {
    label: "AIF Overview",
    image: "/assets/webdev.png",
    href: "/aif/aif-overview",
    id: "pms-overview", // Unique ID for submenu
  },
  {
    label: "FAQs",
    image: "/assets/webdev.png",
    href: "/ait/faqs",
    id: "faqs", // Unique ID for submenu
  },
  {
    label: "Product",
    image: "/assets/webdev.png",
    href: "/aif/product",
    id: "product", // Unique ID for submenu
  },

  {
    label: "Analytics",
    image: "/assets/webdev.png",
    href: "/aif/analatics",
    id: "analatics", // Unique ID for submenu
  },
];

const reports = [
  {
    label: "PMS Reports",
    image: "/assets/webdev.png",
    href: "/reports/pms-reports",
    id: "pms-reports", // Unique ID for submenu
  },
  {
    label: "AIF Reports",
    image: "/assets/webdev.png",
    href: "/aif/aif-reports",
    id: "aif-reports", // Unique ID for submenu
  },
  {
    label: "Magzine",
    image: "/assets/webdev.png",
    href: "/reports/magzine",
    id: "magzine", // Unique ID for submenu
  },
];

const events = [
  {
    label: "Physical Events",
    image: "/assets/webdev.png",
    href: "/events/physical-events",
    id: "physical-events", // Unique ID for submenu
  },

  {
    label: "Virtual Events",
    image: "/assets/webdev.png",
    href: "/events/virtual-events",
    id: "virtual-events", // Unique ID for submenu
  },
];

export const services = [
  {
    title: "About Us",
    link: aboutus,
  },
  {
    title: "PMS",
    links: pms,
  },
  {
    title: "AIF",
    links: aif,
  },
  {
    title: "Reports",
    links: reports,
  },
  {
    title: "Events",
    links: events,
  },
];

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Define menuItems with submenus for "Services" and "Industries"
  const menuItems = [
    { id: 1, name: "Home", path: "/" },
    // { id: 2, name: "About Us", path: "/about-us" },
    // { id: 3, name: "PMS", path: "/pms" },
    // { id: 4, name: "AID", path: "/aif" },
    // { id: 5, name: "Reports", path: "/reports" },
    // { id: 6, name: "Events", path: "/events" },
  ];

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"; // prevent overflow
    } else document.body.style.overflow = "scroll";
  }, [isOpen]);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <div className="relative ">
      <div
        className={`fixed top-[-20%] right-[-10%] h-full bg-gray-900 text-primary z-50 transform ${
          isOpen ? "w-[85%] md:w-3/4 right-0" : "w-0"
        } transition-all duration-500 ease-in-out`}
      >
        <div className="bg-gray-900 text-blue-900">
          <div className="flex p-3 shadow-md z-50 ">
            <Link href={"/"}>
              <Image
                src={"/logo.png"}
                width={140}
                height={60}
                unoptimized
                priority
                alt="Above All Agency"
                className="w-2/4 filter invert"
              />
            </Link>
            <p
              className="font-extrabold text-gray-50  text-2xl mr-10"
              onClick={toggleSidebar}
            >
              x
            </p>
          </div>
          <div className="p-4 pb-40 bg-gray-900 text-gray-50 overflow-auto h-screen">
            <Link
              href={"/"}
              aria-label={"Home"}
              onClick={handleLinkClick}
              className="relative text-lg font-medium inline-block py-3 border-b w-full border-white/20 cursor-pointer"
            >
              Home
            </Link>
            <Accordion
              sidebar={true}
              services={services}
              handleLinkClick={handleLinkClick}
            />
            {menuItems?.map((item: any) => (
              <div key={item.id} className="relative group">
                <Link
                  href={item.path}
                  aria-label={item.name}
                  onClick={handleLinkClick}
                  className="relative text-lg font-medium inline-block py-3 border-b w-full border-white/20 cursor-pointer"
                >
                  {item.name}
                </Link>
              </div>
            ))}
            <div className="py-4">
              <p className="pb-2">Follow us at:</p>
              <SocialMediaLinks size={30} />
            </div>
          </div>
        </div>
      </div>
      <IoIosMenu
        size={30}
        onClick={toggleSidebar}
        className="lg:hidden text-blue-900"
      />
      {isOpen && (
        <div
          onClick={toggleSidebar}
          className="fixed inset-0 bg-white opacity-50 z-40"
        ></div>
      )}
    </div>
  );
};

export default Sidebar;
