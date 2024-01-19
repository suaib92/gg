// import { useState } from "react";
// import { useForm } from "react-hook-form";
// import Header from "./com/Header";


// export function App() {
//   const { register, handleSubmit } = useForm();
//   const [data, setData] = useState("");

//   return (
//     <form onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))}>
//       <Header />
//       <input {...register("firstName")} placeholder="First name" />
//       <select {...register("category", { required: true })}>
//         <option value="">Select...</option>
//         <option value="A">Option A</option>
//         <option value="B">Option B</option>
//       </select>
//       <textarea {...register("aboutYou")} placeholder="About you" />
//       <p>{data}</p>
//       <input type="submit" />
//     </form>
//   );
// }
import React, { useState } from 'react';
import { Button, Input, Select, MenuItem, FormControl,InputLabel } from '@mui/material';
import { styled } from '@mui/system';

const FormContainer = styled('form')({
  display: 'flex',
  flexDirection: 'column',
  maxWidth: '400px',
  margin: 'auto',
});

const InputContainer = styled('div')({
  marginBottom: '16px',
});

const SubmittedDataContainer = styled('div')({
  marginTop: '32px',
});

function PersonalDetails() {
  const [name, setName] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [age, setAge] = useState('');
  const [sex, setSex] = useState('');
  const [mobile, setMobile] = useState('');
  const [govtIdType, setGovtIdType] = useState('');
  const [govtId, setGovtId] = useState('');
  const [submittedData, setSubmittedData] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = {
      name,
      dateOfBirth,
      age,
      sex,
      mobile,
      govtIdType,
      govtId,
    };
    setSubmittedData(formData);
  };

  return (
    <div>
      <FormContainer onSubmit={handleSubmit}>
        <h2>Personal Details</h2>

        <InputContainer>
          <InputLabel htmlFor="name">Name:</InputLabel>
          <Input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </InputContainer>

        <InputContainer>
          <InputLabel htmlFor="dateOfBirth">Date of Birth:</InputLabel>
          <Input
            type="date"
            id="dateOfBirth"
            value={dateOfBirth}
            onChange={(e) => setDateOfBirth(e.target.value)}
          />
          <InputLabel htmlFor="age">Age:</InputLabel>
          <Input
            type="number"
            id="age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </InputContainer>

        <InputContainer>
          <InputLabel htmlFor="sex">Sex:</InputLabel>
          <Select id="sex" value={sex} onChange={(e) => setSex(e.target.value)}>
            <MenuItem value="">Select</MenuItem>
            <MenuItem value="male">Male</MenuItem>
            <MenuItem value="female">Female</MenuItem>
            <MenuItem value="other">Other</MenuItem>
          </Select>
        </InputContainer>

        <InputContainer>
          <InputLabel htmlFor="mobile">Mobile:</InputLabel>
          <Input
            type="tel"
            id="mobile"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
          />
        </InputContainer>

        <InputContainer>
          <InputLabel htmlFor="govtIdType">Govt Issued ID Type:</InputLabel>
          <Select id="govtIdType" value={govtIdType} onChange={(e) => setGovtIdType(e.target.value)}>
            <MenuItem value="">Select ID Type</MenuItem>
            <MenuItem value="passport">Passport</MenuItem>
            <MenuItem value="driverLicense">Driver's License</MenuItem>
            {/* Add more options as needed */}
          </Select>
          <InputLabel htmlFor="govtId">Govt Issued ID:</InputLabel>
          <Input
            type="text"
            id="govtId"
            value={govtId}
            onChange={(e) => setGovtId(e.target.value)}
          />
        </InputContainer>

        <Button type="submit" variant="contained" color="primary">
          Submit
        </Button>
      </FormContainer>

      {submittedData && (
        <SubmittedDataContainer>
          <h2>Submitted Data (JSON):</h2>
          <pre>{JSON.stringify(submittedData, null, 2)}</pre>
        </SubmittedDataContainer>
      )}
    </div>
  );
}

export default PersonalDetails;
