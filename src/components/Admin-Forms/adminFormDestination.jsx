import React from "react";
import styled from "styled-components";
import Input from "../Signup/Input";
import { Label, LabelImportant } from "@mui/icons-material";
import { ButtonUnstyled } from "@mui/base";
import { useState } from "react";
import axios from 'axios';
import { toast } from 'react-toastify';

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
  align-items: left-center;
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

function AdminFormDestination() {
  const [destination,setdestination]=useState("");
  const [description,setdescription]=useState("");
  const [imageDest,setImageDest]=useState("");

 function saveData()
 {
   let data= {destination,description,imageDest}
 // console.warn(data);
   fetch("http://localhost:3001/api/destination/destination", {
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
 

//  const CreateProduct = () => {
//   const dispatch = useDispatch();
//   const { createStatus } = useSelector((state) => state.products);

//   const [productImg, setProductImg] = useState("");
//   const [brand, setBrand] = useState("");
//   const [name, setName] = useState("");
//   const [price, setPrice] = useState("");
//   const [desc, setDesc] = useState("");

//   const handleProductImageUpload = (e) => {
//     const file = e.target.files[0];

//     TransformFileData(file);
//   };

//   const TransformFileData = (file) => {
//     const reader = new FileReader();

//     if (file) {
//       reader.readAsDataURL(file);
//       reader.onloadend = () => {
//         setProductImg(reader.result);
//       };
//     } else {
//       setProductImg("");
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     dispatch(
//       productsCreate({
//         name,
//         brand,
//         price,
//         desc,
//         image: productImg,
//       })
//     );
//   };

 //handle and convert it in base 64
 const handleImage = (e) =>{
  const file = e.target.files[0];
  setFileToBase(file);
  console.log(file);
}

const setFileToBase = (file) =>{
  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onloadend = () =>{
      setImageDest(reader.result);
  }

}
 //submit the form
 const submitForm = async (e) =>{
  e.preventDefault();
  const payload= {
    destination: destination,
    description: description,
    imageDest: imageDest
  }
  console.log(payload);
  try {
      const data = await axios.post('http://localhost:3001/api/destination/destination', payload)
      console.log(data)
      if  (data.success === true){
          setdestination('');
          setdescription('');
          setImageDest('');
          toast.success('product created successfully')
      }
      console.log(data);
  } catch (error) {
      console.log(error)
  }

}

  return (
    <Container>
      <Wrapper>
        <Form onSubmit={submitForm} >
          <h1>Admin Form </h1>
          <p>Add New Destination</p>
          <Input placeholder="Destination Name"  value={destination} onChange={(e)=>{setdestination(e.target.value)}}/>
          <Input placeholder="Description"  value={description} onChange={(e)=>{setdescription(e.target.value)}}/>
          <Label for="img" placeholder="Select image of destination:"  />
          <Input type="file" id="img" name="image" accept="image/*" alt="" onChange={handleImage} />
          <img src={imageDest} alt="Destination Image!" style={{height: '300px', width: '500px'}}/>
          <button type="submit">Submit</button>
        </Form>
        {/* <div>
          {previewSource ? (
            <>
            <img src={previewSource} alt="Destination Image! "  style={{height: '300px'}} />
            </>
           ) : (   
            <p> Image preview will appear here</p>
          )}
          </div> */}
      </Wrapper> 
    </Container>
  );
}

export default AdminFormDestination ;
