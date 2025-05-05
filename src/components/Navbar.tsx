import { NavLink } from 'react-router-dom'

export const Navbar = () => {
    return (
        <nav>
            <ul>
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/cart">Cart</NavLink>
                </li>
                <li>
                    <NavLink to="/checkout">Checkout</NavLink>
                </li>
            </ul>
        </nav>
    )
}