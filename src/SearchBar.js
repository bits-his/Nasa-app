import React, { useState } from "react";
import { Search } from "react-feather";
import { Button, Input, InputGroup } from "reactstrap";
import "./search.css";

export default function SearchBar({ results = [], setResults }) {
  const [isLoading, setIsLoading] = useState(false);
  //   const [results,setResults]=useState([])
  const [form, setForm] = useState({
    search: "",
  });

  // const upVote = () => {
  //   const arr = [];
  // };
  // const downVote = () => {};
  const handleChange = ({ target: { name, value } }) => {
    setForm((p) => ({ ...p, [name]: value }));
  };
  const handleSubmit = () => {
    setIsLoading(true);
    console.log(form);
    fetch(
      `http://nasa-space-gateway.herokuapp.com/api/search/resources/${form.search}`,
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
        setResults(arr);
      });
  };
  return (
    <div>
      <InputGroup>
        <Button style={{ backgroundColor: "white" }}>
          <Search color="grey" />
        </Button>
        <Input
          placeholder="Sear For Space..."
          name="search"
          value={form.search}
          onChange={handleChange}
        />
        <Button isLoading={isLoading} color="primary" onClick={handleSubmit}>
          Search
        </Button>
      </InputGroup>
    </div>
  );
}
