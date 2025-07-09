import type { ReactNode } from "react"

type ErrorMessageProps = {
    children: ReactNode
}

export default function ErrorMessage({children}:ErrorMessageProps) {
  return (
    <div className="bg-red-500 text-gray-50 text-lg text-center w-full font-bold p-3 rounded-lg">
      {children}
    </div>
  )
}
