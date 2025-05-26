import { Box, Typography } from '@mui/material'
import React from 'react'
import { PrimaryColor } from '../../utils'
import { ImageContainer } from '../ImageContainer';

const StoryContainer = ({ imageUrl, urlToImage, title, url, description }) => {
    return (
        <Box
            key={title}
            onClick={() => window.open(url, 'noreferrer')}
            sx={{
                flex: '1 1 calc(25% - 1rem)',
                minWidth: '250px',
                maxWidth: { xs: '100%', sm: '50%', md: '25%' },
                cursor: 'pointer',
                marginBottom: '1rem',
                boxShadow: 'rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px'
            }}
        >
            <Box sx={{ position: 'relative', height: '200px', width: '100%', padding: 0 }}>
               <ImageContainer
                    imageUrl = {imageUrl}
                    urlToImage = {urlToImage}
                    widthP = '100%'
                    heightP = '200px'
                    radiusP='5px 5px 0 0'
                />
            </Box>
            <Box sx={{padding: '5px 10px 10px'}}>
                <Typography
                fontSize={17}
                sx={{
                    display: '-webkit-box',
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden',
                    maxHeight: '3em',
                    margin: '5px 0',
                    fontWeight: '700',
                    color: PrimaryColor
                }}
            >
                {title}
            </Typography>
            <Typography
                fontSize={15}
                sx={{
                    display: '-webkit-box',
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden',
                    maxHeight: '4.5em',
                    color: '#908e8e'
                }}
            >
                {description}
            </Typography>
            </Box>
        </Box>
    )
}

export default StoryContainer