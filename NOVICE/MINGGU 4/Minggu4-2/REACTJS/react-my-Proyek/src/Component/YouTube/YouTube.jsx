import React from "react";
import './YouTube.css';

const YouTubeCom = (props) => {
  return (
       <div className="youtube-wrapper">
         <div className="img-thumb">
           <img src="https://cdn.mos.cms.futurecdn.net/9QTpESGBXa32D29J77VR3d.jpg"/>
           <p className="time">{props.time}</p>
         </div>
           <p className="title"> {props.title}</p>
           <p className="desc"> {props.desc} </p>
          
       </div>

  )
}
YouTubeCom.defaultProps ={
  time: '00.00',
  title: ' Coding ',
  desc: '1x ditonton, 2 hari yang lalu'
}


export default YouTubeCom;