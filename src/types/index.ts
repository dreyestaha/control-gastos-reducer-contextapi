export type Expense = {
    id: string
    expenseName: string
    amount: number
    category: string
    date: Value
}

//tipo para gastos que aún no están ingresados, es lo mismo sin el ID
export type DraftExpense = Omit<Expense, "id">

//estos son tipos propios de la dependencia react-date-picker
type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

export type Category = {
    id: string;
    name: string;
    icon: string;
}