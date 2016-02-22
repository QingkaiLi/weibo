var React = require('react');
//import Slider from 'react-slick'
import Swipe from '../components/common/swipe/swipe.jsx'

var ProfileIndex = React.createClass({
    displayName: 'ProfileIndex',

    handleLeftSwipe: function (e) {
        alert("dsdsa")
    },
    render: function () {
        var settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            lazyLoad: true,
            autoplay: true
        };
        return (
            <div className="content weiBody">
                <Swipe {...settings}>
                    <div><h3>1</h3></div>
                    <div><h3>2</h3></div>
                    <div><h3>3</h3></div>
                    <div><h3>4</h3></div>
                    <div><h3>5</h3></div>
                    <div><h3>6</h3></div>
                    <div><h3>7</h3></div>
                </Swipe>
            </div>
        );
    }
});

module.exports = ProfileIndex;