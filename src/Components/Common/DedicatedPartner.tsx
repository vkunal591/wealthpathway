import React from "react";
import { FaUserGroup } from "react-icons/fa6";
import { GrSecure } from "react-icons/gr";
import { GoGoal } from "react-icons/go";

export default function DedicatedPartner() {
  return (
    <div className="max-w-8xl m-auto p-4 lg:p-16">
      <div className="flex flex-col items-start w-full m-auto">
        <div className="w-full">
          <p className="text-sm text-gray-500 mb-2 font-semibold text-center">
            Why Choose PMS with Wealth1
          </p>
          <h2 className="text-3xl lg:text-4xl font-semibold  text-blue-900 mr-auto text-center mb-4 ">
            Dedicated client partners you can trust
          </h2>
          <p className="text-base text-gray-500 mb-8 font-semibold text-center w-full">
            Experience the evolution of sophisticated investing with
            Wealth1\&apos;s PMS and AIF solutions
          </p>
        </div>
        <ul className=" w-full lg:w-4/5 m-auto text-blue-900 grid grid-cols-1 lg:grid-cols-2 gap-0 mb-16">
          <li className="flex flex-col items-center text-xl gap-2 font-semibold">
            <span className="w-32 h-32 flex items-center justify-center font-semibold text-2xl rounded-full relative border-4 border-double border-gray-900 bg-white">
              {/* <span className="inlne-block w-[1px] h-10 bg-gray-500 absolute left-1.5 top-9 rounded-full"></span> */}
              1.9L+
            </span>
            PMS
            <p className="text-sm text-gray-500 mb-2 font-semibold text-center relative">
              Investors in India
            </p>
          </li>
          <li className="flex flex-col items-center text-xl gap-2 font-semibold">
            <span className="w-32 h-32 flex items-center justify-center font-semibold text-2xl rounded-full relative border-4 border-double border-gray-900 bg-white">
              {/* <span className="inlne-block w-[1px] h-10 bg-gray-500 absolute left-1.5 top-9 rounded-full"></span> */}
              ₹36.6L
            </span>
            Cr
            <p className="text-sm text-gray-500 mb-2 font-semibold text-center relative">
              Assets Under Management
            </p>
          </li>
        </ul>

        <ul className=" w-full lg:w-4/5 m-auto mb-4 text-blue-900 grid grid-cols-1 lg:grid-cols-3 gap-16">
          <li className="flex flex-col items-center text-xl gap-2 font-semibold">
            <span className="w-32 h-32 flex items-center justify-center font-semibold text-6xl rounded-full relative border-4 border-double border-gray-900 bg-white">
              {/* <span className="inlne-block w-[1px] h-10 bg-gray-500 absolute left-1.5 top-9 rounded-full"></span> */}
              <FaUserGroup />
            </span>
            Personalization
            <p className="text-sm text-gray-500 mb-2 font-semibold text-center relative">
              Tailored portfolios that align with your goals, risk appetite, and
              time horizon
            </p>
          </li>
          <li className="flex flex-col items-center text-xl gap-2 font-semibold">
            <span className="w-32 h-32 flex items-center justify-center font-semibold text-6xl rounded-full relative border-4 border-double border-gray-900 bg-white">
              {/* <span className="inlne-block w-[1px] h-10 bg-gray-500 absolute left-1.5 top-9 rounded-full"></span> */}
              <GrSecure />
            </span>
            Security & Transparency
            <p className="text-sm text-gray-500 mb-2 font-semibold text-center relative">
              Highly regulated with assets ring-fenced by custodians and
              stringent governance
            </p>
          </li>
          <li className="flex flex-col items-center text-xl gap-2 font-semibold">
            <span className="w-32 h-32 flex items-center justify-center font-semibold text-6xl rounded-full relative border-4 border-double border-gray-900 bg-white">
              {/* <span className="inlne-block w-[1px] h-10 bg-gray-500 absolute left-1.5 top-9 rounded-full"></span> */}
              <GoGoal />
            </span>
            Aligned Interests
            <p className="text-sm text-gray-500 mb-2 font-semibold text-center relative">
              High-conviction strategies executed by dedicated experts focused
              on long-term wealth creation
            </p>
          </li>
        </ul>
      </div>

      {/* <ClientProfileCard /> */}
    </div>
  );
}

