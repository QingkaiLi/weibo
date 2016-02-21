var ReactDOM = require('react-dom');
import classnames from 'classnames'
import MenuItem from './menuItem'
import Mask from './mask'

export default class Menu extends React.Component {
    constructor(props) {
        super(props);
        this._getNavContent = this._getNavContent.bind(this);
    }
    _getNavData() {
        return [
            {itemClass: 'head', itemLabel: '', itemIcon: 'myProfileIcon'},
            {itemClass: 'current', itemLabel: '消息首页', itemIcon: 'castingIcon', url: "/"},
            {itemClass: '', itemLabel: '个人主页', itemIcon: 'profileIcon', url: "/profileIndex"},
            {itemClass: '', itemLabel: '粉丝-关注', itemIcon: 'findProjectIcon'},
            {itemClass: '', itemLabel: '发现', itemIcon: 'findServiceIcon'},
            {itemClass: '', itemLabel: '切换身份', itemIcon: 'switchIDIcon'}
        ]
    }
    _getNavContent() {
        var that = this;
        let items = this._getNavData();
        return items.map((item, index) => {
            return <MenuItem {...item} key={index} navTo={that.navTo.bind(that)}/>
        })
    }
    closeMenu() {
        this.props.toggle();
    }
    navTo(url) {
        this.props.history.pushState(null, url);
        this.closeMenu.apply(this)
    }
    render () {
        return (
            <div className={classnames("menu", {"animate": this.props.open})}>
                <Mask open={this.props.open} remove={this.closeMenu.bind(this)}/>
                <ul ref="menuContent">
                    {this._getNavContent()}
                </ul>
            </div>
        )
    }
}