import { useState, useRef } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import "../App.css";



const GalleryWidget = () =>  {
  const [images, setImages] = useState([
    "images/img.jpg",
    "images/img.jpg",
    "images/img.jpg",
    "images/img.jpg",
    "images/img.jpg",
  ]);

  const scrollRef = useRef(null);

  const handleAddImage = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onloadend = () => setImages((prev) => [...prev, reader.result]);
    reader.readAsDataURL(file);
  };

  const scrollLeft = () => {
    scrollRef.current.scrollBy({
      left: -200,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({
      left: 200,
      behavior: "smooth",
    });
  };

  return (
    <div className="bg-secondary rounded-2xl shadow-lg p-1 h-full pt-3 box-shadow"> 
    <div className="flex flex-row overflow-hidden gap-2 mt-2 w-[94%] ">
      {/* Sidebar */}
      <div className="flex flex-col min-h-full relative w-full">
        <div className="w-full pt-1 p-1">
          <img src="/icons/vector.png" alt="vector" className="w-5 h-5 object-contain" />
        </div>
        <div className="absolute top-1/2 left-3 -translate-x-1/2 -translate-y-1/2">
          <img src="/icons/dashIcon.png" alt="box" className="w-6 h-6 object-contain" />
        </div>
          <div className="w-8 text-transparent">
            add
          </div>
      </div>

      {/* Main Gallery Area */}
      <div className="w-full h-full flex flex-col">
        <div className="flex flex-row justify-between items-center gap-2 w-full">
         <div className="flex-[.7]">
          <button className="font-normal md:text-[15px] text-sm rounded-2xl tracking-wide md:p-3 md:px-7 bg-bgBlack p-2 px-3 font-poppins">
            Gallery
          </button>
        </div> 
          <div className="flex items-center md:gap-3 gap-1 flex-1 justify-end mr-12.5">
            <label
              htmlFor="fileInput"
              className="neumorphic-btn px-2 md:px-4 md:py-2.5 py-1.5 text-[10px] md:mr-3 font-medium uppercase cursor-pointer flex flex-row gap-2 bg-secondary text-nowrap items-center border-l border-l-bgBlack/55 border-secondary"
            >
              <span>+</span> <span>Add Image</span>
            </label>

            <input
              id="fileInput"
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleAddImage}
            />

            <button onClick={scrollLeft} className="neumorphic-icon-btn p-2 bg-[#28292F] hover:bg-bgBlack/80 cursor-pointer focus:bg-gradient-to-r focus:from-[#96BEE7] focus:to-bgBlack focus:outline-none transition-all">
              <ArrowLeft className="text-gray-200 md:w-5 md:h-5 h-4 w-4" />
            </button>

            <button onClick={scrollRight} className="neumorphic-icon-btn p-2 bg-[#28292F] hover:bg-bgBlack/80 cursor-pointer  focus:bg-gradient-to-r focus:from-[#96BEE7] focus:to-bgBlack focus:outline-none transition-all">
              <ArrowRight className="text-gray-200 md:w-5 md:h-5 h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Image Scroll Area */}
        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-hidden scroll-smooth no-scrollbar pt-9 py-3"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
            WebkitOverflowScrolling: "touch",
          }}
        >
          {images.map((img, i) => (
            <div key={i} className="relative flex-shrink-0 w-[148px] h-[140px]">
              <div className="absolute w-full h-full rounded-2xl bg-[#2c2f33] transform transition-all duration-500 ease-in-out hover:-rotate-3 hover:-translate-y-3 hover:scale-110">
                <img
                  src={img}
                  alt={`gallery-${i}`}
                  className="w-full h-full object-cover rounded-2xl  hover:grayscale-0 grayscale-100 cursor-pointer brightness-80 "
                />
              </div>
            </div>
          ))}
        </div>
        </div>
      </div>
    </div>
  );
}
export default  GalleryWidget