'use strict';
import React from 'react';

var SpinnerBar = React.createClass({
    render: function() {
        var bars = [];
        var barStyle;

        for (var i = 0; i < 12; i++) {
            barStyle = {};
            barStyle.WebkitAnimationDelay = barStyle.animationDelay =
                (i - 12) / 10 + 's';
            barStyle.WebkitTransform = barStyle.transform =
                'rotate(' + (i * 30) + 'deg) translate(146%)';
            bars.push(
                <div style={ barStyle } className="react-spinner_bar" key={ i } />
            );
        }

        var containerStyle = {
            position: 'relative',
            width: this.props.size || '30px',
            height: this.props.size || '30px',
            top: '50%',
            left: '50%'
        }

        return (
            <div { ...this.props } style={containerStyle}>
                { bars }
            </div>
        );
    }
});


module.exports = SpinnerBar;
