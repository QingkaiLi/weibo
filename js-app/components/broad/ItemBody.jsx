var React = require('react');

export default class ItemBody extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <span className="castingContent">
            {this.props.children}
            </span>
        )
    }
}