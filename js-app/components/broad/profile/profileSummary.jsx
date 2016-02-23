import _ from 'lodash';
import Subscription from '../itemHeader/Subscription.jsx'
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
                {profile.isSelf? null:
                    <Subscription followed={profile.followed}/>
                }
                </div>
                <div className="profile-signature">
                        {profile.signature}
                </div>
            </div>
        )
    }
}