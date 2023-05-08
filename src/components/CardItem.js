import { ChevronDown, ChevronUp } from '../icons';

export const CardItem = ({id, img, amount, title, price }) => {
    return (
        <article className='cart-item'>
            <img src={img} alt={title} />
            <div>
                <h4>${title}</h4>
                <h4 className='item-price'>${price}</h4>
                <button className='remove-btn'>Remove</button>
            </div>
            <div>
                <button type='button' className='amount-btn'>
                    <ChevronUp />
                </button>
                <p className='amount'>${amount}</p>
                <button type='button' className='amount-btn'>
                    <ChevronDown />
                </button>
            </div>
        </article>
    )
};

