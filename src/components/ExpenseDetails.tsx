import { useMemo } from "react";
import { useBudget } from "../hooks/useBudget";
import {LeadingActions, SwipeableList, SwipeableListItem, SwipeAction, TrailingActions} from "react-swipeable-list"
import { formatDate } from "../helpers";
import type { Expense } from "../types";
import AmountDisplay from "./AmountDisplay";
import { categories } from "../data/categories";
import 'react-swipeable-list/dist/styles.css';

type ExpenseDetailsProps = {
    expense: Expense
}

export default function ExpenseDetails({expense}: ExpenseDetailsProps) {

    const {dispatch} = useBudget();

    const categoryInfo = useMemo(()=> categories.filter( (cat)=>cat.id === expense.category)[0] , [expense])

    //función para Leading Actions
    const leadingActions = () =>( //usa paréntesis pq retornamos los componentes
        <LeadingActions>
            <SwipeAction
                onClick={()=>dispatch({type: "get-expense-by-id", payload: {id: expense.id}})}
            >
                Actualizar
            </SwipeAction>
        </LeadingActions>
    )

    //función para Trailing Actions (cuando el swipe es de derecha a izq)
    const trailingActions = () =>( //usa paréntesis pq retornamos los componentes
        <TrailingActions>
            <SwipeAction
                onClick={()=>{dispatch({type:"remove-expense", payload: {id: expense.id}})}}
                destructive={true /*Animación para eliminar el gasto*/ }
            >
                Eliminar
            </SwipeAction>
        </TrailingActions>
    )

    return (
        //Componente para hacer la animación de swipe
        <SwipeableList>
            {/* Componente para agregar las acciones del swipe vía props*/}
            <SwipeableListItem
                maxSwipe={30}
                leadingActions={leadingActions() /* como función*/ }
                trailingActions={trailingActions()} 
            >
                <div className="bg-gray-100 shadow-lg p-5 w-full border-b border-gray-200 justify-between grid grid-cols-12">
                    
                    <div className="col-span-2">
                        <img 
                            className="w-20"
                            src={`/icono_${categoryInfo.icon}.svg`}
                        />
                    </div>
                    <div className="col-span-8 flex flex-col justify-between gap-2">
                        <p className="text-sm text-slate-500 uppercase italic">{categoryInfo.name}</p>
                        <p className="text-lg ">{expense.expenseName}</p>
                        {/* expense.date! el ! dice que ese valor va a existir. */}
                        <p className="text-cyan-700 text-sm">{formatDate(expense.date!.toString())}</p>
                    </div>
                    <div className="col-span-2 flex flex-col justify-center">
                        <AmountDisplay 
                            amount={expense.amount}
                        />
                    </div>
                </div>
            </SwipeableListItem>
        </SwipeableList>

    )
}
