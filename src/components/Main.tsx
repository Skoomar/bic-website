import React from "react";
import { createBrowserRouter, Routes, RouterProvider } from "react-router-dom";

import Header from "./Header/Header";
import ErrorPage from "./ErrorPage";
import Home from "./Sections/Home/Home";
import Timetable from "./Sections/Timetable/Timetable";
import Donate from "./Sections/Donate/Donate";
import ContactUs from "./Sections/ContactUs";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
        errorElement: <ErrorPage />
    },
    {
        path: "/prayer-timetable",
        element: <Timetable />
    },
    {
        path: "/donate",
        element: <Donate />
    },
    {
        path: "/contact-us",
        element: <ContactUs />
    }
]);

const Main = () => {
    return (
        <div>
            <Header />
            <RouterProvider router={router} />
        </div>
    );
};

export default Main;