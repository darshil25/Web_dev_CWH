'use client'
import Navbar from "@/components/Navbar";
import { useEffect, useState } from "react";

export default function Home() {
  const [first, setfirst] = useState(0)

  
  return (
    <>
    <div>This is Page {first} </div>
    <button onClick={() => setfirst(first+1)} className="bg-white text-black m-2 p-1 rounded">Count</button>
    <Navbar />
    </>
    
  );
}
