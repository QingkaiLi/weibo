import ItemContent from '../ItemContent.jsx'

export default class ProfileBroad extends React.Component {
    _getContent() {
        return (this.props.data||[]).map((x, index) => {
            return(
                <li key={index}>
                    <ItemContent>
                        <ItemContent.ItemHeader {...x} noFollowPanel={true}/>
                        <ItemContent.ItemBody {...x} />
                    </ItemContent>
                </li>)
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