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
import {
  Pagination,
  Popover,
  OverlayTrigger,
} from 'react-bootstrap';
import * as classNames from 'classnames';

// Local
import { AlertListItem } from './AlertListItem';
import { Loading } from '../../../components/Loading';
import { AlertListItem as Alert } from '../../../services/alerts/types';
import { AlertListSearchBar } from './AlertListSearchBar';

// --------------------------------------------------------------------------
// Interfaces/Types
// --------------------------------------------------------------------------

/** Properties of the AlertList component. */
interface Props {
  /** Alerts that match the current alerts list search parameters. */
  alerts: Alert[];
  /** Total number of alerts that match the current search parameters. */
  count: number;
  /** Search bar content. */
  content: string | undefined;
  /** Pagination size of the current alerts list. */
  limit: number;
  /** If new alerts list results are being fetched. */
  loading: boolean;
  /** Current page number of alerts. */
  page: number;
  /** If polling is currently enabled. */
  pollingEnabled: boolean;
  /** The ID of the currently selected alerts. */
  selectedAlert: number | null;
  /** Change the alerts list content search parameter. */
  searchContent(content?: string): any;
  /**
   * Changes the current alert list page.
   * @param page Page to change to.
   */
  changePage(page: number): any;
  /**
   * Selects an alert to be viewed in the detail view.
   * @param alertId ID of the alert to view.
   */
  viewAlert(alertId: number): any;
  /** Starts a poller to update the current alert list. */
  startPoller(): any;
  /** Stop the alert list poller. */
  stopPoller(): any;
}

// --------------------------------------------------------------------------
// Component
// --------------------------------------------------------------------------

/**
 * Displays current list of alerts that match the current search parameters
 * and allows the user to select an alerts to view. Also contains a
 * search bar that allows the user to search through alerts content.
 */
export class AlertList extends React.Component<Props, {}> {
  /**
   * Popover to display when a user hovers over the refresh button.
   * @type {JSX.Element}
   */
  public static refreshPopover: JSX.Element = (
    <Popover id="alert-list-refresh-popover">
      Enable/disable refreshing of the current alert list.
    </Popover>
  );

  /**
   * Changes the current alerts page.
   * @param eventKey
   */
  public changePage = (eventKey: any) => {
    this.props.changePage(eventKey);
  };

  /**
   * Selects the alerts to view in the alerts detail panel.
   * @param id ID of the alert to view.
   */
  public selectAlert = (id: number) => {
    this.props.viewAlert(id);
  };

  public render() {
    const {
      alerts,
      count,
      content,
      limit,
      loading,
      page,
      pollingEnabled,
      searchContent,
      selectedAlert,
      startPoller,
      stopPoller,
    } = this.props;

    const baseNumber = ((page * limit) - limit) + 1;
    const topNumber = count <= (page * limit) ? count : (page * limit);
    const paginationElement =  (
      <div className="alert-list__pagination flex-item flex--shrink">
        <Pagination
          items={Math.ceil(count / limit)}
          activePage={page}
          onSelect={this.changePage}
          maxButtons={6}
          next="Next"
          prev="Prev"
          first="First"
          last="Last"
        />
      </div>
    );
    const alertListItems = alerts.map((alert) => (
      <AlertListItem
        key={alert.id}
        alert={alert}
        onClick={this.selectAlert}
        isActive={alert.id === selectedAlert}
      />
    ));
    const alertListTable = alerts.length ? (
      <table className="alert-list__table">
        <tbody>
        {alertListItems}
        </tbody>
      </table>
    ) : (
      <h2 className="text-center">No Results</h2>
    );
    const loadingElement = loading ? <Loading /> : null;
    const refreshPopover = AlertList.refreshPopover;
    const refreshButtonClasses = classNames(
      'alert-list__refresh',
      { 'alert-list__refresh--active': pollingEnabled },
    );
    const refreshIconClasses = classNames(
      { 'fa-spin': pollingEnabled },
      'fa-lg',
      'fa',
      'fa-refresh',
    );

    return (
      <div className="flex-box flex-box--column">
        <div className="alert-list__header flex-item flex--shrink">
          <AlertListSearchBar
            content={content}
            searchContent={searchContent}
          />
          <div className="clearfix">
            <span className="text--base">Showing </span>
            {baseNumber} - {topNumber}
            <span className="text--base"> of </span>
            {count}
            <OverlayTrigger
              overlay={refreshPopover}
              placement="left"
              animation={false}
            >
              <button
                className={refreshButtonClasses}
                onClick={pollingEnabled ? stopPoller : startPoller}
              >
                <i className={refreshIconClasses} />
              </button>
            </OverlayTrigger>
          </div>
        </div>

        <div className="alert-list flex-item">
          {alertListTable}
          {loadingElement}
        </div>
        {paginationElement}
      </div>
    );
  }
}
