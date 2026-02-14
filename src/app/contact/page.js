"use client"
import ContactComponent from "@/components/ContactComponent"
import MessageForm from "@/components/MessageForm"
import { Box, Grid, Typography } from "@mui/material"

const ContactPage = () => {
    return (
        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>

            <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
                <Typography variant="h4" sx={{ fontWeight: 700, mb: 2, mt: "20px" }}>Contact Us</Typography>
                <Typography variant="body1" sx={{ color: "text.secondary", mb: 2 }}>Have questions or feedback? We'd love to hear from you.</Typography>
            </Box>

            <Box
                sx={{
                    display: "flex",
                    flexDirection: { xs: "column", md: "row" },
                    justifyContent: "center",
                    alignItems: { xs: "stretch", md: "flex-start" },
                    gap: { xs: 4, md: 24 },
                    px: { xs: 2, md: 6 },
                    py: { xs: 2, md: 4 },
                }}
            >
                <Box sx={{ width: { xs: "100%", md: "20%" } }}>
                    <ContactComponent />
                </Box>

                <Box sx={{ width: { xs: "100%", md: "900px" } }}>
                    <MessageForm />
                </Box>
            </Box>


        </Box>
    )

}

export default ContactPage