import React, {useEffect, useState} from 'react'
import './RowPost.css'
import axios from '../../axios'
import YouTube from 'react-youtube'
import {imageUrl, API_KEY} from '../../constants/constants'

function RowPost(props) {
  const [post, setPost] = useState([])
  const [urlId, setUrlId] = useState('')
  useEffect(() => {
    axios.get(props.url).then((res)=>{
      console.log(res.data);
      setPost(res.data.results)
    })
  }, [])

  const opts = {
    height: '400',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  const handleTrailer = (id)=>{
    console.log(id);
    axios.get(`movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((res)=>{
      console.log(res.data);
      if(res.data.results.length!==0){
        setUrlId(res.data.results[0])
      }else{
        console.log('No Trailer Available');
      }
    })
  }
  
  return (
    <div className='row'>
        <h2>{props.title}</h2>
        <div className='posters'>
          {post.map((obj)=>{
            return(
              <div className='poster-content'>
                <h2 className='movie-title'>{obj.title ? obj.title : obj.name}</h2>
                <img onClick={()=>{return handleTrailer(obj.id)}} className={props.isSmall ? 'smallPoster' : 'poster'} src={`${ obj.backdrop_path ? imageUrl+obj.backdrop_path : imageUrl+obj.poster_path}`} alt="poster" /> 
              </div>
            )
          })}
          
        </div>
        { urlId && <YouTube videoId={urlId.key} opts={opts}/> }
    </div>
  )
}

export default RowPost