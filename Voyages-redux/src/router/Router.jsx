// Avec React router, il est possible de déplacer la logique de navigation de nbotre projet dans un fichier dédié.
// Dans ce projet, on ne servira plus de App.jx
// Avant : main.jsx => App.jsx => components/pages
// Sur ce projet : main.jsx => RouterProvider => Router.jsx => Layout.jsx => Pages.jsx

import { createBrowserRouter } from "react-router-dom"
// createBrowserRouter permet de créer un router moderne basé sur les urls du navigateur
import MainLayout from "../layouts/MainLayout"
import HomePage from "../pages/HomePage"
import AboutPage from "../pages/AboutPage"
import NotFoundPage from "../pages/NotFoundPage"
import DestinationsPage from "../pages/DestinationsPage"
import DestinationDetailPage from "../pages/DestinationDetailPage"
import SearchPage from "../pages/SearchPage"
import ContactPage from "../pages/ContactPage"
import LoginPage from "../pages/LoginPage"
import RegisterPage from "../pages/RegisterPage"
import ProfilePage from "../pages/ProfilePage"

import DashboardPage from "../pages/DashboardPage"

import ProtectedRoute from "../components/ProtectedRoute"
import AdminRoute from "../components/AdminRoute"

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        // toutes les pages utilisent MainLayout
        errorElement: <NotFoundPage />,
        children: [
            {
                index: true,
                // cette page est la page par défaut
                // index: true = path: ""
                element: <HomePage />
            },
            {
                path: "about",
                element: <AboutPage />
            },
            {
                path: "destinations",
                element: <DestinationsPage />
            },
            {
                path: "destinations/:slug",
                element: <DestinationDetailPage />
            },
            {
                path: "search",
                element: <SearchPage />
            },
            {
                path: "contact",
                element: <ContactPage />
            },
            {
                path: "login",
                element: <LoginPage />
            },
            {
                path: "register",
                element: <RegisterPage />
            },
            {
                path: "profile",
                element: (
                    <ProtectedRoute>
                        <ProfilePage />
                    </ProtectedRoute>
                )
            },
            {
                path: "admin",
                element: (
                    <AdminRoute>
                        <DashboardPage />
                    </AdminRoute>
                )
            },
            {
                path: "*",
                element: <NotFoundPage />
            },
        ]
    }
]);

export default router; 