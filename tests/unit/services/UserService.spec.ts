/* tslint:disable:no-unused-expression */

import { expect } from 'chai';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import UserService from '@/services/UserService';
import { User } from '@/services/types';

describe('UserService', () => {
  let userService: UserService;
  let mockAxios: MockAdapter;

  beforeEach(() => {
    userService = new UserService();
    mockAxios = new MockAdapter(axios);
  });

  it('findById with 1', async () => {
    mockAxios.onGet('/users/1').reply(200, {
      id: 1,
      name: 'QB',
      age: 18,
    });

    const user = await userService.findById(1);
    expect(user.id).to.equal(1);
  });

  it('register user data', async () => {
    const data = {
      name: 'kaname madoka',
      age: 14,
    } as User;

    mockAxios.onPost('/users').reply(201, {
      id: 10,
      ...data,
    });

    const user = await userService.register(data);
    expect(user.id).to.not.be.undefined;
    expect(user.name).to.equal(data.name);
    expect(user.age).to.equal(data.age);
  });
});
