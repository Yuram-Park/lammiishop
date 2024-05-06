import '../css/SmallCart.css';

const SmallCart = (props) => {
	
	return(
		<div>
			<div className="smallcart">
				<div className="smallcart_item">
					<p>{props.productName}</p>
					<p>black</p>
					<p>s</p>
					<div className='quantity'>
						<button>+</button>
						<input type='text'/>
						<button>-</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SmallCart;