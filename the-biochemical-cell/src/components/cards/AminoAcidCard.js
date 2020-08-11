import React from "react";
import { connect } from "react-redux";

const AminoAcidCard = (props) => {
  return (
    <div style={{ width: 256, height: 450, padding: 5 }} className="card">
      <div className="card-image">
        <figure className="image is-4by3">
          <img
            src="https://bulma.io/images/placeholders/256x256.png"
            alt="Placeholder image"
          />
        </figure>
      </div>
      <div className="card-content">
        <div className="media">
          <div className="media-left">
            <figure className="image is-48x48">
              <img
                src="https://bulma.io/images/placeholders/96x96.png"
                alt="Placeholder image"
              />
            </figure>
          </div>
          <div className="media-content">
            <p className="title is-4">{props.name}</p>
            <p className="subtitle is-6">{props.rGroup}</p>
          </div>
        </div>

        <div className="content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec
          iaculis mauris. <a>@bulmaio</a>.<a href="#">#css</a>
          <a href="#">#responsive</a>
          <br />
        </div>
      </div>
    </div>
  );
};

export default connect(null)(AminoAcidCard);
