import React from "react";

import style from "./IndividualCardReport.module.css";
import image from "../../../assets/indivvidualReport.png";

const IndividualCardReport = ({ individualReport }) => {
  console.log(individualReport);
  return (
    <>
      <div className={style["card-container"]}>
        <div className={style.card}>
          <div className={style.card}>
            <img
              src={individualReport.damaged_equipment.image}
              alt="report"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
          <div className={style.content}></div>
        </div>
      </div>
    </>
  );
};

export default IndividualCardReport;
