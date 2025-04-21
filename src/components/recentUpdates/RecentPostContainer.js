import React from 'react'
import { PostContainer } from '../../assets/styles'
import { Typography } from '@mui/material'
import { ImageContainer } from '../ImageContainer';

const RecentPostContainer = ({ imageUrl, urlToImage, title, url}) => {
    return (
        <PostContainer
            type='recent'
            onClick={() => window.open(url, 'noreferrer')}
            key={title}
        >
             <div style={{ position: 'relative', height: '100%', minWidth: '150px', padding: 0 }}>
                <ImageContainer
                    imageUrl = {imageUrl}
                    urlToImage = {urlToImage}
                    widthP = '150px'
                    heightP = '100%'
                />
            </div>
            <Typography
                fontSize={16}
                sx={{
                    display: '-webkit-box',
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden',
                    maxHeight: '4.5em',
                    letterSpacing: '1px',
                    marginRight: '5px'
                }}
            >
                {title}
            </Typography>
        </PostContainer>
    )
}

export default RecentPostContainer