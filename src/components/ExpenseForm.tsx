
import { categories } from "../data/categories"

export default function ExpenseForm() {
  return (
    <div>
        <form 
            className="space-y-5"
        >
            <legend
                className="text-3xl text-cyan-700 border-b-4 border-cyan-800 p-5 text-center uppercase"
            >Agregar nuevo Gasto
            </legend>

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
                />
            </div>

            <div className="flex flex-col gap-2">
                <label 
                    htmlFor="amount"
                    className="text-xl font-bold px-2"
                >Categoría:
                </label>
                <select 
                    id="amount"
                    className="bg-gray-100 p-2"
                    name="amount"
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

            <input 
                type="submit" 
                value={"Registrar Gasto"}
                className="bg-cyan-700 text-white font-bold rounded-lg cursor-pointer w-full p-2 uppercase"

            />
        </form>

    </div>
  )
}
