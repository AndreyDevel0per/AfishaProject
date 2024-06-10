import CalendarPage from "./components/CalendarPage/CalendarPage";
import Carousel from "./components/Carousel/Carousel";
import EventPage from "./components/EventPage/EventPage";
import Footer from "./components/Footer/Footer";
import HeaderImg from "./components/HeaderImg/HeaderImg";
import LoginPage from "./components/LoginPage/LoginPage";
import MainSection from "./components/MainSection/MainSection";
import RegisterPage from "./components/RegisterPage/RegisterPage";
import SearchPage from "./components/SearchPage/SearchPage";
import FindSection from "./components/findSection/FindSection";
import Header from "./components/header/Header";
import Slider from "./components/slider/Slider"
import {Route, Routes} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={[<HeaderImg/>, <Slider />, <Carousel/>, <FindSection/>, <MainSection/>]}/>
        <Route path="/event/:id" element={[<EventPage/>]}/>
        <Route path="/:login" element={<LoginPage/>}/>
        <Route path="/register" element={<RegisterPage/>}/>
        <Route path="/search" element={<SearchPage/>}/>
        <Route path="/calendar" element={<CalendarPage/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
