import Head from "next/head";
import TodoList from "../components/TodoList/todoList";

export default function Home() {
  return (
    <div className="flex flex-col items-center w-full h-full bg-blend-darken bg-slate-200">
      <header className="top-1 items-center text-center mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl">
        Todo List
      </header>
      <main className="w-full grid-cols-2">
        <TodoList />
      </main>
    </div>
  );
}
