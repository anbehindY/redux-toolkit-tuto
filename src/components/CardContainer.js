import { useSelector } from "react-redux";
import { CardItem } from "./CardItem";

export const CardContainer = () => {
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
                <h4>
                    Total<span>${total}</span>
                </h4>
                <button type="button" className="btn clear-btn">Clear All</button>
            </footer>
        </section>
    )
}