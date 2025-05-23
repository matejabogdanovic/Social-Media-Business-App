import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import BackLayout from "./layouts/BackLayout";
import NavbarLayout from "./layouts/NavbarLayout";
import NavbarXLLayout from "./layouts/NavbarXLLayout";
import ChatsPage from "./sections/chats/ChatsPage";
import ProfilePage from "./sections/profile/ProfilePage";
import PostPage from "./sections/profile/posts_components/PostPage";
import Search from "./sections/search/Search";
import Container from "./common/Container";
import Recommended from "./sections/recommended/Recommended";

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
              element: (
                <Container>
                  <Search />
                  <Recommended />
                </Container>
              ),
            },
            {
              path: "/chats",

              element: <ChatsPage />,
            },
            {
              path: "/profile/:username",
              element: <ProfilePage />,
            },
            {
              path: "/profile/:username/posts/:id",
              element: <PostPage />,
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
