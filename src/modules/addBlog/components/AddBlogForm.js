import React from "react";
import styled from 'styled-components';
import AddBlogDatePicker from './AddBlogDatePicker';

const FormContainerDiv = styled.div`
    border-radius: 5px;
    background-color: #f2f2f2;
    padding: 20px;

`;

const FormSingleInputDiv = styled.div`
    width: 100%;
`;

const FormInput = styled.input.attrs(({ size }) => ({
  type: "text",
  margin: size || "1em",
  padding: size || "1em"
}))`
    color: #2196F3;
    font-size: 1em;
    border: 2px solid #2196F3;
    border-radius: 3px;
    margin: ${props => props.margin};
    padding: ${props => props.padding};

`;

const FormLabel = styled.label`
    font-size: 1em;
`;

const FormCheckbox = styled.input.attrs(({ size }) => ({
  type: "checkbox",
  margin: size || "1em",
  padding: size || "1em"
}))`
    color: #2196F3;
    font-size: 1em;
    border: 2px solid #2196F3;
    border-radius: 3px;
    margin: ${props => props.margin};
    padding: ${props => props.padding};
`;

const DatePickerDiv = styled.div`
  padding-left: 1%;
`;

const AddBlogForm = ({ titleText, descriptionText, authorText, isFavoriteText, titleValue, titleOnChange, descriptionValue, descriptionOnChange,
  authorValue, authorOnChange, isFavoritesValue, isFavoritesChange, datePickerValue, datePickerOnChange }) => (
    <FormContainerDiv>
      <FormSingleInputDiv>
        <FormInput
          value={titleValue}
          onChange={titleOnChange}
          placeholder={titleText}
        />
      </FormSingleInputDiv>
      <DatePickerDiv>
        <AddBlogDatePicker
          value={datePickerValue}
          onChange={datePickerOnChange}
        />
      </DatePickerDiv>
      <FormSingleInputDiv>
        <FormInput
          value={descriptionValue}
          onChange={descriptionOnChange}
          placeholder={descriptionText}
        />
      </FormSingleInputDiv>
      <FormSingleInputDiv>
        <FormInput
          value={authorValue}
          onChange={authorOnChange}
          placeholder={authorText}
        />
      </FormSingleInputDiv>
        <FormCheckbox
          value={isFavoritesValue}
          onChange={isFavoritesChange}
        />
      <FormLabel>{isFavoriteText}</FormLabel>
    </FormContainerDiv>
  )
export default AddBlogForm;
