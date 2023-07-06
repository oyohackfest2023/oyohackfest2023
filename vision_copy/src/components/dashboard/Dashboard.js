import React from "react";
import { GiTwoCoins } from "react-icons/gi";
import { MdOutlineArrowDropDownCircle } from "react-icons/md";
import styles from "./dashboard.module.css";
import Arrow from "../../assets/Arrow.svg";
import cancelButton from "../../assets/cancel_button.svg";
import primitiveIcon from "../../assets/bird-icon.svg";
import userPhoto from "../../assets/userPhoto.svg";
function Dashboard() {
  const [modal, setModal] = React.useState(false);
  const [amount, setAmount] = React.useState();
  function handleModal() {
    setModal(!modal);
  }
  return (
    <div className={styles.container}>
      <div className={styles.navbar}>
        <div className={styles.company}>
          <img className={styles.primitive_logo} src={primitiveIcon} />
          <p className={styles.primitive_name}>Primitive</p>
        </div>
        <p>
          <img src={userPhoto} className={styles.user_photo} />
        </p>
        <MdOutlineArrowDropDownCircle className={styles.dropdown} />
        <div></div>
      </div>
      <div className={styles.coin_balance}>
        <h2 className={styles.coin_balance_h2}>Coin balance:</h2> <br />
        <h1 className={styles.coin_balance_h1}>
          <GiTwoCoins className={styles.coin} />
          150,000
        </h1>{" "}
        <p className={styles.coin_balance_p}>
          Invest in learning a new language today
        </p>
      </div>
      <button onClick={handleModal} className={styles.buy_button}>
        Buy coins <img src={Arrow} alt="image" className={styles.arrow} />
      </button>
      {modal && (
        <>
          <div className={styles.payment_popup}>
            {" "}
            <div className={styles.popup_head}>
              <p>Payment details</p>
              <img
                onClick={handleModal}
                src={cancelButton}
                className={styles.cancel_button}
              />
            </div>{" "}
            <p className={styles.amount_payment}>Amount</p>
            <div className={styles.amount_and_price}>
              <input
                type="number"
                id="amount"
                name="amount"
                placeholder="amount"
                required
                className={styles.amount}
                // onChange={handleChange}
                // value={formData.lastName}
              />
              <input
                type="number"
                id="amount"
                name="amount"
                placeholder="$10,000.00"
                required
                className={styles.price}
              />
            </div>
            <label className={styles.card_number_label}>
              Card Number{" "}
              <input
                type="number"
                id="amount"
                name="amount"
                placeholder="xxxx - xxxx - xxxx - xxxx"
                required
                className={styles.card_number}
              />
            </label>
            <div className={styles.expiry_date_and_cvv}>
              <label className={styles.promo_code_label}>
                Expiry date{" "}
                <input
                  type="number"
                  id="amount"
                  name="amount"
                  placeholder="mm / yy"
                  required
                  // className="expiry_date"
                />
              </label>
              <label className={styles.promo_code_label}>
                CVV{" "}
                <input
                  type="number"
                  id="amount"
                  name="amount"
                  placeholder="xxxx - xxxx - xxxx - xxxx"
                  required
                  // className="cvv"
                />
              </label>
            </div>
            <label className={styles.promo_code_label}>
              Promo Code{" "}
              <input
                type="number"
                id="amount"
                name="Promo_code"
                placeholder="xxxx - xxxx - xxxx - xxxx"
                required
                className={styles.promo_code}
              />
            </label>{" "}
            <div className={styles.terms_and_condition}>
              {" "}
              <input type="checkbox" className={styles.check_box} />{" "}
              <p>I agree to the terms and conditions</p>
            </div>
            <button className={styles.proceed_button}>Proceed</button>
          </div>
          <div onClick={handleModal} className={styles.overlay}></div>
        </>
      )}
      <div className={styles.purchase_header}>
        <h2>Purchase history</h2>
        <p>View your previous purchase receipts and details</p>
      </div>
      <div className={styles.purchase_history}>
        {/* <hr /> */}
        <div className={styles.purchase_titles}>
          <h2>Invoice</h2>
          <h2>Date</h2>
          <h2>Amount</h2>
        </div>{" "}
        <div className={styles.purchase_data}>
          <p>Invoice001</p>
          <p className={styles.purchase_date}>DEC 1, 2022</p>
          <p styles={{ color: "green" }}>$500</p>
        </div>{" "}
        <div></div>
        <div className={styles.purchase_data}>
          <p>Invoice002</p>
          <p className={styles.purchase_date}>Jan 4, 2024</p>
          <p styles={{ color: "red" }}>$750</p>
        </div>{" "}
        <div className={styles.purchase_data}>
          <p>Invoice002</p>
          <p className={styles.purchase_date}>Jan 4, 2024</p>
          <p styles={{ color: "red" }}>$750</p>
        </div>
        <div className={styles.purchase_data}>
          <p>Invoice002</p>
          <p className={styles.purchase_date}>Jan 4, 2024</p>
          <p styles={{ color: "red" }}>$750</p>
        </div>
        <div className={styles.purchase_data}>
          <p>Invoice002</p>
          <p className={styles.purchase_date}>Jan 4, 2024</p>
          <p styles={{ color: "red" }}>$750</p>
        </div>
        <div className={styles.purchase_data}>
          <p>Invoice002</p>
          <p className={styles.purchase_date}>Jan 4, 2024</p>
          <p styles={{ color: "red" }}>$750</p>
        </div>
        <div className={styles.purchase_data}>
          <p>Invoice002</p>
          <p className={styles.purchase_date}>Jan 4, 2024</p>
          <p styles={{ color: "red" }}>$750</p>
        </div>
        <div className={styles.purchase_data}>
          <p>Invoice001</p>
          <p className={styles.purchase_date}>DEC 1, 2022</p>
          <p styles={{ color: "green" }}>$500</p>
        </div>{" "}
        <div className={styles.purchase_data}>
          <p>Invoice001</p>
          <p className={styles.purchase_date}>DEC 1, 2022</p>
          <p styles={{ color: "green" }}>$500</p>
        </div>{" "}
      </div>{" "}
    </div>
  );
}

export default Dashboard;
