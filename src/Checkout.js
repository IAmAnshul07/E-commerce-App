import React from 'react'
import { useStateValue } from './StateProvider';
import './Checkout.css';
import CheckoutProduct from './CheckoutProduct';
import Subtotal from './Subtotal';

function Checkout() {
    const [{ basket }] = useStateValue();
    return (
        <div className='checkout'>
            <div classname='checkout_left'>
                <img className='checkout_add'
                    src='https://www.bigcommerce.com/blog/wp-content/uploads/2018/11/youtube-advertising-hero-img.jpg'
                />
                {basket?.length === 0 ? (
                    <div>
                        <h2 className='basket_heading'>Your Shopping Basket is empty</h2>
                        <p className='basket_para'>Your shopping cart is waiting. Give it purpose – fill it with groceries, clothing, household supplies, electronics and more.</p>
                    </div>
                ) : (
                        <div>
                            <h2 className='item_basket1'>Your Shoping Basket</h2>
                            {basket.map(item => (
                                <CheckoutProduct
                                    id={item.id}
                                    title={item.title}
                                    image={item.image}
                                    price={item.price}
                                    rating={item.rating}
                                />
                            ))}
                        </div>
                    )}
            </div>
            {basket.length > 0 && (
                <div className='checkout_right'>
                    <Subtotal />
                </div>
            )}
        </div>
    );
}
export default Checkout;