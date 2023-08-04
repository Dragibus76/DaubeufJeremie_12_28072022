import React, { useState, useEffect } from 'react';
import { Container } from "../styles/userPerformanceStyle";
import { useParams } from 'react-router';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from "recharts";
import UserPerformanceData from '../class/UserPerformanceData';

export default function UserPerformance() {
  const [data, setData] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const formatData = await UserPerformanceData.fetchData(id);
      if (!formatData) return alert('data error');
      setData(formatData);
    };
    fetchData();
  }, [id]);

  if (data.length === 0) return null;

  return (
    <Container>
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart cx='50%' cy='50%' outerRadius='65%' data={data}>
          <PolarGrid gridType="polygon" />
          <PolarAngleAxis dataKey="kind" stroke='white' tickLine={false} axisLine={false} tick={{ fontSize: 10 }} />
          <Radar dataKey='value' stroke='#FF0101' fill='#FF0101' fillOpacity={0.7} />
        </RadarChart>
      </ResponsiveContainer>
    </Container>
  );
}
