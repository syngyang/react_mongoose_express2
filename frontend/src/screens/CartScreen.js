import './CartScreen.css'

// Component
import CartItem from "../components/CartItem";

const CartScreen = () => {
    return (
        <div className="cart-screen">
            <div className="cart-screen-left">
                <h2>Shopping Cart</h2>
                <CartItem />
                <CartItem />
                <CartItem />
                <CartItem />
            </div>
            <div className="cart-screen-right">
                <div className="cart-screen-info">
                    <p>Subtotal (0) items</p>
                    <p>$499.99</p>
                </div>
                <div>
                <button>Proceed To Checkout</button>
                </div>
            </div>
        </div>
    )
}

export default CartScreen

