import '../css/PostList.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import moment from 'moment';

function PostList() {
	
	const [postList, setPostList] = useState([]);
	
	useEffect(()=>{
		const getPostList = async() => {
			const resp = await axios.get(process.env.REACT_APP_DB_HOST + "/post/list")
			setPostList(resp.data);
			console.log(resp.data);
		}
		getPostList();
	}, []);
	
	return (
		<div>
			<section class="serv_list">
				<div class="container">
					<div class="title">
						<h1>COMMUNICATION</h1>
						<hr class="hr1" noshade />
					</div>
					
					<form>
						<span> ▷ 총 3개의 게시물이 있습니다. </span>
						<span class="right">
							<span class="grey" id="strong">SELECT</span>
							<select>
								<option value="제목" name="제목" >제목</option>
								<option value="글쓴이" name="글쓴이" >글쓴이</option>
							</select>
							<input type="text" /> <input type="button" name="검색" class="gradient" value="검색" />
						</span>
					</form>

					<br />
					<table>
						<tr>
							<th>번호</th>
							<th>제목</th>
							<th>글쓴이</th>
							<th>일시</th>
							<th>조회수</th>
						</tr>
						{postList && postList.map((post,i)=>
						<tr>
							<td class="center">{i+1}</td>
							<td class="left"><a href={`/post/detail/${post.postId}`}>{post.postTitle}</a></td>
							<td class="center">{post.userId}</td>
							<td class="center">{moment(post.createdDate).format("YYYY-MM-DD")}</td>
							<td class="center">15</td>
						</tr>
						)}
					</table>
					<br />

					<div class="center" >
						<a href="https://www.naver.com/">◀ 이전</a>
						<a href="https://www.naver.com/">1</a>
						<a href="https://www.naver.com/">다음 ▶</a>
					</div>

					<span class="right">
						<input type="button" value="목록" class="greylist" />
						<a href="/post/post"><input type="button" value="글쓰기" class="gradient" /></a>
					</span>
				</div>
			</section>
		</div >
	);
};

export default PostList;