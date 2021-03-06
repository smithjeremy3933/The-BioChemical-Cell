import React from "react";
import { connect } from "react-redux";

const AminoAcidCard = (props) => {
  return (
    <div className="box">
      <article className="media">
        <div className="media-left">
          <figure className="image">
            <img
              style={{ height: 250, width: 250 }}
              src={
                !props.imageUrl
                  ? "https://bulma.io/images/placeholders/480x480.png"
                  : props.imageUrl
              }
              alt="Image"
            />
          </figure>
        </div>
        <div className="media-content">
          <div className="content">
            <strong>
              <h1>
                {props.name} | {props.abbrevName} | {props.symbolName}
              </h1>
            </strong>
            <hr style={{ margin: 3 }} />
            <p>
              <br />
              {/* {props.description} */}
            </p>
          </div>
          <nav className="level is-mobile">
            <div className="level-left">
              {/* <Link to={`/homepage/${props.publishedAt}`} className="button">
          VIEW
        </Link> */}
              <a className="level-item" aria-label="reply">
                <span className="icon is-small">
                  <i className="fas fa-reply" aria-hidden="true"></i>
                </span>
              </a>
              <a className="level-item" aria-label="retweet">
                <span className="icon is-small">
                  <i className="fas fa-retweet" aria-hidden="true"></i>
                </span>
              </a>
              <a className="level-item" aria-label="like">
                <span className="icon is-small">
                  <i className="fas fa-heart" aria-hidden="true"></i>
                </span>
              </a>
            </div>
          </nav>
        </div>
      </article>
    </div>
  );
};

export default connect(null)(AminoAcidCard);
