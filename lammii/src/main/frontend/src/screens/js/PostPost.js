import '../css/PostDetail.css';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

function PostPost () {
	
	const [postDto, setPostDto] = useState({
		postTitle: "",
		postContent: ""
	});
	const navigate = useNavigate();
	
	const inputText = (event) => {
		const {name, value} = event.target;
		setPostDto({...postDto, [name]:value});
	}
	
	const sendPost = async(event) => {
		await axios.put(process.env.REACT_APP_DB_HOST + "/post/post", postDto);
		alert("등록되었습니다.");
		navigate("/post/list");
	}
	
	return (
		<div>
			<section class="serv_list">
				<div class="container">
					<div class="title">
						<h1>COMMUNICATION</h1>
						<hr class="hr1" noshade />
					</div>
					<div class="board_text">
						<div class="title">
							<input type="text" name="postTitle" onChange={inputText}/>
						</div>
						<div class="board_info">
							<ul>
								<li>글쓴이</li>
								<li>views</li>
								<li>2024-01-01</li>
							</ul>
						</div>
						<div class="board_content">
							<textarea name="postContent" onChange={inputText}></textarea>
						</div>
					</div>
					<div class="board_buttons">
						<a href="/post/list"><button>글목록</button></a>
						<button onClick={sendPost}>등록하기</button>
					</div>
				</div>
			</section>
		</div>	
	);
};

export default PostPost;