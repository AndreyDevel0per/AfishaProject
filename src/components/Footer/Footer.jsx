import "./Footer.css";
import gitImg from "../../img/icons/github 1.svg";

export default function Footer() {
  return (
    <section className="footer">
      <h2>Discover</h2>
      <a href="https://github.com/AndreyDevel0per/AfishaProject">
        <div className="footer__container">
          <div className="footer__img">
            <img src={gitImg} alt="" />
          </div>
          <span>GitHub</span>
        </div>
      </a>
    </section>
  );
}
