import Reflux from  'reflux';
import detailAction from '../actions/detailAction.js';

const DetailActionType = {
    loadForwards: 'loadForwards',
    loadComments: 'loadComments'
}
const detailStore = Reflux.createStore({
    init() {
        this.initData();
        this.listenTo(detailAction.loadForwards.completed, this.loadForwards);
        this.listenTo(detailAction.loadComments.completed, this.loadComments);
    },
    initData() {
        this.forwardList = [];
        this.commentList = [];
    },
    loadForwards(data) {
        this.forwardList = this.forwardList.concat(data);
        this.trigger({
            forwardList: this.forwardList,
            actionType: DetailActionType.loadForwards
        })
    },
    loadComments(data) {
        this.commentList = this.commentList.concat(data);
        this.trigger({
            commentList: this.commentList,
            actionType: DetailActionType.loadComments
        })
    }
});

exports.detailStore = detailStore;
exports.DetailActionType = DetailActionType;