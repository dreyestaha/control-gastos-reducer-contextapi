import { useContext } from "react";
import { BudgetContext } from "../context/BudgetContext";

export const useBudget =()=>{ 
    const context = useContext(BudgetContext)
    //es buena práctica agregar un error cuando no hay context

    if(!context){
        throw new Error("useBudget must be used within a BudgetProvider")
    }
    return context
}