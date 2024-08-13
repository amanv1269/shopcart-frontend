// import React, { useEffect } from "react";
// import AddressCard from "../AddressCard/AddressCard";
// import OrderTracking from "./OrderTracking";
// import { Box, Grid } from "@mui/material";

// import { deepPurple } from "@mui/material/colors";
// import StarBorderIcon from "@mui/icons-material/StarBorder";
// import { useDispatch, useSelector } from "react-redux";
// import { useLocation, useParams } from "react-router-dom";
// import { getorderItem } from "../../../State/orderItem/Action";
// import { getUserOrderHistory } from "../../../State/order/Action";

// const OrderDetails = () => {
//   //   return (
//   //     <div className="px-5 lg:px-20">
//   //       <div>
//   //         <h1 className="font-bold text-xl py-7">Delivery Address</h1>
//   //         <AddressCard />
//   //       </div>
//   //       <div className="py-20">
//   //         <OrderTracking activeStep={0} />
//   //       </div>
//   //       <Grid className="space-y-5" container>
//   //         {[1, 1, 1, 1, 1].map((item) => (
//   //           <Grid
//   //             item
//   //             container
//   //             className="shadow-xl rounded-md p-5 border"
//   //             sx={{ alignItems: "center", justifyContent: "space-between" }}
//   //           >
//   //             <Grid item xs={6}>
//   //               <div className="flex items-center space-x-4 ">
//   //                 <img
//   //                   className="w-[5rem] h-[5rem] object-cover object-top "
//   //                   src="https://rukminim2.flixcart.com/image/612/612/xif0q/shirt/v/y/s/xxl-4868-70-funday-fashion-original-imagm5zcgkmgjkdq.jpeg?q=70"
//   //                   alt=""
//   //                 />
//   //                 <div className="space-y-5 ml-5 ">
//   //                   <p className="font-semibold">Men Slim Mid Rise Black Jeans</p>
//   //                   <p className="space-x-5 opacity-50 text-xs font-semibold">
//   //                     <span>Size: xl</span>

//   //                     <span>Color: red</span>
//   //                   </p>
//   //                   <p>Zudio</p>
//   //                   <p>₹249</p>
//   //                 </div>
//   //               </div>{" "}
//   //             </Grid>
//   //             <Grid item>
//   //               <Box sx={{ color: deepPurple[500] }}>
//   //                 <StarBorderIcon sx={{ fontSize: "2rem" }} className="px-2 " />
//   //                 <span>Rate & Review Product</span>
//   //               </Box>
//   //             </Grid>
//   //           </Grid>
//   //         ))}
//   //       </Grid>
//   //     </div>
//   //   );
//   // };

//   const dispatch = useDispatch();
//   const { order } = useSelector((store) => store);
//   console.log("Orders--------->", order);
//   useEffect(() => {
//     dispatch(getUserOrderHistory());
//   }, []);
//   const param = useParams();
//   const orderItemId = param.orderId;
//   const { orderItem } = useSelector((store) => store);
//   const location = useLocation();
//   const address = location.state?.address;
//   const orderStatus = location.state?.status;
//   console.log("status", orderStatus);
//   const step =
//     orderStatus === "CONFIRMED"
//       ? 2
//       : orderStatus === "SHIPPED"
//       ? 3
//       : orderStatus === "DELIVERED"
//       ? 5
//       : 1;

//   useEffect(() => {
//     dispatch(getorderItem(orderItemId));
//   }, []);

//   console.log("dsjiadjiajdiwiajdiwjai", orderItem);

//   return (
//     <div className="px-5 lg:px-20">
//       <div>
//         <h1 className="font-bold text-xl py-7">Delivery Address</h1>
//         <AddressCard address={address} />
//       </div>
//       <div className="py-20">
//         <OrderTracking activeStep={step} />
//       </div>

//       {/* {order && order.orderItems.length > 0 ? (
//       <Grid className="space-y-5" container>
//         <Grid
//           container
//           spacing={2}
//           className="shadow-xl rounded-lg p-5 border"
//           sx={{ alignItems: "center" }}
//         >
//           <Grid item xs={6}>
//             <div className="flex items-center space-x-4">
//               <img
//                 className="w-[8rem] h-[8rem] object-cover object-top rounded-md"
//                 src={orderItem.orderItem?.product.imageUrl}
//                 alt=""
//               />
//               <div className="space-y-2">
//                 <p className="font-semibold text-lg">
//                   {orderItem.orders.orderItem?.product.title}
//                 </p>
//                 <p className="space-x-5 opacity-50 text-sm font-medium">
//                   <span>Color : {orderItem.orderItem?.product.color}</span>
//                   <span>Size : {orderItem.orderItem?.size}</span>
//                 </p>
//                 <p className="text-sm font-medium">
//                   Seller : {orderItem.orderItem?.product.brand}
//                 </p>
//                 <p className="text-lg font-semibold">
//                   ₹{orderItem.orderItem?.product.discountedPrice}
//                 </p>
//               </div>
//             </div>
//           </Grid>

//           <Grid
//             item
//             xs={6}
//             container
//             direction="row"
//             alignItems="center"
//             justifyContent="flex-end"
//           >
//             <Box sx={{ color: deepPurple[500], textAlign: "right" }}>
//               <StarBorderIcon sx={{ fontSize: "2rem" }} className="px-2" />
//               <span className="text-sm font-medium">
//                 Rate & Review Products
//               </span>
//             </Box>
//           </Grid>
//         </Grid>

