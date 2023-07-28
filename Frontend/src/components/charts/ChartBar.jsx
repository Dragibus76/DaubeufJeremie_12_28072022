import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
 
  ResponsiveContainer,
} from "recharts";
import { useData } from "../../hooks/useData";

const ChartBar = () => {
  const { activity } = useData();

  return (
    <div className="chartBar">
      <div className="chartBar__topContainer">
        <p className="chartBar__topContainer--title">Activité quotidienne</p>
        <div className="chartBar__topContainer__rightInfo">
          <div className="chartBar__topContainer__rightInfo__weightContainer">
            <div className="chartBar__topContainer__rightInfo__weightContainer--dot"></div>
            <p className="chartBar__topContainer__rightInfo--text">
              Poids (kg)
            </p>
          </div>
          <div className="chartBar__topContainer__rightInfo__caloriesContainer">
            <div className="chartBar__topContainer__rightInfo__caloriesContainer--dot"></div>
            <p className="chartBar__topContainer__rightInfo--text">
              Calories brûlées (kCal)
            </p>
          </div>
        </div>
      </div>
      <ResponsiveContainer width={"100%"} height={250}>
        <BarChart data={activity}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey={(e) => {
              const index = activity.findIndex((item) => item.day === e.day);
              return index + 1;
            }}
            tick={true}
          />
          <YAxis orientation="right" />
          <Tooltip />
          <Bar
            dataKey="kilogram"
            fill="#020203"
            barSize={7}
            style={{ borderRadius: 50 }}
            radius={[10, 10, 0, 0]}
          />
          <Bar
            dataKey="calories"
            fill="#FF0101"
            barSize={7}
            radius={[10, 10, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ChartBar;
