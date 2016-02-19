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
            {itemClass: 'current', itemLabel: '消息首页', itemIcon: 'castingIcon'},
            {itemClass: '', itemLabel: '粉丝-关注', itemIcon: 'findProjectIcon'},
            {itemClass: '', itemLabel: '发现', itemIcon: 'findServiceIcon'},
            {itemClass: '', itemLabel: '切换身份', itemIcon: 'switchIDIcon'}
        ]
    }
    _getNavContent() {
        let items = this._getNavData();
        return items.map((item, index) => {
            return <MenuItem {...item} key={index}/>
        })
    }
    render () {
        return (
            <div className={classnames("menu", {"animate": this.props.open})}>
                <ul>
                    {this._getNavContent()}
                </ul>
                <Mask open={this.props.open} remove={this.props.toggle}/>
            </div>
        )
    }
}