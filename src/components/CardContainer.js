import { useSelector, useDispatch } from "react-redux";
import { CardItem } from "./CardItem";
import { openModal } from "../features/modal/modalSlice";
export const CardContainer = () => {
    const dispatch = useDispatch();
    const { cartItems, total, amount } = useSelector((state) => state.cart);
    if (amount<1){
        return (
            <section className="cart">
                <header>
                    <h2>Your bag</h2>
                    <h4 className="empty-cart">is currently empty</h4>
                </header>
            </section>
        )
    }
    return (
        <section className="cart">
            <header>
                <h2>Your bag</h2>
            </header>
            <div>
                {
                    cartItems.map((item) => {
                        return (
                            <CardItem key={item.id} {...item} />
                        )
                    })
                }
            </div>
            <footer>
                <hr />
                <div className="cart-total">
                <h4>
                    Total<span>${total.toFixed(2)}</span>
                </h4>
                </div>
                <button type="button" className="btn clear-btn" onClick={() => dispatch(openModal())}>Clear All</button>
            </footer>
        </section>
    )
}