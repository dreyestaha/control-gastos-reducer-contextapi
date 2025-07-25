import { useMemo, useEffect } from "react"
import { useBudget } from "./hooks/useBudget"
import BudgetForm from "./components/BudgetForm"
import BudgetTracker from "./components/BudgetTracker"
import ExpenseModal from "./components/ExpenseModal"
import ExpenseList from "./components/ExpenseList"

function App() {
 
  const {state} = useBudget()

  const isValidBudget = useMemo(()=> state.budget > 0 ,[state.budget])

  useEffect( ()=>{
    localStorage.setItem("budget", state.budget.toString())
    localStorage.setItem("expenses", JSON.stringify(state.expenses))
  
  }, [state])

  return (
    <>
      <header className="bg-cyan-700 py-8 max-h-72">
        <h1 className="text-5xl text-gray-50 font-thin text-center">Control de Gastos</h1>
      </header>

      <main>
        <section className="max-w-3xl mx-auto bg-gray-100 shadow-lg rounded-lg mt-10 p-10">
          {/* Se invoca el componente si el presupuesto está ingresado o no */}
          {isValidBudget ? <BudgetTracker /> : <BudgetForm />}
        </section>

        {/* Es como un ternario pero donde solo funciona con un true, no tiene opción para false */}
        {isValidBudget && (<section className="max-w-3xl mx-auto ">
          <ExpenseList/>        
          <ExpenseModal /> 
        </section>)}

      </main>
    </>
  )
}

export default App
