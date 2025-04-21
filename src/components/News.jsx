import React, { useState, useEffect } from 'react';
import Axios from "axios";
import { ScaleLoader } from "react-spinners";
import { PrimaryColor } from '../utils';
import { Box } from '@mui/material';
import { API_KEY, COUNTRY, LIMIT } from '../config/constants';
import PaginatedButtonBox from './PaginatedButtonBox';
import MoreStories from './moreStories';
import LatestNews from './latestNews';
import RecentUpdates from './recentUpdates';

function News(props) {
  const [post, setPost] = useState([]);
  const [initialPost, setInitialPost] = useState([]);
  const [page, setPage] = useState(2);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);

  const passedData = (data) => {
    return (
      props.category === 'business' ? 
      data?.data?.business :
      props.category === 'entertainment' ? 
      data?.data?.entertainment :
      props.category === 'health' ? 
      data?.data?.health :
      props.category === 'science' ? 
      data?.data?.science :
      props.category === 'sports' ? 
      data?.data?.sports :
      props.category === 'technology' ? 
      data?.data?.technology :
      data?.data?.general
    )
  }

  const override = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh'
  };

  useEffect(() => {
    const initialFetchData = async () => {
      try {
        setLoading(true);
        const staticRes = await Axios.get('/news.json');
        setInitialPost(passedData(staticRes))
      } catch (error) {
        console.log('An error occurs while fetching', error);
      } finally {
        setLoading(false);
      }
    };

    initialFetchData();
  }, []);

  const fetchData = async () => {
    props.setProgress(0);
    setLoading(true);
    try {
      const staticRes = await Axios.get('/news.json');
      const data = passedData(staticRes);
      setInitialPost(data);
  
      const startIndex = (page - 1) * LIMIT;
      const endIndex = startIndex + LIMIT;
      const paginatedData = data?.slice(startIndex, endIndex);
  
      setPost(paginatedData);
      setTotal(Math.ceil(data?.length / LIMIT));
    } catch (error) {
      console.log('An error occurs while fetching', error);
    } finally {
      setLoading(false);
      props.setProgress(100);
    }
  };  

  useEffect(() => {
    fetchData();
  }, [page]);

  const handlePrevious = () => setPage(page - 1);
  const handleNext = () => setPage(page + 1);

  //   useEffect(() => {
  //   const initialFetchData = async () => {
  //     try {
  //       setLoading(true);
  //       const res = await Axios.get(`https://newsapi.org/v2/top-headlines?country=${COUNTRY}&category=${props?.category}&apiKey=${API_KEY}&page=1`);
  //       setInitialPost(res?.data?.articles);
  //       console.log(res?.data?.articles)
  //     } catch (error) {
  //       console.log('An error occurs while fetching', error);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   initialFetchData();
  // }, []);

  // const fetchData = async () => {
  //   props.setProgress(0);
  //   setLoading(true);
  //   try {
  //     const initialRes = await Axios.get(`https://newsapi.org/v2/top-headlines?country=${COUNTRY}&category=${props?.category}&apiKey=${API_KEY}&page=1`);
  //     const res = await Axios.get(`/api/v2/top-headlines?country=${COUNTRY}&category=${props?.category}&apiKey=${API_KEY}&page=${page}`);
  //     setPost(res?.data.articles);
  //     setInitialPost(initialRes?.data?.articles);
  //     setTotal(Math.ceil(res?.data?.totalResults / LIMIT));
  //   } catch (error) {
  //     console.log('An error occurs while fetching', error);
  //   } finally {
  //     setLoading(false);
  //     props.setProgress(100);
  //   }
  // };

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
          xs: '4rem 0',
          sm: '3rem 0',
          md: '4rem 0',
        },

      }}>
        {/* Top Section */}
        <Box
          sx={{
            display: 'flex',
            height: '100%',
            padding: {
              xs: '1rem',
              sm: '2rem',
              md: '2rem'
            },
            gap: {
              xs: '3rem',
              sm: '3rem',
              md: '2rem'
            },
            flexDirection: {
              xs: 'column',
              sm: 'column',
              md: 'row',
            },
          }}
          // style={{border: '1px solid red'}}
        >
          <LatestNews initialPost={initialPost} />
          <RecentUpdates initialPost={initialPost} />
        </Box>


        {/* Mid Section */}
        <MoreStories post={post} />

        {/* Pagination */}
        {
          !loading && <PaginatedButtonBox
            page={page}
            handleNext={handleNext}
            handlePrevious={handlePrevious}
            total={total}
          />
        }
      </Box >
  );
}

export default News;
