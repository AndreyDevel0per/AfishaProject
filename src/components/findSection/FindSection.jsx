import Button from "../Button/Button";
import DropDown from "../DropDownMenu/DropDown/DropDown";
import DropDownItem from "../DropDownMenu/DropDownItem/DropDownItem";
import './FindSection.css'
import {useDispatch, useSelector} from 'react-redux'
import {setCategory} from '../../redux/categorySlice'
import {setEvents} from '../../redux/eventSlice'
import axios from 'axios'
import { useState } from "react";

export default function FindSection() {
    const items = ['Categories','Music', 'Sport', 'Museum']

    const [open, setOpen] = useState(false)

    const category = useSelector((state) => state.categories.category)

    const dispatch = useDispatch()

    // const [category, setCategory] = useState('')

    const displayCategory = () => {
        if(category === 'Categories') {
            axios.get(`https://78e49fb1217fe058.mokky.dev/events`).then(res => {
            dispatch(setEvents(res.data))
            })
        } else {
            axios.get(`https://78e49fb1217fe058.mokky.dev/events?category=${category}`).then(res => {
            dispatch(setEvents(res.data))
            })
        }
    }

    //const menu = document.getElementById('content')

    return(
        <section className="findSection">
            <div className="findSectionContainer">
                <div className="findSection__header">
                    <h1>FIND EVENTS</h1>
                </div>
                <div className="findSection__filters">
                    <DropDown open = {open} setOpen={setOpen} buttonText={category} content={<>
                    {
                        items.map(item => <DropDownItem key={item} onClick={() => {
                            dispatch(setCategory(`${item}`))
                            // menu.setAttribute("style", "opacity: 0; transform: translateY(-5%); pointer-events: none;")
                            setOpen((open) => !open)
                        }}>{`${item}`}</DropDownItem>)
                    }
                    </>}/>
                </div>
                <div className="findSection__buttons">
                    <Button onClick={displayCategory}>Go</Button>
                </div>
            </div>
        </section>
    )
}