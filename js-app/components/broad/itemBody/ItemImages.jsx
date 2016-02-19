var React = require('react');

export default class ItemImages extends React.Component {
    constructor(props) {
        super(props);
    }
    _getContent() {
        let images = this.props.images;
        return (images||[]).map((x, index) => {
            let text = `/images/${x}`;
            return <img src={text} key={index}/>
        })
    }
    render() {
        return (
            <span className="castingImgs">
                {this._getContent()}
            </span>
        )
    }
}