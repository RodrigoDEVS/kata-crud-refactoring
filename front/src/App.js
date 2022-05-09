import React from "react";
import { ToDoProvider } from "./context/ToDoContext";
import AppRouter from "./routers/AppRouter";


function App() {
  return (
    <div>
      <ToDoProvider>
        <AppRouter />
      </ToDoProvider>
    </div>

  );
}

export default App;
