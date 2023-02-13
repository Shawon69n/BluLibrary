

import { Routes ,Route} from 'react-router-dom';
import AdminPage from './Components/Admin page/AdminPage';
import Login from './Components/Authentication/Login/Login';
import Signup from './Components/Authentication/Signup/Signup';
import Bookcard from './Components/Book page/BookCard/Bookcard';
import Footer from './Components/Footer/Footer';
import Navbar from './Components/Navbar/Navbar';
import GlobalStyles from './GlobalStyles';

function App() {
  return (
    <div>
      <GlobalStyles/>
      <Navbar></Navbar>
  
      <Routes>
        
        <Route path='/booklist' element={<Bookcard/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/adminpage' element={<AdminPage/>}/>
      </Routes>
      
      <Footer></Footer>

    </div>
  );
}

export default App;
