import { ChevronDown, ChevronUp } from '../icons';
import { removeItems, increase, decrease } from '../features/cart/cartSlice';
import { useDispatch } from 'react-redux';


export const CardItem = ({id, img, amount, title, price }) => {
    const dispatch = useDispatch();
    return (
        <article className='cart-item'>
            <img src={img} alt={title} />
            <div>
                <h4>{title}</h4>
                <h4 className='item-price'>${price}</h4>
                <button className='remove-btn' onClick={()=>dispatch(removeItems(id))}>Remove</button>
            </div>
            <div>
                <button type='button' className='amount-btn' onClick={()=> dispatch(increase({id}))}>
                    <ChevronUp />
                </button>
                <p className='amount'>{amount}</p>
                <button type='button' className='amount-btn' onClick={()=> dispatch(decrease({id}))}>
                    <ChevronDown />
                </button>
            </div>
        </article>
    )
};

