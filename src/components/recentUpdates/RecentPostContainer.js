import React from 'react'
import { PostContainer } from '../../assets/styles'
import { Typography } from '@mui/material'

const RecentPostContainer = ({post, imageUrl, urlToImage, title, url}) => {
    return (
        <PostContainer
            type='recent'
            onClick={() => window.open(url, 'noreferrer')}
            key={post.id == null ? post.id = Math.random(1, 100) : post.id}
        >
            <img
                src={imageUrl}
                alt={urlToImage ? "urlToImage" : "No Image Available"}
                style={{
                    borderRadius: '5px',
                    width: '150px',
                    minWidth: '150px',
                }}
                loading="lazy"
            />
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