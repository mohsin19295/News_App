import React from 'react'
import { PostContainer } from '../../assets/styles'
import { Typography } from '@mui/material'
import { LazyLoadImage } from 'react-lazy-load-image-component';

const RecentPostContainer = ({post, imageUrl, urlToImage, title, url}) => {
    return (
        <PostContainer
            type='recent'
            onClick={() => window.open(url, 'noreferrer')}
            key={title}
        >
             <div style={{ position: 'relative', height: '100%', padding: 0 }}>
                <LazyLoadImage
                    src={imageUrl}
                    alt={urlToImage || "No Image Available"}
                    effect='blur'
                    wrapperClassName='lazy-image-wrapper'
                    style={{
                        width: '150px',
                        minWidth: '150px',
                    height: '100%',
                    borderRadius: '5px',
                    objectFit: 'cover',
                    }}
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