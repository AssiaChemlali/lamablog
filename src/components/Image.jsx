import React from 'react'
import { IKImage } from 'imagekitio-react'
const Image = ({path,className,w,h,alt}) => {
  return (
    <IKImage  
    urlEndpoint={import.meta.env.VITE_IK_URL_ENDPOINT}
    path={path}
    alt={alt}  
    width={w}
    height={h}
    loading='lazy'
    lqip={{ active: true, quality: 20 }}

    className={className}/>
  )
}

export default Image
