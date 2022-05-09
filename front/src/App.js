import React from "react";
import { ToDoProvider } from "./context/ToDoContext";
import { ToDoListProvider } from "./context/ToDoListContext";
import AppRouter from "./routers/AppRouter";


function App() {
  return (
    <div>
      <ToDoListProvider>
        <ToDoProvider>
          <AppRouter />
        </ToDoProvider>
      </ToDoListProvider>

    </div>

  );
}

export default App;
