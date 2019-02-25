/**
 * The contents of this file are subject to the CYPHON Proprietary Non-
 * Commercial Registered User Use License Agreement (the "Agreement”). You
 * may not use this file except in compliance with the Agreement, a copy
 * of which may be found at https://github.com/dunbarcyber/cyclops/. The
 * developer of the CYPHON technology and platform is ControlScan, Inc.
 *
 * The CYPHON technology or platform are distributed under the Agreement on
 * an “AS IS” basis, WITHOUT WARRANTY OF ANY KIND, either express or
 * implied. See the Agreement for specific terms.
 *
 * Copyright (C) 2017 ControlScan, Inc. All Rights Reserved.
 *
 * Contributor/Change Made By: ________________. [Only apply if changes
 * are made]
 */

// Vendor
import * as chai from 'chai';

// Local
import { denormalizeUser } from './denormalizeUser';
import {
  NormalizedUserList,
  User,
} from '../types';

describe('denormalizeUser()', () => {
  const user1: User = {
    id: 1,
    company: 1,
    email: 'mail@gmail.com',
    first_name: 'Bob',
    last_name: 'Saget',
    is_staff: false,
  };
  const user2: User = {
    id: 2,
    company: 1,
    email: 'mail@gmail.com',
    first_name: 'George',
    last_name: 'Costanza',
    is_staff: true,
  };
  const normalizedUsers: NormalizedUserList = {
    result: [1, 2],
    entities: {
      users: {
        1: user1,
        2: user2,
      },
    },
  };

  it('should return a user object from a list of normalized users', () => {
    let user = denormalizeUser(normalizedUsers, 1);

    chai.expect(user).to.deep.equal(user1);

    user = denormalizeUser(normalizedUsers, 2);

    chai.expect(user).to.deep.equal(user2);
  });

  it('should return undefined if it cannot find the user object', () => {
    const user = denormalizeUser(normalizedUsers, 3);

    chai.expect(user).to.be.undefined;
  });
});
