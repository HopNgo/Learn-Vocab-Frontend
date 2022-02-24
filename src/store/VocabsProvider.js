import VocabsContext from "./VocabsContext.js";
import { useState, useEffect } from "react";
import { getVocabs } from '../api/index';

const VocabsProvider = ({ children }) => {
    console.log('re-render-vocabsprovider');
    const initialState = [{ en: "", vn: "" }, { en: "", vn: "" }, { en: "", vn: "" }, { en: "", vn: "" }];

    const [vocabs, setVocabs] = useState(initialState);
    
    const getVocabsList = async () => {
        try {
            const response = await getVocabs();
            setVocabs(response.data);
        } catch (error) {
            console.log(error);
        }
    }
    console.log(vocabs);

    useEffect( () => {
         getVocabsList();
    }, [])
    return (
        <VocabsContext.Provider value={{ vocabs, setVocabs }}>
            {children}
        </VocabsContext.Provider>
    )
}

export default VocabsProvider;