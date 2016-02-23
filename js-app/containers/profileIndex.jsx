var React = require('react');
import Reflux from 'reflux';
import BannerSlider from '../components/broad/profile/banner/BannerSlider.jsx'
import ProfileSummary from '../components/broad/profile/profileSummary.jsx'
import ProfileBroad from '../components/broad/profile/profileBroad.jsx'
import profileAction from '../actions/profileAction.js'
import profileStore from '../stores/profileStore.js'
import SpinnerAction from '../components/common/spinner/spinnerAction.js'

var ProfileIndex = React.createClass({
    displayName: 'ProfileIndex',
    mixins: [Reflux.listenTo(profileStore, 'onStoreUpdate')],
    getInitialState:function() {
        return {
            profileInfo: {},
            broadList: [],
            loading: true
        }
    },
    componentDidMount:function() {
        SpinnerAction.open();
        profileAction.load();
    },
    onStoreUpdate:function(data) {
        SpinnerAction.close();
        this.setState({profileInfo: data.profileInfo, broadList: data.broadList, loading: false})
    },
    render: function () {
        return (
            <div className="content weiBody" style={{overflowY: 'scroll'}}>
                <section style={{marginTop: '-40px'}}>
                    <BannerSlider />
                </section>
                {this.state.loading? null: <ProfileSummary data={this.state.profileInfo}/>}
                {this.state.loading? null: <ProfileBroad data={this.state.broadList}/> }
            </div>
        );
    }
});

module.exports = ProfileIndex;