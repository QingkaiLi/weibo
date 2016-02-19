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
    openImage() {
        // TODO
    }
    render() {
        return (
            <span className="castingImgs" onTouchStart={this.openImage.bind(this)}>
                {this._getContent()}
            </span>
        )
    }
}