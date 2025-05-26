import {Skeleton} from '@mui/material'
import {LazyLoadImage} from 'react-lazy-load-image-component'
import { useState } from 'react'

export const ImageContainer = ({imageUrl, urlToImage, widthP, heightP, radiusP = '5px' }) => {
    const [loaded, setLoaded] = useState(false);

    return (
        <>
        {
            !loaded && (
                <Skeleton
                    variant='rectangular'
                    animation='wave'
                    sx={{
                        width: '100%',
                        height: '100%',
                        borderRadius: radiusP,
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        zIndex: 1
                    }}
                />
            )
        }
        <LazyLoadImage
            src={imageUrl}
            alt={urlToImage || "No Image Available"}
            effect='blur'
            wrapperClassName='lazy-image-wrapper'
            onLoad={()=> setLoaded(true)}
            style={{
            width: widthP,
            height: heightP,
            borderRadius: radiusP,
            objectFit: 'cover',
            opacity: loaded ? 1 : 0,
            transition: 'opacity 0.3s ease',
            position: 'relative',
            zIndex: 2
            }}
        />
        </>
    )
}