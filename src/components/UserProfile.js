import React from 'react';
import { connect } from 'react-redux';

import classes from './UserProfile.module.css';

class UserProfile extends React.Component {
    render() {
        return (
            <main className={classes.profile}>
                <h2>My User Profile</h2>
                <button onClick={this.props.logout}>Logout</button>
            </main>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        logout: () => dispatch({ type: 'LOGOUT' }),
    };
};

export default connect(null, mapDispatchToProps)(UserProfile);
