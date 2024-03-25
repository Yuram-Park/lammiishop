import '../css/PostDetail.css';
import {useEffect, useState} from 'react';
import axios from 'axios';

function PostDetail() {
	
	const [testList, setTestList] = useState();
	
	useEffect(()=>{
		const getTest = async () => {
			const resp = await axios.get(process.env.REACT_APP_DB_HOST + "/test/1");
			setTestList(resp.data);
			console.log(resp.data);
		}
		getTest();
		
	}, [])
	
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
							<h3>id 번호입니다. : {testList.testId}</h3>
						</div>
						<div class="board_info">
							<ul>
								<li>글쓴이</li>
								<li>views</li>
								<li>2024-01-01</li>
							</ul>
						</div>
						<div class="board_content">
							<p>이름입니다. : {testList.testName}
								<ul>
									
								</ul>
							</p>
						</div>
					</div>
					<div class="board_buttons">
						<a href="/post/list"><button>글목록</button></a>
						<button>수정</button>
						<button>삭제</button>
					</div>
				</div>
			</section>
		</div>	
	);
};

export default PostDetail;