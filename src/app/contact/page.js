"use client"
import ContactComponent from "@/components/ContactComponent"
import MessageForm from "@/components/MessageForm"
import { Box } from "@mui/material"

const ContactPage = () => {
    return (
        <Box sx={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", height: "100vh" }}>

            <ContactComponent />
            <MessageForm />

        </Box>
    )

}

export default ContactPage