var React = require('react');
import ItemText from './ItemText.jsx'
import ItemImages from './ItemImages.jsx'

export default class ItemBody extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        let {topics, images, content} = this.props;
        return (
            <span className="castingContent">
                <ItemText topics={topics} content={content}/>
                <ItemImages images={images}/>
            </span>
        )
    }
}