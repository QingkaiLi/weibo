import Reflux from  'reflux';
import profileAction from '../actions/profileAction.js';

const profileStore = Reflux.createStore({
    init() {
        this.initData();
        this.listenTo(profileAction.load.completed, this.loadProfile);
    },
    initData() {
        this.broadList = [];
        this.profileInfo = {}
    },
    loadProfile(data) {
        this.broadList = data.broadList;
        this.profileInfo = data.profileInfo;
        this.trigger({
            broadList: this.broadList,
            profileInfo: this.profileInfo
        })
    }
});

module.exports = profileStore;