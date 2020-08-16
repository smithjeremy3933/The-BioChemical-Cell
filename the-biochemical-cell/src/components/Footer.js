import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";

class Footer extends React.Component {
  render() {
    return (
      <FooterBox className="footer">
        <div className="content has-text-centered">
          <b>The BioChemical Cell. Styled with Bulma CSS</b>
        </div>
      </FooterBox>
    );
  }
}

const FooterBox = styled.footer`
  z-index: 0;
`;

export default connect(null)(Footer);
