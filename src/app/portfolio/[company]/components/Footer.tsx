import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  IoCallOutline,
  IoMailOutline,
} from "react-icons/io5";
import { FaFacebook, FaInstagramSquare } from "react-icons/fa";
import Accordion from "./FooterAccordion";

export default function Footer() {
  const company = [
    { name: "About", url: "/about-us" },
    { name: "Contact Us", url: "/contact-us" },
    // { name: "Careers", url: "/careers" },
    // { name: "Culture", url: "/culture" },
    // { name: "Blog", url: "/blog" },
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
  const servicesNew = [
    {
      title: "PMS",
      links: pms,
    },
    {
      title: "AIF",
      links: aif,
    },
  ];

  return (
    <footer className="text-gray-50 bg-black py-10 px-4 lg:px-10">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-7 lg:gap-10 mx-auto">
          <div className="w-full lg:col-span-2">
            <div className="mb-4">
              <Image
                src="/logofinal.png"
                width={200}
                height={70}
                alt="Wealth1"
                className="w-40 h-24"
              />
            </div>
            <div>
              <p className=" tracking-wide text-xs/7 text-gray-50 mt-4 lg:mb-2">
                Wealth1 is India’s leading platform for discovering top
                SEBI-registered PMS and AIF strategies. Powered by AI-driven
                insights and expert research, we help investors select
                risk-aligned portfolios with transparency, trust, and long-term
                focus.
              </p>
            </div>
          </div>

          <div className="lg:col-span-2">
            <h3 className="mb-3 text-lg uppercase text-[#B28C3D] font-semibold hidden lg:block">
              Services
            </h3>
            <Accordion sidebar={true} diffColor={true} services={servicesNew} />
          </div>

          <div>
            <h3 className="mb-5 text-lg uppercase text-[#B28C3D] font-semibold">
              Company
            </h3>
            <ul className="text-xs text-gray-50 space-y-3.5">
              {company &&
                company?.map((item, index) => (
                  <li key={index}>
                    <Link href={item.url} className="hover:text-gray-500">
                      {item.name}
                    </Link>
                  </li>
                ))}
            </ul>
          </div>

          {/* <div>
            <h3 className="mb-5 text-lg uppercase font-semibold">Support</h3>
            <ul className="text-xs text-gray-200 space-y-3.5">
              {support &&
                support?.map((item, index) => (
                  <li key={index}>
                    <Link href={item.url} className="hover:text-gray-500">
                      {item.name}
                    </Link>
                  </li>
                ))}
            </ul>
          </div> */}

          <div className="lg:col-span-2">
            <h3 className="mb-5 text-lg uppercase text-[#B28C3D] font-semibold">
              Contact Us
            </h3>
            <div>
              <Link
                href={"mailto:allabove@company.com"}
                className="text-xs mb-2 flex items-center"
              >
                <strong>
                  <IoMailOutline className="text-xl mr-2" />
                </strong>{" "}
                help@wealth1.com
              </Link>
              <Link
                href={"tel:+9855131158"}
                className="text-xs mb-2 flex items-center"
              >
                <strong>
                  <IoCallOutline className="text-xl mr-2" />
                </strong>{" "}
                {"+91 98551 31158"}
              </Link>
              <p className="flex items-center gap-4 pl-6">
                <Link
                  href={
                    "https://www.facebook.com/profile.php?id=61567180822428"
                  }
                  title="facebook"
                >
                  <FaFacebook className="text-2xl text-[#B28C3D]" />
                </Link>
                <Link
                  href={"https://www.instagram.com/aboveallagency"}
                  title="instagram"
                >
                  <FaInstagramSquare className="text-2xl text-[#B28C3D]" />
                </Link>
              </p>
            </div>
          </div>
        </div>
        <hr className="my-8 border-gray-50" />
        <div className="flex flex-col md:flex-row justify-between items-center text-xs text-gray-50">
          <div className="text-gray-50">
            © {new Date().getFullYear()} Wealth1. All rights reserved.
          </div>
          <div className="flex space-x-4 text-base mt-2 md:mt-0">
            <Link
              href="/terms-and-conditions"
              className="text-[#B28C3D] hover:underline"
            >
              Terms & Conditions
            </Link>
            <span className="hidden md:block">|</span>
            <Link
              href="/privacy-policy"
              className="text-[#B28C3D] hover:underline"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
