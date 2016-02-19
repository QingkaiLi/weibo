var React = require('react');

export default class OperateBar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="operations">
                {this.props.children}
            </div>
        )
    }
}

class OperateItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <span className={this.props.clazzName} />
        )
    }
}

OperateBar.Item = OperateItem;
