import '../css/PostList.css';

function PostList() {
	
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
						<tr>
							<td class="center">1</td>
							<td class="left"><a href="/post/detail">게시글 1 입니다.</a></td>
							<td class="center">김준석</td>
							<td class="center">2022-05-18</td>
							<td class="center">15</td>
						</tr>
						<tr>
							<td class="center">2</td>
							<td class="left">게시글 2 입니다.</td>
							<td class="center">김준석</td>
							<td class="center">2022-05-18</td>
							<td class="center">15</td>
						</tr>
						<tr>
							<td class="center">3</td>
							<td class="left">게시글 3 입니다.</td>
							<td class="center">김준석</td>
							<td class="center">2022-05-18</td>
							<td class="center">15</td>
						</tr>
					</table>
					<br />

					<div class="center" >
						<a href="https://www.naver.com/">◀ 이전</a>
						<a href="https://www.naver.com/">1</a>
						<a href="https://www.naver.com/">다음 ▶</a>
					</div>

					<span class="right">
						<input type="button" value="목록" class="greylist" />
						<input type="button" value="글쓰기" class="gradient" />
					</span>
				</div>
			</section>
		</div >
	);
};

export default PostList;