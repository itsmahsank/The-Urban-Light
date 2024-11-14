import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { Box, Typography, useTheme } from "@mui/material";

export const Footer = () => {
  const theme = useTheme(); // Access the current theme

  return (
    <>
      <Box
        sx={{
          textAlign: "center",
          bgcolor: theme.palette.background.paper,
          color: theme.palette.text.primary,
          p: 3,
        }}
      >
        <Box
          sx={{
            my: 3,
            "& svg": {
              fontSize: "60px",
              cursor: "pointer",
              mr: 2,
              color: theme.palette.text.primary, // Icon color based on theme
            },
            "& svg:hover": {
              color: theme.palette.primary.main, // Hover color based on primary color of the theme
              transform: "translateX(5px)",
              transition: "all 400ms",
            },
          }}
        >
          <InstagramIcon />
          <TwitterIcon />
          <GitHubIcon />
          <YouTubeIcon />
        </Box>
        <Typography
          variant="h5"
          sx={{
            color: theme.palette.text.primary, // Text color based on theme
            "@media (max-width:600px)": {
              fontSize: "1rem",
            },
          }}
        >
          All Rights Reserved &copy; AHSAN
        </Typography>
      </Box>
    </>
  );
};
