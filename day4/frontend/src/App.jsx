// import React, { useState } from "react";

// let row = 5;
// let col = 4;

// const App = () => {
//   const [cell, setCell] = useState(
//     Array.from({ length: row * col }, (_, i) => ({
//       id: i + 1,
//       value: "",
//       color: "white",
//     })),
//   );

//   const [active, setActive] = useState(null);
//   const [edit, setEdit] = useState(null);

//   const handleChange = (id, newValue) => {
//     const updated = cell.map((cell) =>
//       cell.id === id ? { ...cell, value: newValue } : cell,
//     );
//     setCell(updated);
//   };

//   const colorchnage = (color) => {
//     if (!active) return;

//     const updated = cell.map((cell) =>
//       cell.id === active ? { ...cell, color } : cell,
//     );
//     setCell(updated);
//   };

//   return (
//     <div className="bg-white w-full h-screen  text-black flex justify-center items-center">
//       <div className="border w-[50%] h-[50%] text-center p-2">
//         <h1 className="font-bold mb-2">MINI GOOGLE SHEET</h1>
//         <div className="flex mb-2 justify-around items-center ">
//           <button
//             onClick={() => colorchnage("red")}
//             className="bg-red-600 px-3 py-2 rounded "
//           >
//             red
//           </button>
//           <button
//             onClick={() => colorchnage("yellow")}
//             className="bg-yellow-600 px-3 py-2 rounded "
//           >
//             yellow
//           </button>
//           <button
//             onClick={() => colorchnage("cyan")}
//             className="bg-cyan-600 px-3 py-2 rounded "
//           >
//             cyan
//           </button>
//           <button
//             onClick={() => colorchnage("green")}
//             className="bg-green-600 px-3 py-2 rounded "
//           >
//             green
//           </button>
//         </div>
//         <div className="p-2 grid grid-cols-4 gap-1">
//           {cell.map((c) => (
//             <div
//               onClick={() => setActive(c.id)}
//               onDoubleClick={() => setEdit(c.id)}
//               key={c.id}
//               className={`min-h-[40px] cursor-pointer ${active === c.id ? "border border-purple-700" : "border"}`}
//               style={{ backgroundColor: c.color }}
//             >
//               {edit === c.id ? (
//                 <input
//                   type="text"
//                   autoFocus
//                   value={c.value}
//                   onChange={(e) => handleChange(c.id, e.target.value)}
//                   onBlur={()=> setEdit(null)}
//                 />
//               ) : (
//                 c.value || ""
//               )}
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default App;

// App.js
