import React, { useState, useEffect } from 'react';
import Axios from "axios";
import { ScaleLoader } from "react-spinners";
import { DefaultImage, PrimaryColor, SecondaryDark } from '../utitls';
import { ButtonBox, Flex, PostContainer, PreNextButton, ReadMore } from '../assets/styles';
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
        // const res = await Axios.get(`/api/v2/top-headlines?country=in&category=${props.category}&apiKey=${apiKey}&page=${page}`);
        // console.log('data', res?.data?.articles);
        // setPost(res?.data?.articles);
        // setTotal(Math.ceil(res.data?.totalResults / limit));
        setPost(staticData.articles);
        setTotal(Math.ceil(staticData.totalResults / limit))
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

  const formatDate = (dateString) => {
    const options = {
      weekday: 'short',
      day: '2-digit',
      month: 'short',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      timeZone: 'UTC',
    };
    return new Date(dateString).toLocaleString('en-US', options);
  };

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
            paddingTop: '2rem',
            width: '100%',
            // border: '1px solid red'
          }}
        >
          <Box
            sx={{
              width: '70%',
              // border: '1px solid blue'
            }}
          >
            <Typography
              variant='h5'
              px={1}
              borderLeft={3}
              borderColor='red'
              mb={2}
            >
              Latest News</Typography>

            <Flex>
              {post?.slice(0, 4).map(post => {
                const { urlToImage, publishedAt, url, title, source } = post;
                const imageUrl = post?.urlToImage && !post?.urlToImage?.includes('cdn.videocardz.com')
                  ? post?.urlToImage
                  : DefaultImage

                return (
                  <PostContainer
                    latest
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
                        color:'white',
                        borderRadius: '0 0 5px 5px',
                        background: 'rgba(0, 0, 0, 0.208)',
                        boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
                        backdropFilter: 'blur(20px)',
                      }}
                    >
                      <Typography
                        fontSize={14}
                        overflow='hidden'
                        sx={{
                          display: '-webkit-box',
                          WebkitLineClamp: 2,
                          WebkitBoxOrient: 'vertical',
                        }}
                      >
                        {title}
                      </Typography>
                      <Typography
                        fontWeight='bold'
                        fontSize={14}
                        mt={1}
                      >
                        {source.name == null ? source.name = "Unknown" : source.name}
                      </Typography>
                    </div>
                    {/* <ReadMore href={url} target="_blank" rel="noreferrer" >Read more</ReadMore> */}
                  </PostContainer>
                )
              })}
            </Flex>
          </Box>


          <Box
            sx={{ width: '30%' }}
          >
            <Typography
              variant='h5'
              px={1}
              borderLeft={3}
              borderColor='red'
              mb={2}
            >
              Recent Updates</Typography>

            <Flex
              gap
              sx={{
                overflow: 'scroll',
              }}
            >
              {post?.slice(4).map(post => {
                const { publishedAt, url, title, source } = post;
                return (
                  <PostContainer
                    key={post.id == null ? post.id = Math.random(1, 100) : post.id}
                  >
                    <Typography
                      sx={{
                        display: '-webkit-box',
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden',
                        color: PrimaryColor,
                        fontSize: '14px',
                      }}
                    >{title}</Typography>
                    <Typography
                      sx={{
                        margin: '1px 0 3px 0',
                        fontWeight: 'bold',
                        fontSize: '14px',
                        color: SecondaryDark
                      }}
                    >
                      {source.name == null ? source.name = "Unknown" : source.name}
                    </Typography>
                    <Typography
                      variant='body2'
                      sx={{
                        color: '#151549a1',
                        fontSize: '12px'
                      }}
                    >{formatDate(publishedAt)}</Typography>
                    {/* <ReadMore href={url} target="_blank" rel="noreferrer" >Read more</ReadMore> */}
                  </PostContainer>
                )
              })}
            </Flex>
          </Box>
        </Box>


        {/* <Grid sx={{
          display: 'grid',
          justifyContent: 'space-between',
          gridTemplateColumns: {
            xs: 'repeat(1, 100%)',
            sm: 'repeat(2, 48%)',
            md: 'repeat(3, 32%)',
            lg: 'repeat(4, 24%)',
          },
          rowGap: 4,
          columnGap: 2
        }}>
          {post?.map(post => {
            const { urlToImage, publishedAt, url, title, source } = post;
            const imageUrl = post?.urlToImage && !post?.urlToImage?.includes('cdn.videocardz.com')
              ? post?.urlToImage
              : DefaultImage

            return (
              <PostContainer
                key={post.id == null ? post.id = Math.random(1, 100) : post.id}
                sx={{

                }}
              >
                <img
                  src={imageUrl}
                  alt={urlToImage ? "urlToImage" : "No Image Available"}
                  style={{
                    width: '100%',
                    height: '30vh',
                    borderRadius: '5px'
                  }}
                />
                <Typography
                  sx={{
                    display: '-webkit-box',
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden',
                    color: PrimaryColor,
                    fontSize: '14px',
                  }}
                >{title}</Typography>
                <Typography
                  sx={{
                    margin: '1px 0 3px 0',
                    fontWeight: 'bold',
                    fontSize: '14px',
                    color: SecondaryDark
                  }}
                >
                  {source.name == null ? source.name = "Unknown" : source.name}
                </Typography>
                <Typography
                  variant='body2'
                  sx={{
                    color: '#151549a1',
                    fontSize: '12px'
                  }}
                >{formatDate(publishedAt)}</Typography>
                <ReadMore href={url} target="_blank" rel="noreferrer" >Read more</ReadMore>
              </PostContainer>
            )
          })}
        </Grid> */}



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
