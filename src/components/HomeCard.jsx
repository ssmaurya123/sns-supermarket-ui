"use client";
import React from "react";
import { Card, CardContent, Typography, Box } from "@mui/material";

const HomeCard = ({ icon, title, description }) => {
  return (
    <Card
      sx={{
        width: "100%",
        maxWidth: 380,
        borderRadius: "18px",
        bgcolor: "background.paper",
        border: "1px solid rgba(255,255,255,0.08)",
        // boxShadow: "0px 10px 25px rgba(0,0,0,0.45)",
        transition: "0.3s ease",
        "&:hover": {
          transform: "translateY(-6px)",
          borderColor: "primary.main",
        },
      }}
    >
      <CardContent sx={{ p: 4 }}>
        {/* ICON BOX */}
        <Box
          sx={{
            width: 55,
            height: 55,
            borderRadius: "14px",
            bgcolor: "rgba(144, 202, 249, 0.15)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            mb: 3,
          }}
        >
          {icon}
        </Box>

        {/* TITLE */}
        <Typography
          variant="h6"
          sx={{
            fontWeight: 800,
            mb: 1,
            color: "primary.main",
          }}
        >
          {title}
        </Typography>

        {/* DESCRIPTION */}
        <Typography
          variant="body2"
          sx={{
            color: "rgba(255,255,255,0.7)",
            fontSize: "1rem",
          }}
        >
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default HomeCard;
