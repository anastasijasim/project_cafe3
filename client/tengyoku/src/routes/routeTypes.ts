import { PropsWithChildren } from "react";

type MainRoute = {
    path:"/" | "/login"| "/register"
    Component:() => JSX.Element;
};

export type MainLayoutRoutes = {
    Layout: (children: PropsWithChildren) => JSX.Element;
    routes:MainRoute[];
}