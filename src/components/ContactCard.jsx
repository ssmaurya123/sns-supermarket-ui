import { Card, CardContent, CardMedia, Tooltip, Typography } from '@mui/material';
import React, { useState } from 'react'

const ContactCard = ({ icon, title, description }) => {

    const [copy, setCopy] = useState(false)

    const handleCopy = async () => {

        try {
            await navigator.clipboard.writeText(description);
            setCopy(true);
            setTimeout(() => {
                setCopy(false)
            }, 1500);

        } catch (err) {
            console.log("Failed to copy: ", err);
        }

    }


    return (
        <Card sx={{ width: "300px", mb: 4, display: "flex", flexDirection: "row", alignItems: "stretch", p: 0, borderRadius: "12px" }}>
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
                {title.toLowerCase() === "phone" ?
                    (
                        <Tooltip title={copy ? `${description}` : "Click to copy"} arrow placement="top">
                            <Typography onClick={handleCopy} sx={{ color: "text.secondary", cursor: "pointer", "&:hover": { color: "primary.main", textDecoration: "underline" }, }}>{description}</Typography>
                        </Tooltip>
                    ) : (
                        <Typography sx={{ color: "text.secondary" }}>{description}</Typography>
                    )
                }
            </CardContent>
        </Card>
    )

}

export default ContactCard;