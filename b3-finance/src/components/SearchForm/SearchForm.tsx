import { Formik, Field, ErrorMessage } from "formik";
import { MagnifyingGlass } from "phosphor-react";
import { SearchFormContainer } from "./styles";

interface SearchFormValues {
  searchInput: string;
}

export function SearchForm() {
  function handleSearchTransactions(values: SearchFormValues) {
    console.log(values.searchInput);
  }

  function validate(values: SearchFormValues) {
    const errors: Partial<SearchFormValues> = {};
    if (!values.searchInput) {
      errors.searchInput = "Search input is required";
    }
    return errors;
  }

  return (
    <Formik
      initialValues={{ searchInput: "" }}
      onSubmit={handleSearchTransactions}
      validate={validate}
    >
      {({ handleSubmit }) => (
        <SearchFormContainer onSubmit={handleSubmit}>
          <Field
            type="text"
            name="searchInput"
            placeholder="Search for transactions"
          />
          <ErrorMessage name="searchInput" component="div" />
          <button type="submit">
            <MagnifyingGlass size={20} />
            Search
          </button>
        </SearchFormContainer>
      )}
    </Formik>
  );
}
