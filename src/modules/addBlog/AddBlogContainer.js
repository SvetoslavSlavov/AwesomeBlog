import React, { Component } from 'react';
import { connect } from "react-redux";
import HeaderText from './components/HeaderText';
import AddBlogDatePicker from './components/AddBlogDatePicker';
import { createPost } from '../../redux/actions/createPost/aCreatePost';
import AddBlogForm from './components/AddBlogForm';
import AddBlogCreateButton from './components/AddBlogCreateButton';
import WrongFieldsText from './components/WrongFieldsText';

class AddBlogContainer extends Component {
    state = {
        title: '',
        description: '',
        author: '',
        isFavorites: false,
        date: '2019-05-24',
        errorVisible: false
    }
    titleOnChange = (evt) => {
        this.setState({ title: evt.target.value });
    }
    descriptionOnChange = (evt) => {
        this.setState({ description: evt.target.value })
    }
    authorOnChange = (evt) => {
        this.setState({ author: evt.target.value })
    }
    isFavoritesChange = () => {
        this.setState({ isFavorites: !this.state.isFavorites });
    }
    changeDate = (evt) => {
        this.setState({ date: evt.target.value });
    }
    pressCreate = () => {
        const { title, description, author, date, isFavorites } = this.state;
        const { data } = this.props;
        if (title !== '' && description !== '' && author !== '') {
            this.setState({ errorVisible: false });
            this.props.createPost(data, title, description, author, isFavorites, date);
        } else {
            this.setState({ errorVisible: true });
        }
    }
    showError = () => {
        if (this.state.errorVisible) {
            return (
                <WrongFieldsText
                    text={'Fill all the fields.'}
                />);
        }
    }
    render() {
        return (
            <React.Fragment>
                <HeaderText
                    text={'Add Blog'}
                />
                <AddBlogDatePicker
                    value={this.state.date}
                    onChange={(evt) => this.changeDate(evt)}
                />
                <AddBlogForm
                    titleText={'Title'}
                    descriptionText={'Add blog description'}
                    authorText={'Author'}
                    isFavoriteText={'Add to favorites'}
                    isFavoritesValue={this.state.isFavorites}
                    isFavoritesChange={this.isFavoritesChange}
                    titleValue={this.state.title}
                    titleOnChange={(evt) => this.titleOnChange(evt)}
                    descriptionValue={this.state.description}
                    descriptionOnChange={(evt) => this.descriptionOnChange(evt)}
                    authorValue={this.state.author}
                    authorOnChange={(evt) => this.authorOnChange(evt)}
                />
                {this.showError()}
                <AddBlogCreateButton
                    text={'Create'}
                    pressCreate={this.pressCreate}
                />
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        data: state.data.data
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        createPost: (oldData, title, description, author, isFavorites, date) => {
            dispatch(createPost(oldData, title, description, author, isFavorites, date))
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddBlogContainer);
