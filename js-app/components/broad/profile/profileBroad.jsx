import BroadItem from '../broadItem.jsx'

export default class ProfileBroad extends React.Component {
    _getContent() {
        return (this.props.data||[]).map((x, index) => {
            return <BroadItem {...x} key={index}/>
        })
    }
    render() {
        return (
            <ul className="broadList">
            {this._getContent()}
            </ul>
        )
    }
}