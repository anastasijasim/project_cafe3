import * as Yup from "yup";

import {Form, Formik} from "formik";
import { Link, useNavigate } from "react-router-dom";

import FormikInput from "../../components/FormikInput/FormikInput";
import { LOGIN_PATH } from "../../routes/const";
import { NewUser } from '../../type/user';
import { coffeBrownColor } from "../../consts/color";
import { requiredField } from "../../consts/validations";
import { screenSize } from "../../consts/mediaQueries";
import styled from "styled-components";
import { toast } from "react-hot-toast";
import { useCreateUser } from "../../hooks/userHooks";

// import Input from '../../components/Input/Input'
// import { LOGIN_PATH } from '../../routes/const';
// import { Link } from 'react-router-dom';

// import React from 'react'
// import { coffeBrownColor } from '../../consts/color';
// import styled from 'styled-components';






const initialValues: NewUser ={
  email:"",
  password:"",
  first_name: "",
  last_name:"",
};

const validationSchema: Yup.ObjectSchema<NewUser> = Yup.object().shape({
  email:Yup.string().email("Invalid email").required(requiredField),
  password: Yup.string().required(requiredField),
  confirmPassword:Yup.string()
    .required(requiredField)
    .oneOf([Yup.ref("password")], "Your passwords do not match"),
  first_name:Yup.string().required(requiredField),
  last_name:Yup.string().required(requiredField),
});

const Register = () => {
  const navigate = useNavigate();

  const {mutateAsync: createUser} = useCreateUser();

  const handleSubmit = (values: NewUser) =>{
    toast("Registration successfull!");
    createUser(values)
      .then(()=>{
        navigate(LOGIN_PATH);
        toast.success("Register successfully");
      })
      .catch(()=>{
        console.error ("Failed to post the ad");
      });
};
  return (
     <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        {({isSubmitting})=>(
          <StyledFormContainer>
            <Title>Register</Title>
          <StyledForm>
            <InputRow>
              <InputRowItem>
                <FormikInput
                  type="text"
                  name="first_name"
                  placeholder="First name"
                />
              </InputRowItem>
              <InputRowItem>
                <FormikInput
                  type="text"
                  name="last_name"
                  placeholder="Last name"
                />
              </InputRowItem>
            </InputRow>
            <InputRow>
              <InputRowItem>
                <FormikInput
                  type="email"
                  name="email"
                  placeholder="Email"
                />
              </InputRowItem>
            </InputRow>
            <InputRow>
              <InputRowItem>
                <FormikInput
                  type="password"
                  name="password"
                  placeholder="Password"
                />
              </InputRowItem>
              <InputRowItem>
                <FormikInput
                  type="password"
                  name="confirmPassword"
                  placeholder="Repeat password"
                />
              </InputRowItem>
            </InputRow>
            <ButtonInput
              type="submit"
              disabled={isSubmitting}
              >
                Register
            </ButtonInput>
            <StyledLink to={LOGIN_PATH}>Sign In</StyledLink>
          </StyledForm>
        </StyledFormContainer>
        )}
     </Formik> 
  )
}

export default Register



const StyledFormContainer = styled.div`
  /* max-height: 500px;
  overflow-y: auto; */
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Title = styled.p`
  display: flex;
  justify-content: center;
  font-size: 24px;
`

const StyledForm = styled(Form)`
  max-width: ${screenSize.mobile};
  margin: 20px auto;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const InputRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const InputRowItem = styled.div`
  display: flex;
  justify-content: center;
`;

const ButtonInput = styled.button`
  font-size: 15px;
    padding: 0.6em 1.3em;
    border: 2px solid #a87d68;
    color: white;
    background-color: ${coffeBrownColor};
    border-radius: 3px;
    margin-top: 20px;
    &:hover{
      cursor: pointer;
    }
`

const StyledLink = styled(Link)`
  text-align: center;
  margin-top: 6px;
  font-size: 18px;
  text-decoration: none;

`;


// const Container = styled.div`
//     display: flex;
//     justify-content: center;
//     flex-direction: column;
//     align-items: center;
// `

// const Title = styled.p`
//     display: flex;
//     text-align: center;
//     font-size: 25px;
// `
// const InputForm = styled.div`
//     margin-top:20px;
//     display: flex;
//     flex-direction: column;
// `

// const PrimaryButton = styled(Link)`
//      margin-top: 30px;
//     font-size: 15px;
//     padding: 8px 120px;
//     border: 2px solid #a87d68;
//     color: white;
//     background-color: ${coffeBrownColor};
//     border-radius: 3px;
//     text-decoration: none;
//     &:hover{
//       cursor: pointer;
//     }
// `




// <Container>
    //     <Title>Registration</Title>
    //     <InputForm>
    //     <label>Name</label>
    //         <Input/>
    //         <label>LastName</label>
    //         <Input/>
    //         <label>Email</label>
    //         <Input/>
    //         <label>Password</label>
    //         <Input/>
    //         <Input/>
    //         <PrimaryButton to={LOGIN_PATH}>Sign In</PrimaryButton>
    //     </InputForm>
    // </Container>