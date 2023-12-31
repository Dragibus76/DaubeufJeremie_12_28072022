import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import SideBar from "../components/SideBar";
import UserInfos from "../components/UserInfos";
import { Main, Container, Content, BottomChart } from "../styles/userStyle";
import caloriesIcon from "../assets/calories-icon.svg";
import proteinsIcon from "../assets/proteines-icon.svg";
import glucidesIcon from "../assets/glucides-icon.svg";
import lipidesIcon from "../assets/lipides-icon.svg";
import BarCharts from "../components/BarChart";
import ScoreChart from "../components/ScoreChart";
import KeyData from "../components/KeyData";
import UserAverageSessions from "../components/UserAverageSession";
import UserPerformance from "../components/UserPerformance";
import UserData from '../class/UserData';

export default function User() {
  const [data, setData] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const formatData = await UserData.fetchData(id);
      if (!formatData) return alert("data error");
      setData(formatData);
    };
    fetchData();
  }, [id]);

  if (data.length === 0) return null;

  return (
    <Main>
      <SideBar />
      <Container>
        <UserInfos name={data.userInfos.firstName} />
        <Content>
          <section>
            <BarCharts />
            <BottomChart>
              <UserAverageSessions />
              <UserPerformance />
              <ScoreChart data={data} />
            </BottomChart>
          </section>
          <aside>
            <KeyData
              icon={caloriesIcon}
              info={`${data.keyData.calorieCount}kCal`}
              text="Calories"
            />
            <KeyData
              icon={proteinsIcon}
              info={`${data.keyData.proteinCount}g`}
              text="Proteines"
            />
            <KeyData
              icon={glucidesIcon}
              info={`${data.keyData.carbohydrateCount}g`}
              text="Glucides"
            />
            <KeyData
              icon={lipidesIcon}
              info={`${data.keyData.lipidCount}g`}
              text="Lipides"
            />
          </aside>
        </Content>
      </Container>
    </Main>
  );
};
