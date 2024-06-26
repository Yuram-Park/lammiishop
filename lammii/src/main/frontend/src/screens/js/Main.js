import '../css/Main.css';

function Main() {
	
	return (
		<div>
			{/* Header */}
			<header class="py-5">
				<div class="container px-lg-5">
					<div class="p-4 p-lg-5 bg-light rounded-3 text-center">
						<div class="m-4 m-lg-5">
							<h1 class="display-5 fw-bold">TRENDY SKIRTS</h1>
							<p class="fs-4">UP TO 50% OFF ON TOP BRANDS</p>
							<a class="btn btn-primary btn-lg" href="/product/list">PRODUCT LIST</a>
						</div>
					</div>
				</div>
			</header>
			{/* Page Content */}
			<section class="pt-4">
				<div class="container px-lg-5">
					{/* Page Features */}
					<div class="row gx-lg-5">
						<div class="col-lg-6 col-xxl-4 mb-5">
							<div class="card bg-light border-0 h-100">
								<div class="card-body text-center p-4 p-lg-5 pt-0 pt-lg-0">
									<div class="feature bg-primary bg-gradient text-white rounded-3 mb-4 mt-n4"><i class="bi bi-collection"></i></div>
									<h2 class="fs-4 fw-bold">DESIGNER BAGS</h2>
									<p class="mb-0">With Bootstrap 5, we've created a fresh new layout for this template!</p>
								</div>
							</div>
						</div>
						<div class="col-lg-6 col-xxl-4 mb-5">
							<div class="card bg-light border-0 h-100">
								<div class="card-body text-center p-4 p-lg-5 pt-0 pt-lg-0">
									<div class="feature bg-primary bg-gradient text-white rounded-3 mb-4 mt-n4"><i class="bi bi-cloud-download"></i></div>
									<h2 class="fs-4 fw-bold">BRANDED WATCH</h2>
									<p class="mb-0">As always, Start Bootstrap has a powerful collectin of free templates.</p>
								</div>
							</div>
						</div>
						<div class="col-lg-6 col-xxl-4 mb-5">
							<div class="card bg-light border-0 h-100">
								<div class="card-body text-center p-4 p-lg-5 pt-0 pt-lg-0">
									<div class="feature bg-primary bg-gradient text-white rounded-3 mb-4 mt-n4"><i class="bi bi-card-heading"></i></div>
									<h2 class="fs-4 fw-bold">CASUAL SHOES</h2>
									<p class="mb-0">The heroic part of this template is the jumbotron hero header!</p>
								</div>
							</div>
						</div>
						<div class="col-lg-6 col-xxl-4 mb-5">
							<div class="card bg-light border-0 h-100">
								<div class="card-body text-center p-4 p-lg-5 pt-0 pt-lg-0">
									<div class="feature bg-primary bg-gradient text-white rounded-3 mb-4 mt-n4"><i class="bi bi-bootstrap"></i></div>
									<h2 class="fs-4 fw-bold">Feature boxes</h2>
									<p class="mb-0">We've created some custom feature boxes using Bootstrap icons!</p>
								</div>
							</div>
						</div>
						<div class="col-lg-6 col-xxl-4 mb-5">
							<div class="card bg-light border-0 h-100">
								<div class="card-body text-center p-4 p-lg-5 pt-0 pt-lg-0">
									<div class="feature bg-primary bg-gradient text-white rounded-3 mb-4 mt-n4"><i class="bi bi-code"></i></div>
									<h2 class="fs-4 fw-bold">Simple clean code</h2>
									<p class="mb-0">We keep our dependencies up to date and squash bugs as they come!</p>
								</div>
							</div>
						</div>
						<div class="col-lg-6 col-xxl-4 mb-5">
							<div class="card bg-light border-0 h-100">
								<div class="card-body text-center p-4 p-lg-5 pt-0 pt-lg-0">
									<div class="feature bg-primary bg-gradient text-white rounded-3 mb-4 mt-n4"><i class="bi bi-patch-check"></i></div>
									<h2 class="fs-4 fw-bold">A name you trust</h2>
									<p class="mb-0">Start Bootstrap has been the leader in free Bootstrap templates since 2013!</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			{/* Footer */}
			<footer class="py-5 bg-dark">
				<div class="container"><p class="m-0 text-center text-white">Copyright &copy; Your Website 2023</p></div>
			</footer>
			{/* Bootstrap core JS */}
			<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"></script>
			{/* Core theme JS */}
			<script src="js/scripts.js"></script>
		</div>
	);
}

export default Main;