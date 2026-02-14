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

            <Grid container spacing={2} justifyContent="center">
                <Grid size={{ xs: 12, md: 6 }} sx={{ display: { xs: "flex", md: "block" }, justifyContent: { xs: "center", md: "initial" } }}>
                    <ContactComponent />
                </Grid>
                <Grid size={{ xs: 12, md: 6 }}>
                    <MessageForm />
                </Grid>
            </Grid>

        </Box>
    )

}

export default ContactPage