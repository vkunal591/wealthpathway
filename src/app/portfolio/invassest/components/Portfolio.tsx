"use client";
import React from "react";
import { motion } from "framer-motion";
import { FiBriefcase } from "react-icons/fi";
import { GoGraph } from "react-icons/go";
import { LuBuilding, LuUsersRound } from "react-icons/lu";

type CompositionItem = {
  label: string;
  value: string;
};

type SectorItem = {
  icon: string;
  value: string;
};

type PortfolioProps = {
  title?: string;
  subtitle?: string;
  compositionTitle?: string;
  compositionContent?: CompositionItem[];
  sectorTitle?: string;
  sectorContent?: SectorItem[];
  note?: string;
  iconMap?: Record<string, React.ElementType>;
  containerClass?: string;
  cardClass?: string;
  headerClass?: string;
  barColorClass?: string;
  iconBgClass?: string;
  iconColorClass?: string;
};

const defaultIconMap: Record<string, React.ElementType> = {
  briefcase: LuBuilding,
  calendar: FiBriefcase,
  graph: LuUsersRound,
  chartPie: GoGraph,
};

const Portfolio: React.FC<PortfolioProps> = ({
  title = "Portfolio Allocation",
  subtitle = "INVasset PMS invests in a balanced mix of industry leaders and emerging monopolies to ensure sustainable returns.",
  compositionTitle = "Portfolio Composition",
  compositionContent = [],
  sectorTitle = "Sector Allocation",
  sectorContent = [],
  note = "*Stock selection based on 170+ algorithmic filters across technical, fundamental, and sentiment metrics.",
  iconMap = defaultIconMap,
  containerClass = "max-w-7xl m-auto p-4 lg:p-16",
  cardClass = "shadow-lg border py-4 pb-8 border-gray-300 rounded-2xl",
  headerClass = "text-xl font-semibold text-gray-800",
  barColorClass = "bg-[#B28C3D]",
  iconBgClass = "bg-[#B28C3D]/10 p-1.5",
  iconColorClass = "text-[#B28C3D]",
}) => {
  return (
    <div className={containerClass}>
      <h2 className="capitalize text-3xl text-center font-bold text-[#0A2B58] mb-4">
        {title}
      </h2>
      <p className="text-base text-gray-500 mb-6 font-semibold text-center w-full lg:w-4/5 m-auto">
        {subtitle}
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Composition Section */}
        <motion.div
          className={cardClass}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.4 }}
        >
          <h3 className={`px-4 ${headerClass}`}>{compositionTitle}</h3>
          {compositionContent?.map((item, idx) => {
            // Parse the value as a number and ensure it stays between 0 and 100
            const progressValue = Math.min(Math.max(parseFloat(item.value), 0), 100);

            return (
              <motion.div
                key={idx}
                className="flex justify-between items-center relative text-sm text-gray-900 p-4 py-5 border-b border-gray-100"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: false }}
              >
                <span>{item.label}</span>
                <span className="text-[#0A2B58]">{item.value}%</span>
                <span className="w-11/12 left-1/2 -translate-x-1/2 bg-gray-800/10 rounded-full absolute bottom-0 z-[500] h-2">
                  <span
                    className={`h-2 absolute rounded-full ${barColorClass}`}
                    style={{ width: `${progressValue}%` }}
                  />
                </span>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Sector Section */}
        <motion.div
          className={`${cardClass} p-4`}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.4 }}
        >
          <h3 className={`${headerClass} mb-4`}>{sectorTitle}</h3>
          <div className="grid grid-cols-2 gap-4">
            {sectorContent.map((item, idx) => {
              const Icon = iconMap[item.icon];
              return (
                <motion.div
                  key={idx}
                  className="p-1 w-full h-auto flex items-center justify-center gap-x-2"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  viewport={{ once: false }}
                >
                  <div className={`flex justify-start rounded-full ${iconBgClass}`}>
                    {Icon && <Icon className={`text-xl ${iconColorClass}`} />}
                  </div>
                  <div className="text-left w-full">
                    <h2 className="text-sm text-[#0A2B58] font-semibold">{item.value}</h2>
                  </div>
                </motion.div>
              );
            })}
          </div>
          <hr className="border-gray-300 my-4" />
          <p className="text-gray-400 text-xs">{note}</p>
        </motion.div>
      </div>
    </div>
  );
};

export default Portfolio;
