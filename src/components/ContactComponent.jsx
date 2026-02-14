"use client";
import { contactCardData } from '@/constants/contactCardData';
import { Box } from '@mui/material';
import React from 'react';
import ContactCard from './ContactCard';

const ContactComponent = () => {
    return (
        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", width: { xs: "auto", md: "100%" }, py: { xs: 6, md: 10 } }}>
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