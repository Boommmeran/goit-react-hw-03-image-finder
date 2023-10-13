import { Formik } from 'formik';

import {
  StyledSearchbar,
  StyledForm,
  FormBtn,
  FormBtnLabel,
  Input,
} from './Searchbar.styled';

export const Searchbar = ({ onSubmit }) => {
  return (
    <StyledSearchbar>
      <Formik
        initialValues={{ searchQuery: '' }}
        onSubmit={onSubmit}
      >
        <StyledForm>
          <FormBtn type="submit">
            <FormBtnLabel>Search</FormBtnLabel>
          </FormBtn>

          <Input
            name="searchQuery"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </StyledForm>
      </Formik>
    </StyledSearchbar>
  );
};
