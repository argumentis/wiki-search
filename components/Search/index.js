import React, { useEffect, useCallback } from "react";
import _ from "lodash";
// material ui
import Autocomplete from "@material-ui/lab/Autocomplete";
// components
import SearchInput from "./SearchInput";

const superagent = require("superagent"); // i don`t search IMPORT

export default function Search({ state, setState }) {
  const { active, options, loading } = state;

  // for clear options array when you search field non active
  useEffect(() => {
    if (!active) setState({ ...state, options: [] });
  }, [active]);

  const setActiveSearchField = () => {
    setState({ ...state, active: !active });
  };

  // for make request on wiki API
  const sendApiRequest = (value) => {
    if (value === "") {
      return setState({ ...state, options: [] });
    }
    setState({ ...state, loading: true });
    superagent
      .get(
        `https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=10&srsearch=${value}`
      )
      .then((res) => {
        setState({
          ...state,
          loading: false,
          options: res.body.query.search,
          value: value,
        });
      })
      .catch((error) => {
        alert(error);
      });
  };

  // debounce wrapper for request function
  const debouncedSave = useCallback(
    _.debounce((newValue) => sendApiRequest(newValue), 500),
    []
  );

  const onChange = (value) => {
    debouncedSave(value);
  };

  return (
    <Autocomplete
      freeSolo
      open={!active}
      onOpen={setActiveSearchField}
      onClose={setActiveSearchField}
      loading={loading}
      options={options}
      getOptionLabel={(option) => option.title}
      onInputChange={(e, newInputValue) => {
        onChange(newInputValue);
      }}
      renderInput={(params) => (
        <SearchInput params={params} loading={loading} />
      )}
    />
  );
}
