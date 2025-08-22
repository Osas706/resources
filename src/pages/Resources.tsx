import { useEffect, useState } from "react";
import Filter from "../components/Filter";
import Hero from "../components/Hero";
import { ListFilter } from "lucide-react";

import Guide from "../components/Guide";

function Resources() {
  const [showFilter, setShowFilter] = useState(false);

  // Ensure filter is always shown on medium+ screens
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setShowFilter(true);
      } else {
        setShowFilter(false); 
      }
    };

    handleResize(); 
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="  w-full ">
      <div className="container w-full mx-auto  flex  items-center justify-center py-15 px-4">
        <Hero />
      </div>

      {/* Button - visible only on small screens */}
      <div className="flex justify-center md:hidden py-3">
        <button
          onClick={() => setShowFilter((prev) => !prev)}
          className="  px-4 py-2 rounded-md font-medium !text-[16px] flex items-center gap-2"
        >
          <ListFilter
            size={24}
            strokeWidth={3}
            className="text-gray-800 fill-gray-800"
          />
          {showFilter ? "Hide Filters" : "Show Filters"}
        </button>
      </div>

      <div className="w-full bg-white">
        <div className="container w-full mx-auto  flex flex-col md:flex-row  items-start py-7 px-4">
          <div className="w-full md:w-[280px] p-2">
            {/* Filters */}
            {showFilter && (
              <div className="!space-y-1 mt-3 md:mt-0">
                <h4 className="!font-semibold !text-lg">Filters</h4>
                <Filter />
              </div>
            )}
          </div>

          {/* guides */}
          <div className="w-full">
            <Guide />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resources;
