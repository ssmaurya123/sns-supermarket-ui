import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import React from 'react'

const ContactCard = ({ icon, title, description }) => {
    return (
        <Card sx={{ width: "300px", mb: 4, display: "flex", flexDirection: "row", alignItems: "stretch", p: 0 }}>
            <CardMedia
                sx={{
                    width: 56,
                    flexShrink: 0,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "primary.main",
                    bgcolor: "grey.900",
                    "& .MuiSvgIcon-root": { fontSize: 28 },
                }}
            >
                {icon}
            </CardMedia>
            <CardContent
                sx={{
                    flex: 1,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                }}
            >
                <Typography sx={{ fontWeight: 700, fontSize: "24px" }}>{title}</Typography>
                <Typography sx={{ color: "text.secondary" }}>{description}</Typography>
            </CardContent>
        </Card>
    )

}

export default ContactCard;