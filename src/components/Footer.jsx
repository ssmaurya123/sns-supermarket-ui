"use client";

import React from "react";
import {
    Box,
    Container,
    Grid,
    Typography,
    Link,
    IconButton,
    Chip,
    Stack,
} from "@mui/material";

import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";

export default function Footer() {
    return (
        <Box
            component="footer"
            sx={{
                bgcolor: "background.paper",
                color: "text.primary",
                borderTop: "1px solid rgba(255,255,255,0.08)",
                pt: 6,
                pb: 4,
                mt: "auto",
            }}
        >
            <Container maxWidth={false} sx={{ px: { xs: 2, md: 4 } }}>
            <Grid container spacing={{ xs: 4, md: 12 }}>
                    {/* LEFT: Logo + About */}
                    <Grid item xs={12} md={4}>
                        <Stack spacing={2}>
                            <Stack direction="row" spacing={1.2} alignItems="center">
                                <Box
                                    sx={{
                                        width: 52,
                                        height: 52,
                                        borderRadius: "12px",
                                        bgcolor: "primary.main",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        fontWeight: "bold",
                                        color: "#000",
                                        fontSize: "18px",
                                    }}
                                >
                                    S&S
                                </Box>

                                <Box>
                                    <Typography variant="h6" sx={{ fontWeight: 700 }}>
                                        24x7 S&S
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Supermarket
                                    </Typography>
                                </Box>
                            </Stack>

                            <Typography variant="body2" color="text.secondary">
                                Your neighborhood supermarket, open 24 hours a day, 7 days a
                                week.
                            </Typography>

                            <Stack direction="row" spacing={1}>
                                <IconButton
                                    sx={{
                                        bgcolor: "rgba(255,255,255,0.06)",
                                        "&:hover": { bgcolor: "rgba(255,255,255,0.12)" },
                                    }}
                                >
                                    <FacebookIcon />
                                </IconButton>

                                <IconButton
                                    sx={{
                                        bgcolor: "rgba(255,255,255,0.06)",
                                        "&:hover": { bgcolor: "rgba(255,255,255,0.12)" },
                                    }}
                                >
                                    <InstagramIcon />
                                </IconButton>

                                <IconButton
                                    sx={{
                                        bgcolor: "rgba(255,255,255,0.06)",
                                        "&:hover": { bgcolor: "rgba(255,255,255,0.12)" },
                                    }}
                                >
                                    <XIcon />
                                </IconButton>
                            </Stack>
                        </Stack>
                    </Grid>

                    {/* Quick Links */}
                    <Grid item xs={12} md={4}>
                        <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
                            Quick Links
                        </Typography>

                        <Stack spacing={1}>
                            <Link href="/" underline="none" color="text.secondary">
                                Home
                            </Link>
                            <Link href="/about" underline="none" color="text.secondary">
                                About Us
                            </Link>
                            <Link href="/departments" underline="none" color="text.secondary">
                                Departments
                            </Link>
                            <Link href="/why-choose-us" underline="none" color="text.secondary">
                                Why Choose Us
                            </Link>
                        </Stack>
                    </Grid>

                    {/* Contact Info */}
                    <Grid item xs={12} md={4}>
                        <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
                            Contact Info
                        </Typography>

                        <Stack spacing={1.5}>
                            <Stack direction="row" spacing={1.2} alignItems="center">
                                <LocationOnIcon sx={{ color: "primary.main" }} />
                                <Typography variant="body2" color="text.secondary">
                                    19600 Katy Fwy, Houston, TX 77094
                                </Typography>
                            </Stack>

                            <Stack direction="row" spacing={1.2} alignItems="center">
                                <PhoneIcon sx={{ color: "primary.main" }} />
                                <Typography variant="body2" color="text.secondary">
                                    (123) 456-7890
                                </Typography>
                            </Stack>

                            <Stack direction="row" spacing={1.2} alignItems="center">
                                <EmailIcon sx={{ color: "primary.main" }} />
                                <Typography variant="body2" color="text.secondary">
                                    info@24x7ss.com
                                </Typography>
                            </Stack>
                        </Stack>
                    </Grid>

                    {/* Store Hours */}
                    <Grid item xs={12} md={4}>
                        <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
                            Store Hours
                        </Typography>

                        <Chip
                            label="Open 24/7"
                            sx={{
                                bgcolor: "rgba(144,202,249,0.15)",
                                color: "primary.main",
                                fontWeight: 600,
                                borderRadius: "10px",
                                px: 1,
                            }}
                        />

                        <Typography
                            variant="body2"
                            color="text.secondary"
                            sx={{ mt: 2 }}
                        >
                            We're always here for you, every day of the year.
                        </Typography>
                    </Grid>
                </Grid>

                {/* Bottom Bar */}
                <Box
                    sx={{
                        mt: 6,
                        pt: 3,
                        borderTop: "1px solid rgba(255,255,255,0.08)",
                        textAlign: "center",
                    }}
                >
                    <Typography variant="body2" color="text.secondary">
                        © {new Date().getFullYear()} 24x7 S&S Supermarket. All rights
                        reserved.
                    </Typography>
                </Box>
            </Container>
        </Box>
    );
}
