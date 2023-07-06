import React from "react";
import styles from "./home.module.css";
import { Link } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { MdOutlineCancel } from "react-icons/md";
import cancelButton from "../../assets/cancel_button.svg";
import Lottie from "lottie-react";
import FingerTyping from "../../lottie-animations/fingerstyping.json";
import { click } from "@testing-library/user-event/dist/click";
function Home() {
  const [dynamicText, setDynamicText] = React.useState("");
  const currentIndexRef = React.useRef(0);
  const [dropdown, setDropdown] = React.useState(false);
  const [showForm, setShowForm] = React.useState(false);
  function handleDropdown() {
    setDropdown((prev) => !prev);
  }
  var txt = "Get started by creating an account";
  var speed = 25;
  // let changeIcon = document.querySelector("#open_menu");
  // let sidebar = document.querySelector("#sidebar");
  function typeWriter() {
    let i = 0;
    let prevI;
    const interval = setInterval(() => {
      // console.log("start");

      if (i < 35) {
        if (prevI !== i) {
          console.log(prevI, i);
          setDynamicText((prev) => {
            prevI = i;

            return prev + txt.charAt(i);
          });
        }

        // console.log("fahogbo;ab", dynamicText);
        i++;
        console.log(i);
      } else {
        console.log("aflfa;hgbao;gbao;gbwobgwogbwipogegpbepgibogbepwg");
        clearInterval(interval);
      }
    }, 35);
    // interval();
  }

  React.useEffect(() => {
    typeWriter();
  }, []);

  return (
    <>
      {" "}
      <div className={styles.widthfromfull}>
        <div className={styles.slideshow_container}>
          {!showForm && <img className={styles.mySlides} src="/tutor.png" />}

          <div className={styles.alldot}>
            <span className={styles.alldot}></span>
            <span className={styles.alldot}></span>
            <span className={styles.alldot}></span>
          </div>
        </div>

        {!showForm && (
          <div className={styles.info_left}>
            {/* <lottie-player
            src="../lottie-animations/finger_typing.json"
            background="transparent"
            speed="1"
            loop
            autoplay
          ></lottie-player> */}
            {/* <Player
            src="https://lottie.host/?file=8baf0f81-a1b8-4521-a0bd-b02b7070173d/s41DoRnFSG.json"
            className="player"
            loop
            autoplay
          /> */}
            {/* <Lottie
            animationData={FingerTyping}
            className={styles.lottie_player}
          /> */}

            <div className={styles.large_text_div}>
              <p className={styles.large_text}>
                Tech Career Compass: Your Path to Success Unveiled
              </p>
            </div>
            <div className={styles.small_text_div}>
              <p className={styles.small_text}>
                Empowering Tech Enthusiasts with Personalized Guidance and
                Connections to Fuel Career Growth.
              </p>
            </div>
            <div className={styles.download_img}>
              <button
                onClick={() => {
                  console.log("click");
                  return setShowForm(true);
                }}
                className={styles.getstarted}
              >
                Get Started
              </button>
            </div>
          </div>
        )}

        <div className={styles.home_top_bar}>
          <img className={styles.logo} src="/primitivelogo.png" />

          <div className={styles.horizontal_top_menu}>
            <nav className={styles.horizontal_top_nav}>
              <ul>
                <li>
                  <a
                    href="#"
                    className={styles.homeli}
                    style={{ color: "black" }}
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a href="#">About us</a>
                </li>
                <li>
                  <a href="#">Contact us</a>
                </li>
                <li>
                  <a href="#">FAQ</a>
                </li>
              </ul>
            </nav>
          </div>
          <div className={styles.log_in_btn}>
            <Link style={{ textDecoration: "none" }} to={"/login"}>
              <p className={styles.log_in_btn_text}>Log in</p>
            </Link>
          </div>
          <div className={styles.sign_up_btn}>
            <Link style={{ textDecoration: "none" }} to={"/signup"}>
              <p className={styles.sign_up_btn_text}>Sign Up</p>{" "}
            </Link>
          </div>
        </div>
        {showForm && (
          <iframe
            className={styles.form}
            src="https://docs.google.com/forms/d/e/1FAIpQLSeVE1mlibJsmN0MmuLC0l9zv5Wh-2zOWVExhDwl7dTmYaivwA/viewform?embedded=true"
            // width="640"
            // height="1505"
            frameborder="0"
            marginheight="0"
            marginwidth="0"
          >
            Loading…
          </iframe>
        )}
        <div className={styles.horizontal_bottom_menu}>
          <nav className={styles.horizontal_bottom_nav}>
            <ul>
              <li className={styles.navbottomli}>
                <a className={styles.bottomnavullia} href="#">
                  Privacy policy
                </a>
              </li>
              <li className={styles.navbottomli}>
                <a className={styles.bottomnavullia} href="#">
                  Terms and conditions
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div className={styles.adjusted_mobile_view}>
        {!dropdown && (
          <RxHamburgerMenu
            className={`${styles.bx} ${styles.bx_menu}`}
            onClick={handleDropdown}
          />
        )}
        {dropdown && (
          <img
            onClick={handleDropdown}
            src={cancelButton}
            className={`${styles.bx} ${styles.bx_x}`}
          />
        )}
        {dropdown && (
          <div className={styles.primitive_slider} id="sidebar">
            <ul>
              <li className={styles.first_item}>Home</li>
              <li>About us</li>
              <li>FAQ</li>
              <li>Contact us</li>
              <li>Privacy policy</li>
              <li>Terms and conditions</li>
            </ul>
          </div>
        )}

        <img className={styles.logo} src="/primitivelogo.png" />
        <Lottie animationData={FingerTyping} className={styles.lottie_player} />

        <p className={styles.large_text_header}>Primitive</p>
        <div className={styles.large_text_div}>
          <p className={styles.large_text} id="mobile_get_started">
            {dynamicText}
          </p>
        </div>

        <div className={styles.auth_btns}>
          <div className={styles.log_in_btn}>
            <Link style={{ textDecoration: "none" }} to={"/login"}>
              {" "}
              <p className={styles.log_in_btn_text}>Log in</p>
            </Link>
          </div>

          <div className={styles.sign_up_btn}>
            <Link to={"/signup"}>
              {" "}
              <p className={styles.sign_up_btn_text}>Sign Up</p>
            </Link>
          </div>
        </div>

        <div className={styles.mobile_download_text}>
          <p className={styles.large_text}>Download now</p>
        </div>

        <div className={styles.mobile_download_img}>
          <img className={styles.g_btn_mobile} src="google_download_img.png" />
          <img className={styles.a_btn_mobile} src="apple_download_img.png" />
        </div>

        <div className={styles.slideshow_container}>
          <img className={styles.mySlides} src="iphone14.png" />

          <div className={styles.alldot}>
            <span className={styles.dot}></span>
            <span className={styles.dot}></span>
            <span className={styles.dot}></span>
          </div>
        </div>
      </div>
    </>
  );
}
export default Home;
