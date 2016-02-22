import Swipe from '../../../common/swipe/swipe.jsx'

export default class BannerSlider extends React.Component {
   render() {
        let settings = {
            dots: true,
            infinite: true,
            speed: 500,
            lazyLoad: true,
            autoplay: true,
            dotsClass: 'slick-dots slick-dots-loc'
        }
        return (
            <Swipe {...settings}>
                <div><img src={"/images/banner4.jpg"} /></div>
                <div><img src={"/images/banner5.jpg"} /></div>
                <div><img src={"/images/banner6.jpg"} /></div>
                <div><img src={"/images/banner7.jpg"} /></div>
            </Swipe>
        )
    }
}