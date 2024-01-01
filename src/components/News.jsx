import React, { useState, useEffect } from 'react'
import axios from "axios"
import "./news.css"
import Snipper from "../../src/spinner.gif"

function News(props) {
  const [post, setPost] = useState([])
  const [page, setPage] = useState(1)
  const [total, setTotal] = useState(0)
  const [loading, setLoading] = useState(false)
  
  const fetchData = async () => {
    const apiKey = "3e19ce7b891447459477f5ef54207823";
    try {
      props.setProgress(0)
      setLoading(true);
      const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=${apiKey}&page=${page}`);
      console.log(response);
      setPost(prePost => [...prePost, ...response?.data?.articles]);
      setPage(pre => pre + 1);
      setTotal(response?.data?.totalResults);
      props.setProgress(100);
    } catch (error) {
      console.log('An error occurs while fetching', error);
    } finally {
      setLoading(false);
    }
  }

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop ===
      document.documentElement.offsetHeight
    ) {
      console.log(post.length < total);
      if (!loading) {
        fetchData();
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    fetchData();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [page])

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
      <div id="container">
        <div id="grid">
          {post?.map(e => (
            <div key={e.id == null ? e.id = Math.random(1, 100) : e.id}>
              <img src={e.urlToImage == null ? e.urlToImage = "https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg?20200913095930" : e.urlToImage} alt="urlToImage" />
              <p id="title">{e.title}</p>
              <p id="author">{e.source.name == null ? e.source.name = "Unknown" : e.source.name}</p>
              <p id="date">{formatDate(e.publishedAt)}</p>
              <a id="readMore" href={e.url} target="_blank" rel="noreferrer" >Read more</a>
            </div>
          ))}
      </div>
      {loading && <img id="snipper" src={Snipper} alt="spinner" />}
      </div>
  );
}
export default News