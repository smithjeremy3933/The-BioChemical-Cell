import React from "react";
import { connect } from "react-redux";
import * as Scroll from "react-scroll";
import {
  Link as ScrollLink,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";
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
      <div className="box" style={{ width: 900 }}>
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
            <div style={{ display: "flex" }} className="innerSrollBox">
              {this.renderAminoAcidCards(rGroupClass)}
            </div>
          </Element>
        </div>
      </div>
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
          <div key={aminoAcid.id}>
            <AminoAcidCard
              name={aminoAcid.name}
              rGroup={aminoAcid.r_groupClass}
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
      <div className="columns">
        <div className="column is-one-fifth">
          <SideMenu />
        </div>
        <div className="column">
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
