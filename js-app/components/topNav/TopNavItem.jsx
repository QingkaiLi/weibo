
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

exports.TopNavTool = TopNavTool;
exports.TopNavButton = TopNavButton;