import React from "react";
import About from "./../Navigation/About";

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      passwordConfirm: "",
      name: ""
    };
  }

  onNameChange = event => {
    this.setState({ name: event.target.value });
  };
  onEmailChange = event => {
    this.setState({ email: event.target.value });
  };

  onPasswordChange = event => {
    this.setState({ password: event.target.value });
  };

  onPasswordConfrimChange = event => {
    this.setState({ passwordConfirm: event.target.value });
  };

  onSubmitSignUp = () => {
    //console.log(this.state);

    fetch("https://face-analysis-api.herokuapp.com/signup", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password,
        passwordConfirm: this.state.passwordConfirm,
        name: this.state.name
      })
    })
      .then(response => response.json())
      .then(user => {
        if (user.id) {
          this.props.loadUser(user);
          this.props.onRouteChange("home");
        }
      });
  };

  render() {
    return (
      <div>
        <About />
        <div className="br3 shadow-2 ba dark-grey b--black-10 mv4 w-100 w-50-m w-25-1 mw6 center">
          <main className="pa4 black-80">
            <div className="measure">
              <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                <legend className="f3 fw6 ph0 mh0">Sign Up</legend>
                <div className="mt3">
                  <label className="db fw6 lh-copy f6" htmlFor="name">
                    Name
                  </label>
                  <input
                    className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                    type="text"
                    name="name"
                    id="name"
                    onChange={this.onNameChange}
                  />
                </div>
                <div className="mt3">
                  <label className="db fw6 lh-copy f6" htmlFor="email-address">
                    Email
                  </label>
                  <input
                    className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                    type="email"
                    name="email-address"
                    id="email-address"
                    autoComplete="user email"
                    onChange={this.onEmailChange}
                  />
                </div>
                <div className="mv3">
                  <label className="db fw6 lh-copy f6" htmlFor="password">
                    Password
                  </label>
                  <input
                    className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                    type="password"
                    name="password"
                    id="password"
                    autoComplete="current-password"
                    onChange={this.onPasswordChange}
                  />
                </div>
                <div className="mv3">
                  <label className="db fw6 lh-copy f6" htmlFor="password">
                    Confirm Password
                  </label>
                  <input
                    className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                    type="password"
                    name="passwordConfirm"
                    id="passwordConfirm"
                    autoComplete="current-password"
                    onChange={this.onPasswordConfrimChange}
                  />
                </div>
              </fieldset>
              <div className="">
                <input
                  onClick={this.onSubmitSignUp}
                  className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                  type="submit"
                  value="Sign up"
                />
              </div>
            </div>
          </main>
        </div>
      </div>
    );
  }
}

export default Signup;
