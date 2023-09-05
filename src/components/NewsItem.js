import React from 'react'
import newsImage from './newsImage.jpg'
const NewsItem = (props) => {
  let myStyle = {
    color: props.mode === 'dark' ? 'white' : 'black',
    backgroundColor : props.mode === 'dark' ? '#333333' : 'white'
  }
  let myStyle2 = {
    color: props.mode === 'dark' ? 'white' : 'black',
    backgroundColor : props.mode === 'dark' ? '#333333' : 'white',
    border: '1px solid #888888'
  }
  let { title, description, imageurl, newsurl, date, author } = props;
  return (
    <div className='container my-3' style = {myStyle}>
      <div className="card p-1 rounded" style={myStyle2}>
        <img src={imageurl ? imageurl : newsImage} className="card-img-top" alt="..." />
        <div className="card-body" style={myStyle}>
          <h5 className="card-title">{title ? title : "No title"}</h5>
          <p className="card-text">{description ? description : "No description"}</p>
          <p className="card-text"><small className={`text-${props.mode === 'light'? 'dark': 'light'}`}>by {author ? author : 'unknown'}</small></p>
          <p className="card-text"><small className={`text-${props.mode === 'light'? 'dark': 'light'}`}>Last updated at {new Date(date).toGMTString()}</small></p>
          <a href={newsurl} className={`btn btn-sm btn-${props.mode === 'light'? 'dark': 'light'}`}>Read More</a>
        </div>
      </div>
    </div>
  )
}

export default NewsItem