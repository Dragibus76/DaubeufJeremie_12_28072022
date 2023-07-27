import React from "react";
import {
  Legend,
  Radar,
  PolarRadiusAxis,
  PolarAngleAxis,
  PolarGrid,
  RadarChart,
  ResponsiveContainer,
} from "recharts";
import { useData } from "../../hooks/useData";

const ChartRadar = () => {
  const { perf } = useData();

  return (
    <div className="chartRadar">
      <ResponsiveContainer width={'100%'} aspect={1}>
        <RadarChart outerRadius={90} data={perf}>
          <PolarGrid />
          <PolarAngleAxis
            dataKey="name"
            fontSize={12}
            fontWeight={"900"}
            stroke="white"
            strokeWidth={0}
          />
          <PolarRadiusAxis angle={30} domain={[0, 150]} tick={false} />
          <Radar
            name="mike"
            dataKey="value"
            stroke="#8884d8"
            fill="#8884d8"
            fillOpacity={0.6}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ChartRadar;
