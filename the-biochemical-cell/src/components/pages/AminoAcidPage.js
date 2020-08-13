import React from "react";
import { connect } from "react-redux";
import { AminoBox, InnerScroll } from "../styled-components/AminoAcidStyle";
import { Link as ScrollLink, Element, Events, scrollSpy } from "react-scroll";
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

    Events.scrollEvent.register("begin", function () {
      console.log("begin", arguments);
    });

    Events.scrollEvent.register("end", function () {
      console.log("end", arguments);
    });

    scrollSpy.update();
  }

  // scrollToTop() {
  //   scroll.scrollToTop;
  // }

  // scrollToBottom() {
  //   scroll.scrollToBottom;
  // }

  renderAminoAcidClassBox(rGroupClass) {
    return (
      <AminoBox className="box">
        <h1>{rGroupClass}</h1>
        <div id="scrollBox">
          <Element
            name="test7"
            className="element"
            id="containerElement"
            style={{
              display: "flex",
              position: "relative",
              height: "500px",
              overflow: "scroll",
              // marginBottom: '100px'
            }}
          >
            <InnerScroll className="innerSrollBox">
              {this.renderAminoAcidCards(rGroupClass)}
            </InnerScroll>
          </Element>
        </div>
      </AminoBox>
    );
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
      return <div>Loading...</div>;
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
          <div className="container">
            <h1>Amino Acid Page</h1>
            {this.renderAminoAcidClassBox(NONPOL_ALIPHATIC)}
            <div className="columns">
              <div className="column">
                {this.renderAminoAcidClassBox(AROMATIC)}
                <div className="columns">
                  <div className="column">
                    {this.renderAminoAcidClassBox(POL_UNCHARGED)}
                  </div>
                </div>
              </div>
            </div>
          </div>
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
