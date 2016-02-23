import _ from 'lodash';
export default class ProfileSummary extends React.Component {
    render() {
        var profile = this.props.data;
        if (_.isEmpty(profile))
            return null;
        return (
            <div className="profileSummary">
                <div className="proflie-avatar">
                    <img src={'/images/'+profile.avatar}/>
                </div>
                <div className="profile-name">
                        {profile.name}
                </div>
                <div className="profile-signature">
                        {profile.signature}
                </div>
            </div>
        )
    }
}