import React, { useState, useEffect } from 'react'
import Axios from "axios"
import "./news.css"
import { ScaleLoader } from "react-spinners";
import { PrimaryColor } from '../utitls';
import { ButtonBox, PostContainer, PreNextButton, ReadMore } from '../assets/styles';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Box, Grid, Typography } from '@mui/material';

function News(props) {
  const [post, setPost] = useState([])
  const [page, setPage] = useState(1)
  const [total, setTotal] = useState(0)
  const [loading, setLoading] = useState(false);
  let limit = 20;
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
        const res = await Axios.get(`/api/v2/top-headlines?country=in&category=${props.category}&apiKey=${apiKey}&page=${page}`);
        console.log('data', res?.data?.articles);
        setPost(res?.data?.articles);
        setTotal(Math.ceil(res.data?.totalResults / limit));
        props.setProgress(100);
      } catch (error) {
        console.log('An error occurs while fetching', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [page]);

  const handlePrevious = () => {
    console.log('previous', total, page, limit)
    setPage(page - 1)
  }

  const handleNext = () => {
    console.log('next', total, page, limit)
    setPage(page + 1)
  }

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
        padding: {
          xs: '4rem 1rem 0',
          sm: '4.5rem 1.5rem 0',
          md: '5rem 2rem 0',
          lg: '5rem 2.5rem 0',
        }
      }}>
        <Grid sx={{
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
            const defaultImage = "https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg?20200913095930"
            const { urlToImage, publishedAt, url, title, source } = post;
            const imageUrl = post?.urlToImage && !post?.urlToImage?.includes('cdn.videocardz.com')
              ? post?.urlToImage
              : defaultImage

            return (
              <PostContainer
                key={post.id == null ? post.id = Math.random(1, 100) : post.id}
                sx={{

                }}
              >
                <img src={imageUrl} alt={urlToImage ? "urlToImage" : "No Image Available"} />
                <p className='title'>{title}</p>
                <p className='post-source'>{source.name == null ? source.name = "Unknown" : source.name}</p>
                <Typography variant='body2' sx={{ color: '#151549a1' }}>{formatDate(publishedAt)}</Typography>
                <ReadMore href={url} target="_blank" rel="noreferrer" >Read more</ReadMore>
              </PostContainer>
            )
          })}
        </Grid>
        {!loading && <ButtonBox>
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
      </Box>
  );
}
export default News