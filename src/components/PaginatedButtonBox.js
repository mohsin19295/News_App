import React from 'react'
import { ButtonBox, PreNextButton } from '../assets/styles'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const PaginatedButtonBox = ({ page, handleNext, handlePrevious, total }) => {
    return (
        <ButtonBox>
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
        </ButtonBox>
    )
}

export default PaginatedButtonBox