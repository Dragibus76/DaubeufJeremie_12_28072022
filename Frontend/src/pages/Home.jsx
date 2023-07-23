import React, { useState } from "react";
import ChartBar from "../components/charts/ChartBar";
import ChartLine from "../components/charts/ChartLine";
import CardInfo from "../components/CardInfo";
import { useData } from "../hooks/useData";

const Home = () => {
  const { user, userInfos } = useData();
  const infoCard = [
    {
      title: "Calories",
      bgc: "rgba(255, 1, 1, 0.1)",
      value: "kCal",
      icon: require("./../assets/images/icon_fire.png"),
      number: userInfos?.calorieCount,
    },
    {
      title: "Proteines",
      bgc: "rgba(74, 184, 255, 0.1)",
      value: "g",
      icon: require("./../assets/images/icon_chicken.png"),
      iconStyle: {
        width: 18.84,
        height: 18.74,
      },
      number: userInfos?.proteinCount,
    },
    {
      title: "Glucides",
      bgc: "rgba(253, 204, 12, 0.1)",
      value: "g",
      icon: require("./../assets/images/icon_apple.png"),
      iconStyle: {
        width: 16.81,
        height: 20,
      },
      number: userInfos?.carbohydrateCount,
    },
    {
      title: "Lipides",
      bgc: "rgba(253, 81, 129, 0.1)",
      value: "g",
      icon: require("./../assets/images/icon_burger.png"),
      iconStyle: {
        width: 20,
        height: 18.75,
      },
      number: userInfos?.lipidCount,
    },
  ];

  return (
    <div className="home">
      <div className="home__header">
        <div className="home__header__logo">
          <img
            src={require("./../assets/images/logo.png")}
            className="home__header__logo--img"
          />
          <p className="home__header__logo--text">SportSee</p>
        </div>
        <div className="home__header__menu">
          <a className="home__header__menu--text" href="#">
            Accueil
          </a>
          <a className="home__header__menu--text" href="#">
            Profil
          </a>
          <a className="home__header__menu--text" href="#">
            Réglage
          </a>
          <a className="home__header__menu--text" href="#">
            Communauté
          </a>
        </div>
      </div>
      <div className="home__content">
        <div className="home__content__menu">
          <div className="home__content__menu__btn">
            <div className="home__content__menu__btn--global">
              <img
                src={require("./../assets/images/menu_1.png")}
                className="home__content__menu__btn--first"
              />
            </div>
            <div className="home__content__menu__btn--global">
              <img
                src={require("./../assets/images/menu_2.png")}
                className="home__content__menu__btn--second"
              />
            </div>
            <div className="home__content__menu__btn--global">
              <img
                src={require("./../assets/images/menu_3.png")}
                className="home__content__menu__btn--third"
              />
            </div>
            <div className="home__content__menu__btn--global">
              <img
                src={require("./../assets/images/menu_4.png")}
                className="home__content__menu__btn--forth"
              />
            </div>
          </div>
          <p className="home__content__menu--text">Copirygth SportSee 2020</p>
        </div>
        <div className="home__content__board">
          <div className="home__content__board__top">
            <div className="home__content__board__top__title">
              <p className="home__content__board__top__title--hello">Bonjour&nbsp;</p>
              <p className="home__content__board__top__title--name">{user?.firstName}</p>
            </div>
            <p className="home__content__board__top__subtitle">
              Félicitations ! Vous avez explosé vos objectifs hier{" "}
            </p>
          </div>
          <div className="home__content__board__bottom">
            <div className="home__content__board__bottom__left">
              <div className="home__content__board__bottom__left--barChart">
                <ChartBar />
                <div className="home__content__board__bottom__left--chartsContainer">
                  <ChartLine />
                </div>
              </div>
            </div>
            <div className="home__content__board__bottom__right">
              {infoCard.map((el) => (
                <CardInfo
                  title={el.title}
                  bgc={el.bgc}
                  number={el.number}
                  value={el.value}
                  icon={el.icon}
                  iconStyle={el.iconStyle}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
