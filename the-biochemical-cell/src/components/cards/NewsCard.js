import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const NewsCard = (props) => {
  return (
    <div className="box">
      <article className="media">
        <div className="media-left">
          <figure className="image is-64x64">
            <img
              src={
                !props.imageUrl
                  ? "https://bulma.io/images/placeholders/128x128.png"
                  : props.imageUrl
              }
              alt="Image"
            />
          </figure>
        </div>
        <div className="media-content">
          <div className="content">
            <strong>
              <a href={props.url} target="_blank">
                {props.title}
              </a>
            </strong>
            <hr style={{ margin: 3 }} />
            <p>
              <small>Author: {!props.author ? "N/A" : props.author} | </small>
              <small>Source: {props.sourceName} | </small>
              <small>Date Published: {props.publishedAt}</small>
              <br />
              {props.description}
            </p>
          </div>
          <nav className="level is-mobile">
            <div className="level-left">
              <Link to={`/homepage/${props.publishedAt}`} className="button">
                VIEW
              </Link>
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

export default connect(null)(NewsCard);
