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
import * as React from 'react';
import * as classnames from 'classnames';

// Local
import { SearchQueryView } from '~/store/searchQuery';

interface Props {
  view: SearchQueryView;
  activeView: SearchQueryView;
  onClick(view: SearchQueryView): any;
}

/**
 * Button that changes the results view of the search page.
 */
export class SearchViewChangeButton extends React.Component<Props, {}> {
  public onClick = () => {
    this.props.onClick(this.props.view);
  };

  public render() {
    const classes = classnames('btn-basic', 'pill', {
      'pill--active': this.props.view === this.props.activeView,
    });

    return (
      <button onClick={this.onClick} className={classes}>
        {this.props.children}
      </button>
    );
  }
}
