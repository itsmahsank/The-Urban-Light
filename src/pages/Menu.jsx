import React from "react";
import { MenuList } from "../data/data";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

export const Menu = () => {
  return (
    <Box
      display="flex"
      flexWrap="wrap"
      justifyContent="center"
      gap={2}
      padding={2}
    >
      {MenuList.map((menu, index) => (
        <Card key={index} sx={{ maxWidth: "400px",display:"flex",margin:2 }}>
          <CardActionArea>
            <CardMedia sx={{height:"400px"}}
              component="img"
              src={menu.image}
              alt={menu.name}
            />
            <CardContent>
              <Typography variant="h5" component="div" gutterBottom>
                {menu.name}
              </Typography>
              <Typography variant="body2" >
                {menu.description}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      ))}
    </Box>
  );
};
