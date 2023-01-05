import React, { FC } from "react";
import styles from "./HeaderComponent.module.scss";
import cs from "classnames";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPhoneVolume,faBars} from "@fortawesome/free-solid-svg-icons";
import {Button} from "@ui/Button/Button";

const HeaderComponent: FC = () => {
   return (
      <header className={styles.Header}>
         <div className={styles.Header__content}>
             <div className={styles.Header__menu}>
              <img src="/images/logo.svg" className={styles.Header__img}/>
              <FontAwesomeIcon icon={faBars} className={styles.Header__bars}/>
             </div>
            <ul className={styles.Header__list}>
               <li className={styles.Header__item}>Home</li>
               <li className={styles.Header__item}>About</li>
               <li className={styles.Header__item}>Business</li>
               <li className={styles.Header__item}>Blog</li>
               <li className={styles.Header__item}>Faq</li>
            </ul>
         </div>
         <div className={styles.Header__right}>
             <div className={styles.Header__phone}>
                 <FontAwesomeIcon icon={faPhoneVolume} className={styles.Header__icon}/>
                 <p>818-818-5117</p>
             </div>
             <Button onClick={()=>true} variant={"outlined"} size={"large"}>Sign in</Button>
         </div>
      </header>
   )
}

export default HeaderComponent