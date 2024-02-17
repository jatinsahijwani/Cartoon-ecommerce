import React from "react";
import CartItem from "./CartItem";
import { Badge, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import '../styles/cart.css';

const Cart = () => {
  const navigate = useNavigate();
  // Hardcoded cart data
  const cart = {
    cartItems: [
      {
        id: 1,
        name: "Product 1",
        price: 100,
        quantity: 2,
      },
      {
        id: 2,
        name: "Product 2",
        price: 50,
        quantity: 1,
      },
    ],
    cart: {
      totalItem: 3,
      totalPrice: 250,
      discount: 25,
      totalDiscountedPrice: 225,
    },
  };

  return (
    <div className="cartOuter">
      {cart.cartItems.length > 0 && (
        <div className="lg:grid grid-cols-3 lg:px-16 relative">
          <div className="lg:col-span-2 lg:px-5 bg-white">
            <div className=" space-y-3">
              {cart.cartItems.map((item) => (
                <CartItem key={item.id} item={item} showButton={true} />
              ))}
            </div>
          </div>
          <div className="px-5 sticky top-0 h-[100vh] mt-5 lg:mt-0 ">
            <div className="border p-5 bg-white shadow-lg rounded-md">
              <p className="font-bold opacity-60 pb-4">PRICE DETAILS</p>
              <hr />

              <div className="space-y-3 font-semibold">
                <div className="flex justify-between pt-3 text-black ">
                  <span>Price ({cart.cart.totalItem} item)</span>
                  <span>₹{cart.cart.totalPrice}</span>
                </div>
                <div className="flex justify-between">
                  <span>Discount</span>
                  <span className="text-green-700">-₹{cart.cart.discount}</span>
                </div>
                <div className="flex justify-between">
                  <span>Delivery Charges</span>
                  <span className="text-green-700">Free</span>
                </div>
                <hr />
                <div className="flex justify-between font-bold text-lg">
                  <span>Total Amount</span>
                  <span className="text-green-700">₹{cart.cart.totalDiscountedPrice}</span>
                </div>
              </div>

              <Button
                onClick={() => navigate("/checkout?step=2")}
                variant="contained"
                type="submit"
                sx={{ padding: ".8rem 2rem", marginTop: "2rem", width: "100%" }}
              >
                Check Out
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;