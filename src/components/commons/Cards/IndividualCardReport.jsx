import React from "react";

import style from "./IndividualCardReport.module.css";
import image from "../../../assets/indivvidualReport.png";

const IndividualCardReport = () => {
  return (
    <div class={style["card-container"]}>
      <div class={style.card}>
        <div class={style.card}>
          <img
            src={image}
            alt="report"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>
        <div class={style.content}>
          <p class={style.heading}>Card Hover</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipii voluptas ten mollitia
            pariatur odit, ab minus ratione adipisci accusamus vel est excepturi
            laboriosam magnam necessitatibus dignissimos molestias.
          </p>
        </div>
      </div>
    </div>
  );
};

export default IndividualCardReport;
