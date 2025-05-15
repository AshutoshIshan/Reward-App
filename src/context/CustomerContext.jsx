import { createContext, useContext } from "react";

export const CustomerContext = createContext();
export const UseCustomerContext = () => useContext(CustomerContext)