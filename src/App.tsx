import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import BackLayout from "./layouts/BackLayout";
import NavbarLayout from "./layouts/NavbarLayout";
import NavbarXLLayout from "./layouts/NavbarXLLayout";
import ChatsPage from "./sections/chats/ChatsPage";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          element: <BackLayout />,
          children: [],
        },
        {
          element: <NavbarLayout />,
          children: [
            {
              path: "/",
              index: true,
              element: <>Main</>,
            },
            {
              path: "/chats",

              element: <ChatsPage />,
            },
          ],
        },
        {
          element: <NavbarXLLayout />,
          children: [
            {
              path: "/chats/:username",

              element: <ChatsPage />,
            },
          ],
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default App;
