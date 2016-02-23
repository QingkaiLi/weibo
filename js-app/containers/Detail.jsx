var React = require('react');
import Reflux from 'reflux';
import {broadStore, BroadActionType} from '../stores/broadStore.js'
import broadAction from '../actions/broadAction.js'
import SpinnerAction from '../components/common/spinner/spinnerAction.js'
import OperateBar from '../components/broad/publish/operateBar.jsx'
import ItemContent from '../components/broad/ItemContent.jsx'
import TabToolBar from '../components/broad/detail/tabToolBar.jsx'

var Detail = React.createClass({
    displayName: 'Detail',
    mixins: [Reflux.listenTo(broadStore, 'onStoreUpdate')],
    getInitialState: function () {
        return {
            selectedBroad: {},
            loading: true
        }
    },
    onStoreUpdate: function(data) {
        if (BroadActionType.getData == data.actionType) {
            SpinnerAction.close();
            this.setState({selectedBroad: data.selectedBroad, loading: false});
        }
    },
    componentDidMount:function() {
        var id = this.props.params ? this.props.params.item : 0;
        SpinnerAction.open();
        broadAction.get(id);
    },
    render: function () {
        if ( this.state.loading)
            return null;

        let {title, createTime, followed, topics, content, images, id, forwards, comments, likes} = this.state.selectedBroad;
        return(
            <div className="content weiBody">
                <ul className="broadList">
                    {
                        this.state.loading? null:
                            <li>
                                <ItemContent>
                                    <ItemContent.ItemHeader {...{title, createTime, followed, id}} />
                                    <ItemContent.ItemBody {...{topics, content, images}} />
                                </ItemContent>
                            </li>
                        }
                </ul>
                <div className="typesList">
                {
                this.state.loading? null:
                    <TabToolBar>
                        <TabToolBar.Item {...{isIndex: true, count: forwards, url: `/detail/${id}`}}>转发</TabToolBar.Item>
                        <TabToolBar.Item {...{count: comments, url: `/detail/${id}/commentDetail`}}>评论</TabToolBar.Item>
                        <TabToolBar.Item {...{isBadge: true, count: likes}}>赞</TabToolBar.Item>
                    </TabToolBar>
                }

                </div>
{this.props.children}
            </div>
        )
    }
});

module.exports = Detail;