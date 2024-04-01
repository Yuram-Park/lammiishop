import '../css/Login.css';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

function Join() {
	
	const navigate = useNavigate();
	const [join, setJoin] = useState({});
	
	const inputText = (event) => {
		const {name, value} = event.target;
		setJoin({...join, [name]:value});
	}
	
	const goJoin = async() => {
		const resp = await axios.post(process.env.REACT_APP_DB_HOST + "/user/join", join);
		if(resp.status == 200){
			alert("회원가입 되었습니다.");
			navigate("/user/login");
		} else {
			alert("중복된 아이디입니다.");
		}
	}
	
	return (
		<div className='login-containner'>
			<div class="login-wrapper">
				<h2>Join</h2>
				<div id="login-form">
					<input type="text" name="userId" placeholder="ID" onChange={inputText}/>
					<input type="password" name="userPw" placeholder="Password" onChange={inputText}/>
					<input type="password" name="userPwConfirm" placeholder="PasswordConfirm" />
					<input type="text" name="userName" placeholder="Name" onChange={inputText}/>
					<input type="test" name="userNickname" placeholder="NickName" onChange={inputText}/>
					<input type="date" name="userBirth" placeholder="Birthdate" onChange={inputText}/>
					<input type="text" name="userEmail" placeholder="Email" onChange={inputText}/>
					<button onClick={goJoin}>Join</button>
				</div>
			</div>
		</div>
	);
};

export default Join;