import Reflux from  'reflux';
import broadAction from '../actions/broadAction.js';

const BroadActionType = {
    loadData: 'loadData',
    getData: 'getData'
}
const broadStore = Reflux.createStore({
    init() {
        this.initData();
        this.listenTo(broadAction.load.completed, this.loadBoard);
        this.listenTo(broadAction.get.completed, this.getBroad);
    },
    initData() {
        this.selectedBroad = {};
        this.broadList = [];
    },
    //get one
    getBroad(data) {
        this.selectedBroad = data;
        this.trigger({
            selectedBroad: this.selectedBroad,
            actionType: BroadActionType.getData
        })
    },
    //load array
    loadBoard(data) {
        this.broadList = this.broadList.concat(data);
        this.trigger({
            broadList: this.broadList,
            actionType: BroadActionType.loadData
        })
    },
    resetState () {
        this.initData();
        //this.trigger({
        //    ...
        //});
    }
});

exports.broadStore = broadStore;
exports.BroadActionType = BroadActionType;