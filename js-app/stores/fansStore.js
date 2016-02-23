import Reflux from  'reflux';
import fansAction from '../actions/fansAction.js';

const fansStore = Reflux.createStore({
    init() {
        this.initData();
        this.listenTo(fansAction.load.completed, this.loadFans);
    },
    initData() {
        this.fansList = [];
    },
    loadFans(data) {
        this.fansList = data;
        this.trigger(this.fansList)
    }
});

module.exports = fansStore;