"use client";
import React from "react";
import {
    Box,
    Typography,
    Button,
    Chip,
    Paper,
    Stack,
    Container,
} from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import Image from "next/image";
import Link from "next/link";

const HomeComponent = () => {
    return (
        <Box
            sx={{
                minHeight: "100vh",
                backgroundColor: "background.default",
                display: "flex",
                alignItems: "center",
                py: { xs: 6, md: 10 },
            }}
        >
            <Container maxWidth="lg">
                <Box
                    sx={{
                        display: "grid",
                        gridTemplateColumns: { xs: "1fr", md: "1.2fr 1fr" },
                        gap: { xs: 6, md: 10 },
                        alignItems: "center",
                    }}
                >
                    {/* LEFT CONTENT */}
                    <Box>
                        <Chip
                            label="Open 24/7"
                            sx={{
                                mb: 2,
                                px: 1.5,
                                py: 2,
                                fontWeight: 600,
                                bgcolor: "rgba(144, 202, 249, 0.15)",
                                color: "primary.main",
                                border: "1px solid rgba(144, 202, 249, 0.4)",
                            }}
                        />

                        <Typography
                            variant="h2"
                            sx={{
                                fontWeight: 800,
                                color: "primary.main",
                                lineHeight: 1.1,
                                mb: 3,
                                fontSize: { xs: "2.7rem", md: "3.8rem" },
                            }}
                        >
                            Open 24x7 - Your <br />
                            Neighborhood <br />
                            Supermarket
                        </Typography>

                        <Typography
                            variant="body1"
                            sx={{
                                color: "rgba(255,255,255,0.75)",
                                fontSize: "1.05rem",
                                maxWidth: "520px",
                                lineHeight: 1.7,
                                mb: 4,
                            }}
                        >
                            Welcome to 24×7 S&S Supermarket, where convenience meets quality.
                            We're proud to serve the Houston community with fresh groceries,
                            affordable prices, and friendly service—anytime you need us.
                        </Typography>

                        <Stack direction="row" spacing={2}>
                            <Button
                                component={Link}
                                href="/departments"
                                variant="contained"
                                size="large"
                                sx={{
                                    bgcolor: "primary.main",
                                    color: "#0b0b0b",
                                    fontWeight: 700,
                                    px: 3,
                                    py: 1.4,
                                    borderRadius: "12px",
                                    textTransform: "none",
                                    "&:hover": {
                                        bgcolor: "#78bdf0",
                                    },
                                }}
                            >
                                Shop Departments
                            </Button>

                            <Button
                                variant="outlined"
                                component={Link}
                                href="/contact"
                                size="large"
                                sx={{
                                    borderColor: "secondary.main",
                                    color: "secondary.main",
                                    fontWeight: 700,
                                    px: 3,
                                    py: 1.4,
                                    borderRadius: "12px",
                                    textTransform: "none",
                                    "&:hover": {
                                        borderColor: "#f48fb1",
                                        bgcolor: "rgba(244, 143, 177, 0.08)",
                                    },
                                }}
                            >
                                Contact Us
                            </Button>
                        </Stack>
                    </Box>

                    {/* RIGHT IMAGE */}
                    <Box
                        sx={{
                            position: "relative",
                            borderRadius: "22px",
                            overflow: "hidden",
                            boxShadow: "0px 15px 40px rgba(0,0,0,0.55)",
                            border: "1px solid rgba(255,255,255,0.08)",
                        }}
                    >
                        <Image
                            src="/supermarketnew.jpg"
                            width={500}
                            height={500}
                            alt="Picture of the supermarket"
                        />

                        {/* BADGE CARD */}
                        <Paper
                            elevation={6}
                            sx={{
                                position: "absolute",
                                bottom: 20,
                                left: 20,
                                px: 2.5,
                                py: 1.8,
                                borderRadius: "16px",
                                bgcolor: "background.paper",
                                display: "flex",
                                alignItems: "center",
                                gap: 1.5,
                                border: "1px solid rgba(255,255,255,0.08)",
                            }}
                        >
                            <Box
                                sx={{
                                    width: 42,
                                    height: 42,
                                    borderRadius: "50%",
                                    bgcolor: "rgba(144, 202, 249, 0.15)",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                }}
                            >
                                <AccessTimeIcon sx={{ color: "primary.main" }} />
                            </Box>

                            <Box>
                                <Typography
                                    sx={{
                                        fontWeight: 800,
                                        fontSize: "1rem",
                                        color: "primary.main",
                                        lineHeight: 1.2,
                                    }}
                                >
                                    Always Open
                                </Typography>
                                <Typography
                                    sx={{
                                        fontSize: "0.9rem",
                                        color: "rgba(255,255,255,0.65)",
                                    }}
                                >
                                    24x7
                                </Typography>
                            </Box>
                        </Paper>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
};

export default HomeComponent;
