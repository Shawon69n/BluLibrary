import React from 'react';
import { Button, Title } from '../../../GlobalStyles';
import { AuthContents, AuthForm, FormContainer, Input, Label } from '../Auth.styles';

const Signup = () => {
    return (
        <FormContainer w='500px' h='600px' m='0px 0px 228px 700px' >
        <AuthForm h='100%' mt='150px' action="">
         <AuthContents mt='30px' ml='50px'>
                
                    <Title align='center' fontSize='larger'>Signup</Title>
                    <Label  for="email">Email</Label>
                    <Input w='100%' h='40px' type="text" placeholder="Email " id="email"></Input>
                    <Label  for="password">Password</Label>
                    <Input w='100%' h='40px' type="password" placeholder="Password " id="password"></Input>
                    <Label  for="birth">Date of birth</Label>
                    <Input w='100%' h='40px' type="date" placeholder="Date of birth " id="birth"></Input>
                    <Label  for="gender">Gender</Label>
                    <Input w='100%' h='40px' type="text" placeholder="Gender" id="gender"></Input>
                    <p className='lgn-now'>already have an account? <a href="/login">Login now</a></p>
                    <Button mt='20px' w='100%'>Signup</Button>
         </AuthContents>
        </AuthForm>
    </FormContainer>  
    );
};

export default Signup;