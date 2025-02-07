
"use client"

import Link from "next/link";
import { useState } from "react";

export default function HomePage() {

  const [response, setResponse] = useState('');

  function handleClick(response: string) {
    if (response === 'yes') {
      setResponse('tomaste la decisión correcta')
      
    } else {
      setResponse('ya no somos amigos')
    }
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16">
        ABIEL WOULD YOU BE MY VALENTINE? 
        <div className="flex justify-between space-x-4">
          <button type="button" onClick={()=> handleClick('yes')} className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">yes</button>
          <button type="button" onClick={()=> handleClick('no')} className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"> no</button>
        </div>
        <div>
          {response}
        </div>
      </div>
    </main>
  );
}
