var ReactDOM = require('react-dom');
import {routeTitle, routeName} from './routerMapping.js'
import broadAction from '../../actions/broadAction.js'

export default class TopNav extends React.Component {
    constructor(props) {
        super(props)
        this._getContent = this._getContent.bind(this)
        this.action = this.action.bind(this);
    }
    actions() {
        var that = this;
        return {
            reLoadBroad: function() {
                broadAction.refreshStart();
            },
            publishBroad: function() {
                that.props.history.pushState(null, 'publish');
            },
            goback: function() {
                that.props.history.goBack();
            },
            commentBroad: function() {
                that.props.history.pushState(null, 'comment');
            },
            toIndex: function() {
                that.props.history.pushState(null, '/');
            }
        }
    }
    action(type) {
        this.actions()[type] ();
    }
    _getContent() {
        var that = this;
        let path = this.props.location.pathname;
        let btnItems = TopNavButtonsMap[routeName(path)];
        return (
            btnItems.map(function(x, index) {
                var {component,
                    action,
                    ...others} = x;
                others.action = that.action.bind(that, action);
                others.key = index;
                return (
                    React.createElement(
                        component,
                        others
                    )
                )
            })
        )
    }
    render () {
        let path = this.props.location.pathname;
        return (
            <header className="bar bar-nav" name="top">
                {
                    this._getContent()
                }
                <h1 className="title">{routeTitle(path)}</h1>
            </header>
        )
    }
}

class TopNavTool extends React.Component {
    render() {
        let {type, loc, action} = this.props;
        let clazz = `icon icon-${type} pull-${loc}`;
        return <a className={clazz} onTouchStart={action}></a>
    }
}
class TopNavButton extends React.Component {
    render() {
        let {type, loc, action} = this.props;
        let clazz = `btn btn-${type} pull-${loc}`;
        return <a className={clazz} onTouchStart={action}>{this.props.label}</a>
    }
}

const TopNavButtonsMap = {
    index: [
        {component: TopNavTool, type: "refresh", loc: "right", action: 'reLoadBroad'},
        {component: TopNavTool, type: "compose", loc: "right", action: 'publishBroad'}
    ],
    forward: [
        {component: TopNavButton, type: "goBack", loc: "left", action: 'cancelPublish', label: '取消'},
        {component: TopNavButton, type: "negative", loc: "right", action: 'confirmPublish', label: '发送'}
    ],
    publish: [
        {component: TopNavButton, type: "goBack", loc: "left", action: 'goback', label: '取消'},
        {component: TopNavButton, type: "negative", loc: "right", action: 'confirmPublish', label: '发送'}
    ],
    comment: [
        {component: TopNavButton, type: "goBack", loc: "left", action: 'goback', label: '取消'},
        {component: TopNavButton, type: "negative", loc: "right", action: 'confirmPublish', label: '发送'}
    ],
    detail: [
        {component: TopNavTool, type: "left-nav", loc: "left", action: 'toIndex'}
    ]
}