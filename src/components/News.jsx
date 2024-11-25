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
        const res = await Axios.get(`https://newsapi.org/v2/top-headlines?country=${COUNTRY}&category=${props?.category}&apiKey=${API_KEY}&page=1`);
        // setInitialPost(staticData.articles);
        setInitialPost(res?.data?.articles);
      } catch (error) {
        console.log('An error occurs while fetching', error);
      } finally {
        setLoading(false);
      }
    };

    initialFetchData();
  }, []);

  useEffect(() => {
    fetchData();
  }, [page]);

  const fetchData = async () => {
    props.setProgress(0);
    setLoading(true);
    try {
      const initialRes = await Axios.get(`https://newsapi.org/v2/top-headlines?country=${COUNTRY}&category=${props?.category}&apiKey=${API_KEY}&page=1`);
      const res = await Axios.get(`/api/v2/top-headlines?country=${COUNTRY}&category=${props?.category}&apiKey=${API_KEY}&page=${page}`);
      // setPost(staticData.articles);
      // setInitialPost(staticData.articles);
      setPost(res?.data?.articles);
      setInitialPost(initialRes?.data?.articles);
      // setTotal(Math.ceil(staticData.totalResults / LIMIT));
      setTotal(Math.ceil(res?.data?.totalResults / LIMIT));
    } catch (error) {
      console.log('An error occurs while fetching', error);
    } finally {
      setLoading(false);
      props.setProgress(100);
    }
  };

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
