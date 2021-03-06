import React from "react";
import { Field, reduxForm, SubmissionError } from "redux-form";
import { connect } from "react-redux";
import { signin } from "../../actions";
import _ from "lodash";

class Signin extends React.Component {
  onSubmit = (formValues) => {
    return new Promise((resolve) => {
      const trimUsername = _.trim(formValues.username);
      const trimPassword = _.trim(formValues.password);

      if (trimUsername !== formValues.username) {
        throw new SubmissionError({
          username: "Cannot have SPACE at beginning or end of username",
        });
      }

      if (trimPassword !== formValues.password) {
        throw new SubmissionError({
          password: "Cannot have SPACE at beginning or end of password",
        });
      }

      if (formValues.password.length < 6) {
        throw new SubmissionError({
          password: "Password must be at least 6 characters long.",
        });
      }

      if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(formValues.username)
      ) {
        throw new SubmissionError({ username: "Invalid e-mail address." });
      }

      resolve(this.props.signin(formValues));
    });
  };

  renderError({ error, touched }) {
    if (touched && error) {
      return (
        <div>
          <p className="help is-danger">{error}</p>
        </div>
      );
    }
  }

  renderInput = ({ input, label, meta, type, placeholder }) => {
    const className = `input is-medium ${
      meta.error && meta.touched ? "is-danger" : ""
    }`;
    return (
      <div className="field">
        <label className="label">{label}</label>
        <div className="control has-icons-left has-icons-right">
          <input
            {...input}
            autoComplete="off"
            type={type}
            className={className}
            label="Enter Email as your Username"
            placeholder={placeholder}
          />
        </div>
        {this.renderError(meta)}
      </div>
    );
  };

  render() {
    return (
      <div className="container">
        <div className="box" style={{ marginTop: 100, height: 500 }}>
          <h1>
            <b style={{ fontSize: 50 }}>
              Sign In to Learn all about BioChemistry!
            </b>
          </h1>
          <hr />
          <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
            <Field
              name="username"
              component={this.renderInput}
              label="Please enter your Email"
              placeholder="example@example.com"
            />
            <Field
              name="password"
              type="password"
              component={this.renderInput}
              label="Enter a valid Password."
              placeholder="Password"
            />
            <div className="control">
              <button className="button is-link" style={{ width: 200 }}>
                Sign In
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

const formWrapped = reduxForm({ form: "signin" })(Signin);

export default connect(null, { signin })(formWrapped);
