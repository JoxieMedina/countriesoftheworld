import api from './Api';

export default class APIService {
  static async getData<T>(url: string): Promise<T> {
    const response = await api.get(url);
    return response.data;
  }
}
