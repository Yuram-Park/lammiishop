import '../css/PostDetail.css';
import {useEffect, useState} from 'react';
import axios from 'axios';
import {useParams} from 'react-router-dom';
import moment from 'moment';
import { useNavigate } from "react-router-dom";

function PostDetail() {
	
	const navigate = useNavigate();
	const {post_id} = useParams();
	
	const [post, setPost] = useState();
	const [postDto, setPostDto] = useState({
		postTitle: "",
		postContent: ""
	});
	
	useEffect(()=>{
		const getTest = async () => {
			const resp = await axios.get(process.env.REACT_APP_DB_HOST + `/post/detail/${post_id}`);
			setPost(resp.data);
		}
		getTest();
		
	}, [])
	
	const inputText = (event) => {
		const {name, value} = event.target;
		setPostDto({...postDto, [name]:value});
	}
	
	const sendPost = async(event) => {
		await axios.patch(process.env.REACT_APP_DB_HOST + "/post/update/"+post_id, postDto);
		alert("수정되었습니다.");
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
							<input type="text" name="postTitle" onChange={inputText} defaultValue={post && post.postTitle}/>
						</div>
						<div class="board_info">
							<ul>
								<li>{post && post.userId}</li>
								<li>views</li>
								<li>{moment(post && post.createdDate).format("YYYY-MM-DD")}</li>
							</ul>
						</div>
						<div class="board_content">
							<textarea name="postContent" onChange={inputText} defaultValue={post && post.postContent}></textarea>
						</div>
					</div>
					<div class="board_buttons">
						<a href="/post/list"><button>글목록</button></a>
						<button onClick={sendPost}>수정하기</button>
					</div>
				</div>
			</section>
		</div>	
	);
};

export default PostDetail;