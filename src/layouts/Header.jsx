import { NavLink } from "react-router"
export default function Header() {
    return (
        <header>
            <h1>Leonardo Corazzini</h1>
            <div className="navbar">
                <NavLink to='/'>portfolio</NavLink>
                <NavLink to='about'>chi sono</NavLink>
                <NavLink to='contact'>contatti</NavLink>
            </div>
        </header>
    )
}