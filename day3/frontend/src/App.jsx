//  import React from 'react'
// import { Route, Routes } from 'react-router-dom'
// import Home from './components/pages/Home'
//  import Register from './components/pages/Register'
// import Login from './components/pages/login'

//  const App = () => {
//    return (
//  <Routes>
//   <Route path="/" element={<Home />} />
//   <Route path="/login" element={<Login />} />
//   <Route path="/register" element={<Register />} />
// </Routes>
//    )
//  }

//  export default App
import React, { useState } from "react";

const rows = 6;
const cols = 4;

const App = () => {
  // ✅ cells data (value + color)
  const [cells, setCells] = useState(
    Array.from({ length: rows * cols }, (_, i) => ({
      id: i + 1,
      value: "",
      color: "white",
    }))
  );

  // ✅ selected cell
  const [selected, setSelected] = useState(null);

  // ✅ editing cell
  const [editing, setEditing] = useState(null);

  // 👉 Handle value change
  const handleChange = (id, newValue) => {
    const updated = cells.map((cell) =>
      cell.id === id ? { ...cell, value: newValue } : cell
    );
    setCells(updated);
  };

  // 👉 Change color of selected cell
  const changeColor = (color) => {
    if (!selected) return;

    const updated = cells.map((cell) =>
      cell.id === selected ? { ...cell, color } : cell
    );
    setCells(updated);
  };

  return (
    <div className="h-screen w-full flex justify-center items-center bg-gray-200">
      <div className="bg-white h-[60%] w-[60%] text-black border shadow-lg">
        
        {/* Header */}
        <div className="border-b text-center">
          <h1 className="pb-2.5 font-bold">Mini Google Sheet</h1>

          <div className="flex justify-around items-center pb-3">
            <button
              onClick={() => changeColor("red")}
              className="px-5 py-2 bg-red-600 text-white rounded"
            >
              Red
            </button>

            <button
              onClick={() => changeColor("yellow")}
              className="px-5 py-2 bg-yellow-500 text-white rounded"
            >
              Yellow
            </button>

            <button
              onClick={() => changeColor("blue")}
              className="px-5 py-2 bg-blue-600 text-white rounded"
            >
              Blue
            </button>

            <button
              onClick={() => changeColor("green")}
              className="px-5 py-2 bg-green-600 text-white rounded"
            >
              Green
            </button>
          </div>
        </div>

        {/* Grid */}
        <div className="p-2 grid grid-cols-4 gap-1">
          {cells.map((cell) => (
            <div
              key={cell.id}
              onClick={() => setSelected(cell.id)}
              onDoubleClick={() => setEditing(cell.id)}
              className={`border p-2 min-h-[40px] cursor-pointer
                ${selected === cell.id ? "border-2 border-black" : ""}
              `}
              style={{ backgroundColor: cell.color }}
            >
              {editing === cell.id ? (
                <input
                  autoFocus
                  value={cell.value}
                  onChange={(e) =>
                    handleChange(cell.id, e.target.value)
                  }
                  onBlur={() => setEditing(null)}
                  className="w-full outline-none"
                />
              ) : (
                cell.value || ""
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;