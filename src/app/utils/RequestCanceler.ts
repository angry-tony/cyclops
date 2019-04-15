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
import { Canceler } from 'axios';

/** Controls an axios request canceler function. */
export class RequestCanceler {
  /** Canceler function to control. */
  public canceler: Canceler | null = null;

  /**
   * Runs the canceler function.
   * @returns {boolean} If the function was run.
   */
  public cancel(): boolean {
    if (this.canceler) {
      this.canceler();
      this.canceler = null;
      return true;
    }

    return false;
  }

  /**
   * Sets the canceler function.
   * @param canceler Canceler function to control.
   */
  public set(canceler: Canceler) {
    this.canceler = canceler;
  }
}
