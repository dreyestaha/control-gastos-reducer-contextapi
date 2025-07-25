import {v4 as uuidv4} from "uuid"
import type { DraftExpense, Expense } from "../types"


export type BudgetActions = 
    {type:"define-budget"
        , payload: {budget: number}} |
    {type:"show-modal"} |
    {type:"hide-modal"} |
    {type:"add-expense", payload: {expense: DraftExpense}} |
    {type:"remove-expense", payload: {id: Expense["id"]}} |
    {type:"get-expense-by-id", payload: {id: Expense["id"]}} |
    {type:"update-expense", payload: {expense: Expense}} 


export type BudgetState = {
    budget: number
    modal: boolean
    expenses: Expense[]
    editingId: Expense["id"]
}

//funciones para tener local storage
const budgetInitialState = () : number  =>{
    const localStorageBudget = localStorage.getItem("budget");
    return localStorageBudget ? +localStorageBudget : 0
}

const expensesInitialState = (): Expense[] =>{
    const localStorageExpenses = localStorage.getItem("expenses");
    return localStorageExpenses ? JSON.parse(localStorageExpenses) : []
}

//Initial state de la app
export const initialState : BudgetState = {
    budget: budgetInitialState(),
    modal: false,
    expenses: expensesInitialState(),
    editingId: ""
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
                modal: false,
                editingId: ""
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

        if(action.type === "remove-expense"){
            return{
                ...state,
                expenses: state.expenses.filter(expense => expense.id !== action.payload.id)
            }
        }

        if(action.type === "get-expense-by-id"){
            return{
                ...state,
                editingId: action.payload.id,
                //para que se muestra la modal cuando editemos un gasto
                modal:true
            }
        }

        if(action.type === "update-expense"){
            return{
                ...state,
                expenses: state.expenses.map(expense=> expense.id === action.payload.expense.id ? action.payload.expense : expense),
                modal:false,
                editingId: ""
            }
        }

    return state
}