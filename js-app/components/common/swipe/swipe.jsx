'use strict';

import React from 'react';
import {InnerSwipe} from './inner-swipe.jsx';
import {defaultProps} from './defaultValues.js';

var Swipe = React.createClass({
  getInitialState: function () {
    return {};
  },
  render: function () {
    var settings = Object.assign({}, defaultProps, this.props);
    return (
        <InnerSwipe {...settings}>
          {this.props.children}
        </InnerSwipe>
    );
  }
});

module.exports = Swipe;
