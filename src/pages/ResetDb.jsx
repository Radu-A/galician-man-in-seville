import { useState } from "react";
import { uploadData } from "../firebase/resetData";

export default function ResetDb() {
  // Use a string state to clearly manage the component's status
  const [status, setStatus] = useState("idle"); // 'idle' | 'loading' | 'success'

  const handleClick = async () => {
    // Prevent multiple clicks while loading
    if (status === "loading") return;

    setStatus("loading");

    try {
      await uploadData();
      setStatus("success");
    } catch (error) {
      console.error("Error resetting DB:", error);
      // Optional: Set status to 'error' if you want to display an error message
      setStatus("idle");
    }
  };

  // --- RENDERING LOGIC ---

  // 2. Display success message
  if (status === "success") {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900">
        <h1 className="text-4xl font-bold text-green-600 dark:text-green-400 p-8 rounded-lg shadow-lg bg-white dark:bg-gray-800">
          ✅ Database Reset Successful!
        </h1>
      </div>
    );
  }

  // Display the button
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 p-4">
      <button
        onClick={handleClick}
        disabled={status === "loading"}
        className={`
          px-8 py-4 text-2xl font-bold rounded-xl shadow-lg transition-all duration-300 ease-in-out
          ${
            status === "loading"
              ? "bg-gray-500 text-white cursor-not-allowed"
              : "bg-red-600 text-white hover:bg-red-700 active:bg-red-800 cursor-pointer"
          }
        `}
      >
        {status === "loading" ? "Resetting DB..." : "Reset Database"}
      </button>
    </div>
  );
}
