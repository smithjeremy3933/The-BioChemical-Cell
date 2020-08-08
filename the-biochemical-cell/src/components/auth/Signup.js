import React from "react";
import { Field, reduxForm, SubmissionError } from "redux-form";
import { connect } from "react-redux";
import _ from "lodash";
import { signup } from "../../actions";

class Signup extends React.Component {
  onSubmit = (formValues) => {
    this.props.signup(formValues);
  };

  renderInput = ({ input, label, meta, type }) => {
    return (
      <div className="field">
        <label className="label">{label}</label>
        <div className="control has-icons-left has-icons-right">
          <input
            {...input}
            autoComplete="off"
            type={type}
            label="Enter Email for Username"
          />
        </div>
        <p className="help is-success">This username is available</p>
      </div>
    );
  };

  render() {
    return (
      <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
        <Field
          name="username"
          component={this.renderInput}
          label="Enter Email for Username"
        />
        <Field
          name="password"
          type="password"
          component={this.renderInput}
          label="Enter a valid Password."
        />
        <div className="control">
          <button className="button is-link">Submit</button>
        </div>
      </form>
    );
  }
}

const formWrapped = reduxForm({ form: "signup" })(Signup);

export default connect(null, { signup })(formWrapped);
