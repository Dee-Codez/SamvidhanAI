import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom';
import {MdKeyboardBackspace} from 'react-icons/md'
import axios from 'axios';

// import {FewShotPromptTemplate, LengthBasedExampleSelector, PromptTemplate } from "langchain/prompts"
// import { LLMChain } from 'langchain/chains';
// import { OpenAI } from "langchain/llms/openai";
// import {ChatOpenAI} from "langchain/chat_models/openai"


import Typewriter from './Typewriter'

const LLBGPT = () => {
    // const model = new ChatOpenAI({
    //     openAIApiKey: import.meta.env.VITE_CHATNBX_API_KEY,
    //     openAIApiBase: "https://chat.nbox.ai/api/",
    //     modelName: "llama-2-chat-13b-4k",
    //     temperature: 0.8,
    //   });
    
    // const exampleTemplate = `User: {query}
    // AI : {answer}`;
    
    // const examplePrompt = new PromptTemplate({
    //     template: exampleTemplate,
    //     inputVariables: ["query", "answer"]
    // })
    
    // const examples =[
    //     {
    //         query: "Are you a robot?",
    //         answer:"I prefer the term highly advanced AI Lawyer. But yes, I'm a robot in layman terms"
    //     },
    //     {
    //         query: "Tell me what you can do",
    //         answer:"I can provide you with necessary information regarding the law"
    //     }
    // ];
    
    // const exampleSelector = new LengthBasedExampleSelector({
    //     example: examples,
    //     examplePrompt: examplePrompt,
    //     maxLength: 100,
    // });
    
    // const dynamicPromptTemplate = new FewShotPromptTemplate({
    //     exampleSelector: exampleSelector,
    //     examplePrompt: prompt,
    //     prefix: `The following are exerpts from converstations with an AI
    //     assistant. The assistant is only formal, quick witted and acts much like a lawyer
    //     producing informative law based responses to users questions. Here are some examples:\n`,
    // suffix: "\nUser: {query}\nAnswer: ",
    // inputVariables: ["query"],
    // exampleSeparator: "\n\n"
    // });
    
    // const chain = new LLMChain({
    //     llm: model, prompt: dynamicPromptTemplate
    // });

    const [query, setQuery] = useState("");
    const [answer, setAnswer] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const handleInputChange = (event) => {
        if(event.key === 'Enter' && query) {
            handleSubmit(event)
        }else{
            setQuery(event.target.value)
        }
        
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        setIsLoading(true);
        if(query !== ""){
            axios.post("https://samvidhan-ai.vercel.app/api/ml", {"prompt": query})
            .then((response) => {
              console.log(response);
              
              setAnswer(response['data']['answer']);
              setIsLoading(false);
            })
            .catch((err) => {
              console.log(err);
          setAnswer("Error")
            });
        }
    }
    const text = ["Your Personal AI Law Chatbot",3000,"Your Personal Fine-Tuned GPT For Law",3000];

    function refreshPage() {
        window.location.reload(false);
    }

  return (
    <div>
      <div className='flex flex-col justify-center items-center'>
        <p className='text-5xl p-2 mt-[10vh] font-poppins font-bold italic'>LLBGPT</p>
        <div className='text-2xl mt-[10vh] font-poppins tracking-[.3rem] text-center m-5 '>
            <Typewriter text={text} repeat={Infinity} speed={80} />
        </div>
        <div className=' border-2 md:scale-100 scale-[90%] mt-[10vh] shadow-[#111111] shadow-xl border-[#6b6b6b] p-20 bg-white bg-opacity-5 rounded-lg ml-[200px] mr-[200px]'>

            <div className='text-white flex md:flex-row md:gap-5 gap-10 flex-col justify-center items-center -mt-[40px]'>
                <div className='flex gap-2 justify-center'>
                    <p className='text-lg md:text-2xl md:flex flex-row font-bold'>Enter Prompt </p>
                    <p className='text-2xl'>:</p>
                </div>
                
                <div className=''>
                    <input onChange={handleInputChange} placeholder='Type And Press Enter' onKeyUp={handleInputChange} className='p-4 rounded-md' type="text" />
                </div>
                <div className='-mt-[5px]'>
                    <button onClick={handleSubmit} type='submit' className={`${(!query || isLoading) ? "opacity-30" : "opacity-100"}  flex p-3 items-center bg-white bg-opacity-10 hover:bg-opacity-100 hover:text-black text-white rounded-md duration-300`}>{isLoading? "Loading.." : "Submit"}</button>
                </div>
            </div>
            <div className='flex md:flex-row md:gap-0 gap-5 md:text-2xl flex-col justify-center text-lg mt-20' key={answer}>
                <div className='flex justify-center'>
                    <p className='font-bold '>Response  </p>
                    <p className='ml-1'> :</p>
                </div>
                <div className=''>
                    {answer && (
                        <div className='pl-1 text-center italic leading-'>
                            <Typewriter text={answer} repeat={1} speed={50} />
                        </div>
                        
                    )}
                </div>
            </div>
            <div className='flex justify-center'>
                <div className='mt-[10vh]'>
                    <Link to="/LLBGPT" onClick={refreshPage}>
                        <div className='flex text-2xl p-5 items-center bg-white bg-opacity-10 hover:bg-opacity-100 hover:text-black text-white rounded-md duration-300'>Reset</div>
                    </Link>
                </div>
            </div>
        </div>
        <Link to="/">
            <div className='flex items-center gap-3 mt-[10vh] mb-[10vh] bg-white bg-opacity-10 hover:bg-opacity-100 hover:text-black text-white rounded-md p-5 text-lg duration-300'>
                <MdKeyboardBackspace />
                <p>Back</p>
            </div>
        </Link>
      </div>
    </div>
  )
}

export default LLBGPT
