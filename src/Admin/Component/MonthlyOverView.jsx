import React from "react";
import AccountCircleOutlined from "@mui/icons-material/AccountCircleOutlined";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import {
  AttachMoneyOutlined,
  MoreVertOutlined,
  SettingsCellOutlined,
  TrendingUp,
} from "@mui/icons-material";
import {
  Avatar,
  Box,
  Card,
  CardContent,
  CardHeader,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";

const salesData = [
  {
    status: "245K",
    title: "Sales",
    color: "primary",
    icon: <TrendingUp sx={{ fontSize: "1.75rem" }} />,
  },
  {
    status: "125K",
    title: "Customer",
    color: "Success",
    icon: <AccountCircleOutlined sx={{ fontSize: "1.75rem" }} />,
  },
  {
    status: "99k",
    title: "Products",
    color: "warning",
    icon: <SettingsCellOutlined sx={{ fontSize: "1.75rem" }} />,
  },
  {
    status: "50",
    title: "Revenue",
    color: "info",
    icon: <AttachMoneyOutlined sx={{ fontSize: "1.75rem" }} />,
  },
];

const renderStatus = () => {
  return salesData.map((item, index) => (
    <Grid item xs={12} sm={3} key={index}>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Avatar
          variant="rounded"
          sx={{
            mr: 3,
            width: 44,
            height: 44,
            boxShadow: 3,
            color: "white",
            background: `${item.color}`,
          }}
        >
          {item.icon}
        </Avatar>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Typography variant="caption">{item.title}</Typography>
          <Typography variant="h6">{item.status}</Typography>
        </Box>
      </Box>
    </Grid>
  ));
};
const MonthlyOverView = () => {
  return (
    <Card sx={{ bgcolor: "#242B2E", color: "white" }}>
      <CardHeader
        title="Monthly Overview"
        action={
          <IconButton size="small">
            <MoreVertIcon></MoreVertIcon>
          </IconButton>
        }
        subheader={
          <Typography variant="body2">
            <Box component="span" sx={{ fontWeight: 600, mx: 2 }}>
              Total 48.5% growth
            </Box>
            This Month
          </Typography>
        }
        titleTypographyProps={{
          sx: {
            mb: 2.5,
            lineHeight: "2rem !important",
            letterSpacing: ".15px !important",
          },
        }}
      />
      <CardContent sx={{ pt: (theme) => `${theme.spacing(3)} !important` }}>
        <Grid container spacing={[5, 0]}>
          {renderStatus()}
        </Grid>
      </CardContent>
    </Card>
  );
};

export default MonthlyOverView;
