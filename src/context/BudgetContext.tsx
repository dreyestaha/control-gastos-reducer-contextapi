import { createContext, useReducer, useMemo, type Dispatch, type ReactNode } from "react"
import { budgetReducer, initialState, type BudgetActions, type BudgetState } from "../reducers/budgetReducer"


type BudgetContextProps = {
    state: BudgetState
    dispatch: Dispatch<BudgetActions>
    totalExpenses: number
    budgetRemaining: number
}

type BudgetProviderProps = {
    children: ReactNode
}

export const BudgetContext = createContext<BudgetContextProps>(null!) 

export const BudgetProvider = ({children} : BudgetProviderProps)=>{

const [state, dispatch] = useReducer(budgetReducer, initialState)
const totalExpenses = useMemo(()=>state.expenses.reduce((total, expense)=> expense.amount + total, 0), [state.expenses])
const budgetRemaining = state.budget - totalExpenses

    return (
        <BudgetContext.Provider
            value={
                {state, 
                dispatch, 
                totalExpenses, 
                budgetRemaining}
            }
        >
        {children}
        </BudgetContext.Provider>
    )
}