import '../css/ProductDetail.css';
import ProductHeader from '../../components/js/ProductHeader';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function ProductDetail() {
	
	let {productId} = useParams();
	
	const [productDetail, setProductDetail] = useState({});
	const [productImg, setProductImg] = useState([]);
	const [productOption, setProductOption] = useState([]);
	
	useEffect(()=>{
		const getProductDetail = async() => {
			const resp = await axios.get(process.env.REACT_APP_DB_HOST + `/product/detail/${productId}`);
			
			setProductDetail(resp.data.detail);
			setProductImg(resp.data.img)
			setProductOption(resp.data.detail.productOption);
		}
		getProductDetail();
	}, []);
	console.log(productDetail)
	
	let colors = [];
	let sizes = [];
	
	if(productDetail){
		for(let item of productOption){
			colors.push(item.productColor);
			sizes.push(item.productSize);
		}
	}
	
	return (
		<div>
			<ProductHeader ></ProductHeader>
			<div class="container">
				<div class="representative">
					<div class="img">
						<img src={productImg && productImg[0] ? `${process.env.PUBLIC_URL}/img/${productImg[0].productImgUrl}` : ""} alt='' />
					</div>
					<div class="detail">
						<h1>{productDetail.productName}</h1>
						<h5>{productDetail.productCategoryDetail}</h5>
						<h6>{productDetail.productPrice}원</h6>
						<div class="color-check">
							COLOUR<br/>
							{colors.filter((e, idx) => colors.indexOf(e) == idx).map((color) => 
								<><input type="radio" class="color" id="black"/><label for="black">{color}</label></>
							)}
						</div>
						<div class="size-check">
							SIZE<br/>
							{sizes.filter((e, idx) => sizes.indexOf(e) == idx).map((size) => 
								<><input type="radio" class="size" id="xs"/><label for="xs">{size}</label></>
							)}
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