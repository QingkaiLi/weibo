var React = require('react');
import OperateBar from '../components/broad/publish/operateBar.jsx'

var Publish = React.createClass({
    displayName: 'Publish',
    getInitialState: function () {
        return {

        }
    },

    render: function () {
        return(
            <div className="content weiBody">
                <textarea className="emoji-textarea" placeholder="分享新鲜事..."/>
                <OperateBar>
                    <OperateBar.Item clazzName='picImport'/>
                    <OperateBar.Item clazzName='atFunction'/>
                    <OperateBar.Item clazzName='emotions'/>
                </OperateBar>
            </div>
        )
    }
});

module.exports = Publish;