import { Button, IconButton } from "@mui/material";
import React, { useEffect } from "react";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import {
  getCartItem,
  removeCartItem,
  updateCartItem,
} from "../../../State/Cart/Action";
import { useDispatch, useSelector } from "react-redux";

const CartItem = ({ item, close }) => {
  const dispatch = useDispatch();
  const { cart } = useSelector((store) => store);
  const handleUpdateCartItem = (num) => {
    const data = {
      data: { quantity: item.quantity + num },
      cartItemId: item?.id,
    };
    dispatch(updateCartItem(data));
  };

  const handleRemoveartItem = () => {
    dispatch(removeCartItem(item.id));
  };

  useEffect(() => {
    console.log("quantity");
  }, [cart.updateCartItems, cart.deleteCartItem]);

  return (
    <div className="p-5 shadow-lg border rounded-md">
      <div className="flex items-center">
        <div className="w-[5rem] h-[5rem] lg:w-[9rem] lg:h-[9rem]">
          <img
            className="h-full w-full object-cover object-top"
            src={item.product.imageUrl}
            alt=""
          />
        </div>
        <div className="ml-5 space-y-1">
          <p className="font-semibold">{item.product.title}</p>
          <p className="opacity-70">
            Size: {item.size},{item.color}
          </p>
          <p className="opacity-70 mt-2"> Seller: {item.product.brand}</p>
          <div className="flex space-x-5 items-center  text-gray-900 pt-6">
            <p className="font-semibold"> ₹{item.discountedPrice}</p>
            <p className="line-through opacity-50">₹{item.price}</p>
            <p className="text-green-600 font-semibold">
              {item.product.discountPercent}%
            </p>
          </div>
        </div>
      </div>
      {!close && (
        <div className="lg:flex items-center lg:space-x-10 pt-4">
          <div className="flex items-center space-x-2">
            <IconButton
              onClick={() => handleUpdateCartItem(-1)}
              disabled={item.quantity <= 1}
              sx={{ color: "RGB(145 85 253)" }}
            >
              <RemoveCircleOutlineIcon />
            </IconButton>
            <span className="py-1 px-7 border rounded-sm">{item.quantity}</span>{" "}
            <IconButton
              onClick={() => handleUpdateCartItem(+1)}
              sx={{ color: "RGB(145 85 253)" }}
            >
              <AddCircleOutlineIcon />
            </IconButton>
          </div>
          <div>
            <Button
              onClick={handleRemoveartItem}
              sx={{ color: "RGB(145 85 253)" }}
            >
              remove
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartItem;
