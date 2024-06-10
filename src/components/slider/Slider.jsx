import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Card from '../sliderCard/SliderCard'
import './slider.css'
import card1 from '../../img/cards/card1.webp'
import card2 from '../../img/cards/card2.webp'
import card3 from '../../img/cards/card3.webp'
import card4 from '../../img/cards/card4.webp'

export default function Slider() {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
    
    const content = [
      {
        img: card1,
        category: 'Sport',
        name: 'LA Dodgers',
        date: 'June 10'
      },
      {
        img: card2,
        category: 'Music',
        name: 'Hip Hop',
        date: 'June 29'
      },
      {
        img: card3,
        category: 'Museum',
        name: 'Exhibition',
        date: 'June 9'
      },
      {
        img: card4,
        category: 'Theatre',
        name: 'Theatre acting master class',
        date: 'June 10'
      }
    ]

    return (
        <div className='slider'>
            <Carousel responsive={responsive}>
                {content.map(item => <Card img={item.img} category={item.category} name={item.name} date={item.date}/>)}
            </Carousel>
        </div>
    )
}