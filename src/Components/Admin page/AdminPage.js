import React from 'react';
import { Button} from '../../GlobalStyles';
import { AuthForm, FormContainer, Input, Label } from '../Authentication/Auth.styles';
import './AdminPage.css'
const AdminPage = () => {
    return (
        <div>
            <div class="sidebar">
                <ul class="sidebar-nav">
                    <li class="sidebar-item">
                    <a href="#add-book" class="sidebar-link">Add Book</a>
                    </li>
                    <li class="sidebar-item">
                    <a href="#requested-books" class="sidebar-link">Requested Books</a>
                    </li>
                </ul>
             </div>
            
            <FormContainer w='50%'  m='160px 0px 280px 600px'>
            
           
            
                <AuthForm ml='170px' p='30px 0px 50px 0px' >
                    <Label htmlFor="name">Book Name:</Label>
                    <Input w='70%' h='40px' type="text" placeholder="Book Name" required />
                    <Label htmlFor="name">Book cover:</Label>
                    <Input w='70%' h='40px' type="file" accept="image/*" required />
                    <Label htmlFor="name">Book Pdf:</Label>
                    <Input w='70%' h='40px' type="file" accept=".pdf" required />
                    <Label htmlFor="name">Author Name:</Label>
                    <Input w='70%' h='40px' type="text" placeholder="Author Name" required />
                    <Button w='70%' mt='25px'>Add</Button>
                </AuthForm>
            
            </FormContainer>
        </div>
    );
};

export default AdminPage;