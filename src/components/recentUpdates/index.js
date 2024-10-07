import React from 'react'
import { Flex, SectionContainer } from '../../assets/styles';
import { Typography } from '@mui/material';
import { DefaultImage } from '../../utils';
import RecentPostContainer from './RecentPostContainer';

const RecentUpdates = ({initialPost}) => {
  return (
    <SectionContainer type='recent'>
            <Typography
              variant='h5'
              px={1}
              borderLeft={3}
              borderColor='red'
              mb={2}
            >
              Recent Updates</Typography>

            <Flex
              className='items'
            >
              {initialPost?.slice(4)?.map(post => {
                const { urlToImage, url, title } = post;
                const imageUrl = post?.urlToImage && !post?.urlToImage?.includes('cdn.videocardz.com')
                  ? post?.urlToImage
                  : DefaultImage
                return (
                  <RecentPostContainer
                    post={post}
                    imageUrl={imageUrl}
                    urlToImage={urlToImage}
                    title={title}
                    url={url}
                  />
                )
              })}
            </Flex>
          </SectionContainer>
  )
}

export default RecentUpdates