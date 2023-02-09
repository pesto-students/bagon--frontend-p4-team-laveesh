import React from "react";
import styled from "styled-components";
import AdminImage from "../../assets/images/Hero-section-bg.webp";
import Input from "../Signup/Input";
import Button from "@mui/material/Button";
import { Label } from "@mui/icons-material";
import { ButtonUnstyled } from "@mui/base";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #f4f4f4;
`;
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Form = styled.form`
  width: 100%;
  margin: 200px;
  h1,
  p {
    margin-left: 0.5rem;
    margin-bottom: 2rem;
  }
  button {
    width: 50%;
    height: 40px;
    border: none;
    margin-bottom: 2rem;
    background-color: #9f6666;
    border-radius: 0.5rem;
  }
`;

function adminFormPlaces() {
  const [placeName,setplaceName]=useState("");
  const [description,setdescription]=useState("");
  const [bestTime,setbestTime]=useState("");

 function saveData()
 {
   let data={placeName,description,bestTime}
 // console.warn(data);
 fetch("http://localhost:3001/", {
  method: "POST",
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
  body:JSON.stringify(data)
}).then((resp)=>{
  // console.warn("resp",resp);;
  resp.json().then((result)=>{
    console.warn("result",result)
  })
})
 }
  return (
    <Container>
      <Wrapper>
        <Form>
          <h1>Admin Form</h1>
          <p>Add New Place</p>
          <Input placeholder="Place Name" value={placeName} onChange={(e)=>{setplaceName(e.target.value)}}/>
          <Input placeholder="Description" value={description} onChange={(e)=>{setdescription(e.target.value)}}/>

          <Input placeholder="Best time to visit" value={bestTime} onChange={(e)=>{setbestTime(e.target.value)}}/>
          <Input type="file" id="img" name="img" accept="image/*" />
          <button>Submit</button>
        </Form>
      </Wrapper>
    </Container>
  );
}

export default adminFormPlaces;
