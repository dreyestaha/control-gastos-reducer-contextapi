import React from "react"
import { useState, useMemo } from "react"

export default function BudgetForm() {
  
  const [budget,setBudget] = useState(0)

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>)=>{
    setBudget(e.target.valueAsNumber)
  }

  const isValid = useMemo(()=>{
    return isNaN(budget) || budget <=0
    },[budget])
  
  return (
    <div>
      <form className="space-y-5 flex flex-col">
        <div className="flex flex-col space-y-5">
          <label htmlFor="budget" className="text-2xl text-cyan-950 font-thin text-center">
            Definir Presupuesto 
          </label>
          <input 
            id="budget"
            type="number"
            className="w-full bg-white border border-gray-300 p-2 rounded-sm" 
            placeholder="Indica tu presupuesto"
            name="budget"
            value={budget}
            onChange={handleOnChange}
          />
        </div>
        <input 
          type="submit"
          value="Definir Presupuesto"
          className="w-lg mx-auto p-3 cursor-pointer uppercase bg-cyan-700 text-gray-50 font-semibold text-xl hover:bg-amber-400 hover:text-black disabled:opacity-40"
          disabled={isValid}
        />
      </form>
    </div>
  )
}
