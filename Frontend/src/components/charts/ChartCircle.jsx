import React, { useEffect, useState } from "react";
import {
  RadialBarChart,
  RadialBar,
  ResponsiveContainer,
} from "recharts";
import { useData } from "../../hooks/useData";

const ChartCircle = () => {
  const { userInfos } = useData();
  const [formatedData, setFormatedData] = useState([]);
  const [load, setLoad] = useState(false);

  useEffect(() => {
    userInfos &&
      setFormatedData([
        {
          fill: "transparent",
          value: 100,
        },
        {
          ...userInfos,
          value: userInfos.todayScore * 100,
          fill: "#FF0101",
        },
      ]);
    setLoad(true);
  }, [userInfos]);

  return (
    <div className="chartCircle">
      <p className="chartCircle--score">Score</p>
      {load && (
        <ResponsiveContainer width={"100%"} aspect={1}>
          <RadialBarChart
            innerRadius="60%"
            outerRadius="90%"
            data={formatedData}
            startAngle={90}
            endAngle={450}
          >
            <RadialBar minAngle={15} dataKey="value" cornerRadius={50} />
          </RadialBarChart>
        </ResponsiveContainer>
      )}
      {load && (
        <div className="chartCircle__text">
          <p className="chartCircle__text--title">{formatedData[1]?.value}%</p>
          <p className="chartCircle__text--subTitle">
            de votre <br />
            objectif
          </p>
        </div>
      )}
    </div>
  );
};

export default ChartCircle;
