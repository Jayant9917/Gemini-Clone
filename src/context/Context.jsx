import { createContext, useState } from "react";
import main from "../config/gemini";

export const Context = createContext();

const ContextProvider = ({ children }) => {

    const [ input, setInput ] = useState(""); 
    const [ recentPrompt, setRecentPrompt ] = useState(""); 
    const [ prevPrompt, setprevPrompt ] = useState([]);
    const [ showResult, setShowResult ] = useState(false);
    const [ loading, setLoading ] = useState(false);
    const [ resultData, setResultData ] = useState("");


    const onSent = async (prompt) => {
        await main(prompt)
    } 


    const contextValue = {

    }
    return (
        <Context.Provider value={contextValue}>
            {children}
        </Context.Provider>
    )
}

export default ContextProvider


