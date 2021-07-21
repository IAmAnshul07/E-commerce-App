import React from 'react';
import './CheckoutProduct.css';
import { useStateValue } from './StateProvider';

function CheckoutProduct({ id, title, image, price, rating }) {
    const [{ basket }, dispatch] = useStateValue();

    // This function is used to remove the item from the basket
    const removeFromBasket = () => {
        dispatch({
            type: "REMOVE_FROM_BASKET",
            id: id,
        });
    }
    return (
        <div className='checkoutProduct'>
            <img src={image} alt='' className='checkoutProduct_image' />

            <div className='checkoutProduct_info'>
                <p className='checkoutProduct_title'>{title}</p>

                <p className='checkoutProduct_price'>
                    <small>₹</small>
                    <strong>{price}</strong>
                </p>

                <div className='product_rating'>
                    {Array(rating)
                        .fill()
                        .map((_, i) => (
                            <p>⭐</p>
                        ))}
                </div>
                <button className='remove_button'
                    onClick={removeFromBasket}
                >Remove from basket</button>
            </div>
        </div>
    )
}
export default CheckoutProduct;