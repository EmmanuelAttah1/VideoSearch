import {useState} from "react"
import { MyIcon } from "./myicon"


export const Comment=(props)=>{

  /**
   * The `Comment` component displays a comment with the option to show more or less
   * text.
   * @returns The `Comment` component is being returned. It displays a comment with the author's name,
   * profile picture, text, like count, and published date. The text is truncated to 100 characters
   * initially, with an option to show more or show less by clicking on "Show More" or "Show Less"
   * respectively.
  */

  const [showLess, setShowLess] = useState(true)
  // eslint-disable-next-line react/prop-types
  const {author,pic,text,likeCount,publishedAt} = props.comment

  return(
    <div className='comment'>
      <div className='comment-left'>
        <div className='author-image-container'><img src={pic} /></div>
      </div>
      <div className='comment-right'>
        <div className='author-name'>{author}</div>
        <div className='comment-text'>
          {showLess? text.slice(0,100) : text }{" "}
          {text.length > 100 && <span className='description-action'
           onClick={()=>{setShowLess(!showLess)}}>{showLess?"Show More":"Show Less"}</span>}
        </div>
        <div className='comment-bottom'>
          <div className='comment-likes-container'>
            <MyIcon name="likes" value={likeCount}/>
          </div>
          <div className='comment-date'>{publishedAt}</div>
        </div>
      </div>
    </div>
  )
  }