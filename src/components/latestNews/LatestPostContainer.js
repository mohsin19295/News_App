import React from 'react'
import { Typography } from '@mui/material'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { OffWhite } from '../../utils'
import { PostContainer } from '../../assets/styles'

const LatestPostContainer = ({ post, imageUrl, urlToImage, title, source, url }) => {
    return (
        <PostContainer
            type='latest'
            onClick={() => window.open(url, 'noreferrer')}
            key={title}
        >
          <div style={{ position: 'relative', width: '100%', height: '100%', padding: 0 }}>
            <LazyLoadImage
                src={imageUrl}
                alt={urlToImage || "No Image Available"}
                effect='blur'
                wrapperClassName='lazy-image-wrapper'
                style={{
                width: '100%',
                height: '100%',
                borderRadius: '5px',
                objectFit: 'cover',
                }}
            />
            </div>
            <div
                style={{
                    position: 'absolute',
                    bottom: '0',
                    width: '100%',
                    padding: '5px 10px',
                    color: 'white',
                    borderRadius: '5px 5px 5px 5px',
                    background: 'rgba(148, 16, 16, 0.6)',
                    backdropFilter: 'blur(8px)',
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
                    color={OffWhite}
                >
                    {source.name || "Unknown" }
                </Typography>
            </div>
        </PostContainer>
    )
}

export default LatestPostContainer