import React from "react";
import { connect } from "react-redux";
import requireAuth from "../requireAuth";
import SideMenu from "../SideMenu";
import { getNews } from "../../actions";
import NewsCard from "../cards/NewsCard";

class HomePage extends React.Component {
  componentDidMount() {
    this.props.getNews();
  }

  renderNewsCards() {
    if (this.props.news) {
      return this.props.news.map((article) => {
        return (
          <div key={article.publishedAt}>
            <NewsCard
              author={article.author}
              content={article.content}
              description={article.description}
              publishedAt={article.publishedAt}
              sourceName={article.source.name}
              title={article.title}
              url={article.url}
              imageUrl={article.urlToImage}
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
    return (
      <div className="columns">
        <div className="column is-one-fifth">
          <SideMenu />
        </div>
        <div className="column" style={{ marginTop: 52 }}>
          <b>Science News of the Day</b>
          {this.renderNewsCards()}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    news: Object.values(state.news),
  };
};

export default requireAuth(connect(mapStateToProps, { getNews })(HomePage));
