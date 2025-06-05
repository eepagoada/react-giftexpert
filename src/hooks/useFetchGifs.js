import { useEffect, useState } from "react"
import { getGifs } from "../helpers/getGif"

export const useFetchGifs = ( category ) => {

    const [Image, setImage] = useState([])
    const [isLoading, setisLoading] = useState(true)

    const getImages = async () => {
        setImage( await getGifs(category) )
        setisLoading(false)
    }

    useEffect( () => {
        getImages()
    }, [])
  
    return {
        Image,
        isLoading
    }
}
