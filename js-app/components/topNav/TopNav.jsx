var ReactDOM = require('react-dom');
import {routeInfo, navItems, RouteNameMap} from './routerMapping.js'
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
        let btnItems = navItems(path);
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
        let routeObj = routeInfo(path);
        let navClazz = routeObj.name == RouteNameMap.PROFILE_INDEX? "opacity-50": '';
        return (
            <header className={"bar bar-nav " +navClazz} name="top">
                {
                    this._getContent()
                }
                <h1 className="title">{routeObj.title}</h1>
            </header>
        )
    }
}