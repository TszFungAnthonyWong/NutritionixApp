import React from'react';
import './Backdrop.scss'
const backdrop = (props) =>(
        
        props.show?<div onClick={()=>props.click()} className="bd"></div>:null
)

export default backdrop

