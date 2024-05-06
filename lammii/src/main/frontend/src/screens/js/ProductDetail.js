import '../css/ProductDetail.css';
import ProductHeader from '../../components/js/ProductHeader';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Carousel } from 'react-bootstrap';
import SmallCart from '../../components/js/SmallCart';

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
	console.log(productOption)
	
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
					<Carousel fade slide={true} interval={null} className='main_carousel'>
					{productImg && productImg.filter((img) => img.productImgUrl.includes("main")).map(url => 
						<Carousel.Item className='main_carousel_item'>
						<img src={`${process.env.PUBLIC_URL}/img/${url.productImgUrl}`} alt='' />
						</Carousel.Item>
					)}
					</Carousel>
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
						<SmallCart productName={productDetail.productName}/>
						<button><i class="fas fa-check"></i>ADD CART</button>
					</div>
				</div>
				<div class="detailed">
				{productImg && productImg.filter((img) => img.productImgUrl.includes("detail")).map(url =>
					<img src={`${process.env.PUBLIC_URL}/img/${url.productImgUrl}`} alt='' />
				)}
				</div>
			</div>
		</div>
	);
};

export default ProductDetail;