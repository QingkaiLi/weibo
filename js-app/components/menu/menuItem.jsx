export default class MenuItem extends React.Component {
    navTo() {
        this.props.navTo(this.props.url)
    }
    render () {
        let {itemClass, itemLabel, itemIcon} = this.props;
        return (
            <li className={itemClass}>
                <a href='' onTouchStart={this.navTo.bind(this)}><span className={"icon "+itemIcon}></span>{itemLabel}</a>
            </li>
        )
    }
}