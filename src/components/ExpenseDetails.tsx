import { useMemo } from "react";
import { formatDate } from "../helpers";
import type { Expense } from "../types";
import AmountDisplay from "./AmountDisplay";
import { categories } from "../data/categories";

type ExpenseDetailsProps = {
    expense: Expense
}

export default function ExpenseDetails({expense}: ExpenseDetailsProps) {

    const categoryInfo = useMemo(()=> categories.filter( (cat)=>cat.id === expense.category)[0] , [expense])

    return (
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
    )
}
