import { useSelector } from 'react-redux'
import './SearchPage.css'
import Event from '../Event/Event'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export default function SearchPage() {
    const searchResult = useSelector((state) => state.search.search)

    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
      }, [pathname]);

    return (
        <div className='searchPage'>
            <h1>SEARCH RESULTS</h1>
            <div className="searchPage__container">
                {searchResult ? searchResult.map((result) => <Event img = {result.img} {...result}/>) : null}
            </div>
        </div>
    )
}