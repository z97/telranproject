import React from 'react';
import {connect} from "react-redux";

const Avatar = (props) => {
    return(
        <img
            className={`user-avatar ${props.size || ''}`}
            src={props.avatar}
            alt={props.name}
        />
    )
}

const mapStateToProps = state => (
    {
        avatar: state.user.avatar,
        name: state.user.name
    }
)

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        changeAvatar: changeAvatarAction,
        changeName: changeNameAction
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Avatar);