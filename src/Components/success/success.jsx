import styles from "./styles.module.css";

import iconsuccess from "../images/icon-success.svg";

export const Success = () => {
  return (
    <div className={styles.main}>
      <div className={styles.wrapper}>
        <div className={styles.messagemain}>
          <div className={styles.icone}>
            <img src={iconsuccess} />
          </div>
          <div className={styles.contentwrapper}>
            <div className={styles.thanksforsub}>
              <span>Thanks for subscribing!</span>
            </div>
            <div className={styles.message}>
              <span>
                A confirmation email has been sent to <b>ash@lorecompany.com</b>
                . Please open it and click the button inside to confrim your
                subscription
              </span>
            </div>
          </div>
          <div className={styles.button}>
            <button>Dismiss message</button>
          </div>
        </div>
      </div>
    </div>
  );
};
