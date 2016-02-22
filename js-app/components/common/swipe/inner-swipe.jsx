'use strict';

import React from 'react';
import EventHandlersMixin from './mixins/event-handlers';
import HelpersMixin from './mixins/helpers';
import {initialState, defaultProps} from './defaultValues.js';
import classnames from 'classnames';

import {Track} from './track';
import {Dots} from './dots';

export var InnerSwipe = React.createClass({
  mixins: [HelpersMixin, EventHandlersMixin],
  getInitialState: function () {
    return initialState;
  },
  getDefaultProps: function () {
    return defaultProps;
  },
  componentWillMount: function () {
    this.setState({
      mounted: true
    });
    var lazyLoadedList = [];
    for (var i = 0; i < this.props.children.length; i++) {
      if (i >= this.state.currentSlide && i < this.state.currentSlide + this.props.slidesToShow) {
        lazyLoadedList.push(i);
      }
    }

    if (this.props.lazyLoad && this.state.lazyLoadedList.length === 0) {
      this.setState({
        lazyLoadedList: lazyLoadedList
      });
    }
  },
  componentDidMount: function() {
    this.initialize(this.props);
    if (window.addEventListener) {
      window.addEventListener('resize', this.onWindowResized);
    } else {
      window.attachEvent('onresize', this.onWindowResized);
    }
  },
  componentWillUnmount: function componentWillUnmount() {
    if (window.addEventListener) {
      window.removeEventListener('resize', this.onWindowResized);
    } else {
      window.detachEvent('onresize', this.onWindowResized);
    }
    if (this.state.autoPlayTimer) {
      window.clearTimeout(this.state.autoPlayTimer);
    }
  },
  componentWillReceiveProps: function(nextProps) {
    if (this.props.slickGoTo != nextProps.slickGoTo) {
      this.changeSlide({
          message: 'index',
          index: nextProps.slickGoTo,
          currentSlide: this.state.currentSlide
      });
    } else {
      this.update(nextProps);
    }
  },
  componentDidUpdate: function () {
  },
  onWindowResized: function () {
    this.update(this.props);
  },
  render: function () {
    var className = classnames('slick-initialized', 'slick-slider', this.props.className);

    var trackProps = {
      cssEase: this.props.cssEase,
      speed: this.props.speed,
      infinite: this.props.infinite,
      currentSlide: this.state.currentSlide,
      lazyLoad: this.props.lazyLoad,
      lazyLoadedList: this.state.lazyLoadedList,
      rtl: this.props.rtl,
      slideWidth: this.state.slideWidth,
      slidesToShow: this.props.slidesToShow,
      slideCount: this.state.slideCount,
      trackStyle: this.state.trackStyle
    };

    var dots;

    if (this.props.dots === true && this.state.slideCount > this.props.slidesToShow) {
      var dotProps = {
        dotsClass: this.props.dotsClass,
        slideCount: this.state.slideCount,
        slidesToShow: this.props.slidesToShow,
        currentSlide: this.state.currentSlide,
        slidesToScroll: this.props.slidesToScroll,
        clickHandler: this.changeSlide
      };

      dots = (<Dots {...dotProps} />);
    }

    return (
      <div className={className} onMouseEnter={this.onInnerSliderEnter} onMouseLeave={this.onInnerSliderLeave}>
        <div
          ref='list'
          className="slick-list"
          onMouseDown={this.swipeStart}
          onMouseMove={this.state.dragging ? this.swipeMove: null}
          onMouseUp={this.swipeEnd}
          onMouseLeave={this.state.dragging ? this.swipeEnd: null}
          onTouchStart={this.swipeStart}
          onTouchMove={this.state.dragging ? this.swipeMove: null}
          onTouchEnd={this.swipeEnd}
          onTouchCancel={this.state.dragging ? this.swipeEnd: null}>
          <Track ref='track' {...trackProps}>
            {this.props.children}
          </Track>
        </div>
        {dots}
      </div>
    );
  }
});
