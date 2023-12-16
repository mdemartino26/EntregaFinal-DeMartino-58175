import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import CartItem from '../CartItem/CartItem'
import { Link } from "react-router-dom";
import './Cart.css';

const Cart = () => {
    const {cart, clearCart, totalQuantity, totalCost} = useContext(CartContext)

    if(totalQuantity === 0) {
        return ( 
            <div className="EmptyCartDiv">
                <h1 className="EmptyCart"> No hay items en el carrito </h1>
                <Link to='/' className="Option" id="ProdOption">Productos</Link>
            </div>
        )
    }

    return(
        <div>
            {cart.map(p => <CartItem key = {p.id}{...p}/>)}
            <h3>Total: ${totalCost}</h3>
            <button onClick={() => clearCart()} className="Button">Limpiar carrito</button>
            <Link to='/checkout' className="Option">Checkout</Link>
        </div>
    )
}

export default Cart;