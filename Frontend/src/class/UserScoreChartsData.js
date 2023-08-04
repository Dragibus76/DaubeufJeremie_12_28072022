export default class UserScoreChartData {
    static formatData(data) {
      const score = [
        { value: data.todayScore || data.score },
        { value: 1 - (data.todayScore || data.score) },
      ];
  
      return score;
    }
  }
  