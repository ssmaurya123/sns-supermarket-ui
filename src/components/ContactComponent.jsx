"use client";
import { contactCardData } from '@/constants/contactCardData';
import { Typography } from '@mui/material';
import React from 'react';
import ContactCard from './ContactCard';

const ContactComponent=()=>{
    return (
        <>
        <Typography variant="h4">Contact Us</Typography>
        {
            contactCardData.map((item,index)=>{
                return(
                    <ContactCard
                    icon={item.icon}
                    title={item.title}
                    description={item.description}
                    key={index}
                    />
                )
            })
        }
        </>
    )
}

export default ContactComponent;