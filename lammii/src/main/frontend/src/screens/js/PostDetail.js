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
	
	useEffect(()=>{
		const getTest = async () => {
			const resp = await axios.get(process.env.REACT_APP_DB_HOST + `/post/detail/${post_id}`);
			setPost(resp.data);
		}
		getTest();
		
	}, [])
	
	const updatePost = () => {
		navigate("/post/update/"+post_id);
	}
	
	const deletePost = async() => {
		await axios.delete(process.env.REACT_APP_DB_HOST + `/post/delete/${post_id}`);
		alert("삭제되었습니다.");
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
							<h3>{post && post.postTitle}</h3>
						</div>
						<div class="board_info">
							<ul>
								<li>{post && post.userId}</li>
								<li>views</li>
								<li>{moment(post && post.createdDate).format("YYYY-MM-DD")}</li>
							</ul>
						</div>
						<div class="board_content">
							<p>{post && post.postContent}
								<ul>
									
								</ul>
							</p>
						</div>
					</div>
					<div class="board_buttons">
						<a href="/post/list"><button>글목록</button></a>
						<button onClick={updatePost}>수정</button>
						<button onClick={deletePost}>삭제</button>
					</div>
				</div>
			</section>
		</div>	
	);
};

export default PostDetail;