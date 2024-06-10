import './header.css'
import searchImg from '../../img/icons/search.svg'
import logo from '../../img/logo3.jpg'
import Burger from '../BurgerMenu/Burger/Burger'
import BurgerMenuItem from '../BurgerMenu/BurgerMenuItem/BurgerMenuItem'
import { useState } from 'react'
import Button from '../Button/Button'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { setSearchResult } from '../../redux/searchSlice'
import { setformValue } from '../../redux/formSlice'

function Header () {
    const [menuActive, setMenuActive] = useState(false)
    
    const toggleMenu = () => {
        setMenuActive((menuActive) => !menuActive)
    }

    const itemsObj = [
        {
            header: 'Home',
            link: ''
        },
        {
            header: 'Log in',
            link: 'login'
        },
        {
            header: 'Calendar',
            link: 'calendar'
        },
    ]

    const[formValue, setFormValue] = useState('')

    const[searchActive, setSearchActive] = useState(false)

    // const searchResult = useSelector((state) => state.search.search)

    // const formValue = useSelector((state) => state.formValue.formValue)

    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault();
      };
    
    const handleInputChange = (e) => {
        // dispatch(setformValue(e.target.value))
        setFormValue(e.target.value)
    }
    
    const toggleSearch = () => {
        setSearchActive((open) => !open)
    }

    const search = () => {
        axios.get(`https://78e49fb1217fe058.mokky.dev/events?name=*${formValue}`).then(res => {
            // dispatch(setEvents(res.data))
            dispatch(setSearchResult(res.data))
            // console.log(formValue)
            // console.log(res.data)
            // console.log("heloooooooodsfdf")  
        })
    }

    // const form = () => {
    //     dispatch(setformValue())
    // }

    return (
        <header className='header'>
            <div className="header__row">
                <div className="header__menu">
                    {/* <img src={menuImg} alt="" /> */}
                    <Burger menuActive={menuActive} toggleMenu={toggleMenu} content ={
                        <>
                            {
                                itemsObj.map(item => <BurgerMenuItem key={item.header} link={item.link} toggleMenu={toggleMenu}>{`${item.header}`}</BurgerMenuItem>)
                            }
                        </>
                    }/>
                </div>
                <div className="header__logo">
                    {/* <img src={logo} alt="" /> */}
                </div>
                <div className={searchActive ? "header__input input_open" : "header__input"}>
                    <form onSubmit={handleSubmit}>
                        <input type="text" value={formValue} onChange={handleInputChange}/>
                        <Link to={"/search"}><Button onClick={search}>Go</Button></Link>
                    </form>
                </div>
                <div className="header__search">
                    <button onClick={toggleSearch}>
                        <img src={searchImg} alt="" />
                    </button>
                </div>
            </div>
        </header>
    )
}

export default Header;