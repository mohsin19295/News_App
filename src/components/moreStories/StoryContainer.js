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
            }}
        >
            <div style={{ position: 'relative', height: '200px', width: '100%', padding: 0 }}>
               <ImageContainer
                    imageUrl = {imageUrl}
                    urlToImage = {urlToImage}
                    widthP = '100%'
                    heightP = '200px'
                />
            </div>
            <Typography
                fontSize={18}
                sx={{
                    display: '-webkit-box',
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden',
                    maxHeight: '3em',
                    margin: '5px 0',
                    fontWeight: '800',
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
    )
}

export default StoryContainer