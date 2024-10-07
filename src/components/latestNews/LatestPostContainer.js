import React from 'react'
import { Typography } from '@mui/material'
import { SecondaryColor } from '../../utils'
import { PostContainer } from '../../assets/styles'

const LatestPostContainer = ({ post, imageUrl, urlToImage, title, source, url }) => {
    return (
        <PostContainer
            type='latest'
            onClick={() => window.open(url, 'noreferrer')}
            key={post.id == null ? post.id = Math.random(1, 100) : post.id}
        >
            <img
                src={imageUrl}
                alt={urlToImage ? "urlToImage" : "No Image Available"}
                style={{
                    width: '100%',
                    height: '100%',
                    borderRadius: '5px',
                    objectFit: 'cover'
                }}
            />
            <div
                style={{
                    position: 'absolute',
                    bottom: '0',
                    width: '100%',
                    padding: '5px 10px',
                    color: 'white',
                    borderRadius: '5px 5px 5px 5px',
                    background: 'rgba(23, 23, 23, 0.335)',
                    backdropFilter: 'blur(10px)',
                }}
            >
                <Typography
                    fontSize={16}
                    sx={{
                        display: '-webkit-box',
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden',
                        letterSpacing: '1px'
                    }}
                >
                    {title}
                </Typography>
                <Typography
                    fontWeight='bold'
                    fontSize={15}
                    mt={1}
                    color={SecondaryColor}
                >
                    {source.name == null ? source.name = "Unknown" : source.name}
                </Typography>
            </div>
        </PostContainer>
    )
}

export default LatestPostContainer