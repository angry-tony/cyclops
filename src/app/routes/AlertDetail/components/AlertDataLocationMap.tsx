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

// Local
import { Markers } from '~/services/map/types';
import { Map } from '~/services/map/components/Map';

// --------------------------------------------------------------------------
// Interfaces/Types
// --------------------------------------------------------------------------

/** Properties for the AlertDataLocationMap component. */
export interface Props {
  /** GeoJSON markers that represent places related to the alert data. */
  markers: Markers;
}

// --------------------------------------------------------------------------
// Component
// --------------------------------------------------------------------------

/**
 * Displays a map showing locations related to an alerts data.
 */
export class AlertDataLocationMap extends React.Component<Props, {}> {
  /**
   * Function that generates the popup content whenever the mouse hovers over
   * the marker.
   * @param feature GeoJSON feature.
   * @returns {string} HTML string.
   */
  public static popupGenerator(
    feature: GeoJSON.Feature<GeoJSON.GeometryObject>,
  ): string {
    return (
      `<b>Field:</b> ${feature.properties.field}<br>` +
      `<b>Address:</b> ${feature.properties.address || 'No Address Found'}`
    );
  }

  public render() {
    return (
      <div style={{ height: '500px' }}>
        <Map
          markers={this.props.markers}
          popupGenerator={AlertDataLocationMap.popupGenerator}
        />
      </div>
    );
  }
}
