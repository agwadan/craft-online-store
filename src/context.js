import React, { Component } from 'react'
import {StoreProducts, detailProduct, storeProducts} from './data';

const ProductContext = React.createContext();

class ProductProvider extends Component {
    state = {
        products:       [],
        detailProduct:  detailProduct
    };

    componentDidMount(){
        this.setProducts();
    }

    setProducts = () => {
        let tempProducts = [];
        storeProducts.forEach(item => {
            const singleItem = {...item};
            tempProducts = [...tempProducts, singleItem]
            
        })

        this.setState(()=>{
            return {products: tempProducts}
        });
    };

    /**UTILITY METHOD THAT GETS THE ITEM BY ID */
    getItem = (id) => {
        const product = this.state.products.find(item => item.id === id);
        return product;
    };

    /**FUNCTION THAT IS CALLED FROM PRODUCT.JS 
     * TO SHOW DETAILS OF A PRODUCT 
    */
    handleDetail = (id) => {
        const product = this.getItem();
        this.setState(() => {
            return {detailProduct:product}
        })
        
    }

    /**Below is the function that handles addition of
     * a product to the cart
     */
    addToCart = (id) => {
        console.log(`add item ${id} to Cart`);
    }

    render() {
        return (
            <ProductContext.Provider value={{
                ...this.state,
                handleDetail: this.handleDetail,
                addToCart:this.addToCart,
            }}>
                {this.props.children}
            </ProductContext.Provider>
        )
    }
}

const ProductConsumer = ProductContext.Consumer;
export {ProductProvider, ProductConsumer};