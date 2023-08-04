import { getData } from '../utils/getData';

export default class UserBarChartData {
  static async fetchData(userId) {
    const request = await getData("USER_ACTIVITY", userId);
    if (!request) return null;

    const data = request.data.sessions;
    // format data.day
    for (let i = 0; i < data.length; i++) {
      data[i].day = i + 1;
    }

    return data;
  }
}
