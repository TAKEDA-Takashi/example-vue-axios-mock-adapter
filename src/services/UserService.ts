import axios from 'axios';
import { User } from './types';

export default class UserService {

  public async findById(id: number): Promise<User> {
    const res = await axios.get(`/users/${id}`);
    return res.data;
  }

  public async register(user: User): Promise<User> {
    const res = await axios.post('/users', user);
    return res.data;
  }

}
