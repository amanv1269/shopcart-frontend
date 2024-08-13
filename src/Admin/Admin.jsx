import {
  CssBaseline,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Box, height } from "@mui/system";
import React, { useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import EmailIcon from "@mui/icons-material/Email";
import { InboxIcon } from "@heroicons/react/16/solid";
import ArchiveIcon from "@mui/icons-material/Archive";
import ProductionQuantityLimitsIcon from "@mui/icons-material/ProductionQuantityLimits";
import AddTaskIcon from "@mui/icons-material/AddTask";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import Person2Icon from "@mui/icons-material/Person2";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Drawer from "@mui/material/Drawer";
import Dashboard from "./Component/Dashboard";
import CreateProductForm from "./Component/CreateProductForm";
import CustomerTable from "./Component/CustomerTable";
import OrderTable from "./Component/OrderTable";
import ProductTable from "./Component/ProductTable";

const menu = [
  { name: "Dashboard", path: "/admin", icon: <DashboardIcon /> },
  {
    name: "Products",
    path: "/admin/products",
    icon: <ProductionQuantityLimitsIcon />,
  },
  { name: "Customers", path: "/admin/customers", icon: <Person2Icon /> },
  { name: "Orders", path: "/admin/orders", icon: <LocalMallIcon /> },
  { name: "AddProduct", path: "/admin/product/create", icon: <AddTaskIcon /> },
];

const Admin = () => {
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("lg"));
  const [sideBarVisisble, setSideBarVisible] = useState();
  const navigate = useNavigate();

  const drawer = (
    <Box
      sx={{
        overflow: "auto",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "100%",
      }}
    >
      <>
        {/* {isLargeScreen && <Toolbar />} */}
        <List>
          {menu.map((item, index) => (
            <ListItem
              key={item.name}
              disablePadding
              onClick={() => navigate(item.path)}
            >
              <ListItemButton>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItem>{item.name}</ListItem>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </>

      <List>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <AccountCircleIcon />
            </ListItemIcon>
            <ListItemText>Account</ListItemText>
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );
  return (
    <div className="flex h-[100vh] ">
      <CssBaseline />
      <div className="w-[15%] border-r-gray-300 h-full fixed top-0">
        {drawer}
      </div>

      <div className="w-[85%] h-full ml-[15%]">
        <Routes>
          <Route path="/" element={<Dashboard />}></Route>
          <Route path="/product/create" element={<CreateProductForm />}></Route>
          <Route path="/customers" element={<CustomerTable />}></Route>
          <Route path="/orders" element={<OrderTable />}></Route>
          <Route path="/products" element={<ProductTable />}></Route>
        </Routes>
      </div>
    </div>
  );
};

export default Admin;
