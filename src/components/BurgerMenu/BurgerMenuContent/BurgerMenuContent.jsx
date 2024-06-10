import BurgerMenuCloseButton from "../BurgerMenuCloseButton/BurgerMenuCloseButton";
import "./BurgerMenuContent.css";
import Img from "../../../img/Img01.webp";
import { useDispatch, useSelector } from "react-redux";
import SignOutButton from "../../SignOutButton/SignOutButton";
import { setEmail, setToken, setfullName } from "../../../redux/tokenSlice";

export default function BurgerMenuContent({ children, toggle, menuActive }) {
  const fullName = useSelector((state) => state.token.fullName);

  const dispatch = useDispatch()

  const toggleSignOut = () => {
    localStorage.clear()
    dispatch(setfullName(''))
    dispatch(setToken(''))
    dispatch(setEmail(''))
  }

  return (
    <div
      className={`burgerMenuContent ${
        menuActive ? "burgerMenuContent_open" : null
      }`}
    >
      <BurgerMenuCloseButton toggle={toggle} isClose={menuActive} />
      <div className="burgerMenuContent__container">
        <div className="burgerMenuContent__list">{children}</div>
        <div className="burgerMenuContent__interesting">
          <div className="burgerMenuContent__header">
            <div className="burgerMenuContent__text">
              <h1>{fullName ? `Hello, ${fullName}!` : "Today's must read"}</h1>
            </div>
            <div className="burgerMenuContent__button">
              {fullName ? <SignOutButton onClick={toggleSignOut}/> : null}
            </div>
          </div>
          <div className="burgerMenuContent__img">
            <img id="contentImg" src={Img} alt="" />
            <h2>Name</h2>
          </div>
        </div>
      </div>
    </div>
  );
}
