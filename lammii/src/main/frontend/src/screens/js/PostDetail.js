import '../css/PostDetail.css';

function PostDetail() {
	
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
							<h3>글 제목입니다.</h3>
						</div>
						<div class="board_info">
							<ul>
								<li>글쓴이</li>
								<li>views</li>
								<li>2024-01-01</li>
							</ul>
						</div>
						<div class="board_content">
							<p>글 내용입니다.</p>
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