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
import * as sinon from 'sinon';
import * as chai from 'chai';

// Local
import * as monitorsAPI from './monitorAPI';
import * as cyphonAPI from '~/services/cyphon/utils/cyphonAPI';

describe('monitorsAPI', () => {
  let get: sinon.SinonStub;

  beforeEach(() => {
    get = sinon.stub(cyphonAPI, 'get');
  });

  afterEach(() => {
    get.restore();
  });

  describe('fetchMonitorList()', () => {
    it('should call the correct url', () => {
      monitorsAPI.fetchMonitorList();
      chai.expect(get.args[0][0]).to.equal('/monitors/enabled/');
    });
  });
});
