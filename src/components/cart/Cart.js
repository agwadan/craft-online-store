import React, { Component } from 'react';
import Title from '../Title';
import CartColumns from './CartColumns';
import {ProductConsumer} from '../../context';
import EmptyCart from './EmptyCart';
import CartList from './CartList'


export default class Cart extends Component {
    render() {
        return (
            <section>

                <ProductConsumer>
                    {value => {
                        const {cart} = value;

                        /**In the "If" statement below, 
                         * the title is only displayed if the cart is empty*/
                        if (cart.length > 0) {
                            return (
                                <React.Fragment>
                                    <Title name="your" title="cart"></Title>

                                    {/**Below is a Cart Columns element to display headings in the cart component */}
                                    <CartColumns />

                                    {/**Below is a CartList Component to list the items added to the cart */}
                                    <CartList value={value}/>

                                    
                                </React.Fragment>
                                
                            )
                        } else {
                            return (
                                <EmptyCart />
                            )
                        }
                    }}

                </ProductConsumer>

                

                
            </section>
        )
    }
}
