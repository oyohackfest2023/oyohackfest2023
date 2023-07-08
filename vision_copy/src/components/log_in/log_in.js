import React from "react";
import styles from "./log_in.module.css";
import Lottie from "lottie-react";
import { Link } from "react-router-dom";

import Starrysky from "../../lottie-animations/starrysky.json";
import Worldmap from "../../lottie-animations/worldmap.json";

function LogIn() {
  return (
    <body className={styles.body}>
      {" "}
      {/* <lottie-player
        className="bcg_lott"
        src="Orp-404-2.json"
        background="transparent"
        speed="1"
        loop
        autoplay
      ></lottie-player> */}
      {/* <lottie-player
        class="world_lott"
        src="132900-0101ftue-04.json"
        background="transparent"
        speed="1"
        loop
        autoplay
      ></lottie-player> */}{" "}
      <Lottie animationData={Starrysky} className={styles.bcg_lott} />
      {/* <Lottie animationData={Worldmap} className={styles.world_lott} /> */}
      <img className={styles.logo} src="primitivelogo.png" />
      <p className={styles.large_text}>Vision</p>
      <div className={styles.sign_in_panel}>
        <p className={styles.login_header}>Log in</p>
        <p className={styles.login_sub_header}>
          New to LottieFiles?{" "}
          <a className={styles.login_sub_header_hover}>Create an account</a>
        </p>

        <br />
        <input
          type="email"
          id={styles.email}
          name="email"
          placeholder="Email"
        />
        <br />
        <input
          type="password"
          id={styles.password}
          name="password"
          placeholder="Password"
        />
        <i
          className={`${styles.bx} ${styles.bx_hide}`}
          id={styles.toggle_password}
          onclick="togglePassWord()"
        ></i>
        <p className={styles.forgot_password}>Forgot your password?</p>
        <div className={styles.login_btn}>
          <Link style={{ textDecoration: "none" }} to={"/signup"}>
            <p className={styles.login_btn_text}>Create an account</p>
          </Link>
        </div>

        <h2 className={styles.log_in_h2}>
          <span>or</span>
        </h2>

        <div className={styles.g_btn}>
          <div className={styles.g_btn_box}>
            <img src="/google-logo-9808.png" className={styles.g_logo} />
          </div>
          <p className={styles.g_login_btn_text}>Continue with Google</p>
        </div>

        <div className={styles.a_btn}>
          <img src="/apple-logo.png" id={styles["a_logo"]} />
          <p className={styles.a_login_btn_text}>Continue with Apple</p>
        </div>

        <p className={styles.pivacy_policy_terms_and_condition}>
          By continuing, you agree Primitive
          <a className={styles.login_sub_header_hover}>Terms of Service</a> and
          <a className={styles.login_sub_header_hover}>Privacy Policy.</a>
        </p>
      </div>
    </body>
  );
}
export default LogIn;
