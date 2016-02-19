var React = require('react');

export default class ItemHeader extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <span className="castingInfo">
            {this.props.children}
            </span>
        )
    }
}