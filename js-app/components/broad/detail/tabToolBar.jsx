import {Link, IndexLink} from 'react-router';

export default class TabToolBar extends React.Component {
    constructor(props) {
        super(props)

    }
    render () {
        return (
            <nav>
            {this.props.children}
            </nav>
        )
    }
}
class TabToolItem extends React.Component {
    constructor(props) {
        super(props)

    }
    render () {
        let {isIndex, isBadge, count, isCurrent, url} = this.props;

        var clazzName = isBadge? 'pull-right': '';
        var content = <div className={clazzName}>{this.props.children}<span>{count}</span></div>;
        if (isIndex) {
            return <IndexLink activeClassName="current" to={url}>{content}</IndexLink>
        } else if (!isBadge) {
            return (
                <Link activeClassName="current" to={url}>{content}</Link>
            )
        } else {
            return content;
        }
    }
}

TabToolBar.Item = TabToolItem;