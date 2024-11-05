import { useState,useEffect } from 'react'
import './App.css'

import {EyeOutlined,LikeOutlined,ArrowLeftOutlined} from '@ant-design/icons';

const data = {
  name : "Video Name",
  description:`
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Pariatur sequi fuga necessitatibus provident officia commodi odit sed quidem,
            unde at. Debitis nam doloribus aliquam dicta repellat cum consequatur ducimus mollitia.
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Pariatur sequi fuga necessitatibus provident officia commodi odit sed quidem,
            unde at. Debitis nam doloribus aliquam dicta repellat cum consequatur ducimus mollitia.
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Pariatur sequi fuga necessitatibus provident officia commodi odit sed quidem,
            unde at. Debitis nam doloribus aliquam dicta repellat cum consequatur ducimus mollitia.
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Pariatur sequi fuga necessitatibus provident officia commodi odit sed quidem,
            unde at. Debitis nam doloribus aliquam dicta repellat cum consequatur ducimus mollitia.
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Pariatur sequi fuga necessitatibus provident officia commodi odit sed quidem,
            unde at. Debitis nam doloribus aliquam dicta repellat cum consequatur ducimus mollitia.
  `,
  views : "20k",
  likes : "5k"
}

const MyIcon=({name,value})=>{
  return(
    <div className='icon-inner'>
        <div className='icon'>
          {name=="views"?<EyeOutlined />:<LikeOutlined />}
        </div>
        <div className='icon-value'>{value}</div>
      </div>
  )
}

function App() {

  const [showLess,setShowLess] = useState(true)

  return (
    <div className="search-container">
      <div className="search-left">
        <div className='heading'>
          <div className='go-back'><ArrowLeftOutlined /></div>
          <h2>{data.name}</h2>
        </div>
        <div className="icons-container">
          <MyIcon name="views" value={data.views}/>
          <MyIcon name="likes" value={data.likes}/>
        </div>
        <div className='description-container'>
          <div className="description">
            {
            showLess?
              data.description.slice(0,200)
            :
              data.description
            }
            {" "}<span className='description-action' onClick={()=>{
              setShowLess(!showLess)
            }}>{showLess ? "Show More" : "Show Less"}</span>
          </div>
        </div>
      </div>
      <div className="search-right"></div>
    </div>
  )
}

export default App
