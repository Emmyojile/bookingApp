import { Outlet } from "react-router-dom"
import { NavBar } from "../Components/NavBar"


export default function Layout() {
    return (
        <main>
            <NavBar/>
            <Outlet/>
        </main>
    )
}