'use client'
import Image from "next/image";

export default function Home() {

  const handleClick = async ()=>{
    let data = {
      name: "John",
      age: 20
    }
    let a = await fetch('/api/add', {method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data), 
  });
    let res = await a.json()
    console.log(res)
  }
  return (
    <div>
      <h1 className="text-3xl font-bold m-10 p-10">NextJS Api route demo</h1>
      <button onClick={handleClick}>Make Post Req</button>
    </div>
  );
}
