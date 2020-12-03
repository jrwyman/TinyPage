import React from 'react';
import './post_compose.css'

class PostCompose extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            text: "",
            newPost: ""
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.renderErrors = this.renderErrors.bind(this);
    }

    componentWillReceiveProps(nextProps) {  //deprecated
        if (nextProps.newPost) {
            this.setState({ newPost: nextProps.newPost.text });
        }
        
        this.setState({ errors: nextProps.errors });
    }

    handleSubmit(e) {
        e.preventDefault();
        let post = {
            text: this.state.text,
        };

        this.props.composePost(post);
        this.setState({ text: '' })
    }

    update() {
        return e => this.setState({
            text: e.currentTarget.value
        });
    }

    renderErrors() {
        if (this.props.errors) {
            return (
                <ul>
                    {Object.keys(this.props.errors).map((error) => (
                        <li key={`error-${error}`}>
                            {this.props.errors[error]}
                        </li>
                    ))}
                </ul>
            );
        }
    }

    render() {
        return (
            <div className="post-compose-card">
                <form onSubmit={this.handleSubmit}>
                    <div className="post-compose-form">
                        <h3>Create Post</h3>
                        <textarea
                            value={this.state.text}
                            onChange={this.update()}
                            placeholder="Write your post..."
                            className="post-compose-text"
                        />
                        <input type="submit" value="Post" className="post-compose-submit" />
                        {this.renderErrors()}
                    </div>
                </form>
            </div>
        )
    }
}

export default PostCompose;