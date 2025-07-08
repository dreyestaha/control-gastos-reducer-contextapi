import AmountDisplay from "./AmountDisplay"

export default function BudgetTracker() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      <div className="flex justify-center">
        <img src="/grafico.jpg" alt="Gráfico de presupuesto" />
      </div>
      <div className="flex flex-col justify-center gap-4 p-5">
        <AmountDisplay
            label={"Presupuesto"}
            amount={300}
        />
        
        <AmountDisplay
            label={"Disponible"}
            amount={200}
        />
        
        <AmountDisplay
            label={"Gastado"}
            amount={100}
        />
        <div className="flex justify center">
          <button className="bg-pink-600 w-full text-2xl text-center p-4 mt-10 m-4 rounded-lg text-gray-50">Reset App</button>
        </div>
      </div>
      
    </div>
  )
}
