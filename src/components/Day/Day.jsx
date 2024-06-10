import Event from '../Event/Event'
import axios from 'axios'
import './Day.css'
import { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {setEvents} from '../../redux/eventSlice'

export default function Day({date}) {
    // const [events, setEvents] = useState([])
    // const category = useSelector((state) => state.categories.category)
    const events = useSelector((state) =>state.events.events)
    const dispatch = useDispatch()

    useEffect(() => {
        axios.get(`https://78e49fb1217fe058.mokky.dev/events`).then(res => {
            // setEvents(res.data)
            dispatch(setEvents(res.data))
            // console.log(date)
        })
    }, [])

    return (
        <div className='day'>
            <div className="day__header">
                <h1>{date}</h1>
            </div>
            <div className="day__container">
                {events.map(event => (
                    // <Event img = {event.img} {...event}/>
                    event.date === date ? <Event img = {event.img} {...event}/> : null
                ))}
            </div>
        </div>
    )
}