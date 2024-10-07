import React from 'react'
import StoryContainer from './StoryContainer';
import { Box, Typography } from '@mui/material';
import { SectionContainer } from '../../assets/styles';
import { DefaultImage } from '../../utils';

const MoreStories = ({ post }) => {
  return (
    <Box sx={{ padding: '2rem' }}>
      <SectionContainer>
        <Typography
          variant='h5'
          px={1}
          borderLeft={3}
          borderColor='red'
          mb={2}
        >
          More Stories</Typography>

        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '1rem'
          }}
        >
          {post?.map(post => {
            const { urlToImage, url, title, description } = post;
            const imageUrl = post?.urlToImage && !post?.urlToImage?.includes('cdn.videocardz.com')
              ? post?.urlToImage
              : DefaultImage
            return (
              <StoryContainer
                post={post}
                imageUrl={imageUrl}
                urlToImage={urlToImage}
                title={title}
                url={url}
                description={description}
              />
            )
          })}
        </Box>
      </SectionContainer>
    </Box>
  )
}

export default MoreStories