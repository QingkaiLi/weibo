import Reflux from 'reflux';
import DetailsList from './detailsList.jsx'
import detailAction from '../../../actions/detailAction.js'
import {detailStore, DetailActionType} from '../../../stores/detailStore.js'

var ForwardDetail = React.createClass ({
    mixins: [Reflux.listenTo(detailStore, 'onStoreUpdate')],
    getInitialState: function () {
        return {
            forwardList: [],
            pageIndex: 1
        }
    },
    onStoreUpdate(data) {
        if (data.actionType == DetailActionType.loadForwards) {
            this.setState({forwardList: data.forwardList})
        }
    },
    componentDidMount:function() {
        var id = this.props.params ? this.props.params.item : 0;
        detailAction.loadForwards(id);
    },
    loadMore: function() {
        this.setState({pageIndex: ++ this.state.pageIndex});
        var id = this.props.params;
        detailAction.loadForwards(id, this.state.pageIndex);
    },
    render:function() {
        if(this.state.forwardList.length ==0)
            return null;
        return (
            <DetailsList data={this.state.forwardList} loadMore={this.loadMore}/>
        )
    }
})

export default ForwardDetail