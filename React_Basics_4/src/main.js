import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Body from "./components/Body";
import About from './components/About';
import Error from "./components/Error";
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'
import Contact from "./components/Contact";
import Cart from "./components/Cart";
import RestaurantDetails from "./components/RestaurantDetails";
import ProfileClass from "./components/ProfileClass";
import Shimmer from "./components/Shimmer";
const Instamart = lazy(() => import('./components/Instamart'))

const AppLayout = () => (
  <>
    <Header />
    <Outlet />
    <Footer />
  </>
);

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Body />,
      },
      {
        path: '/about',
        element: <About />,
        children: [
          {
            path: '/about/profileclass',
            element: <ProfileClass />
          },
        ]
      },
      {
        path: '/contact',
        element: <Contact />,
      },
      {
        path: '/cart',
        element: <Cart />,
      },
      {
        path: '/restaurant/:resId',
        element: <RestaurantDetails />,
      },
      {
        path: '/instamart',
        element: (
          <Suspense fallback={<Shimmer />}>
            <Instamart />
          </Suspense>
        ),
      },
    ]
  },
])

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<RouterProvider router={appRouter} />);