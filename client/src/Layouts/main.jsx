import { Outlet } from "react-router-dom"
import { NavBar } from "../Components/NavBar"
import { Header } from "../Components/Header"


export default function Layout() {
    return (
        <main>
            <NavBar/>
            <Header/>
            <Outlet/>
        </main>
    )
}