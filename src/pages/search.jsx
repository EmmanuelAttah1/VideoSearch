import {useState, useEffect} from "react"
import { Button, Input, Space,message } from 'antd';
import { useNavigate, useSearchParams } from "react-router-dom";

/**
 * The SearchVideoPage component allows users to search for a YouTube video by
 * entering its video ID.
 * @returns The `SearchVideoPage` component is being returned. It contains a form for searching for a
 * YouTube video by entering the video ID. The user can input the video ID in the input field and click
 * the "Search" button to navigate to the video page. If there is an error in the search parameters, an
 * error message will be displayed.
 */

export const SearchVideoPage=()=>{

    const [messageApi, contextHolder] = message.useMessage();
    const [searchParams] = useSearchParams()

    const navigate = useNavigate()

    const [videoId,setVideoId] = useState(null)

    const getVideo=()=>{
        if(videoId !== null){
            navigate(videoId)
        }
    }

    useEffect(()=>{
        const hasError =  searchParams.get("error")
        if(hasError){
            messageApi.open({
                type: 'error',
                content: 'There is no video with that video id',
            });
        }
    },[messageApi, searchParams])

    return(
        <div className='searchContainer'>
            {contextHolder}
            <h1>Find Youtube Video</h1>
            <Space.Compact
                style={{
                    width: '100%',
                }}
                >
                <Input placeholder='Enter video id' size='large' onInput={e=>{setVideoId(e.target.value)}}/>
                <Button type="primary" size='large' onClick={getVideo}>Search</Button>
            </Space.Compact>
        </div>
    );
}