import React from "react";
import { useState, useEffect } from "react";
import { FaCalendarPlus } from "react-icons/fa";
import { HiOutlineX } from "react-icons/hi";
import { HiTrash } from "react-icons/hi";
import { Authentication } from "../components/General/Authentication";

function ECart() {

  const products = [
    {
      name: 'Terra-cotta',
      price: '75',
      quantity: 1,
      imageUrl:
        'https://bongoniketan.in/cdn/shop/files/BengalhandmadeterracottaartifactproductfromPanchmura_Bishnupur_Bankura_WestBengalbyBONGONIKETAN55_1024x1024@2x.jpg?v=1717733608',
    },
    {
      name: 'Earthen Pots',
      price: '50',
      quantity: 1,
      imageUrl:
        'https://www.sowpeace.in/cdn/shop/files/sowpeace-terracotta-water-glass-artful-functional-home-kitchenwareutensilssowpeaceterr-uten-terr-pwgu-818014.jpg?v=1726732745',
    }
  ]

  const [isOpen, setIsOpen] = useState(false);

  const toggleOffCanvas = () => {
    setIsOpen(!isOpen);
  };

  const [cartItem, setCartItem] = useState([]);

  // Retrieve cart from localStorage on component mount
  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setCartItem(JSON.parse(storedCart));
    }
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItem));
  }, [cartItem]);


  const addCart = (product) => {
    setCartItem((prevItems) => [...prevItems, product]);
  }

  const removeCart = (productName) => {
    const updatedCart = cartItem.filter((item) => item.name !== productName);
    setCartItem(updatedCart); // Update state
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  }

  const addQuantity = (productName, quantity) => {
    const updatedCart = cartItem.map((item) => item.name === productName ? { ...item, quantity: quantity } : item);
    setCartItem(updatedCart); // Update state
  }

  const total = cartItem.reduce((value, item) => value + item.quantity * item.price, 0);

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-20 px-6 lg:px-8 xl:grid-cols-3">

        <button className="scroll-to-top text-4xl text-yellow-600 hover:text-blue-400 bg-black-400 fixed"
          style={{
            top: "120px",
            right: "40px",
          }}
          onClick={toggleOffCanvas}
        >
          <FaCalendarPlus />
          {
            cartItem.length > 0 ?
              <span className="absolute -top-2 -right-4 h-5 w-5 rounded-full text-base text-slate-100 bg-red-600 flex justify-center items-center items" >{cartItem.length}</span> 
              :
              ""
          }
        </button>

        <div className="max-w-xl">
          <h2 className="text-pretty text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
            Buy Our Products
          </h2>
          <p className="mt-6 text-lg/8 text-gray-600">
            Discover Quality, Embrace Value – Shop Our Products Today !!
          </p>
        </div>

        <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
          {products.map((item) => (
            <li key={item.name} >

              <div className="flex items-center gap-x-6 relative group w-30 h-24 md:w-30 md:h-24 bg-emerald-200 rounded-lg overflow-hidden hover:shadow-2xl shadow-black cursor-pointer">

                <img alt="" src={item.imageUrl} className="m-6 size-16 rounded-full" />
                <div>
                  <h3 className="text-base/7 font-semibold tracking-tight text-gray-900">{item.name}</h3>
                  <p className="text-sm/6 font-semibold text-red-500">{"₹" + " " + item.price}</p>
                </div>

                {
                  cartItem.some((value) => value.name === item.name) ?
                    <input
                      id="number-input"
                      type="number"
                      onChange={(e) => addQuantity(item.name, e.target.value)}
                      className="w-20 p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-300"
                    />

                    :
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                      onClick={() => addCart(item)}
                    >
                      Add
                    </button>
                }
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="relative">

        {/* Offcanvas overlay */}
        <div
          className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
            }`}
          onClick={toggleOffCanvas}
        ></div>

        {/* Offcanvas panel */}
        <div
          className={`mx-auto fixed top-0 right-0 h-full min-w-80 bg-white shadow-lg z-50 transform transition-transform ${isOpen ? "translate-x-0" : "translate-x-full"
            }`}
        >
          <div className="p-6 bg-sky-300">
            <span className="text-lg font-semibold">Your Order Summary</span>
            <button
              onClick={toggleOffCanvas}
              className="px-4 py-2 text-2xl border-2 border-slate-400 text-black-100 rounded-3xl"
              style={{ float: "right" }}
            >
              <HiOutlineX />
            </button>
          </div>

          {cartItem.length > 0 ? (
            <ul>
              {cartItem.map((item, index) => (
                <li key={index}>
                  <div className="px-6 py-4 text-sm text-gray-700 border border-gray-300">
                    <p >{item.name}</p>

                    <span className="p-4" >
                      Price : {"₹" + " " + item.price}
                    </span>

                    <span className="p-4" >
                      Quantity : {item.quantity}
                    </span>

                    <button className="bg-slate-600 hover:bg-slate-900 text-white font-bold py-2 px-4 rounded-full"
                      onClick={() => removeCart(item.name)}
                      style={{ float: "right" }}
                    >
                      <HiTrash />
                    </button>

                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-xl text-center md:text-base text-zinc-700 italic" >Your cart is empty.</p>
          )}

          <div className="p-3 bg-sky-300 fixed" style={{ width: "100%", bottom: "0px", left: "0px" }} >

            <span className="text-base font-semibold">Total Bill : ₹ {total}</span>
            <button style={{ float: "right" }} >
              <Authentication />
            </button>

          </div>
        </div>
      </div>
    </div>
  );
}
export default ECart;