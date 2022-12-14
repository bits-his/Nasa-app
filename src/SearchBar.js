import React, { useCallback, useEffect, useState } from "react";
// import { Search } from "react-feather";
import { Button, Input, InputGroup, Spinner } from "reactstrap";
import "./search.css";

export default function SearchBar({ results = [], setResults }) {
  const [isLoading, setIsLoading] = useState(false);
  const [form, setForm] = useState({
    search: "EARTH CRUST",
  });

  // const upVote = () => {
  //   const arr = [];
  // };
  // const downVote = () => {};
  const handleChange = ({ target: { name, value } }) => {
    setForm((p) => ({ ...p, [name]: value }));
  };
  const handleSubmit = useCallback(() => {
    setIsLoading(true);
    console.log(form);
    fetch(
      `https://nasa-space-gateway.herokuapp.com/api/search/resources/${form.search}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((resp) => resp.json())
      .then((data) => {
        const arr = [];
        data &&
          data.forEach((item, index) => {
            arr.push({ ...item, vote: index });
          });
          setIsLoading(false)
        setResults(arr);
      });
  },[form, setResults]);
  useEffect(()=>{
    handleSubmit()
  },[handleSubmit])
  return (
    <div>
    
      <InputGroup className="search-for">
        {/* <Button style={{ backgroundColor: "white" }}>
          <Search color="grey" />
        </Button> */}
        <Input
          placeholder="search For Space..... ..."
          name="search"
          value={form.search === "EARTH CRUST" ? "":form.search}
          onChange={handleChange}
          className="search-for-space"
          style={{
            // width: "80%",
            outline: "none"
          }}
        />
        <Button isLoading={isLoading} style={{ backgroundColor: "black" }} onClick={handleSubmit}>
          Search
        </Button>
      </InputGroup>
      {isLoading && <Spinner
  className="m-5"
  color="primary"
>
  Loading...
</Spinner>}
    </div>
  );
}
