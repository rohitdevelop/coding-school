import React, { useRef, useState } from "react";

const OTPInput = ({ length = 6 }) => {
  const [otp, setOtp] = useState(Array(length).fill(""));
  const inputsRef = useRef([]);

  // Handle input change
  const handleChange = (value, index) => {
    if (!/^\d?$/.test(value)) return; // allow only numbers

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Move to next input
    if (value && index < length - 1) {
      inputsRef.current[index + 1].focus();
    }
  };

  // Handle backspace
  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace") {
      if (otp[index]) {
        // delete current
        const newOtp = [...otp];
        newOtp[index] = "";
        setOtp(newOtp);
      } else if (index > 0) {
        // move back
        inputsRef.current[index - 1].focus();
      }
    }
  };

  // Handle paste
  const handlePaste = (e) => {
    const pasteData = e.clipboardData.getData("text").slice(0, length);
    if (!/^\d+$/.test(pasteData)) return;

    const newOtp = pasteData.split("");
    setOtp([...newOtp, ...Array(length - newOtp.length).fill("")]);

    // Focus last filled input
    const lastIndex = newOtp.length - 1;
    if (inputsRef.current[lastIndex]) {
      inputsRef.current[lastIndex].focus();
    }
  };

  // Submit & clear
  const handleSubmit = () => {
    const finalOtp = otp.join("");
    console.log("OTP:", finalOtp);

    // Clear all
    setOtp(Array(length).fill(""));
    inputsRef.current[0].focus();
  };

  return (
    <div className="flex flex-col items-center gap-6">
      {/* OTP Boxes */}
      <div
        className="flex gap-3"
        onPaste={handlePaste}
      >
        {otp.map((digit, index) => (
          <input
            key={index}
            type="text"
            maxLength={1}
            value={digit}
            ref={(el) => (inputsRef.current[index] = el)}
            onChange={(e) => handleChange(e.target.value, index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            className="w-12 h-12 text-center text-xl border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        ))}
      </div>

      {/* Submit Button */}
      <button
        onClick={handleSubmit}
        className="px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
      >
        Submit OTP
      </button>
    </div>
  );
};

export default OTPInput;