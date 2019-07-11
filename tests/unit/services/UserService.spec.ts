/* tslint:disable:no-unused-expression */

import { expect } from 'chai';
import UserService from '@/services/UserService';
import { User } from '@/services/types';

describe('UserService', () => {
  let userService: UserService;

  beforeEach(() => {
    userService = new UserService();
  });

  it('findById with 1', async () => {
    const user = await userService.findById(1);
    expect(user.id).to.equal(1);
  });

  it('register user data', async () => {
    const data = {
      name: 'kaname madoka',
      age: 14,
    } as User;

    const user = await userService.register(data);
    expect(user.id).to.not.be.undefined;
    expect(user.name).to.equal(data.name);
    expect(user.age).to.equal(data.age);
  });
});
