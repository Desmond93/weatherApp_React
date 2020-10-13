import React from "react";
import styles from "./Error.module.css";

const Error = (props) => { 

  return (
    <div className={styles.error}>
        {props.errorText}
    </div>
  );
};

export default Error;
