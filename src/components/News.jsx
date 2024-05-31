import React, { useState, useEffect } from 'react';
import Axios from "axios";
import { ScaleLoader } from "react-spinners";
import { DefaultImage, PrimaryColor, SecondaryColor } from '../utitls';
import { ButtonBox, Flex, PostContainer, PreNextButton, ReadMore, SectionContainer } from '../assets/styles';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Box, Grid, Typography } from '@mui/material';
import staticData from '../staticData.json';

function News(props) {
  const [post, setPost] = useState([]);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);
  const limit = 20;
  const override = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh'
  };

  useEffect(() => {
    const fetchData = async () => {
      const apiKey = "3e19ce7b891447459477f5ef54207823";
      try {
        props.setProgress(0);
        setLoading(true);
        const res = await Axios.get(`/api/v2/top-headlines?country=in&category=${props?.category}&apiKey=${apiKey}&page=${page}`);
        console.log('data', res?.data?.articles);
        setPost(res?.data?.articles);
        setTotal(Math.ceil(res.data?.totalResults / limit));
        // setPost(staticData.articles);
        // setTotal(Math.ceil(staticData.totalResults / limit))
        props.setProgress(100);
      } catch (error) {
        console.log('An error occurs while fetching', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [page]);

  const handlePrevious = () => setPage(page - 1);
  const handleNext = () => setPage(page + 1);

  return (
    loading ? <ScaleLoader
      color={PrimaryColor}
      loading={loading}
      cssOverride={override}
      size={250}
      aria-label="Loading Spinner"
      data-testid="loader"
    /> :
      <Box sx={{
        padding: '4rem .6rem 0',

      }}>
        {/* Top Section */}
        <Box
          sx={{
            display: 'flex',
            gap: '2rem',
            padding: '2rem',
          }}
        >
          <SectionContainer latest>
            <Typography
              variant='h5'
              px={1}
              borderLeft={3}
              borderColor='red'
              mb={2}
            >
              Latest News</Typography>

            <Flex>
              {post?.slice(0, 4)?.map(post => {
                const { urlToImage, url, title, source } = post;
                const imageUrl = post?.urlToImage && !post?.urlToImage?.includes('cdn.videocardz.com')
                  ? post?.urlToImage
                  : DefaultImage

                return (
                  <PostContainer
                    latest
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
                      }}
                    />
                    <div
                      style={{
                        position: 'absolute',
                        bottom: '0',
                        width: '100%',
                        padding: '5px 10px',
                        color: 'white',
                        borderRadius: '0 0 5px 5px',
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
              })}
            </Flex>
          </SectionContainer>

          <SectionContainer recent>
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
              gap='1.2rem'
            >
              {post?.slice(4)?.map(post => {
                const { urlToImage, url, title } = post;
                const imageUrl = post?.urlToImage && !post?.urlToImage?.includes('cdn.videocardz.com')
                  ? post?.urlToImage
                  : DefaultImage
                return (
                  <PostContainer
                    recent
                    onClick={() => window.open(url, 'noreferrer')}
                    key={post.id == null ? post.id = Math.random(1, 100) : post.id}
                  >
                    <img
                      src={imageUrl}
                      alt={urlToImage ? "urlToImage" : "No Image Available"}
                      style={{
                        borderRadius: '5px',
                        width: '150px',
                        minWidth: '150px'
                      }}
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
              })}
            </Flex>
          </SectionContainer>
        </Box>


        {/* Mid Section */}
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
                  <Box
                    key={post.id == null ? post.id = Math.random(1, 100) : post.id}
                    onClick={() => window.open(url, 'noreferrer')}
                    sx={{
                      flex: 1,
                      minWidth: '300px',
                      cursor: 'pointer',
                    }}
                  >
                    <img
                      src={imageUrl}
                      alt={urlToImage ? "urlToImage" : "No Image Available"}
                      style={{
                        borderRadius: '5px',
                        width: '100%',
                        height: '200px'
                      }}
                    />
                    <Typography
                      fontSize={18}
                      sx={{
                        display: '-webkit-box',
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden',
                        maxHeight: '3em',
                        margin: '5px 0',
                        fontWeight: '800',
                        color: PrimaryColor
                      }}
                    >
                      {title}
                    </Typography>
                    <Typography
                      fontSize={15}
                      sx={{
                        display: '-webkit-box',
                        WebkitLineClamp: 3,
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden',
                        maxHeight: '4.5em',
                        color: '#908e8e'
                      }}
                    >
                      {description}
                    </Typography>
                  </Box>
                )
              })}
            </Box>
          </SectionContainer>
        </Box>

        {/* Pagination */}
        {
          !loading && <ButtonBox>
            <PreNextButton
              disabled={page <= 1}
              onClick={handlePrevious}
            >
              <ArrowBackIcon fontSize="small" /> Prev</PreNextButton>

            <PreNextButton
              disabled={page >= total}
              onClick={handleNext}
            >
              Next <ArrowForwardIcon fontSize="small" /></PreNextButton>
          </ButtonBox>
        }
      </Box >
  );
}

export default News;
