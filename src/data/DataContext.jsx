import { createContext, useState } from "react";

const DataContext = createContext();

const DataProvider = ({ children }) => {
    const [comment, setComment] = useState([]);


    const value = {
        state: {comment},
        action: {setComment}
        } 

    return (
        <DataContext.Provider value={value}>
            {children}
        </DataContext.Provider>
    );
}

export {DataProvider};
export default DataContext;