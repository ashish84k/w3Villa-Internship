import React, { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const Box = () => {
  const boxRef = useRef();

  useGSAP(
    () => {
        
      let time = gsap.timeline({
         scrollTrigger: {
          trigger: ".box2",
          start: "top 80%",
          end: "top 30%",
          scrub: true,
          markers: true,
        },
        x: 200,
        duration: 1.5,
      });
      
    
      time.add(time.fromTo(".box2", { left:300}, { left:300, top:300,repeat:-1, yoyo:true}));
     
    },
    { dependencies: [] }
  );

  return (
    <>
      <div className="h-[100vh] w-screen relative p-5">
        <div className="h-[100px] w-[100px] bg-green-500 shadow-2xl rounded-2xl box1 relative"></div>
      </div>
      <div className="h-[100vh] w-screen relative p-5">
        <div className="h-[100px] w-[100px] bg-red-500 shadow-2xl rounded-2xl box2 relative"></div>
      </div>
    </>
  );
};

export default Box;
