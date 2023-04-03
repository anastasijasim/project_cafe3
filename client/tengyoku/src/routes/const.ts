import Home from "../page/Home/Home";
import Login from "../page/Login/Login";
import MainLayout from "../layouts/MainLayout";
import { MainLayoutRoutes } from "./routeTypes";
import Register from "../page/Register/Register";

export const HOME_PATH = "/";
export const LOGIN_PATH = "/login";
export const REGISTER_PATH = "/register"

export const mainLayoutRoutes:MainLayoutRoutes = {
    Layout: MainLayout,
    routes:[
        {path: HOME_PATH, Component: Home},
        {path: LOGIN_PATH, Component: Login},
        {path: REGISTER_PATH, Component:Register},
    ],
};