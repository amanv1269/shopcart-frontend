// import React, { useEffect } from "react";
// import AddressCard from "../AddressCard/AddressCard";
// import { Button } from "@mui/material";
// import { useDispatch, useSelector } from "react-redux";
// import { getOrderById } from "../../../State/order/Action";
// import { useLocation } from "react-router-dom";
// import CartItem from "../Cart/CartItem";

// const OrderSummary = () => {
//   const dispatch = useDispatch();
//   const location = useLocation();
//   // const { order } = useSelector((store) => store);
//   const { order } = useSelector((store) => store.order);
//   const searchParams = new URLSearchParams(location.search);
//   const orderId = searchParams.get("order_id");
//   useEffect(() => {
//     if (orderId) {
//       dispatch(getOrderById(orderId));
//     }
//   }, [dispatch, orderId]);

//   useEffect(() => {
//     console.log("Order data:", order);
//   }, [order]);
//   return (
//     <div>
//       <div className="p-5 shadow-lg rounded-s-md border">
//         <AddressCard address={order.order?.shippingAddress} />
//       </div>
//       <div>
//         <div className="lg:grid grid-cols-3  relative">
//           <div className="col-span-2">
//             {order.order?.orderItems.map((item) => (
//               <CartItem item={item} />
//             ))}
//           </div>
//           <div className="px-5 sticky top-0 h-[100vh] mt-5 lg:mt-0">
//             <div className="border">
//               <p className="uppercase font-bold opacity-60 p-3">
//                 Price Details
//               </p>
//               <hr />
//               <div className="space-y-3 font-semibold mb-10 mx-3">
//                 <div className="flex justify-between pt-3 text-black">
//                   <span>Price</span>
//                   <span className="text-green-600">
//                     ₹{order.order?.totalprice}
//                   </span>
//                 </div>
//                 <div className="flex justify-between pt-3">
//                   <span>Discount Price</span>
//                   <span className="text-green-600">
//                     -₹{order.order?.discount}
//                   </span>
//                 </div>
//                 <div className="flex justify-between pt-3">
//                   <span>Dilivery Charge</span>
//                   <span className="text-green-600">₹49</span>
//                 </div>
//                 <div className="flex justify-between pt-3">
//                   <span>Total Amount</span>
//                   <span className="text-green-600">
//                     ₹{order.order?.totalDiscountedPrice}
//                   </span>
//                 </div>
//               </div>
//               <Button
//                 variant="contained"
//                 fullWidth
//                 sx={{ px: "2.5rem", py: ".7rem", bgcolor: "#9155fd" }}
//               >
//                 CheckOut
//               </Button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default OrderSummary;

import React, { useEffect } from "react";
import AddressCard from "../AddressCard/AddressCard";
import { Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { getOrderById } from "../../../State/order/Action";
import { useLocation } from "react-router-dom";
import CartItem from "../Cart/CartItem";
import { createPayment } from "../../../State/Payment/Action";

const OrderSummary = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const { order } = useSelector((store) => store);
  const searchParams = new URLSearchParams(location.search);
  const orderId = searchParams.get("order_id");

  const handleCheckout = () => {
    // window.location.href = `http://localhost:3000/payment/${orderId}`;
    window.location.href = `http://localhost:3000/payment/${orderId}`;
    dispatch(createPayment(orderId));
  };

  useEffect(() => {
    dispatch(getOrderById(orderId));
  }, [orderId]);

  useEffect(() => {
    console.log("Order data:", order);
  }, [order]);

  return (
    <div>
      <div className="p-5 shadow-lg rounded-s-md border">
        <AddressCard address={order.order?.shippingAddress
        } />
      </div>
      <div>
        <div className="lg:grid grid-cols-3 relative">
          <div className="col-span-2">
            {order.order?.orderItems?.map((item) => (
              <CartItem key={item.id} item={item} close={true} />
            ))}
          </div>
          <div className="px-5 sticky top-0 h-[100vh] mt-5 lg:mt-0">
            <div className="border">
              <p className="uppercase font-bold opacity-60 p-3">
                Price Details
              </p>
              <hr />
              <div className="space-y-3 font-semibold mb-10 mx-3">
                <div className="flex justify-between pt-3 text-black">
                  <span>Price</span>
                  <span className="text-green-600">₹{order.order?.totalPrice}</span>
                </div>
                <div className="flex justify-between pt-3">
                  <span>Discount Price</span>
                  <span className="text-green-600">-₹{order.order?.discount}</span>
                </div>
                <div className="flex justify-between pt-3">
                  <span>Delivery Charge</span>
                  <span className="text-green-600">₹49</span>
                </div>
                <div className="flex justify-between pt-3">
                  <span>Total Amount</span>
                  <span className="text-green-600">
                    ₹{order.order?.totalDiscountedPrice}
                  </span>
                </div>
              </div>
              <Button
                variant="contained"
                fullWidth
                sx={{ px: "2.5rem", py: ".7rem", bgcolor: "#9155fd" }}
                onClick={handleCheckout}
              >
                CheckOut
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
