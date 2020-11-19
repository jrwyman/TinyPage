import React from 'react';
import { withRouter } from 'react-router-dom';

class LoginForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.renderErrors = this.renderErrors.bind(this);
    }

    // Once the user has been authenticated, redirect to the Tweets page
    // componentDidUpdate(prevProps, prevState) {
    //     if (prevProps.user !== this.props.user && this.props.user) {
    //         this.props.history.push('/tweets');
    //     }
    //     if (prevProps.errors !== this.props.errors) {
    //         this.setState({ errors: this.props.errors })
    //     }
    //     // Set or clear errors
    // }

    // Handle field updates (called in the render method)
    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    // Handle form submission
    handleSubmit(e) {
        e.preventDefault();

        let user = {
            email: this.state.email,
            password: this.state.password
        };
        
        this.props.login(user)
    }

    // Render the session errors if there are any
    renderErrors() {
        // this.state.errors = [{ error: 'this is bad'}, { error: 'this is also bad' }]
        return (
            <ul> 
                {Object.keys(this.props.errors).map((error, i) => (
                    <li key={`error-${error}`}>
                        {this.props.errors[error]}
                    </li>
                ))}
            </ul>
        );
    }

    render() {
        return (
            <div className="login-form-container">
                <form onSubmit={this.handleSubmit}>
                    <div className="login-form">
                        <input type="text"
                            value={this.state.email}
                            onChange={this.update('email')}
                            placeholder="Email"
                        />
                        <input type="password"
                            value={this.state.password}
                            onChange={this.update('password')}
                            placeholder="Password"
                        />
                        <input className="login-submit" type="submit" value="Log In" />
                        {this.renderErrors()}
                    </div>
                </form>
            </div>
        );
    }
}

export default withRouter(LoginForm);