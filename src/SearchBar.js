import React, { useState } from "react";
import { AsyncTypeahead } from "react-bootstrap-typeahead";
import { Search } from "react-feather";
import { Button, Input, InputGroup } from "reactstrap";
import "./search.css";

export default function SearchBar({results=[],setResults}) {


  const [isLoading,setIsLoading]=useState(false)
//   const [results,setResults]=useState([])
const [form,setForm]=useState({
    search:""
})
const handleChange = ({target:{name,value}})=>{
    setForm((p)=>({...p,[name]:value}))
    console.log(form)
}
  const handleSubmit =()=>{
    setIsLoading(true)
    console.log(form)
    fetch(`http://nasa-space-gateway.herokuapp.com/api/search/resources/${form.search}`,{
        method:"GET",
        headers:{
            "Content-Type":"application/json"
        }
    }
    ).then((resp)=>resp.json()).then((data)=>{
      setResults([data])
      console.log(data.results)
    })
   
    
   }
   const filterBy =()=>true;
  return (
    <div>

   
    <InputGroup>
      <Button style={{backgroundColor:"white"}}>
     <Search style={{backgroundColor:"black"}} />
      </Button>
      <Input placeholder="Sear For Space..."  name="search" value={form.search} onChange={handleChange}/>
      <Button color="primary" onClick={handleSubmit}>
        Search
      </Button>
    </InputGroup>
    {JSON.stringify(results)}
  </div>
  );
}