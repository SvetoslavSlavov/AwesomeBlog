import React, { Component } from 'react';
import { connect } from 'react-redux';
import HeaderText from './components/HeaderText';
import { createPost } from '../../redux/actions/createPost/aCreatePost';
import AddBlogForm from './components/AddBlogForm';
import WrongFieldsText from './components/WrongFieldsText';
import MainButton from '../../common/buttons/MainButton';

class AddBlogContainer extends Component {
  state = {
    title: '',
    description: '',
    author: '',
    isFavorites: false,
    date: '2019-05-24',
    errorVisible: false
  };

  titleOnChange = evt => {
    this.setState({ title: evt.target.value });
  };

  descriptionOnChange = evt => {
    this.setState({ description: evt.target.value });
  };

  authorOnChange = evt => {
    this.setState({ author: evt.target.value });
  };

  isFavoritesChange = () => {
    const { isFavorites } = this.state;
    this.setState({ isFavorites: !isFavorites });
  };

  changeDate = evt => {
    this.setState({ date: evt.target.value });
  };

  pressCreate = () => {
    const { title, description, author, date, isFavorites } = this.state;
    const { data } = this.props;
    if (title !== '' && description !== '' && author !== '') {
      this.setState({ errorVisible: false });
      this.props.createPost(
        data,
        title,
        description,
        author,
        isFavorites,
        date
      );
    } else {
      this.setState({ errorVisible: true });
    }
  };

  showError = () => {
    const { errorVisible } = this.state;
    if (errorVisible) {
      return <WrongFieldsText text='Fill all the fields.' />;
    }
  };
  
  render() {
    const { isFavorites, title, date, description, author } = this.state;
    return (
      <React.Fragment>
        <HeaderText text='Add Blog' />
        <AddBlogForm
          titleText='Title'
          descriptionText='Add blog description'
          authorText='Author'
          isFavoriteText='Add to favorites'
          isFavoritesValue={isFavorites}
          isFavoritesChange={this.isFavoritesChange}
          titleValue={title}
          titleOnChange={evt => this.titleOnChange(evt)}
          datePickerValue={date}
          datePickerOnChange={evt => this.changeDate(evt)}
          descriptionValue={description}
          descriptionOnChange={evt => this.descriptionOnChange(evt)}
          authorValue={author}
          authorOnChange={evt => this.authorOnChange(evt)}
        />
        {this.showError()}
        <MainButton onClick={this.pressCreate}>Create</MainButton>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    data: state.data.data
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createPost: (oldData, title, description, author, isFavorites, date) => {
      dispatch(
        createPost(oldData, title, description, author, isFavorites, date)
      );
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddBlogContainer);
