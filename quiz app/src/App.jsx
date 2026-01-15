import React, { useState } from "react";
import data from "./data.json";
const App = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score,setScore]=useState(0);
  const handleClick=(answer)=>{
    setCurrentQuestion(prev=>prev+1);
    if(answer){
      setScore((prev)=>prev+1)
    }
  }

  const handlePlay=()=>{
    setCurrentQuestion(0),
    setScore(0)
  }
  return (
    <>
      <div className="main w-screen bg-gray-200 h-screen  flex justify-center items-center flex-col">
        <h1 className="text-3xl uppercase font-bold font-mono">QUIZ</h1>

        {currentQuestion<data.length && (<>
        {currentQuestion<data.length&&<h1 className="text-right font-mono tracking-tighter mr-4 text-sm w-86">{` Question ${currentQuestion+1} `}</h1>}
        <div className="question">
          <h1 className=" mb-2 md:text-2xl text-sm">{data[currentQuestion].question}</h1>
        </div>

        <div className="answerOptions m-3">
          <ul className="grid grid-cols-2 gap-6">
            {data[currentQuestion].answerOptions.map((option) => (
              <li
              onClick={()=>(handleClick(option.isCorrect))}
                key={option.option}
                className="bg-linear-to-r from-blue-500 to-purple-500 md:text-xl text-sm font-mono text-white py-3 ease-in duration-150 hover:border-black border-2 px-4 cursor-pointer  rounded text-center shadow-md shadow-black/50"
              >
                {option.option}
              </li>
            ))}
          </ul>
        </div>
        </>)}

        {<>
        
        
        <h1 className="text-sm  mt-4 uppercase md:text-xl  font-mono"> {`you have score ${score} out of ${data.length  }`} </h1></>}
      {currentQuestion>=data.length&& (<>
      <button onClick={()=>(handlePlay())} className="cursor-pointer text-xl border-2 md:text-xl border-red-200 font-mono p-2 m-3 rounded- bg-red-300 rounded-xl uppercase font-bold hover:bg-red-200 duration-150 hover:border-red-400">Play Again</button>

      {score<=4&&<h1 className="font-bold text-red-500 ">BAD SCORE 👎🏻</h1>}
      {score>=4&& score<=7 && <h1  className="font-bold text-blue-500 "> GOOD SCORE 👍🏻</h1>}
      {score>=8&&<h1  className="font-bold text-green-500 ">GREAT SCORE 👏🏻</h1>}
      {score==data.length&&<h1  className="font-bold text-green-500 ">PERFECT SCORE 👏🏻💯</h1>}


      </>)}
      </div>

      
    </>
  );
};

export default App;
