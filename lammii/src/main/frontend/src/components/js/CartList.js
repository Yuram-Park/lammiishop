import '../css/CartList.css'
import { useState , useEffect } from 'react';

const CartList = (props) => {
	
	const [quantity, setQuantity] = useState();
	const [payment, setPayment] = useState();
	
	useEffect(()=>{
		setQuantity(props.cart.cartQuantity);
	},[props.cart.cartQuantity]);
	
	const onChange = (e) => {
		setQuantity(e.target.value);
		setPayment()
	}
	
	return (
		<tr className="cart_list">
			<td class="center"><input type="checkbox" /></td>
			<td class="img"><img src={`${process.env.PUBLIC_URL}/img/${props.cart.productImgUrl}`} /></td>
			<td class="center">
				<h6>{props.cart.productName}</h6>
				<p>option : {props.cart.productOptionId}</p>
			</td>
			<td class="quantity">
				<input type="number" min={1} max={10} step={1} placeholder={quantity} onChange={onChange} name="quantity"/>
				<button>변경</button>
			</td>
			<td class="center">{props.cart.cartPayment} 원</td>
			<td class="select">
				<button>주문하기</button>
				<button>관심상품등록</button>
				<button>X 삭제</button>
			</td>
		</tr>
	);
};

export default CartList;