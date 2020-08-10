import React from "react";
import { connect } from "react-redux";
import requireAuth from "../requireAuth";
import SideMenu from "../SideMenu";
import { getAllAminoAcids } from "../../actions";

class AminoAcidPage extends React.Component {
  componentDidMount() {
    this.props.getAllAminoAcids();
  }

  render() {
    console.log(this.props.amino);
    return (
      <div className="columns">
        <div className="column is-one-fifth">
          <SideMenu />
        </div>
        <div className="column">Amino Acid Page</div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    amino: Object.values(state.amino),
  };
};

export default requireAuth(
  connect(mapStateToProps, { getAllAminoAcids })(AminoAcidPage)
);
