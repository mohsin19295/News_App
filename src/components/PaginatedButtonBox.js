import React from 'react'
import { ButtonBox, PreNextButton } from '../assets/styles'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Box } from '@mui/material';

const PaginatedButtonBox = ({ page, handleNext, handlePrevious, total }) => {
    return (
        <Box 
            sx={{
                display: "flex",
                justifyContent: "center",
                gap: "10px"
            }}
        >
            <PreNextButton
                disabled={page <= 2}
                onClick={handlePrevious}
            >
                <ArrowBackIcon fontSize="small" /> Prev</PreNextButton>

            <PreNextButton
                disabled={page >= total}
                onClick={handleNext}
            >
                Next <ArrowForwardIcon fontSize="small" /></PreNextButton>
        </Box>
    )
}

export default PaginatedButtonBox