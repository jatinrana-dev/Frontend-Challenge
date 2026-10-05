import React, { useState } from 'react'

const App = () => {
let [Count,SetCount] = useState(0)
let [digit,SetDigit] =useState(0)
function increment(){
  SetCount(Count+1)
  console.log(Count)
}

function Decrement (){
  SetCount(Count-1)
}

function Reset(){
  SetCount(0)
}

  
function inc(){
  SetDigit(digit+1)
  console.log(Count)
}

function Dec (){
  SetDigit(digit-1)
}

function Res(){
  SetDigit(0)

}
  return (
     <div className="min-h-screen flex items-center justify-center bg-slate-100">
      <div className="w-80 rounded-2xl bg-white p-8 text-center shadow-lg">
        <h1 className="text-xl font-semibold text-slate-700">Counter App</h1>

        <p
          className={`my-6 text-6xl font-bold ${
            Count < 0
              ? "text-rose-600"
              : Count > 0
              ? "text-emerald-600"
              : "text-slate-700"
          }`}
        >
          {Count}
        </p>

        <div className="flex justify-center gap-3">
          <button
            onClick={Decrement}
            className="rounded-lg bg-rose-500 px-4 py-2 font-medium text-white transition hover:bg-rose-600 active:scale-95"
          >
            Decrement
          </button>
          <button
            onClick={Reset}
            className="rounded-lg bg-slate-500 px-4 py-2 font-medium text-white transition hover:bg-slate-600 active:scale-95"
          >
            Reset
          </button>
          <button
            onClick={increment}
            className="rounded-lg bg-emerald-500 px-4 py-2 font-medium text-white transition hover:bg-emerald-600 active:scale-95"
          >
            Increment
          </button>
        </div>
      </div>
<div>
  <h1 className="text-xl font-semibold text-slate-700">Counter App 2</h1>
  <h1>Count is {digit}</h1>
<Button text="Increment" func={inc}/>
<Button text="Reset" func={Res}/>
<Button text="Decrement" func={Dec}/>
</div>
      
    </div>
  );
};

function Button({text,func}){
  return (
    <button onClick={func} className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 active:scale-95">
      <h1>{text}</h1>
    </button>
  )
}


export default App
