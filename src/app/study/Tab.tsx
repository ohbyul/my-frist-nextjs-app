import { Button } from "flowbite-react"

const tabs = [
    { index: 1, name: 'Context', path: '/study/context' },
    { index: 2, name: 'Memo', path: '/study/memo' },
    { index: 3, name: 'Todo', path: '/study/todo' },
    { index: 4, name: 'Tic-Tac-Toe', path: '/study/tictactoe' },
]

const ulClass = "flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400"
const aClass = "inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
const aClassActive = "inline-block p-4 text-blue-600 border-b-2 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500"

export default function Tab() {

    return (
        <div className={ulClass}>
            {tabs?.map((tab, index) => {
                return (
                    <a href={tab.path} className={aClass}>
                        <Button color="dark">{tab.name}</Button>
                    </a>
                )
            })}
        </div>
    )
}
