import React from "react";

export default function OurStatement() {
  return (
    <div className="max-w-7xl m-auto p-4 lg:px-16 lg:pt-40 lg:pb-10 ">
      <h2 className="capitalize text-5xl text-center  font-bold text-[#0A2B58]  mb-4">
        Our Statement
      </h2>
      <p className="text-base text-[#0A2B58] mb-8 font-semibold text-center w-full lg:w-4/5 m-auto">
        Empowering India&apos;s Investment Future Through
        <span className="text-primary">{"  Clarity"}</span>,
        <span className="text-primary">{"  Choice"} </span> &
        <span className="text-primary">{"  Commitment"}</span>
      </p>

      <div className="w-full flex items-center justify-center">
        <span className="bg-primary h-1 w-20 inline-block m-auto "></span>
      </div>
      {/* <motion.div
        whileHover={{
          scale: 1.1,
          boxShadow: "0px 5px 15px gray",
        }}
        whileTap={{ scale: 0.95 }}
        className="rounded-full w-fit m-auto"
      >
        <FlowButton>Explore Alternative Investments</FlowButton>
      </motion.div> */}
    </div>
  );
}
