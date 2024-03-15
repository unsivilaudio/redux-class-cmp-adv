import React from 'react';
import { connect } from 'react-redux';

import classes from './Auth.module.css';

class Auth extends React.Component {
    handleSubmit = () => {
        this.props.login();
    };

    render() {
        return (
            <main className={classes.auth}>
                <section>
                    <form onSubmit={this.handleSubmit}>
                        <div className={classes.control}>
                            <label htmlFor='email'>Email</label>
                            <input type='email' id='email' required />
                        </div>
                        <div className={classes.control}>
                            <label htmlFor='password'>Password</label>
                            <input type='password' id='password' required />
                        </div>
                        <button>Login</button>
                    </form>
                </section>
            </main>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        login: () => dispatch({ type: 'LOGIN' }),
        logout: () => dispatch({ type: 'LOGOUT' }),
    };
};

export default connect(null, mapDispatchToProps)(Auth);
