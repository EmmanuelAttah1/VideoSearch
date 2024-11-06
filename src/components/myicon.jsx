import {EyeOutlined,LikeOutlined} from '@ant-design/icons';


export const MyIcon=(props)=>{

  // eslint-disable-next-line react/prop-types
  const {name,value} = props
  return(
    <div className='icon-inner'>
      <div className='icon'>
        {name=="views"?<EyeOutlined />:<LikeOutlined />}
      </div>
      <div className='icon-value'>{value}</div>
    </div>
  )
}