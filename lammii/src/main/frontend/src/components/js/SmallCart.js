import '../css/SmallCart.css';
import { useState, useEffect } from 'react';

const SmallCart = (props) => {
	
	useEffect(()=>{
		setPrice(props.productPrice);
	},[props.productPrice]);
	
	const productName = props.productName;
	const [quantity, setQuantity] = useState(1);
	const [price, setPrice] = useState(0);
	
	const onPlus = () => {
		setQuantity(quantity + 1);
		setPrice(price + props.productPrice);
	}
	
	const onMinus = () => {
		setQuantity(quantity - 1);
		setPrice(price - props.productPrice);
	}
	
	useEffect(()=>{
		props.setPrice({id: props.option.productOptionId, quantity: quantity, price: price})
	}, [price]);
	
	return(
		<div className="smallcart_item">
			<p>{productName}</p>
			<p>{props.option.productColor}</p>
			<p>{props.option.productSize}</p>
			<div className='quantity'>
				<button onClick={onPlus}>+</button>
				<input type='text' value={quantity}/>
				<button onClick={onMinus}>-</button>
			</div>
			<p>{price} 원</p>
			<p className="delete" onClick={()=>props.deleteId(props.option.productOptionId)}>X</p>
		</div>
	);
};

export default SmallCart;