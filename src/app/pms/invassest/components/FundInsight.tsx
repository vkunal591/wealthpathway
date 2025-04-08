import React from "react";
import { GoGraph } from "react-icons/go";
import { LuShieldHalf } from "react-icons/lu";
import { PiBriefcaseLight } from "react-icons/pi";

type InsightItem = {
  icon: string;
  value: string;
  label: string;
};

type TeamMember = {
  initials: string;
  name: string;
  role: string;
};

type FundInsightProps = {
  title?: string;
  data: InsightItem[];
  teamMember?: TeamMember;
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
  teamMember,
  iconMap = defaultIconMap,
  containerClass = "max-w-7xl m-auto p-4 lg:p-16",
  cardClass = "rounded-2xl m-auto shadow border-l-4 border-gray-300 border border-l-[#B28C3D] p-6",
  iconBgClass = "bg-[#B28C3D]/10 p-2",
  iconColorClass = "text-[#B28C3D]",
  titleClass = "text-3xl font-semibold text-[#0A2B58] mb-4",
}) => {
  return (
    <div className={containerClass}>
      <div className={cardClass}>
        <h3 className={titleClass}>{title}</h3>
        <div>
          {data.map((item, index) => {
            const Icon = iconMap[item.icon];
            return (
              <div
                key={index}
                className="p-4 w-full h-auto flex items-start justify-start gap-4"
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
              </div>
            );
          })}

          {teamMember && (
            <>
              <hr className="my-4 border-gray-300" />
              <div className="p-4 w-full h-auto flex items-center justify-start gap-4">
                <div className="flex justify-center items-center h-16 w-16 p-2 text-[#B28C3D] text-2xl rounded-full bg-[#B28C3D]/10">
                  {teamMember.initials}
                </div>
                <div className="text-left w-full">
                  <h2 className="text-lg text-[#0A2B58] mb-2 font-semibold">
                    {teamMember.name}
                  </h2>
                  <p className="text-sm text-gray-500 w-full lg:w-4/5">
                    {teamMember.role}
                  </p>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default FundInsight;
