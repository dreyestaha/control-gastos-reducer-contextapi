import {v4 as uuidv4} from "uuid"
import type { DraftExpense, Expense } from "../types"


export type BudgetActions = 
    {type:"define-budget"
        , payload: {budget: number}} |
    {type:"show-modal"} |
    {type:"hide-modal"} |
    {type:"add-expense", payload: {expense: DraftExpense}} 


export type BudgetState = {
    budget: number
    modal: boolean
    expenses: Expense[]
}

export const initialState : BudgetState = {
    budget: 0,
    modal: false,
    expenses: []
} 

//para transformar el draftExpense a un expense con ID. 
// ": Expense" dice que tiene que retornar un elemento de tipo Expense
const createExpense =(draft : DraftExpense) : Expense =>{
    return {
        ...draft,
        id: uuidv4()
    }
}

export const budgetReducer = (
        state: BudgetState = initialState,
        action: BudgetActions
    )=>{

        if(action.type === "define-budget"){
            return{
                ...state,
                budget: action.payload.budget
            }
        }

        if(action.type === "show-modal"){
            return {
                ...state,
                modal: true
            }
        }
        
        if(action.type === "hide-modal"){
            return {
                ...state,
                modal: false
            }
        }

        if(action.type === "add-expense"){
            const newExpense = createExpense(action.payload.expense)              
            return{
                ...state,
                expenses: [...state.expenses, newExpense],
                //cerramos la modal luego de agregar el gasto
                modal:false
            }
        }

    return state
}