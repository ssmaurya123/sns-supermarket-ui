"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  AppBar,
  Toolbar,
  Box,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { navLinks } from "@/constants/navbar";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  return (
    <>
      <AppBar
        position="sticky"
        elevation={0}
        sx={{
          borderBottom: "1px solid",
          borderColor: "divider",
          backdropFilter: "blur(8px)",
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            px: { xs: 1, sm: 3 },
          }}
        >
          {/* LEFT SIDE (LOGO + NAME) */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
            <Box
              sx={{
                width: 45,
                height: 45,
                borderRadius: "12px",
                bgcolor: "primary.main",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: "bold",
                color: "primary.contrastText",
                fontSize: "16px",
                cursor: "pointer"
              }}
              onClick={() => router.push("/")}

            >
              S&S
            </Box>

            <Box>
              <Typography sx={{ fontWeight: "bold", fontSize: "18px" }}>
                24x7 S&S
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: "text.secondary", fontSize: "13px" }}
              >
                Supermarket
              </Typography>
            </Box>
          </Box>

          {/* DESKTOP NAV LINKS */}
          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 2 }}>
            {navLinks.map((link) => (
              <Button
                key={link.label}
                component={Link}
                href={link.path}
                sx={{
                  color: "text.primary",
                  fontWeight: 500,
                  textTransform: "none",
                  fontSize: "15px",
                  borderRadius: "10px",
                  px: 2,
                  "&:hover": {
                    color: "primary.main",
                    backgroundColor: "action.hover",
                  },
                }}
              >
                {link.label}
              </Button>
            ))}
          </Box>

          {/* MOBILE MENU ICON */}
          <IconButton
            sx={{ display: { xs: "flex", md: "none" }, color: "text.primary" }}
            onClick={() => setOpen(true)}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* MOBILE DRAWER */}
      <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
        <Box
          sx={{
            width: 250,
            bgcolor: "background.default",
            height: "100%",
            color: "text.primary",
          }}
        >
          <Typography
            sx={{
              fontWeight: "bold",
              fontSize: "18px",
              p: 2,
              borderBottom: "1px solid",
              borderColor: "divider",
            }}
          >
            Menu
          </Typography>

          <List>
            {navLinks.map((link) => (
              <ListItem key={link.label} disablePadding>
                <ListItemButton
                  component={Link}
                  href={link.path}
                  onClick={() => setOpen(false)}
                  sx={{
                    "&:hover": {
                      bgcolor: "action.hover",
                    },
                  }}
                >
                  <ListItemText primary={link.label} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default Navbar;
