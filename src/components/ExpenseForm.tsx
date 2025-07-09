import type { DraftExpense } from "../types"
import { useState } from "react"
import { categories } from "../data/categories"
import 'react-calendar/dist/Calendar.css'
import 'react-date-picker/dist/DatePicker.css'
import DatePicker from 'react-date-picker'
import type { Value } from "react-calendar/src/shared/types.js"
import ErrorMessage from "./ErrorMessage"
import { useBudget } from "../hooks/useBudget"



export default function ExpenseForm() {

    //state del gasto sin ID
    const [expense, setExpense] = useState<DraftExpense>({
        expenseName: "",
        amount: 0,
        category: "",
        date: new Date()
    })

    //state global para escribir en el state y agregar nuevos gastos
    const {dispatch} = useBudget()

    const [error, setError] = useState("")

    const handleChangeDate = (value: Value)=>{
        setExpense({
            ...expense,
            date: value
    })
    }

    const handleChange = (e : React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>)=>{
        const {name,value} = e.target
        const isAmountField = ["amount"].includes(name)
        setExpense({
            ...expense,
            [name]: isAmountField ? +value : value
        })
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) =>{
        e.preventDefault()
        //validación del formulario.
        //Object.values crea un array desde expense. Luego verificamos si hay algún string vacío
        if(Object.values(expense).includes("")){
            setError("Todos los campos son obligatorios")
            return
        }
            //Si todo está ok, se envía la información del gasto y se almacena en el state global de Budget
            dispatch({type: "add-expense", payload:{expense}})

            //reiniciar formulario a los valores iniciales
            setExpense({
                expenseName: "",
                amount: 0,
                category: "",
                date: new Date()
            })
        
    }

    return (
        <div>
            <form 
                className="space-y-5"
                onSubmit={handleSubmit}
            >
                
                <legend
                    className="text-3xl text-cyan-700 border-b-4 border-cyan-800 p-5 text-center uppercase"
                >Agregar nuevo Gasto
                </legend>

                {error && <ErrorMessage>{error}</ErrorMessage>}

                <div className="flex flex-col gap-2">
                    <label 
                        htmlFor="expenseName"
                        className="text-xl font-bold px-2"
                    >Nombre del gasto:
                    </label>
                    <input 
                        type="text" 
                        id="expenseName"
                        className="bg-gray-100 p-2"
                        placeholder="Nombre del gasto que quieres incluir"
                        name="expenseName"
                        value={expense.expenseName}
                        onChange={handleChange}
                    />
                </div>
                
                <div className="flex flex-col gap-2">
                    <label 
                        htmlFor="amount"
                        className="text-xl font-bold px-2"
                    >Costo:
                    </label>
                    <input 
                        type="number" 
                        id="amount"
                        className="bg-gray-100 p-2"
                        placeholder="Costo del nuevo gasto. Por ejemplo: 15.990"
                        name="amount"
                        value={expense.amount}
                        onChange={handleChange}
                    />
                </div>

                <div className="flex flex-col gap-2">
                    <label 
                        htmlFor="category"
                        className="text-xl font-bold px-2"
                    >Categoría:
                    </label>
                    <select 
                        id="category"
                        className="bg-gray-100 p-2"
                        name="category"
                        value={expense.category}
                        onChange={handleChange}
                    >
                        <option value="">--Seleccione--</option>
                        {categories.map(category =>(
                            <option 
                                key={category.id}
                                value={category.id}
                            >{category.name}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="flex flex-col gap-2">
                    <label 
                        htmlFor="amount"
                        className="text-xl font-bold px-2"
                    >Fecha:
                    </label>
                    <DatePicker
                        className="bg-gray-100 p-2 border-0"
                        value={expense.date}
                        onChange={handleChangeDate}
                    />
                </div>

                <input 
                    type="submit" 
                    value={"Registrar Gasto"}
                    className="bg-cyan-700 text-white font-bold rounded-lg cursor-pointer w-full p-2 uppercase"

                />
            </form>

        </div>
  )
}
