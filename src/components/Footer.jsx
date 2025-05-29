import { FooterContainer } from "../assets/styles"
import { Typography, Box } from '@mui/material';

export const Footer = () => {
    return (
        <FooterContainer>
            <Box>
                <Typography>Hosted on Netlify</Typography>
                <Box>
                    <a href="https://www.netlify.com/" target="_blank" rel="noopener noreferrer">
                        <img src="netlify_logo.png" alt="Netlify Logo"/>
                    </a>
                </Box>
            </Box>
            <Box>
                <Typography>Created by <a href="https://www.linkedin.com/in/mohsin19295/" target="_blank" rel="noopener noreferrer">Mohammad Mohsin</a> — looks great on all screens</Typography>
                <Typography>Facing issues? Ping me on <a href="https://www.linkedin.com/in/mohsin19295/" target="_blank" rel="noopener noreferrer">LinkedIn</a></Typography>
            </Box>
        </FooterContainer>
    )
}