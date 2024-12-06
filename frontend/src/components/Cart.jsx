import React, { useState } from "react";
import {
    ShoppingCart,
    Close,
    RemoveShoppingCart,
    RemoveCircle,
    AddCircle,
} from "@mui/icons-material";
// import "../styles/cart.css";
import "../styles/scrollbar.css";
import { useDispatch, useSelector } from "react-redux";
import {
    removeFromCart,
    updateCartQuantity,
    clearCart,
} from "../actions/cartActions";
// import { useNavigate } from "react-router";

function Cart({ handleCartToggle, isOpen }) {
    const cartItemsList = useSelector((state) => state.cart.cartItemsList);
    const totalQuantity = cartItemsList.reduce(
        (acc, item) => acc + Number(item.qty),
        0
    );
    const totalPrice = cartItemsList.reduce(
        (acc, item) => acc + Number(item.price * item.qty),
        0
    );
    const dispatch = useDispatch();
    // const navigate = useNavigate();

    // const { isAuthenticated } = useSelector((state) => state.user);

    const handleClearCart = () => {
        const confirmClear = window.confirm(
            "Are you sure you want to cancel your order ?"
        );
        if (confirmClear) {
            dispatch(clearCart());
        }
    };
    const userLogin = useSelector((state) => state.userLogin);
    const { userInfo } = userLogin;

    const handleBuyNow = () => {
        if (!userInfo) {
            alert("Please login to your account for placing order");
            // handleCartToggle(false);
        } else {
            const confirmOrder = window.confirm(
                "Are you sure you want to proceed with the order?"
            );
            if (confirmOrder) {
                dispatch(clearCart());
                alert(
                    "Order Confirmed ! Thank You for Shopping with us. :) :)"
                );
            }
        }
    };

    console.log("Cart items:", cartItemsList);
    return (
        <div
            className={`cart fixed top-0 right-0 w-[35rem] h-full py-4 px-8 bg-[#e4efe4] shadow-[rgba(0,0,0,0.5)_-2px_0_5px] z-[1000] transform transition-transform duration-300 ${
                isOpen ? "translate-x-0" : "translate-x-full"
            }`}
        >
            <div className="pt-4 flex items-center justify-end mr-12">
                <Close
                    className="cart-close-btn cursor-pointer text-[#014210] text-4xl absolute top-8 right-20"
                    style={{ fontSize: "2.4rem" }}
                    onClick={() => {
                        handleCartToggle();
                    }}
                />
            </div>
            <div className="cart-heading flex items-center justify-evenly mt-20">
                <h1 className="cart-title text-4xl text-center text-[#014210] font-bold">
                    My Cart
                </h1>
                <ShoppingCart
                    style={{ fontSize: "2.8rem", color: "#014210" }}
                />
            </div>
            {cartItemsList.length === 0 ? (
                <strong className="cart-message block text-[#560000] text-center text-2xl my-8 mx-auto">
                    Your cart is empty
                </strong>
            ) : (
                <ul className="cart-items scrollbar max-h-[28rem] overflow-y-auto py-4 mt-4 px-8">
                    {cartItemsList.map((cartItem) => {
                        return (
                            <li
                                className="cart-item grid grid-cols-[1fr_3fr] items-start justify-center p-2 gap-x-8"
                                key={cartItem.productId}
                            >
                                <CartItem cartItemData={cartItem} />
                            </li>
                        );
                    })}
                </ul>
            )}
            <div className="cart-info flex items-center justify-evenly pl-0 text-[#014210] font-semibold text-xl p-8 ">
                <h3 className="total-info">Total Price: ₹{totalPrice}</h3>
                <h3 className="total-info">Quantity: {totalQuantity}</h3>
            </div>
            <div className="cart-btns flex flex-col items-center justify-center pl-0 text-center gap-4 ">
                <button
                    className="cart-btn buy-btn text-center rounded-md text-xl w-full font-semibold border-[3px] border-[#014210] text-[#014210] hover:bg-[#014210] hover:text-white transition-all ease-linear duration-1000"
                    disabled={cartItemsList.length === 0}
                    aria-disabled={cartItemsList.length === 0}
                    onClick={handleBuyNow}
                >
                    Buy Now
                </button>
                <button
                    className="cart-btn cancel-btn text-center rounded-md text-xl w-full font-semibold border-[3px] border-[#560000] text-[#560000] hover:bg-[#560000] hover:text-white transition-all ease-linear duration-1000"
                    disabled={cartItemsList.length === 0}
                    aria-disabled={cartItemsList.length === 0}
                    onClick={handleClearCart}
                >
                    Cancel
                </button>
            </div>
        </div>
    );
}

function CartItem({ cartItemData }) {
    const {
        productId,
        productBrand,
        productName,
        image,
        qty,
        stockCount,
        price,
    } = cartItemData;
    const dispatch = useDispatch();
    const handleRemoveFromCart = () => {
        dispatch(removeFromCart(productId));
    };

    const handleQuantityUpdate = (change) => {
        const newQty = qty + change;
        console.log("Current Quantity:", qty);
        console.log("New Quantity:", newQty);
        console.log("Stock Count:", stockCount);
        if (newQty > 0 && newQty < stockCount)
            dispatch(updateCartQuantity(productId, newQty));
        else if (newQty <= 0) {
            dispatch(removeFromCart(productId));
        }
    };

    return (
        <>
            <div className="cart-img-info w-36 flex flex-col items-center justify-center gap-4">
                <img
                    src={image}
                    alt={productName}
                    className="cart-item-img w-full border-2 border-black"
                />
                <div className="cart-item-qty flex items-center justify-center gap-3">
                    <RemoveCircle
                        className="update-btn cursor-pointer"
                        style={{ color: "#560000" }}
                        onClick={() => {
                            handleQuantityUpdate(-1);
                            // console.log("-1");
                        }}
                    />
                    <span>{qty}</span>
                    <AddCircle
                        className="update-btn cursor-pointer"
                        style={{ color: "#560000" }}
                        onClick={() => {
                            handleQuantityUpdate(1);
                            // console.log("+1");
                        }}
                    />
                </div>
            </div>
            <div className="cart-item-info flex flex-col justify-start items-end px-8 text-end gap-2">
                <RemoveShoppingCart
                    className="remove-btn cursor-pointer"
                    style={{ fontSize: "1.6rem", color: "#560000" }}
                    onClick={handleRemoveFromCart}
                />
                <h4 className="cart-item-name font-semibold text-lg text-[#560000]">
                    {productBrand + " " + productName}
                </h4>
                <h4 className="cart-total-price text-lg font-bold text-[#014210]">
                    ₹ {price * qty}
                </h4>
            </div>
            <p className="endLine text-xl text-center">
                <hr
                    style={{
                        width: "250%",
                        border: "0.15rem solid #014210",
                        borderRadius: "100rem",
                        margin: "1rem 0",
                    }}
                />
            </p>
        </>
    );
}

export default Cart;
