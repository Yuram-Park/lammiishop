import '../css/ProductDetail.css';
import ProductHeader from '../../components/js/ProductHeader';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Carousel } from 'react-bootstrap';
import SmallCart from '../../components/js/SmallCart';
import Dropdown from '../../components/js/Dropdown';

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
	
	/*Dropdown*/
	const [selectedOption, setSelectedOption] = useState([]);
	
	const sendOption = (option) => {
		const updatedArr = [...selectedOption, option];
		setSelectedOption(updatedArr);
	}

	const [isDropdownView, setDropdownView] = useState(false)

	const handleClickContainer = () => {
		setDropdownView(!isDropdownView)
	}

	const handleBlurContainer = () => {
		setTimeout(() => {
			setDropdownView(false)
		}, 200);
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
						<div class="dropdown">
							<label className="dropbtn" onClick={handleClickContainer}>
								<p>Select option</p>
								<p>{isDropdownView ? '▲' : '▼'}</p>
							</label>
							{isDropdownView && <Dropdown productOption={productOption} sendOption={sendOption}/>}
						</div>
						<SmallCart productOption={productOption} selectedOption={selectedOption}/>
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