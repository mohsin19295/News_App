import { Box, Typography } from '@mui/material'
import React from 'react'
import { PrimaryColor } from '../../utils'

const StoryContainer = ({ post, imageUrl, urlToImage, title, url, description }) => {
    return (
        <Box
            key={post.id == null ? post.id = Math.random(1, 100) : post.id}
            onClick={() => window.open(url, 'noreferrer')}
            sx={{
                flex: '1 1 calc(25% - 1rem)',
                minWidth: '250px',
                maxWidth: { xs: '100%', sm: '50%', md: '25%' },
                cursor: 'pointer',
                marginBottom: '1rem',
            }}
        >
            <img
                src={imageUrl}
                alt={urlToImage ? "urlToImage" : "No Image Available"}
                style={{
                    borderRadius: '5px',
                    width: '100%',
                    height: '200px',
                    objectFit: 'cover'
                }}
                loading="lazy"
            />
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