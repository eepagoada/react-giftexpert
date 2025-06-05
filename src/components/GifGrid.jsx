import { useFetchGifs } from "../hooks/useFetchGifs"
import { GifItem } from "./GifItem"
import PropTypes from 'proptypes'

export const GifGrid = ({category}) => {

    const {isLoading, Image} = useFetchGifs( category )
    
    return (
        <>
            <h3 >{ category }</h3>
            {
                isLoading && <h2>Cargando...</h2>
            }
            <div className="card-grid">
                { 
                    Image.map ( (image) => 
                        <GifItem key={image.id} {...image}/>
                    )
                }
            </div>         
        </>
    )
}

GifGrid.propTypes = {
    category: PropTypes.string.isRequired,
}
