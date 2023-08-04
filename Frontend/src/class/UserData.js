import { getData } from '../utils/getData';

export default class UserData {
  static async fetchData(userId) {
    const request = await getData("USER_MAIN_DATA", userId);
    if (!request) return null;

    return request.data;
  }
}
