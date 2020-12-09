import React from 'react';
import PropTypes from 'prop-types';
import './post_compose.css';

class PostCompose extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      text: '',
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
  }

  handleSubmit(e) {
    const { text } = this.state;
    const { composePost } = this.props;
    e.preventDefault();
    const post = {
      text,
    };

    composePost(post);
    this.setState({ text: '' });
  }

  update() {
    return (e) => this.setState({
      text: e.currentTarget.value,
    });
  }

  renderErrors() {
    const { errors } = this.props;
    if (errors) {
      return (
        <ul>
          {Object.keys(errors).map((error) => (
            <li key={`error-${error}`}>
              {errors[error]}
            </li>
          ))}
        </ul>
      );
    }
    return null;
  }

  render() {
    const { text } = this.state;
    return (
      <div className="post-compose-card">
        <form onSubmit={this.handleSubmit}>
          <div className="post-compose-form">
            <h3>Create Post</h3>
            <textarea
              value={text}
              onChange={this.update()}
              placeholder="Write your post..."
              className="post-compose-text"
            />
            <input type="submit" value="Post" className="post-compose-submit" />
            {this.renderErrors()}
          </div>
        </form>
      </div>
    );
  }
}

PostCompose.propTypes = {
  errors: PropTypes.instanceOf(Array).isRequired,
  composePost: PropTypes.func.isRequired,
};

export default PostCompose;
