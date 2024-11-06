import {useState,useEffect} from "react"
import { MyIcon } from "../components/myicon"
import { Comment } from "../components/comments"
import { getVideoDetails, getVideoComments } from "../api"
import {ArrowLeftOutlined} from '@ant-design/icons';

import { useParams, useSearchParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import { Skeleton,Button } from 'antd';

export const VideoPage=()=>{

    const [loading,setLoading] = useState(false)
    const [showLess,setShowLess] = useState(true)
    const [showLoadMoreComment, setShowLoadMoreComment] = useState(true)

    const [pageId, setPageId] = useState("")
    const [videoDetails,setVideoDetails] = useState(null)
    const [videoComments, setVideoComments] = useState([])

    const navigate = useNavigate()
    const param = useParams()
    const [searchParm] = useSearchParams()

    const video_id = param.id

    useEffect(()=>{
      console.log(searchParm.get("id"));
      
        // get video details
        getVideoDetails(video_id)
        .then(res=>{
          if(res !== null){
            setVideoDetails(res)
          }else{
            navigate("/?error=404")
          }
        })
    
        // get video comments
        getVideoComments(video_id)
        .then(res=>{          
          console.log(res.comments);
          
          setVideoComments(res.comments)

          if(res.nextPageToken === null){
            setShowLoadMoreComment(false)
          }else{
            setPageId(res.nextPageToken)
          }
          
        })
      },[])

      // Get more comments for video
      const getMoreComments=()=>{
        setLoading(true)
        getVideoComments(video_id,pageId)
        .then(res=>{
          setLoading(false)
  
          if(res.nextPageToken === null){
            setShowLoadMoreComment(false)
          }else{
            setPageId(res.nextPageToken)
          }

          const comments = res.comments
    
          let oldComments = [...videoComments]
          oldComments = oldComments.concat(comments)   
    
          setVideoComments(oldComments)
        })
      }


    return (
        <div className="search-container">
            <div className="search-left">
              
              {videoDetails === null ?
                <div className='heading'>
                  <div className='go-back' onClick={()=>{navigate("/")}}><ArrowLeftOutlined /></div>
                  <Skeleton/>
                </div>
                :
                <>
                  <div className='heading'>
                    <div className='go-back' onClick={()=>{navigate("/")}}><ArrowLeftOutlined /></div>
                    <h2>{videoDetails.name}</h2>
                  </div>
                  <div className="icons-container">
                    <MyIcon name="views" value={videoDetails.views}/>
                    <MyIcon name="likes" value={videoDetails.likes}/>
                  </div>
                  <div className='description-container'>
                    <div className="description">
                      {
                      showLess?
                        videoDetails.description.slice(0,200)
                      :
                        videoDetails.description
                      }
                      {" "}<span className='description-action' onClick={()=>{
                        setShowLess(!showLess)
                      }}>{showLess ? "Show More" : "Show Less"}</span>
                    </div>
                  </div>
                </>
              }
            </div>
            <div className="search-right">
    
              <h4>Comments</h4>

              {
                videoComments.length == 0?
                <>
                <Skeleton
                  avatar
                  paragraph={{
                    rows: 4,
                  }}
                />

                <Skeleton
                  avatar
                  paragraph={{
                    rows: 4,
                  }}
                />    
              </>

              :
              <div>
               { videoComments.map((comment,index)=>(
                <Comment key={index} comment={comment} />
              ))}
    
              {showLoadMoreComment&&<div className='btn-container'>
                <Button onClick={getMoreComments} loading={loading}>Load More</Button>
              </div>}
            </div>}
          </div>
        </div>
    );
}