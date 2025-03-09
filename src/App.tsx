import { RouterProvider } from "react-router-dom";
import router from "./router";
import { ThemeToggleProvider } from "./context/ThemeContext";

function App() {
  return (
    <ThemeToggleProvider>
      <RouterProvider router={router}></RouterProvider>
    </ThemeToggleProvider>
  );
}

export default App;
