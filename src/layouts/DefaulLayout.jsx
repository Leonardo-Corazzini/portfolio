import { Outlet } from "react-router";
import Header from "./Header";


export default function DefaulLayout() {
    return (
        <>
            <Header />
            <main>
                <Outlet />
            </main>
        </>
    )
}