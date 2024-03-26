import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// 네비게이션 바
import Navbar from './components/js/Navbar';

// 메인 페이지
import Main from './screens/js/Main';

// 페이지
import Login from './screens/js/Login';
import ProductList from './screens/js/ProductList';
import PostList from './screens/js/PostList';
import PostDetail from './screens/js/PostDetail';
import PostPost from './screens/js/PostPost';

function App() {

  return (
    <Router>
    	{/* Responsive navbar */}
		<Navbar />
		
    	<Routes>
    		<Route path='/' element={<Main />}></Route>
    		<Route path='/login' element={<Login />}></Route>
    		<Route path='/product/list' element={<ProductList/>}></Route>
    		<Route path='/post/list' element={<PostList/>}></Route>
    		<Route path='/post/detail/:post_id' element={<PostDetail/>}></Route>
    		<Route path='/post/post' element={<PostPost/>}></Route>
    	</Routes>
    </Router>
  );
}

export default App;
