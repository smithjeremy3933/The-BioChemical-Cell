import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";

const AminoAcidCard = (props) => {
  const imageUrl =
    props.imageUrl === null
      ? "https://bulma.io/images/placeholders/256x256.png"
      : props.imageUrl;
  return (
    <AminoCard className="card">
      <div className="card-image">
        <figure className="image is-4by3">
          <img src={imageUrl} alt="Placeholder image" />
        </figure>
      </div>
      <div className="card-content">
        <div className="media">
          <div className="media-content">
            <p className="title is-4">
              {props.name} | {props.abbrevName} | {props.symbolName}
            </p>
            <p className="subtitle is-6">{props.rGroup}</p>
          </div>
        </div>
      </div>
    </AminoCard>
  );
};

const AminoCard = styled.div`
  width: 400px;
  height: 96%;
  margin-right: 10px;
  border-radius: 10px;
`;

export default connect(null)(AminoAcidCard);
