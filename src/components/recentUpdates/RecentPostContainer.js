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
            sx={{
                boxShadow: 'rgba(50, 50, 93, 0.25) 1px 0px 0px -1px, rgba(0, 0, 0, 0.3) 1px 0px 3px -1px',
                width: '99%',
                borderRadius: '5px 0 0 5px',
            }}
        >
             <div style={{ position: 'relative', height: '100%', minWidth: '150px', padding: 0 }}>
                <ImageContainer
                    imageUrl = {imageUrl}
                    urlToImage = {urlToImage}
                    widthP = '150px'
                    heightP = '100%'
                    radiusP = '5px 0 0 5px'
                />
            </div>
            <Typography
                fontSize={16}
                sx={{
                    display: '-webkit-box',
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden',
                    maxHeight: '4.6em',
                    letterSpacing: '1px',
                    marginRight: '5px',
                    padding: '5px 0'
                }}
            >
                {title}
            </Typography>
        </PostContainer>
    )
}

export default RecentPostContainer