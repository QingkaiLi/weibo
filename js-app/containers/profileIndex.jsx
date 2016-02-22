var React = require('react');
import BannerSlider from '../components/broad/profile/banner/BannerSlider.jsx'

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
            lazyLoad: true,
            autoplay: true
        };
        return (
            <div className="content weiBody">
                <section style={{marginTop: '-40px'}}>
                    <BannerSlider />
                </section>
                <div className="profileSummary">
                    <div className="proflie-avatar">
                        <img src={'/images/avatar-host.jpg'} width='90' height='90'/>
                        <div>

                            SSSS
                        </div>
                        <div>
                            VVVV
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = ProfileIndex;