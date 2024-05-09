import CartList from '../../components/js/CartList';
import '../css/Cart.css';
import { useState, useEffect } from 'react';

const Cart = () => {
	
	const [cartList, setCartList] = useState([]);
	const [totalPay, setTotalPay] = useState(0);
	const list = [{productId: 1, productOptionId: 1, cartQuantity: 1, cartPayment: 160000, productName: "룬 트위드 자켓", productImgUrl: "outer/jacket/oj00001_main1.jpeg"},
		{productId: 1, productOptionId: 2, cartQuantity: 1, cartPayment: 160000, productName: "룬 트위드 자켓", productImgUrl: "outer/jacket/oj00001_main1.jpeg"}];
	
	useEffect(() => {
		let sum = 0;
		list.map((one) => sum = sum + one.cartPayment)
		setTotalPay(sum);
	}, [cartList])
	
	const onClick = () => {
		setCartList(list);
	}
	return (
		<div>
			<section class="serv_list">
				<div class="container">
					<div class="title">
						<h1>CART</h1>
						<hr class="hr1" noshade />
					</div>
					<br />
					<table className="cart_list">
						<tr>
							<th>선택</th>
							<th>이미지</th>
							<th>상품정보</th>
							<th>수량</th>
							<th>상품구매금액</th>
							<th>선택</th>
						</tr>
						{ list.map((one) => 
							<CartList cart={one}/>
						)}
						<tr>
							<td colSpan={6} className="total_price">상품구매금액 {totalPay} 원 + 배송비 {totalPay > 500000 ? 0 : 3000} 원 = 합계 : {totalPay > 500000 ? totalPay : totalPay + 3000} 원</td>
						</tr>

					</table>
					<br />
					<div className="order_btn">
						<button className="order_all" onClick={onClick}>전체상품주문</button>
						<button className="order_select">선택상품주문</button>
						<button className="go_shopping">쇼핑계속하기</button>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Cart;