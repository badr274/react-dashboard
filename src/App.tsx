import { RouterProvider } from "react-router-dom";
import router from "./router";
import { ThemeToggleProvider } from "./context/ThemeContext";
import ScreenSizeWarning from "./components/ScreenSizeWarning";

function App() {
  return (
    <ThemeToggleProvider>
      <ScreenSizeWarning />
      <RouterProvider router={router}></RouterProvider>
    </ThemeToggleProvider>
  );
}

export default App;
