window.React = require('react');

import { render } from 'react-dom';
import {Router, Route, IndexRoute} from 'react-router';

import Broad from './containers/broad';
import Forward from './containers/Forward'
import Publish from './containers/Publish'
import Comment from './containers/Comment'
import NotFound from './containers/NotFound';
import TopNav from './components/topNav/TopNav';
import BurgerToggle from './components/topNav/BurgerToggle'
import Menu from './components/menu/menu'
import Spinner from './components/common/spinner/Spinner.jsx'
import {leaveBroadCallback, forwardCallback} from './utils/pageMountCallback.js'

var Weibo = React.createClass({
    getInitialState: function() {
        return {openMenu: false}
    },
    toggleMenu: function() {
        this.setState({openMenu: !this.state.openMenu})
    },
    render: function () {
        return (
            <div style={{height: '100%'}}>
                <BurgerToggle {...this.props} open={this.state.openMenu} toggle={this.toggleMenu}/>
                <Menu open={this.state.openMenu} toggle={this.toggleMenu}/>
                <TopNav {...this.props} />
                {this.props.children}
                <Spinner/>
            </div>
        );
    }
});

var routes = (
    <Router>
        <Route path="/" component={Weibo}>
            <IndexRoute component={Broad} onLeave={leaveBroadCallback}/>
            <Route path="forward/:item" component={Forward} onEnter={forwardCallback}/>
            <Route path="publish" component={Publish}/>
            <Route path="comment/:item" component={Comment} onEnter={forwardCallback}/>
            <Route path="*" component={NotFound}/>
        </Route>
    </Router>
);

render(routes, document.getElementById('cl-wrapper'));