import styles from "./styles.module.css";
import iconelist from "../images/icon-list.svg";
// import iconsuccess from "../images/icon-success.svg";
import { useForm } from "react-hook-form";
import signupdesktop from "../images/illustration-sign-up-desktop.svg";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useNavigate } from "react-router";

const signupschema = z.object({
  email: z.string().email().min(1, "Please Enter a valid Email"),
});

const Form = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(signupschema),
  });

  const formsubmition = (d) => {
    try {
      console.log(d);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
    navigate("/success");
  };

  if (loading)
    return (
      <div>
        <span>Submiting please wait.....</span>
      </div>
    );
  return (
    <form onSubmit={handleSubmit(formsubmition)}>
      <div className={styles.formmain}>
        <div className={styles.email}>
          <label>Email Address</label>
          <input
            {...register("email")}
            type="email"
            placeholder="email@company.com"
            className={errors.email ? styles.errorInput : ""}
          />
          {errors.email && (
            <span className={styles.error}>{errors.email.message}</span>
          )}
        </div>
        <div className={styles.subscribebutton}>
          <button>Subscribe to monthly newsletters</button>
        </div>
      </div>
    </form>
  );
};

export const Login = () => {
  return (
    <div className={styles.main}>
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <div className={styles.heading}>
            <span>Stay updated!</span>
          </div>
          <div className={styles.heading1}>
            <span>
              Join 60,000+ product managers receving monthly updates on:
            </span>
          </div>
          <div className={styles.clicktochechk}>
            <div className={styles.chechk}>
              <img src={iconelist} className={styles.icons} />
              <label>Product discovery and building what matters</label>
            </div>
            <div className={styles.chechk}>
              <img src={iconelist} className={styles.icons} />
              <label>Measuring to ensure updates are a success</label>
            </div>
            <div className={styles.chechk}>
              <img src={iconelist} className={styles.icons} />
              <label>And much more!</label>
            </div>
          </div>

          <Form />
        </div>
        <div className={styles.imageportion}>
          <img src={signupdesktop} />
        </div>
      </div>
    </div>
  );
};
