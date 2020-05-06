class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }
    handleSignup(e) {
      e.preventDefault();
      this.props.action(this.state);
    }

    update(value) {
      return e => this.setState({ [value]: e.target.value });
    }
  

  render() {
    return (
      <div className="signup-form-modal">
        <h1 className="signup-email-req-model">Please enter your email</h1>
        <input
          className="signup-email-input-model" 
          type="text"
          value={this.state.email}   
          onChange={this.update('email')}
        />
        <h2 className="signup-password-req-model">Please enter a password</h2>
        <input
          className="signup-password-input-model"
          type="password"
          value={this.state.password}
          onChange={this.update('password')}
        />

        <button className="signup-form-button" onClick={ this.handleSignup }> Signup </button>
      </div>
    )
  }
}