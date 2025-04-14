"use client";
import React from "react";
import { motion } from "framer-motion";
import { GoGraph } from "react-icons/go";
import { LuShieldHalf } from "react-icons/lu";
import { PiBriefcaseLight } from "react-icons/pi";

type InsightItem = {
  icon: string;
  value: string;
  label: string;
};


type FundInsightProps = {
  title?: string;
  data: InsightItem[];
  teamMembers?: any; // CHANGED from singular to array
  iconMap?: Record<string, React.ElementType>;
  containerClass?: string;
  cardClass?: string;
  iconBgClass?: string;
  iconColorClass?: string;
  titleClass?: string;
};

const defaultIconMap: Record<string, React.ElementType> = {
  briefcase: PiBriefcaseLight,
  calendar: LuShieldHalf,
  graph: GoGraph,
};

const FundInsight: React.FC<FundInsightProps> = ({
  title = "Fund Manager’s Philosophy",
  data,
  teamMembers = [], // Default empty array
  iconMap = defaultIconMap,
  containerClass = "max-w-7xl m-auto p-4 lg:p-16",
  cardClass = "rounded-2xl m-auto shadow border-l-4 border-gray-300 border border-l-[#B28C3D] p-6",
  iconBgClass = "bg-[#B28C3D]/10 p-2",
  iconColorClass = "text-[#B28C3D]",
  titleClass = "text-3xl font-semibold text-[#0A2B58] mb-4",
}) => {


  const getInitialsFromTitle = (title: any) => {
    if (!title) return "AG";
    return title
      .split(" ")
      .map((word: any) => word[0])
      .join("")
      .toUpperCase();
  };

console.log(teamMembers)
  return (
    <div className={containerClass}>
      <motion.div
        className={cardClass}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.4 }}
      >
        <h3 className={titleClass}>{title}</h3>

        <div>
          {data.map((item, index) => {
            const Icon = iconMap[item.icon];
            return (
              <motion.div
                key={index}
                className="p-4 w-full h-auto flex items-start justify-start gap-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: false }}
              >
                <div className={`rounded-full ${iconBgClass}`}>
                  {Icon && <Icon className={`text-3xl ${iconColorClass}`} />}
                </div>
                <div className="text-left w-full">
                  <h2 className="text-lg text-[#0A2B58] mb-2 font-semibold">
                    {item.value}
                  </h2>
                  <p className="text-sm text-gray-500 w-full lg:w-4/5">
                    {item.label}
                  </p>
                </div>
              </motion.div>
            );
          })}

          {/* Team Members Grid */}
          {teamMembers?.length > 0 && (
            <>
              <hr className="my-4 border-gray-300" />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {teamMembers.map((member:any, idx:any) => (
                  <motion.div
                    key={idx}
                    className="p-4 w-full h-auto flex items-center justify-start gap-4"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    viewport={{ once: false }}
                  >
                    <div className="flex justify-center items-center h-14 w-16 p-2 text-[#B28C3D] text-2xl rounded-full bg-[#B28C3D]/10">
                      {member.initials}{getInitialsFromTitle(member?.title)}
                    </div>
                    <div className="text-left w-full">
                      <h2 className="text-lg text-[#0A2B58] mb-2 font-semibold">
                        {member.title}
                      </h2>
                      <p className="text-sm text-gray-500 w-full lg:w-4/5">
                        {member.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default FundInsight;
