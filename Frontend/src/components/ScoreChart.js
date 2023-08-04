import React from "react";
import { Container, Title, Text, Score } from "../styles/scoreChartStyle";
import { ResponsiveContainer, PieChart, Pie, Cell } from "recharts";
import PropTypes from "prop-types";
import UserScoreChartData from '../class/UserScoreChartsData';

export default function ScoreChart({ data }) {
  const score = UserScoreChartData.formatData(data);

  return (
    <Container>
      <Title>Score</Title>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={score}
            dataKey="value"
            innerRadius={70}
            outerRadius={85}
            startAngle={90}
          >
            {score.map((entry, index) =>
              index === 0 ? (
                <Cell key={`cell-${index}`} cornerRadius={10} fill="#ff0000" />
              ) : (
                <Cell key={`cell-${entry}`} fill="#FBFBFB" />
              )
            )}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
      <Text>
        <Score>
          {score[0].value * 100}%
          <br />
        </Score>
        de votre
        <br /> objectif
      </Text>
    </Container>
  );
}

ScoreChart.propTypes = {
  data: PropTypes.object,
};
