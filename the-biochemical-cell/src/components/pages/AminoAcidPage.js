import React from "react";
import { connect } from "react-redux";
import requireAuth from "../requireAuth";
import SideMenu from "../SideMenu";
import { getAllAminoAcids } from "../../actions";
import AminoAcidCard from "../cards/AminoAcidCard";
import {
  NONPOL_ALIPHATIC,
  POL_NEG_CHARGED,
  POL_POS_CHARGED,
  POL_UNCHARGED,
  AROMATIC,
} from "../../constants/StringConstants";

class AminoAcidPage extends React.Component {
  componentDidMount() {
    this.props.getAllAminoAcids();
  }

  filterByRGroupClass(aminos, rGroupClass) {
    return aminos.filter((amino) => {
      return amino.r_groupClass === rGroupClass;
    });
  }

  renderAminoAcidCards(rGroupClass) {
    if (this.props.amino) {
      const filteredRGroupArr = this.filterByRGroupClass(
        this.props.amino,
        rGroupClass
      );
      console.log(filteredRGroupArr);
      return filteredRGroupArr.map((aminoAcid) => {
        return (
          <div style={{ marginRight: 20 }} key={aminoAcid.id}>
            <h1>
              <strong>{rGroupClass}</strong>
            </h1>
            <AminoAcidCard
              id={aminoAcid.id}
              name={aminoAcid.name}
              rGroup={aminoAcid.r_groupClass}
              abbrevName={aminoAcid.abbreviatedName}
              symbolName={aminoAcid.symbolName}
              imageUrl={aminoAcid.imageUrl}
              percentOccurInProts={aminoAcid.occurenceInProteins}
              molecularWeight={aminoAcid.molecularWeight}
              pI={aminoAcid.pI}
              pk1_COOH={aminoAcid.pk1_COOH}
              pk2_NH3={aminoAcid.pk2_NH3}
              pkR={aminoAcid.pkR}
            />
          </div>
        );
      });
    } else {
      return (
        <progress class="progress is-large is-info" max="100">
          60%
        </progress>
      );
    }
  }

  render() {
    console.log(this.props.amino);
    return (
      <div className="columns is-mobile">
        <div className="column is-one-fifth">
          <SideMenu />
        </div>
        <div className="column" style={{ marginTop: 52 }}>
          <h1>
            <b>Amino Acids!</b>
          </h1>
          {this.renderAminoAcidCards(NONPOL_ALIPHATIC)}
        </div>
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
