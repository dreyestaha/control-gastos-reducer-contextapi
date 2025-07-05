import BudgetForm from "./components/BudgetForm"

function App() {
 

  return (
    <>
      <header className="bg-cyan-700 py-8 max-h-72">
        <h1 className="text-5xl text-gray-50 font-thin text-center">Control de Gastos</h1>
      </header>

      <main>
        <section className="max-w-3xl mx-auto bg-gray-100 shadow-lg rounded-lg mt-10 p-10">
          <BudgetForm />
        </section>

      </main>
    </>
  )
}

export default App
