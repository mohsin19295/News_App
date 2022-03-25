import React, { useState, useEffect } from 'react'
import axios from "axios"
import "./news.css"
import Snipper from "../../src/spinner.gif"

function News(props) {
  const [post, setPost] = useState([])
  const [page, setPage] = useState(1)
  const [limit, setLimit] = useState(8)
  const [total, setTotal] = useState(null)
  const [loading, setLoading]= useState(false)

  useEffect(()=>{
    props.setProgress(0)
    setLoading(true)
    axios.get(`https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${limit}`)
    .then(res=>{
      console.log(res.data.articles)
      setPost(res.data.articles)
      setTotal(Math.ceil(res.data.totalResults/limit))
      props.setProgress(100)
    })
    .catch(err=>{
      console.log(err)
    })
    .finally(()=>setLoading(false))
  }, [page])


  const handlePrevious =()=>{
    console.log("previous")
    setPage(page-1)
  }

  const handleNext =()=>{
    console.log("next")
    setPage(page+1)
    console.log(total)
  }

   return (
    <>
     <div id="container">
     {loading && <img id="snipper" src={Snipper} alt="" /> }
    
     <div id="grid">
    {post.map(e=>(
      <div key={e.id == null ? e.id=Math.random(1,100): e.id}>
          <img src={e.urlToImage == null ? e.urlToImage = "https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg?20200913095930" : e.urlToImage} alt="No image" />
          <p id="title">{e.title}</p>
          <p id="author">{e.author == null ? e.author = "Unknown" : e.author}</p> 
          <p id="date">{new Date(e.publishedAt).toGMTString()}</p>
          <a id="readMore" href={e.url} target="_blank" >Read more</a>
      </div>
    ))}
    </div>

      <div id="btnDiv">
        <button className="preNextBtn" disabled={page <= 1} onClick={handlePrevious}>&larr; Previous</button>
        <button className="preNextBtn" disabled={page >= total}  onClick={handleNext}>Next &rarr;</button>
      </div>
      
       </div>
    </>
  );
}
export default News