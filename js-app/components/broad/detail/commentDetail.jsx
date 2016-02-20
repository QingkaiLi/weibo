import Reflux from 'reflux';
import DetailsList from './detailsList.jsx'
import detailAction from '../../../actions/detailAction.js'
import {detailStore, DetailActionType} from '../../../stores/detailStore.js'

var CommentDetail = React.createClass ({
    mixins: [Reflux.listenTo(detailStore, 'onStoreUpdate')],
    getInitialState: function () {
        return {
            commentList: [],
            pageIndex: 1
        }
    },
    onStoreUpdate(data) {
        if (data.actionType == DetailActionType.loadComments) {
            this.setState({commentList: data.commentList})
        }
    },
    componentDidMount:function() {
        var id = this.props.params ? this.props.params.item : 0;
        detailAction.loadComments(id);
    },
    loadMore: function() {
        this.setState({pageIndex: ++ this.state.pageIndex});
        var id = this.props.params;
        detailAction.loadComments(id, this.state.pageIndex);
    },
    render:function() {
        if(this.state.commentList.length ==0)
            return null;
        return (
            <DetailsList data={this.state.commentList} loadMore={this.loadMore}/>
        )
    }
})

export default CommentDetail