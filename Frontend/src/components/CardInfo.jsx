import React from "react";

const CardInfo = ({ title, number, value, bgc, icon, style, iconStyle }) => {
  return (
    <div className="cardInfo">
      <div className="cardInfo__iconContainer" style={{backgroundColor: bgc}}>
        <img
          src={icon || require("./../assets/images/icon_fire.png")}
          style={{ height: 20, width: 15.18, ...iconStyle }}
        />
      </div>
      <div className="cardInfo__text">
        <p className="cardInfo__text--value">{number}{value}</p>
        <p className="cardInfo__text--title">{title}</p>
      </div>
    </div>
  );
};

export default CardInfo;
