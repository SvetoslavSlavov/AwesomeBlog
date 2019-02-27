import React from "react";

const HomeCard = ({ title, created, text, author, pressFavorites, textFavorites, textDelete, pressDelete }) => (
    <div className="container">
        <div className="row">
            <div className="center">
                <div className="card blue-grey darken-1">
                    <div className="card-content white-text">
                        <span className="card-title">{title}</span>
                        <p>{created}</p>
                        <p>{author}</p>
                        <p>{text}</p>
                    </div>
                    <div className="card-action blue right">
                            <button onClick={pressFavorites} className="btn gray">{textFavorites === true ? 'Remove from favorites' : 'Add to favorites'}</button>
                            <button onClick={pressDelete} className="btn gray">{textDelete}</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default HomeCard;
