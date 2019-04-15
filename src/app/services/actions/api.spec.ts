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

// Local
import * as api from '../cyphon/utils/cyphonAPI';
import * as actionAPI from './api';

describe('actionsAPI', () => {
  describe('fetchAllActions()', () => {
    let getAll: sinon.SinonStub;

    beforeEach(() => {
      getAll = sinon.stub(api, 'getAll');
    });

    afterEach(() => {
      getAll.restore();
    });

    it('should call api.getAll with the correct url', () => {
      actionAPI.fetchAllActions();

      chai.expect(getAll.called).to.be.true;
      chai.expect(getAll.args[0][0]).to.equal(actionAPI.ACTIONS_URL);
    });
  });
});
