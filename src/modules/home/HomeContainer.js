import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { loadData } from '../../redux/actions/loadData/aLoadData';
import { addToFavorites } from '../../redux/actions/favorites/aFavorites';
import { deletePost } from '../../redux/actions/deletePost/aDeletePost';
import HomeCard from './components/HomeCard';

class HomeContainer extends Component {
  componentDidMount() {
    const { data } = this.props;
    if (_.isEmpty(data) === true) {
      this.props.loadData();
    }
  }

  pressFavorites = (data, isFavorite, id) => {
    this.props.addToFavorites(data, isFavorite, id);
  };

  pressDelete = (data, id) => {
    this.props.deletePost(data, id);
  };

  render() {
    const { data } = this.props;
    const sorted = _.sortBy(data, e => !e.isFavorite);
    const postListFavorites = sorted.length ? (
      sorted.map((post, index) => {
        return (
          <HomeCard
            key={post.id}
            title={post.title}
            created={post.created}
            author={post.author}
            text={post.text}
            pressFavorites={() =>
              this.pressFavorites(data, post.isFavorite, index)
            }
            textFavorites={post.isFavorite}
            textDelete="Delete"
            pressDelete={() => this.pressDelete(data, index)}
          />
        );
      })
    ) : (
      <div>No posts post yet.</div>
    );
    return <React.Fragment>{postListFavorites}</React.Fragment>;
  }
}

const mapStateToProps = state => {
  return {
    data: state.data.data
  };
};

const mapDispatchToProps = dispatch => {
  return {
    loadData: () => {
      dispatch(loadData());
    },
    addToFavorites: (data, favorites, id) => {
      dispatch(addToFavorites(data, favorites, id));
    },
    deletePost: (data, id) => {
      dispatch(deletePost(data, id));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeContainer);
