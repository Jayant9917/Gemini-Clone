import { createContext, useState } from "react";
import main from "../config/gemini";

export const Context = createContext();

const ContextProvider = ({ children }) => {

    const [ input, setInput ] = useState(""); 
    const [ recentPrompt, setRecentPrompt ] = useState(""); 
    const [ prevPrompts, setPrevPrompts ] = useState([]); 
    const [ showResult, setShowResult ] = useState(false);
    const [ loading, setLoading ] = useState(false);
    const [ resultData, setResultData ] = useState("");


    const onSent = async (prompt) => {


        setResultData("")
        setLoading(true)
        setShowResult(true)
        setRecentPrompt(input)
        const respone = await main(input)
        setResultData(respone)
        setLoading(false)
        setInput("")

    } 


    const contextValue = {
        prevPrompts,
        setPrevPrompts,
        onSent,
        setRecentPrompt,
        recentPrompt,
        showResult,
        loading,
        resultData,
        input,
        setInput
    }

    return (
        <Context.Provider value={contextValue}>
            {children}
        </Context.Provider>
    )
}

export default ContextProvider


