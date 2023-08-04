import { getData } from '../utils/getData';

export default class UserAverageSessionsData {
  static async fetchData(userId) {
    const request = await getData("USER_AVERAGE_SESSIONS", userId);
    if (!request) return null;

    const formatData = request.data.sessions.map((data) => {
      switch (data.day) {
        case 1:
          return { ...data, day: "L" };
        case 2:
          return { ...data, day: "M" };
        case 3:
          return { ...data, day: "M" };
        case 4:
          return { ...data, day: "J" };
        case 5:
          return { ...data, day: "V" };
        case 6:
          return { ...data, day: "S" };
        case 7:
          return { ...data, day: "D" };
        default:
          return { ...data };
      }
    });

    return formatData;
  }
}
