import '../css/Login.css';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

function Login() {
	
	const navigate = useNavigate();
	const [login, setLogin] = useState({});
	
	const inputText = (event) => {
		const {name, value} = event.target;
		setLogin({...login, [name]:value});
	}
	
	const goLogin = async() => {
		const resp = await axios.post(process.env.REACT_APP_DB_HOST + "/user/login", login);
		if (resp.data == "NoID"){
			alert("아이디가 없는 계정입니다.");
		} else if (resp.data == "WorongPw") {
			alert("비밀번호가 틀립니다.")
		} else {
			alert("로그인되었습니다.");
			localStorage.setItem("jwt", resp.data);
			navigate("/");
		}
	}
	return (
		<div className='login-containner'>
			<div class="login-wrapper">
				<h2>Login</h2>
				<div id="login-form">
					<input type="text" name="userId" placeholder="ID" onChange={inputText}/>
					<input type="password" name="userPw" placeholder="Password" onChange={inputText}/>
					<label for="remember-check">
						<input type="checkbox" id="remember-check" /> 아이디 저장하기
					</label><br/>
					<button onClick={goLogin}>Login</button>
				</div>
			</div>
		</div>
	);
};

export default Login;