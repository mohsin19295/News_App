import React from 'react'
import { Typography } from '@mui/material'
import { OffWhite } from '../../utils'
import { PostContainer } from '../../assets/styles'
import { ImageContainer } from '../ImageContainer';

const LatestPostContainer = ({ imageUrl, urlToImage, title, source, url }) => {
    return (
        <PostContainer
            type='latest'
            onClick={() => window.open(url, 'noreferrer')}
            key={title}
        >
          <div style={{ position: 'relative', width: '100%', height: '100%', padding: 0 }}>
            <ImageContainer
                imageUrl = {imageUrl}
                urlToImage = {urlToImage}
                widthP = '100%'
                heightP = '100%'
            />
         </div>
            <div
                style={{
                    position: 'absolute',
                    bottom: '0',
                    width: '100%',
                    padding: '5px 10px',
                    color: 'white',
                    borderRadius: '0 0 5px 5px',
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