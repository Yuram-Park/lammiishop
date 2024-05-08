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
	
	/* Dropdown select option */
	const [selectedOption, setSelectedOption] = useState([]);
	
	const sendOption = (id) => {
		productOption.map((one) => {
		if(one.productOptionId === id){
			setSelectedOption([...selectedOption, one]);
		}})
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
	
	/* Cart Price */
	
	const [totalPrice, setTotalPrice] = useState(0);
	const [eachPrice, setEachPrice] = useState([{id: 0, quantity: 0, price: 0}]);
	const [totalCount, setTotalCount] = useState(0);
	
	const deleteId = (id) => {
		const newArr = selectedOption.filter((one) => one.productOptionId !== id);
		setSelectedOption(newArr);
		
		const newPriceArr = eachPrice.filter((one) => one.id !== id);
		setEachPrice(newPriceArr);
	}
	
	const setPrice = (newPrice) => {
		const arr = eachPrice.filter((one) => one.id === newPrice.id);
		if(arr.length === 0){
			setEachPrice([...eachPrice, newPrice]);
		} else {
			const newArr = eachPrice.map((one) => one.id === newPrice.id ? {...one, quantity: newPrice.quantity, price: newPrice.price} : one)
			setEachPrice(newArr);
		}
	}
	
	useEffect(()=> {
		let sum = 0;
		eachPrice.map((one) => sum = sum + one.price);
		setTotalPrice(sum);
		
		let count = 0;
		eachPrice.map((one) => count = count + one.quantity);
		setTotalCount(count);
	},[eachPrice]);
	
	console.log(selectedOption)
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
						<div className="cart">
						{selectedOption.map((option) =>
							<SmallCart productName={productDetail.productName} productPrice={productDetail.productPrice} option={option} deleteId={deleteId} setPrice={setPrice}/>
						)}
						</div>
						<div className="totalPrice">
							<h5>Total : {totalPrice} 원 ({totalCount} 개)</h5>
						</div>
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