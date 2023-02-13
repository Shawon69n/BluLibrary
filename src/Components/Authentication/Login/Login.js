import React from 'react';
import { Button, Title } from '../../../GlobalStyles';
import { AuthContainer, AuthContents, AuthForm,  FormContainer, Input, Label } from '../Auth.styles';
import './Login.css'
const Login = () => {
    return (
        <AuthContainer>
            <div><img className='login-img' src="https://img.freepik.com/free-vector/library-concept-illustration_114360-2788.jpg?w=740&t=st=1674729143~exp=1674729743~hmac=faff8ca7d4dcc7c2e861c4b2c79ee2b8bb180a7bb2c62a257373f085ee94e729" alt="" /></div>

            <FormContainer w='430px' h='450px'  m='0px 0px 0px 100px'  >
           
                <AuthForm className='outer-div' action="">
                 <AuthContents mt='30px' ml='40px'>
                 <Title align='center' fontSize='larger'>Login</Title>
                            
                           <div className='contents'>
                            <Label for="email">Email</Label>
                            <Input w='100%' h='40px' type="text" placeholder="Email " id="email"></Input>
                            <Label for="password">Password</Label>
                            <Input w='100%' h='40px' type="password" placeholder="Password " id="password"></Input>
                            <p className='lgn-now'>don't have an account? <a href="/signup">sign up now</a></p>
                            <Button mt='20px' w='100%'>Login</Button>
                           </div>
                 </AuthContents>
                </AuthForm>
            </FormContainer> 
        </AuthContainer>
    );
};

export default Login;