"use client"
import {submitAcrion} from '@/actions/submitAction'
import { useRef } from 'react';


export default function Home() {

  let ref = useRef()

  return (
    <div className="w-2/3 my-12 mx-auto">
      <form ref={ref} action={(e) =>{submitAcrion(e); ref.current.reset()}}>
        <div>
          <label htmlFor="name">Name</label>
          <input 
          className="text-black mx-4 my-4"
          name="name"
          id="name"
          type="text" />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input 
          className="text-black mx-4 my-4"
          name="email"
          id="emial"
          type="email" />
        </div>
        <div>
          <button className="border border-gray-400 my-4">Sabmit </button>
        </div>
      </form>
    </div>
  );
}
