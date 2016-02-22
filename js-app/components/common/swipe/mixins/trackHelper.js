'use strict';
var ReactDOM = require('react-dom')

var checkSpecKeys = function (spec, keysArray) {
  return keysArray.reduce((value, key) => {
    return value && spec.hasOwnProperty(key);
  }, true) ? null : console.error('Keys Missing', spec);
};

export var getTrackCSS = function(spec) {
  checkSpecKeys(spec, [
    'left', 'slideCount', 'slidesToShow', 'slideWidth'
  ]);

  var trackWidth = (spec.slideCount + 2*spec.slidesToShow) * spec.slideWidth;

  var style = {
    opacity: 1,
    width: trackWidth,
    WebkitTransform: 'translate3d(' + spec.left + 'px, 0px, 0px)',
    transform: 'translate3d(' + spec.left + 'px, 0px, 0px)',
    transition: '',
    WebkitTransition: '',
    msTransform: 'translateX(' + spec.left + 'px)'
  };

  // Fallback for IE8
  if (!window.addEventListener && window.attachEvent) {
    style.marginLeft = spec.left + 'px';
  }

  return style;
};

export var getTrackAnimateCSS = function (spec) {
  checkSpecKeys(spec, [
    'left', 'slideCount', 'slidesToShow', 'slideWidth', 'speed', 'cssEase'
  ]);

  var style = getTrackCSS(spec);
  // useCSS is true by default so it can be undefined
  style.WebkitTransition = '-webkit-transform ' + spec.speed + 'ms ' + spec.cssEase;
  style.transition = 'transform ' + spec.speed + 'ms ' + spec.cssEase;
  return style;
};

export var getTrackLeft = function (spec) {

  checkSpecKeys(spec, [
   'slideIndex', 'trackRef', 'infinite', 'slideCount', 'slidesToShow',
   'slidesToScroll', 'slideWidth', 'listWidth']);

  var slideOffset = 0;
  var targetLeft;
  var targetSlide;

  if (spec.infinite) {
    if (spec.slideCount > spec.slidesToShow) {
     slideOffset = (spec.slideWidth * spec.slidesToShow) * -1;
    }
    if (spec.slideCount % spec.slidesToScroll !== 0) {
      if (spec.slideIndex + spec.slidesToScroll > spec.slideCount && spec.slideCount > spec.slidesToShow) {
          if(spec.slideIndex > spec.slideCount) {
            slideOffset = ((spec.slidesToShow - (spec.slideIndex - spec.slideCount)) * spec.slideWidth) * -1;
          } else {
            slideOffset = ((spec.slideCount % spec.slidesToScroll) * spec.slideWidth) * -1;
          }
      }
    }
  }

  targetLeft = ((spec.slideIndex * spec.slideWidth) * -1) + slideOffset;

  return targetLeft;
};
