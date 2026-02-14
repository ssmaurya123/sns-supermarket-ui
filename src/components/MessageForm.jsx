"use client";

import { Send } from "@mui/icons-material";
import { Box, Button, Paper, TextField, Typography } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";

const MessageForm = () => {

    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    }


    return (
        <Box sx={{ display: "flex", justifyContent: "center", width:"500px"}}>
            <Paper sx={{ bgcolor: "background.paper", m: 2, p: 2 }}>
                <Typography variant="h6">Send us a message</Typography>
                <Typography variant="body1" sx={{ color: "text.secondary", mb: 4 }}>Fill out the form below and we'll get back to you as soon as possible</Typography>

                <form onSubmit={handleSubmit(onSubmit)}>
                    <Typography variant="body1" sx={{ color: "#FFF", mb: 1 }}>
                        Name
                        <span style={{ color: "red" }}> *</span>
                    </Typography>
                    <TextField
                        label="Your full name"
                        sx={{ width: "100%", mb: 4 }}
                        error={!!errors.name}
                        helperText={errors.name?.message}
                        {...register("name", { required: "Name is required" })}
                    />
                    <Typography variant="body1" sx={{ color: "#FFF", mb: 1 }}>Email<span style={{ color: "red" }}> *</span></Typography>
                    <TextField
                        label="stupa@gmail.com"
                        sx={{ width: "100%", mb: 4 }}
                        error={!!errors.email}
                        helperText={errors.email?.message}
                        {...register("email", {
                            required: "Email is required", pattern: {
                                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                message: "Enter a valid email address",
                            },
                        })}
                    />
                    <Typography variant="body1" sx={{ color: "#FFF", mb: 1 }}>Message<span style={{ color: "red" }}> *</span></Typography>
                    <TextField
                        label="How can we help you?"
                        multiline
                        rows={4}
                        sx={{ width: "100%", mb: 4 }}
                        error={!!errors.message}
                        helperText={errors.message?.message}
                        {...register("message", { required: "Message is required" })}
                    />
                    <Button type="submit" startIcon={<Send sx={{ transform: "rotate(-45deg)", mb: "2px" }} />} fullWidth variant="contained" color="primary">Submit</Button>

                </form>


            </Paper>
        </Box>
    )
}

export default MessageForm