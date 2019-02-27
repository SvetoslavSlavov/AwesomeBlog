import React from "react";

const AddBlogForm = ({ titleText, descriptionText, authorText, isFavoriteText, titleValue, titleOnChange, descriptionValue, descriptionOnChange,
authorValue, authorOnChange, isFavoritesValue, isFavoritesChange, wrongVisible }) => (
  <div className="row">
    <form className="col s12">
      <div className="row">
        <div className="input-field col s6">
          <input type="text" value={titleValue} onChange={titleOnChange}></input>
          <label htmlFor="first_name">{titleText}</label>
        </div>
        <div className="input-field col s12">
          <input type="text" value={descriptionValue} onChange={descriptionOnChange}></input>
          <label htmlFor="textarea2">{descriptionText}</label>
        </div>
        <div className="input-field col s6">
          <input type="text"value={authorValue} onChange={authorOnChange}></input>
          <label htmlFor="last_name">{authorText}</label>
        </div>
      </div>
      <p>
        <label>
          <input type="checkbox" value={isFavoritesValue} onChange={isFavoritesChange} />
          <span>{isFavoriteText}</span>
        </label>
      </p>
    </form>
  </div>
)

export default AddBlogForm;
