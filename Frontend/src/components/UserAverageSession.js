import React, { useState, useEffect, useRef } from "react";
import { Container, Title } from "../styles/userAverageSessionStyle";
import { useParams } from "react-router";
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip } from "recharts";
import SessionsToolType from "./SessionsToolType.js";
import UserAverageSessionsData from "../class/UserAverageSessionData";

export default function UserAverageSessions() {
  const [data, setData] = useState([]);
  const { id } = useParams();
  const divRef = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      const formatData = await UserAverageSessionsData.fetchData(id);
      if (!formatData) return alert("data error");
      setData(formatData);
    };
    fetchData();
  }, [id]);

  useEffect(() => {
    divRef.current = document.querySelector('.bUPtxZ');
  }, []);

  if (data.length === 0) return null;

  return (
    <Container>
      <Title>Durée moyenne des sessions</Title>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={data}
          strokeWidth={1}
          onMouseMove={(e) => {
            if (e.isTooltipActive === true) {
              const div = divRef.current;
              if (div) {
                let windowWidth = div.clientWidth;
                let mouseXpercentage = Math.round((e.activeCoordinate.x / windowWidth) * 100);
                div.style.background = `linear-gradient(90deg, rgba(255,0,0,1) ${mouseXpercentage}%, rgba(175,0,0,1.5) ${mouseXpercentage}%, rgba(175,0,0,1.5) 100%)`;
              }
            }
          }}
        >
          <XAxis
            type="category"
            dataKey="day"
            tickLine={true}
            stroke="red"
            padding={{ right: 5, left: 5 }}
            tick={{ fontSize: 13, stroke: "white", opacity: 0.8 }}
          />
          <YAxis dataKey="sessionLength" domain={[0, "dataMax + 30"]} hide={true} />
          <Tooltip content={<SessionsToolType />} />
          <Line
            type="monotone"
            dataKey="sessionLength"
            stroke="rgba(255, 255, 255, 0.7)"
            strokeWidth={2}
            dot={false}
            activeDot={{ r: 4, strokeWidth: 4, stroke: "white" }}
          />
        </LineChart>
      </ResponsiveContainer>
    </Container>
  );
}
