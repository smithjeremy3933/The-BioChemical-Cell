import React from "react";
import { connect } from "react-redux";

class Footer extends React.Component {
  render() {
    return (
      <footer class="footer">
        <div class="content has-text-centered">
          <b>The BioChemical Cell. Styled with Bulma CSS</b>
        </div>
      </footer>
    );
  }
}
export default connect(null)(Footer);
