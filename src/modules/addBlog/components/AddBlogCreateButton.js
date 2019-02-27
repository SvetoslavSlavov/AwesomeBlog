import React from "react";

const AddBlogCreateButton = ({ text, pressCreate }) => (
    <div className="btn-container">
        <button onClick={pressCreate} className="btn gray">{text}</button>
    </div>
)

export default AddBlogCreateButton;