// "use client";
// import React, { useRef } from "react";
// import { motion, useScroll, useTransform } from "framer-motion";
// import { FaUserGroup } from "react-icons/fa6";
// import { GrSecure } from "react-icons/gr";
// import { GoGoal } from "react-icons/go";

// export default function DedicatedPartner() {
//   const ref = useRef(null);
//   const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });

//   // Animate circle size based on scroll
//   const circleSize = useTransform(scrollYProgress, [0, 1], ["8rem", "10rem"]);
//   const opacity = useTransform(scrollYProgress, [0, 1], [0.5, 1]);

//   return (
//     <div ref={ref} className="max-w-8xl m-auto p-4 lg:p-16">
//       <div className="flex flex-col items-start w-full m-auto">
//         <div className="w-full">
//           <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, ease: "easeOut" }}
//             className="text-sm text-gray-500 mb-2 font-semibold text-center"
//           >
//             Why Choose PMS with Wealth1
//           </motion.p>

//           <motion.h2
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 1, ease: "easeOut" }}
//             className="text-3xl lg:text-4xl font-semibold text-blue-900 text-center mb-4"
//           >
//             Dedicated client partners you can trust
//           </motion.h2>

//           <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 1.2, ease: "easeOut" }}
//             className="text-base text-gray-500 mb-8 font-semibold text-center w-full"
//           >
//             Experience the evolution of sophisticated investing with Wealth1&apos;s PMS and AIF solutions
//           </motion.p>
//         </div>

//         {/* First Row */}
//         <ul className="w-full lg:w-4/5 m-auto grid grid-cols-1 lg:grid-cols-2 gap-6 mb-16">
//           {["1.9L+", "₹36.6L"].map((text, index) => (
//             <motion.li
//               key={index}
//               initial={{ opacity: 0, scale: 0.8 }}
//               animate={{ opacity: 1, scale: 1 }}
//               transition={{ duration: 0.8, delay: index * 0.2, ease: "easeOut" }}
//               className="flex flex-col items-center text-xl gap-2 font-semibold"
//             >
//               <motion.span
//                 style={{ width: circleSize, height: circleSize, opacity }}
//                 className="flex items-center justify-center font-semibold text-2xl rounded-full relative border-4 border-double border-gray-900 bg-white"
//               >
//                 {text}
//               </motion.span>
//               <p className="text-sm text-gray-500 mb-2 font-semibold text-center relative">
//                 {index === 0 ? "Investors in India" : "Assets Under Management"}
//               </p>
//             </motion.li>
//           ))}
//         </ul>

//         {/* Second Row */}
//         <ul className="w-full lg:w-4/5 m-auto grid grid-cols-1 lg:grid-cols-3 gap-16">
//           {[
//             { icon: <FaUserGroup />, title: "Personalization", desc: "Tailored portfolios that align with your goals, risk appetite, and time horizon" },
//             { icon: <GrSecure />, title: "Security & Transparency", desc: "Highly regulated with assets ring-fenced by custodians and stringent governance" },
//             { icon: <GoGoal />, title: "Aligned Interests", desc: "High-conviction strategies executed by dedicated experts focused on long-term wealth creation" },
//           ].map((item, index) => (
//             <motion.li
//               key={index}
//               initial={{ opacity: 0, scale: 0.8 }}
//               whileInView={{ opacity: 1, scale: 1 }}
//               transition={{ duration: 0.8, delay: index * 0.2, ease: "easeOut" }}
//               viewport={{ once: true }}
//               className="flex flex-col items-center text-xl gap-2 font-semibold"
//             >
//               <motion.span
//                 style={{ width: circleSize, height: circleSize, opacity }}
//                 className="flex items-center justify-center font-semibold text-6xl rounded-full relative border-4 border-double border-gray-900 bg-white"
//               >
//                 {item.icon}
//               </motion.span>
//               {item.title}
//               <p className="text-sm text-gray-500 mb-2 font-semibold text-center relative">
//                 {item.desc}
//               </p>
//             </motion.li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// }
