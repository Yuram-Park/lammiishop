import '../css/ProductDetail.css';
import ProductHeader from '../../components/js/ProductHeader';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function ProductDetail() {
	
	let {productId} = useParams();
	
	const [productDetail, setProductDetail] = useState({});
	
	useEffect(()=>{
		const getProductDetail = async() => {
			const resp = await axios.get(process.env.REACT_APP_DB_HOST + `/product/detail/${productId}`);
			setProductDetail(resp.data);
		}
		getProductDetail();
	}, []);
	
	return (
		<div>
			<ProductHeader ></ProductHeader>
			<div class="container">
				<div class="representative">
					<div class="img">
						<img src="" alt='' />
					</div>
					<div class="detail">
						<h1>{productDetail.productName}</h1>
						<h5>{productDetail.productCategoryDetail}</h5>
						<h6>{productDetail.productPrice}원</h6>
						<div class="color-check">
							COLOUR<br/>
							<input type="radio" class="color" id="black"/><label for="black">Black</label>
							<input type="radio" class="color" id="white"/><label for="white">White</label>
						</div>
						<div class="size-check">
							COLOUR<br/>
							<input type="radio" class="size" id="xs"/><label for="xs">XS</label>
							<input type="radio" class="size" id="s"/><label for="s">S</label>
						</div>
						<button><i class="fas fa-check"></i>ADD CART</button>
					</div>
				</div>
				<div class="detailed">
				</div>
			</div>
		</div>
	);
};

export default ProductDetail;