import React from 'react'
import { Flex, SectionContainer } from '../../assets/styles';
import { Typography } from '@mui/material';
import { DefaultImage, ThemeColorDark } from '../../utils';
import LatestPostContainer from './LatestPostContainer';

const LatestNews = ({ initialPost }) => {
  return (
    <SectionContainer type='latest'>
      <Typography
        variant='h5'
        px={1}
        borderLeft={3}
        borderColor={ThemeColorDark}
        mb={2}
      >
        Latest News</Typography>

      <Flex className='items'>
        {initialPost?.slice(0, 4)?.map(post => {
          const { urlToImage, url, title, source } = post;
          const imageUrl = post?.urlToImage && !post?.urlToImage?.includes('cdn.videocardz.com')
            ? post?.urlToImage
            : DefaultImage

          return (
            <LatestPostContainer
              imageUrl={imageUrl}
              urlToImage={urlToImage}
              title={title}
              source={source}
              url={url}
              key={url}
            />
          )
        })}
      </Flex>
    </SectionContainer>
  )
}

export default LatestNews