//       </Grid>

//     </div>
//   );
// }; */}

//       {order && order.orderItems.length > 0 ? (
//         <Grid className="space-y-5" container>
//           {order.orderItems.map((item) => (
//             <Grid
//               key={item.id}
//               container
//               spacing={2}
//               className="shadow-xl rounded-lg p-5 border"
//               sx={{ alignItems: "center" }}
//             >
//               <Grid item xs={6}>
//                 <div className="flex items-center space-x-4">
//                   <img
//                     className="w-[8rem] h-[8rem] object-cover object-top rounded-md"
//                     src={item.product.imageUrl}
//                     alt=""
//                   />
//                   <div className="space-y-2">
//                     <p className="font-semibold text-lg">
//                       {item.product.title}
//                     </p>
//                     <p className="space-x-5 opacity-50 text-sm font-medium">
//                       <span>Color : {item.product.color}</span>
//                       <span>Size : {item.size}</span>
//                     </p>
//                     <p className="text-sm font-medium">
//                       Seller : {item.product.brand}
//                     </p>
//                     <p className="text-lg font-semibold">
//                       ₹{item.product.discountedPrice}
//                     </p>
//                   </div>
//                 </div>
//               </Grid>
//               <Grid
//                 item
//                 xs={6}
//                 container
//                 direction="row"
//                 alignItems="center"
//                 justifyContent="flex-end"
//               >
//                 <Box sx={{ color: deepPurple[500], textAlign: "right" }}>
//                   <StarBorderIcon sx={{ fontSize: "2rem" }} className="px-2" />
//                   <span className="text-sm font-medium">
//                     Rate & Review Products
//                   </span>
//                 </Box>
//               </Grid>
//             </Grid>
//           ))}
//         </Grid>
//       ) : (
//         <p>No order items found.</p>
//       )}
//     </div>
//   );
// };

// export default OrderDetails;

import React, { useEffect } from "react";
import AddressCard from "../AddressCard/AddressCard";
import OrderTracking from "./OrderTracking";
import { Box, Grid } from "@mui/material";
import { deepPurple } from "@mui/material/colors";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useParams } from "react-router-dom";
import { getorderItem } from "../../../State/orderItem/Action";
import { getUserOrderHistory } from "../../../State/order/Action";

const OrderDetails = () => {
  const dispatch = useDispatch();
  const { orders } = useSelector((store) => store.order);
  const { orderItem } = useSelector((store) => store.orderItem);
  const location = useLocation();
  const address = location.state?.address;
  const orderStatus = location.state?.status;
  const param = useParams();
  const orderItemId = param.orderId;

  useEffect(() => {
    dispatch(getUserOrderHistory());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getorderItem(orderItemId));
  }, [dispatch, orderItemId]);

  // Ensure orders is an array and set default to empty array if undefined
  const order = Array.isArray(orders) && orders.length > 0 ? orders[0] : null;

  // Determine the step based on orderStatus
  const step =
    orderStatus === "CONFIRMED"
      ? 2
      : orderStatus === "SHIPPED"
      ? 3
      : orderStatus === "DELIVERED"
      ? 5
      : 1;

  return (
    <div className="px-5 lg:px-20">
      <div>
        <h1 className="font-bold text-xl py-7">Delivery Address</h1>
        <AddressCard address={address} />
      </div>
      <div className="py-20">
        <OrderTracking activeStep={step} />
      </div>

      {order && order.orderItems && order.orderItems.length > 0 ? (
        <Grid className="space-y-5" container>
          {order.orderItems.map((item) => (
            <Grid
              key={item.id}
              container
              spacing={2}
              className="shadow-xl rounded-lg p-5 border"
              sx={{ alignItems: "center" }}
            >
              <Grid item xs={6}>
                <div className="flex items-center space-x-4">
                  <img
                    className="w-[8rem] h-[8rem] object-cover object-top rounded-md"
                    src={item.product.imageUrl}
                    alt=""
                  />
                  <div className="space-y-2">
                    <p className="font-semibold text-lg">
                      {item.product.title}
                    </p>
                    <p className="space-x-5 opacity-50 text-sm font-medium">
                      <span>Color : {item.product.color}</span>
                      <span>Size : {item.size}</span>
                    </p>
                    <p className="text-sm font-medium">
                      Seller : {item.product.brand}
                    </p>
                    <p className="text-lg font-semibold">
                      ₹{item.product.discountedPrice}
                    </p>
                  </div>
                </div>
              </Grid>
              <Grid
                item
                xs={6}
                container
                direction="row"
                alignItems="center"
                justifyContent="flex-end"
              >
                <Box sx={{ color: deepPurple[500], textAlign: "right" }}>
                  <StarBorderIcon sx={{ fontSize: "2rem" }} className="px-2" />
                  <span className="text-sm font-medium">
                    Rate & Review Products
                  </span>
                </Box>
              </Grid>
            </Grid>
          ))}
        </Grid>
      ) : (
        <p>No order items found.</p>
      )}
    </div>
  );
};

export default OrderDetails;
