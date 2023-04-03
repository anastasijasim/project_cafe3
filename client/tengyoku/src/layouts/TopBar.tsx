import { HOME_PATH, LOGIN_PATH, REGISTER_PATH } from '../routes/const'
import { Link, useNavigate } from 'react-router-dom'
import { useContext, useEffect } from 'react'

import { UserContext } from '../contexts/UserContexts'
import { coffeBrownColor } from '../consts/color'
import styled from 'styled-components'
import toast from 'react-hot-toast'

// import React, { useContext } from 'react'

// import { UserContext } from '../contexts/UserContexts'


// import toast from "react-hot-toast"

// import OutlinedButton from '../components/Button/OutlinedButton'




// import PrimaryButton from '../components/Button/PrimaryButton'



// type Props = {
//   someProp:string;
// }



const TopBar = () => {
  const { isLoggedIn, handleLogOut } = useContext(UserContext);
  const navigate = useNavigate();
  
  const handleClickSign = () => {
    if (isLoggedIn) {
      handleLogOut();
      toast.success("Successfully logged out!");
      navigate(LOGIN_PATH);
    } else {
    }
  };
  
  useEffect(() => {
    if (isLoggedIn) {
      navigate(HOME_PATH);
    }
  }, [isLoggedIn, navigate]);
  
  return (
    <Container>
      <Logo to={HOME_PATH}>TENGYOKU</Logo>
      <ButtonForm>
        <SignContainer onClick={handleClickSign}>
          {isLoggedIn ? (
            <SignOutButton>Sign Out</SignOutButton>
          ) : (
              <div>
                <PrimaryButton to={LOGIN_PATH}>Log In</PrimaryButton>
                <OutlinedButton to={REGISTER_PATH}>Sign Up</OutlinedButton>
              </div>
          )}
        </SignContainer>
      </ButtonForm>
    </Container>
  );
};

export default TopBar

const Container = styled.div`
  /* width: 100%; */
  /* height: 100%; */
  padding-left: 24px;
  background-color: #ffffffa4;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: rgba(191, 196, 198, 0.2) 0px 6px 15px;
  padding: 15px 20px;
`

const Logo = styled(Link)`
  font-size: 18px;
  text-decoration: none;
  color:black;
`

const ButtonForm = styled.div`
  /* padding-right: 24px; */
  display: flex;
`

// const PrimaryButtonStyled = styled.div`
//   padding-right: 16px;
// `

const PrimaryButton = styled(Link)`
    font-size: 15px;
    text-decoration: none;
    text-align: center;
    padding: 0.4em 1.3em;
    border: 2px solid #a87d68;
    color: white;
    background-color: ${coffeBrownColor};
    border-radius: 3px;
    margin-right: 15px;
    &:hover{
      cursor: pointer;
    }
`

const OutlinedButton= styled(Link)`
    text-decoration: none;
    font-size: 15px;
    padding: 0.4em 1.3em;
    border: 2px solid ${coffeBrownColor};
    color: black;
    background-color: #ffffffa4;
    border-radius: 3px;
    /* display: flex;
    text-align: center; */
    &:hover{
      cursor: pointer;
    }
`

const SignContainer = styled.div`
  display: flex;
`;

const SignOutButton = styled.button`
    text-decoration: none;
    font-size: 15px;
    padding: 0.4em 1.3em;
    border: 2px solid ${coffeBrownColor};
    color: black;
    background-color: #ffffffa4;
    border-radius: 3px;
    /* display: flex;
    text-align: center; */
    &:hover{
      cursor: pointer;
    }
`