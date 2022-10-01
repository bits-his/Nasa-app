import React from "react";
import { AsyncTypeahead } from "react-bootstrap-typeahead";
import { Search } from "react-feather";
import { Input } from "reactstrap";
import "./search.css";

export default function SearchBar(props) {
  const {
    placeholder = "Search",
    filterText = "",
    onFilterTextChange = (f) => f,
    _ref = null,
  } = props;

  const handleFilterTextChange = (e) => {
    onFilterTextChange(e.target.value);
  };

  return (
    <div className="form-group has-search ">
      <span className="form-control-feedback">
        <Search />
      </span>
      <AsyncTypeahead
    //   filterBy={filterBy}
      id="async-example"
    //   isLoading={isLoading}
      labelKey="drug_name"
      minLength={3}
    //   onSearch={handleSearch}
    //   options={results}
      placeholder="Search for Space......."
      className="form-control-alternative "
    //   inputProps={{
    //     // className: "searchtext",
    //     style: {
    //       border: "0px",
    //       outline: "0px",
    //       fontSize: "16px",
    //       boxShadow: "none",
    //       // paddingTop: -30,
    //     },
    //   }}
    //   renderMenuItemChildren={(option: Item) => (
    //     <>
         
    //       {/* <span onClick={()=>navigate(`/search?store=${option.drug_name}`)}>{option.drug_name}</span> */}
    //     </>
    //   )}
    />
      {/* <Input
        innerRef={_ref}
        className="form-control-alternative border border-primary"
        name="filterText"
        value={filterText}
        onChange={handleFilterTextChange}
        type="text"
        placeholder={placeholder}
        {...props}
      /> */}
    </div>
  );
}