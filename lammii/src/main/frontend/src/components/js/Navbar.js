import '../css/Navbar.css'

function Navbar() {
	return (
		<div class="big_cantainer">
			<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
				<div class="container px-lg-5">
					<a class="navbar-brand" href="/">LAMMII</a>
					<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
					<div class="collapse navbar-collapse" id="navbarSupportedContent">
						<ul id="list" class="navbar-nav ms-auto mb-2 mb-lg-0">
							<li class="nav-item-shop"><a class="nav-link active" aria-current="page" href="/product/list/ALL/all">Shop</a></li>
							<li class="nav-item"><a class="nav-link" href="/post/list">Communication</a></li>
							<li class="nav-item"><a class="nav-link" href="/join">Join</a></li>
							<li class="nav-item"><a class="nav-link" href="/login">Login</a></li>
						</ul>
					</div>
				</div>
			</nav>
		</div>
	);
}

export default Navbar;