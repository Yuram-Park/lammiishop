import '../css/ProductList.css'
import { useNavigate, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import ProductHeader from '../../components/js/ProductHeader';

function ProductList() {
	
	const navigate = useNavigate();
	let {category} = useParams();
	let {detail} =useParams();
	
	const outer = [ "All", "Jacket", "Coat", "Padding", "Cardigan"];
	const top = ["All", "T-shirts", "Blouse/Shirts", "Sweatshirt", "Hood"];
	const bottom = ["All", "Skirt", "Denim", "Pants"];
	const dress = ["All", "Short", "Middle", "Long", "Maxi"];
	const acc = ["All", "Necklase", "Earring","Bracelet"];
	
	const [detailedCategory, setDetailedCategory] = useState([]);
	const [productList, setProductList] = useState([])
	
	useEffect(()=>{
		if (category === "OUTER") {
			setDetailedCategory(outer);
		} else if (category === "TOP") {
			setDetailedCategory(top);
		} else if (category === "BOTTOM") {
			setDetailedCategory(bottom);
		} else if (category === "DRESS") {
			setDetailedCategory(dress); 
		} else if (category === "ACC") {
			setDetailedCategory(acc);
		}
		const getProductList = async() => {
			//const resp = await axios.get(process.env.REACT_APP_DB_HOST + `/product/list/${category}/${detail}`);
			const resp = await axios.get(process.env.REACT_APP_DB_HOST + `/product/list/${category}`);
			setProductList(resp.data);
			console.log(resp.data)
		}
		getProductList();
		
	}, []);

	return (
		<div>
			<ProductHeader ></ProductHeader>
			<section class="serv_list">
				<div class="container">
					<div class="title">
						<h1>{category}</h1>
						<hr class="hr1" noshade />
						<ul>
							{category === "ALL" ?
								<li></li> :
								detailedCategory && detailedCategory.map((list) => {
									return <li><a href={"/product/list/" + category + "/" + list}>{list}</a></li>
								})}
						</ul>
					</div>
					<div class="item_list">
						
					</div>
				</div>
			</section>
		</div>
	);
};

export default ProductList;