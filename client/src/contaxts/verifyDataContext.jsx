import React, { createContext, useContext, useState } from 'react'

export const VerifyDataContext = createContext()

const VerifyDataContextProvider = ({ children }) => {
    const [verifyData, setVerifyData] = useState({
        aadhaar: "399194356894",
        name: "Tarapada Garai",
        address: "Delhi, India",
    });
    return (
        <VerifyDataContext.Provider value={{ verifyData, setVerifyData }}>
            {children}
        </VerifyDataContext.Provider>
    )
}
export default VerifyDataContextProvider

export function useVerifyData() {
    return useContext(VerifyDataContext)
} 