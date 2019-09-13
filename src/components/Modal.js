import React, { Component } from 'react'
import styled from 'styled-components';
import {ProductConsumer} from '../context';
import {ContentButton} from './Button';
import {Link} from 'react-router-dom';

export default class Modal extends Component {
    render() {
        return (
            <ProductConsumer>
                {
                    (value) => {
                        const {modalOpen, closeModal} = value;
                        const {img, title, price} = value.modalProduct;

                        if (!modalOpen){
                            return null;
                        }
                        else {
                            return(
                            <ModalContainer>
                                <div className="container">
                                    <div id="modal" className="row">
                                        <div className="col-8 mx-auto col-md-6 col-lg-4 text-center text-capitalize">
                                            <h5>Item Added To Cart</h5>
                                            <img src={img} className="img-fluid" alt="product"/>
                                            <h5>{title}</h5>
                                            <h5 className="text-muted">price: {price} UGX</h5>
                                            <Link to="/">
                                                <ContentButton onClick={()=>{closeModal()}}>
                                                    Store
                                                </ContentButton>
                                            </Link>
                                            {" "}
                                            <Link to="/cart">
                                                <ContentButton cart onClick={()=>{closeModal()}}>
                                                Go To Cart
                                                </ContentButton>
                                                
                                            </Link>
                                            
                                        </div>
                                         
                                    </div>
                                </div>
                            </ModalContainer>
                            )
                        }
                    }
                }
            </ProductConsumer>
        )
    }
}

const ModalContainer = styled.div `
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0,0,0,0.3);
    display: flex;
    align-items: center;
    justify-content: center;

    #modal{
        background: var(--mainWhite);
        border-radius: 0.3rem;
        padding-right: 3;
    }
`;