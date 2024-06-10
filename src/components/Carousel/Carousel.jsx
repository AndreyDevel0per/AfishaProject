import CarouselItem from '../CarouselItem/CarouselItem'
import './Carousel.css'

export default function Carousel() {
    const items = ['1,000,000+ Visitors per year', '100+ artists', '200+ musicians', '20 countries represented', '365 days', '50+ sport events']

    return (
        <div className='carousel'>
            <div className="carousel__container">
                <div className="carousel__slide">
                    {items.map(item => (
                        <CarouselItem name = {item}/>
                    ))}
                </div>
                <div className="carousel__slide">
                    {items.map(item => (
                        <CarouselItem name = {item}/>
                    ))}
                </div>
            </div>
        </div>
    )
}