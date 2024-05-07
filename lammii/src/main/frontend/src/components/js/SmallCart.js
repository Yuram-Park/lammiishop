import '../css/SmallCart.css';
import { useState } from 'react';

const SmallCart = (props) => {
	
	const [quantity, setQuantity] = useState(1);
	const [price, setPrice] = useState(props.productPrice);
	
	const productName = props.productOption.productName;
	
	const onPlus = () => {
		setQuantity(quantity + 1);
		setPrice(price + props.productPrice);
	}
	
	const onMinus = () => {
		setQuantity(quantity - 1);
		setPrice(price - props.productPrice);
	}
	
	return(
		<div>
			<div className="smallcart">
				<div className="smallcart_item">
					<p>{productName}</p>
					<p>black</p>
					<p>s</p>
					<div className='quantity'>
						<button onClick={onPlus}>+</button>
						<input type='text' value={quantity}/>
						<button onClick={onMinus}>-</button>
					</div>
					<p>{price} 원</p>
					<p>X</p>
				</div>
			</div>
		</div>
	);
};

export default SmallCart;