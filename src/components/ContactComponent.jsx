"use client";
import { contactCardData } from '@/constants/contactCardData';
import { Box, Typography } from '@mui/material';
import React from 'react';
import ContactCard from './ContactCard';

const ContactComponent = () => {
    return (
        <Box sx={{ minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center",py: { xs: 6, md: 10 },  }}>
            <Typography variant="h4" sx={{ fontWeight: 700, mb: 2, mt:"20px" }}>Contact Us</Typography>
            <Typography variant="body1" sx={{ color: "text.secondary", mb: 2 }}>Have questions or feedback? We'd love to hear from you.</Typography>
            {
                contactCardData.map((item, index) => {
                    return (
                        <ContactCard
                            icon={item.icon}
                            title={item.title}
                            description={item.description}
                            key={index}
                        />
                    )
                })
            }
        </Box>
    )
}

export default ContactComponent;