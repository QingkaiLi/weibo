export default class MenuItem extends React.Component {
    render () {
        let {itemClass, itemLabel, itemIcon} = this.props;
        return (
            <li className={itemClass}>
                <a href=""><span className={"icon "+itemIcon}></span>{itemLabel}</a>
            </li>
        )
    }
}