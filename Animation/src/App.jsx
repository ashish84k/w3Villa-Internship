import "./App.css";
// import Box from "./components/Box";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { useGSAP } from "@gsap/react";

// gsap.registerPlugin(ScrollTrigger);

// function App() {
//   useGSAP(
//     () => {
//       const tl = gsap.timeline();
      
//       tl.fromTo(
//         ".word , .box",
//         {
//           x: -500,
//           opacity: 0,
//           rotateX: 90,
//         },
//         {
//           x: 0,
//           opacity: 1,
//           rotate: 360,
//           rotateX: 0,
//           duration: 1,
//           stagger: 0.7,
//           ease: "back.out(1.7)",
//         }
//       );
      
//       const tl2 = gsap.timeline({
//          scrollTrigger: {
//           trigger: '.home-box',
//           start: "90% 70%",
//           end: '100% 70%',
//           scrub: 1,
//          }
//       });

//       tl2.to('.word , .box , .navbar',{ 
//           x: -500,
//           duration: 1,
//           stagger: 0.7,
//           opacity: 0,
//           rotateX: 90,
//         })
      



//     },

//     { scope: ".main" }
//   );

//   return (
//     <>
//       <div className=" main">
//         <div className="flex place-content-center h-[100vh] place-items-center home-box">
//           <div className="navbar fixed flex justify-between w-screen p-5 top-0 left-0" style={{zIndex:'1000'}}>
//             <ul>
//               <li className="word">UI Design</li>
//             </ul>
//             <ul className="flex gap-5 mr-10">
//               <li className="word"><a href="#">Home</a></li>
//               <li className="word"><a href="#">Minu</a></li>
//               <li className="word"><a href="#">Ui</a></li>
//               <li className="word"><a href="#">Login</a></li>
//               <li className="word"><a href="#">Signup</a></li>
//             </ul>
//           </div>
//           <div className="relative  z-50 text-white ">
//             <div className="flex flex-wrap  gap-5 place-content-center p-5 text-6xl font-bold">

//             <span className="word text-red-500 hover:animate-bounce"> UI </span>
//             <span className="word hover:animate-bounce"> Animation </span>
//             <span className="word hover:animate-bounce"> Zone </span>
//             </div>

//             <div className="flex-wrap place-content-center flex gap-5">
//               <div className="box h-[200px] w-[200px] rounded-2xl shadow-2xl hover:shadow-amber-200 hover:cursor-pointer"></div>
//               <div className="box h-[200px] w-[200px] rounded-2xl shadow-2xl hover:shadow-amber-200 hover:cursor-pointer"></div>
//               <div className="box h-[200px] w-[200px] rounded-2xl shadow-2xl hover:shadow-amber-200 hover:cursor-pointer"></div>
//             </div>
//           </div>
//         </div>

//         <Box path={"Images"} size={550}></Box>
//         <Box path={"images2"} size={1070}></Box>
//       </div>
//     </>
//   );
// }

// export default App;


import React from 'react';
import Animation from './components/Animation';

const App = () => {
  return (
    <div>
      <Animation></Animation>
    </div>
  );
}

export default App;

