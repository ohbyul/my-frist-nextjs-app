import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import { TodosContextProvider } from "./TodosContext";

export default function page() {
    return (
        <>
            <TodosContextProvider>
                <TodoForm />
                <TodoList />
            </TodosContextProvider>
        </>
    )
}
