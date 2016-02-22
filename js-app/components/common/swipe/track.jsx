'use strict';

import React from 'react';
import classnames from 'classnames';

var getSlideClasses = (spec) => {
  var slickActive, slickCenter, slickCloned;
  var centerOffset, index;

  if (spec.rtl) {
    index = spec.slideCount - 1 - spec.index;
  } else {
    index = spec.index;
  }

  slickCloned = (index < 0) || (index >= spec.slideCount);

  slickActive = (spec.currentSlide <= index) && (index < spec.currentSlide + spec.slidesToShow);

  return classnames({
    'slick-slide': true,
    'slick-active': slickActive,
    'slick-center': slickCenter,
    'slick-cloned': slickCloned
  });
};

var getSlideStyle = function (spec) {
  var style = {width: spec.slideWidth};

  return style;
};

var renderSlides = (spec) => {
  var key;
  var slides = [];
  var preCloneSlides = [];
  var postCloneSlides = [];
  var count = React.Children.count(spec.children);
  var child;

  React.Children.forEach(spec.children, (elem, index) => {
    if (!spec.lazyLoad | (spec.lazyLoad && spec.lazyLoadedList.indexOf(index) >= 0)) {
      child = elem;
    } else {
      child = (<div></div>);
    }
    var childStyle = getSlideStyle(Object.assign({}, spec, {index: index}));
    var slickClasses = getSlideClasses(Object.assign({index: index}, spec));
    var cssClasses;

    if (child.props.className) {
        cssClasses = classnames(slickClasses, child.props.className);
    }
    else {
        cssClasses = slickClasses;
    }

    slides.push(React.cloneElement(child, {
      key: index,
      'data-index': index,
      className: cssClasses,
      style: Object.assign({}, child.props.style || {}, childStyle)
    }));

    // variableWidth doesn't wrap properly.
    if (spec.infinite) {
      var infiniteCount = spec.slidesToShow;

      if (index >= (count - infiniteCount)) {
        key = -(count - index);
        preCloneSlides.push(React.cloneElement(child, {
          key: key,
          'data-index': key,
          className: getSlideClasses(Object.assign({index: key}, spec)),
          style: Object.assign({}, child.props.style || {}, childStyle)
        }));
      }

      if (index < infiniteCount) {
        key = count + index;
        postCloneSlides.push(React.cloneElement(child, {
          key: key,
          'data-index': key,
          className: getSlideClasses(Object.assign({index: key}, spec)),
          style: Object.assign({}, child.props.style || {}, childStyle)
        }));
      }
    }
  });

  if (spec.rtl) {
    return preCloneSlides.concat(slides, postCloneSlides).reverse();
  } else {
    return preCloneSlides.concat(slides, postCloneSlides);
  }


};

export var Track = React.createClass({
  render: function () {
    var slides = renderSlides(this.props);
    return (
      <div className='slick-track' style={this.props.trackStyle}>
        { slides }
      </div>
    );
  }
});
