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

import { schema } from 'normalizr';

/**
 * Normalizr schema of a monitor object.
 * @type {schema.Entity}
 */
export const MONITOR_SCHEMA = new schema.Entity(
  'monitors',
  {},
  { idAttribute: 'name' },
);

/**
 * Normalizr schema of a list of monitor objects.
 * @type {schema.Array}
 */
export const MONITOR_LIST_SCHEMA = new schema.Array(MONITOR_SCHEMA);
