var React = require('react');
import Reflux from 'reflux';
import {broadStore, BroadActionType} from '../stores/broadStore.js'
import SpinnerAction from '../components/common/spinner/spinnerAction.js'
import OperateBar from '../components/broad/publish/operateBar.jsx'
import ItemContent from '../components/broad/ItemContent.jsx'

var Publish = React.createClass({
    displayName: 'Comment',
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
    render: function () {
        return(
            <div className="content weiBody">
                <textarea className="emoji-textarea" placeholder="写评论..."/>
                {
                    this.state.loading? null:
                        <ItemContent>
                            <ItemContent.ItemHeader
                                id={this.state.selectedBroad.id}
                                title={this.state.selectedBroad.title}
                                createTime={this.state.selectedBroad.createTime}
                                noFollowPanel={true}/>
                            <ItemContent.ItemBody
                                topics={this.state.selectedBroad.topics}
                                content={this.state.selectedBroad.content}
                                images={this.state.selectedBroad.images} />
                        </ItemContent>
                }
                <OperateBar>
                    <OperateBar.Item clazzName='atFunction'/>
                    <OperateBar.Item clazzName='emotions'/>
                </OperateBar>
            </div>
        )
    }
});

module.exports = Publish;