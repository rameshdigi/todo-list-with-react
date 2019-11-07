import React, { Component } from "react";

import { Link } from "react-router-dom";
import pokeball from "../pokeball.png";
import { connect } from "react-redux";

class About extends Component {
  render() {
    const { posts } = this.props;

    const postList = posts.length ? (
      posts.map(post => {
        return (
          <div className="post card" key={post.id}>
            <img src={pokeball} alt="A pokeball man" />
            <div className="card-content">
              <Link to={"/" + post.id}>
                <span className="card-title red-text">{post.title}</span>
              </Link>
              <p>{post.body}</p>
            </div>
          </div>
        );
      })
    ) : (
      <div className="center">No posts yet</div>
    );

    return <div className="container home">{postList}</div>;
  }
}

const mapStateToProps = state => {
  return {
    posts: state.posts
  };
};
export default connect(mapStateToProps)(About);
