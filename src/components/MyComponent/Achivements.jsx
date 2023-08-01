import React from "react";
import { FiCheckCircle, FiUsers, FiCalendar, FiAward } from "react-icons/fi";

const Achievements = () => {
  return (
    <div className="">
      <div className="px-6">
        <p className="text-[18px] sm:text-[14px] text-secondary uppercase tracking-wider">
          The codebird
        </p>
        <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
          Achievements
        </h2>
      </div>
      <section className="">
        <div className="container px-2 py-24 mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 mx-auto text-center">
            <div className="p-4  ">
              <div className="   px-4 py-6 rounded-lg   duration-500 hover:scale-110">
                <FiCheckCircle className="text-gray-600 w-12 h-12 mb-3   " />
                <h2 className="title-font font-medium text-3xl text-gray-900">
                  50+
                </h2>
                <p className="leading-relaxed">Projects</p>
              </div>
            </div>
            <div className="p-4  ">
              <div className="   px-4 py-6 rounded-lg   duration-500 hover:scale-110">
                <FiUsers className="text-gray-600 w-12 h-12 mb-3   " />
                <h2 className="title-font font-medium text-3xl text-gray-900">
                  350+
                </h2>
                <p className="leading-relaxed">Members</p>
              </div>
            </div>
            <div className="p-4  ">
              <div className="   px-4 py-6 rounded-lg   duration-500 hover:scale-110">
                <FiCalendar className="text-gray-600 w-12 h-12 mb-3   " />
                <h2 className="title-font font-medium text-3xl text-gray-900">
                  25+
                </h2>
                <p className="leading-relaxed">Events</p>
              </div>
            </div>
            <div className="p-4  ">
              <div className="   px-4 py-6 rounded-lg   duration-500 hover:scale-110">
                <FiAward className="text-gray-600 w-12 h-12 mb-3   " />
                <h2 className="title-font font-medium text-3xl text-gray-900">
                  15+
                </h2>
                <p className="leading-relaxed">Mentorship Programs</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Achievements;
