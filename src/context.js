import React, { Component } from 'react'
import {StoreProducts, detailProduct, storeProducts} from './data';

const ProductContext = React.createContext();

class ProductProvider extends Component {
    state = {
        products:       [],
        detailProduct:  detailProduct,
        cart: [],
        modalOpen: true,
        modalProduct: detailProduct,

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
        const product = this.getItem(id);
        this.setState(() => {
            return {detailProduct:product}
        })
        
    }

    /**Below is the function that handles addition of
     * a product to the cart
     */
    addToCart = (id) => {
        let tempProducts = [...this.state.products]; //Getting access to all the products in the state
        const index = tempProducts.indexOf(this.getItem(id)); //Getting the index of the item. 
        const product = tempProducts[index];
        product.inCart = true;
        product.count = 1;

        const price = product.price;
        product.total = price; //Assigning the price of the item to the total price to pay for the product

        this.setState(() => {
            return {
                products: tempProducts,
                cart: [...this.state.cart, product]
            };
        },() => {console.log(this.state)});

    };

    /**FUNCTION TO DISPLAY THE MODAL WHEN AN ITEM IS ADDED TO THE CART */
    openModal = (id) => {
        const product = this.getItem(id);
        this.setState (() => {
            return{
                modalProduct: product,
                modalOpen: true
            }
        })
    }


    /**FUNCTION TO CLOSE THE MODAL */
    closeModal = () => {
        this.setState(() => {
            return{modalOpen: false};
        })
    }

    render() {
        return (
            <ProductContext.Provider value={{
                ...this.state,
                handleDetail: this.handleDetail,
                addToCart: this.addToCart,
                openModal: this.openModal,
                closeModal: this.closeModal
            }}>
                {this.props.children}
            </ProductContext.Provider>
        )
    }
}

const ProductConsumer = ProductContext.Consumer;
export {ProductProvider, ProductConsumer};