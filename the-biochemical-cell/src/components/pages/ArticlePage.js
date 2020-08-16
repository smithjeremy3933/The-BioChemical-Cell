import React from "react";
import { connect } from "react-redux";
import { getNews } from "../../actions";
import { Link } from "react-router-dom";
import history from "../../history";
import NewsModal from "../modals/NewsModal";

class ArticlePage extends React.Component {
  componentDidMount() {
    this.props.getNews();
  }

  renderActions() {
    if (this.props.article) {
      return (
        <div>
          <a className="button" src={this.props.article.url}>
            GO TO ARTICLE
          </a>
          <Link to="/homepage" className="button is-danger">
            Cancel
          </Link>
        </div>
      );
    }
  }

  renderContent() {
    if (this.props.article) {
      return <div>{this.props.article.content}</div>;
    }
  }

  renderTitle() {
    if (this.props.article) {
      return <div>{this.props.article.title}</div>;
    }
  }

  render() {
    return (
      <NewsModal
        title={this.renderTitle()}
        content={this.renderContent()}
        actions={this.renderActions()}
        onDismiss={() => history.push("/homepage")}
      />
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    article: state.news[ownProps.match.params.publishedAt],
  };
};

export default connect(mapStateToProps, { getNews })(ArticlePage);
