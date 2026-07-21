import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./layout/RootLayout";
import HomePage from "./pages/HomePage";
import FormPage from "./pages/FormPage";
import Pomodoro from "./pages/Pomodoro";
import "./App.css";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: <HomePage />,
        },

        {
          path: "/form",
          element: <FormPage />,
        },

        {
          path: "/pomodoro",
          element: <Pomodoro />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
