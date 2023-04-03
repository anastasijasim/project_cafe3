import * as Yup from "yup"

import { Form, Formik } from "formik";
import React, { useContext } from 'react'

import FormikInput from "../../components/FormikInput/FormikInput";
import { Link } from 'react-router-dom';
import { LoginUser } from '../../type/user';
import { REGISTER_PATH } from "../../routes/const";
import { UserContext } from '../../contexts/UserContexts';
import { coffeBrownColor } from '../../consts/color';
import { requiredField } from '../../consts/validations';
import { screenSize } from "../../consts/mediaQueries";
import styled from 'styled-components';
import toast from "react-hot-toast";
import { useLoginUser } from '../../hooks/userHooks';

// import { HOME_PATH, LOGIN_PATH, REGISTER_PATH } from '../../routes/const';













const validationSchema = Yup.object().shape({
    email:Yup.string().email("Invalid email").required(requiredField),
    password: Yup.string().required(requiredField),
});

const initialValues: LoginUser = {
    email: "",
    password:"",
};


const Login = () => {
    const {mutateAsync: loginUser} =useLoginUser();
    const {setUser} =useContext(UserContext);

    const handleSubmit = (values: LoginUser) =>{
        loginUser(values)
            .then ((response)=>{
                console.log (response);
                setUser(response);
                toast.success("Successfully logged in!");
            })
            .catch((error)=>{
                toast.error ("Failed to login");
            })
    }

  //   const {isLoggedIn, handleLogOut} = useContext(UserContext);
  //   const navigate = useNavigate();

  // const handleClickSign = () =>{
  //   if(isLoggedIn) {
  //     handleLogOut();
  //     navigate(HOME_PATH);
  //     toast.success("Successfully logged out!")
  //   }else{
  //     navigate(LOGIN_PATH);
  //   }
  // }


  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      {({ isSubmitting }) => (
        <StyledFormContainer>
            <Title>Log in</Title>
        <StyledForm>
          <InputRow>
            <InputRowItem>
              <FormikInput type="email" name="email" placeholder="Email" />
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
          </InputRow>
          <ButtonInput
              type="submit"
              disabled={isSubmitting}
              // onClick={handleClickSign}
              >
                Log in
            </ButtonInput>
            <StyledLink to={REGISTER_PATH}>Sign Up </StyledLink>
        </StyledForm>
        </StyledFormContainer>
      )}
      </Formik>
  )
}

export default Login

const Title = styled.p`
    display: flex;
    justify-content: center;
    font-size: 24px;
`

const StyledFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

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
//     flex-direction:column;
//     align-items: center;
    
// `

// const Title = styled.p`
//     display: flex;
//     text-align: center;
//     font-size: 25px;
// `

// const LoginFormik = styled.div`
//     margin-top:20px;
//     display: flex;
//     flex-direction: column;
// `

// const Form = styled.div`
    
// `

// const PrimaryButton = styled.button`
//     margin-top: 30px;
//     font-size: 15px;
//     padding: 8px 120px;
//     border: 2px solid #a87d68;
//     color: white;
//     background-color: ${coffeBrownColor};
//     border-radius: 3px;
//     &:hover{
//       cursor: pointer;
//     }
// `

// const SignInTitle = styled(Link)`
//     display:flex;
//     text-align: center;
//     justify-content: center;
//     margin-top: 15px;
//     text-decoration: none;
// `


// <Container>
    //     <Title>Login</Title>
    //     <Form>
    //         <LoginFormik>
    //             <label>Username</label>
    //             <Input/>
    //             <label>Password</label>
    //             <Input/>
    //         </LoginFormik>
    //         <PrimaryButton>Login</PrimaryButton>
    //         <SignInTitle to={REGISTER_PATH}>Sign In</SignInTitle>
    //     </Form>
    // </Container>
