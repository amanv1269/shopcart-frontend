import { Button, Card, CardContent, styled, Typography } from "@mui/material";
import React from "react";

const TriangleImg = styled("img")({
  right: 0,
  bottom: 0,
  height: 170,
  position: "absolute",
});

const TrophyImg = styled("img")({
  right: 36,
  bottom: 20,
  height: 98,
  position: "absolute",
});
const Achivment = () => {
  return (
    <Card sx={{ position: "relative", bgcolor: "#0a0345", color: "white" }}>
      <CardContent>
        <Typography variant="h6" sx={{ letterSpacing: ".25px" }}>
          Shop Cart
        </Typography>
        <Typography variant="body2">Congratulations</Typography>
        <Typography variant="h5" sx={{ my: 3.1 }}>
          884.4k
        </Typography>
        <Button size="small" variant="contained">
          View Sales
        </Button>
        <TriangleImg src=""></TriangleImg>
        <TrophyImg src="https://img.freepik.com/free-vector/realistic-illustration-gold-cup-with-red-ribbon-winner-leader-champion_1262-13474.jpg"></TrophyImg>
      </CardContent>
    </Card>
  );
};

export default Achivment;
