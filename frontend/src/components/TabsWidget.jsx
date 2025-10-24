import { useState, useEffect, useRef } from "react";
import { data } from "../lib/data";

const TabsWidget = () => {
  const [activeTab, setActiveTab] = useState("about");
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 });
  const tabRefs = useRef([]);

  // Update indicator position when activeTab changes
  useEffect(() => {
    const idx = data.findIndex(tab => tab.id === activeTab);
    if (tabRefs.current[idx]) {
      const node = tabRefs.current[idx];
      setIndicatorStyle({
        left: node.offsetLeft,
        width: node.offsetWidth
      });
    }
  }, [activeTab]);

  const activeContent = data.find(tab => tab.id === activeTab);


  return (
    <div className="bg-secondary rounded-2xl box-shadow flex flex-row md:p-2 p-1 gap-2 h-full w-full">
      {/* first main div  */}
      <div className="flex flex-col min-h-full relative w-20">
        <div className="w-full pt-1">
          <img src="/icons/vector.png" alt="vector" className="w-5 h-5 object-contain" />
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full">
          <img src="/icons/dashIcon.png" alt="box" className="w-6 h-6 object-contain" />
        </div>
      </div>
      <div className="flex flex-col gap-2 mt-1 w-auto h-full">
        {/* Tabs */}
        <div className="relative flex bg-bgBlack rounded-2xl p-1 overflow-visible w-full sm:gap-1 md:gap-2 justify-between shadow-lg shadow-bgBlack">
          <div
            className="absolute top-2 bottom-2 left-0 bg-bgDarkGray rounded-2xl transition-all duration-500 z-0"
            style={{ left: indicatorStyle.left, width: indicatorStyle.width }}
          />

          {data.map((tab, idx) => (
            <button
              key={tab.id}
              ref={(el) => (tabRefs.current[idx] = el)}
              onClick={() => setActiveTab(tab.id)}
              className={`group relative flex-1 z-10 md:px-5 md:py-2.5 py-2 rounded-xl font-poppins font-normal md:text-sm ms:text-[13px] text-xs transition-all duration-300 overflow-hidden ${
                activeTab === tab.id
                  ? "text-white tab-active-shadow-strong bg-[#28292F]"
                  : "text-tabText cursor-pointer hover:text-white"
              }`}
            >
              {activeTab !== tab.id && (
                <div className="absolute inset-0 bg-bgDarkGray/30 -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out" />
              )}
              <span className="relative z-10 capitalize">{tab.title}</span>
            </button>
          ))}
        </div>
        <div
          className="text-[#969696] md:text-[15px] text-sm text-wrap font-light max-h-60 px-2 my-4 font-jakarta leading-tight"
          dangerouslySetInnerHTML={{ __html: activeContent.desc }}
        />
      </div>
      {/* third main div  */}
      <div className="flex items-center justify-center">
        <img src="icons/slider.png" alt="slider" className="w-12 h-16" />
      </div>
    </div>
  );
}

export default TabsWidget