import '../css/ProductList.css'
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

function ProductList() {
	
	let {category} = useParams();
	let {detail} =useParams();
	const outer = [ "All", "Jaket", "Coat", "Padding", "Cardigan"];
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
			const resp = await axios.get(process.env.REACT_APP_DB_HOST + `/product/list/${category}`);
			setProductList(resp.data);
		}
		getProductList();
		
	}, []);

	return (
		<div>
			<div class="shop-list">
				<ul>
					<li><a href="/product/list/ALL/all">All</a></li>
					<li><a href="/product/list/OUTER/all">Outer</a></li>
					<li><a href="/product/list/TOP/all">Top</a></li>
					<li><a href="/product/list/BOTTOM/all">Bottom</a></li>
					<li><a href="/product/list/DRESS/all">Dress</a></li>
					<li><a href="/product/list/ACC/all">Acc</a></li>
				</ul>
			</div>
			<section class="serv_list">
				<div class="container">
					<div class="title">
						<h1>{category}</h1>
						<hr class="hr1" noshade />
						<ul>
						{category === "ALL" ? 
						<li></li> :
						detailedCategory && detailedCategory.map((list) => { 
							return <li><a href={"/product/list/"+category+"/"+list}>{list}</a></li>
						})}
						</ul>
					</div>
					<div class="item_list">
					{productList && productList.map((list)=>{ 
						return <div class="card">
							<div class="img">
								<img src="" alt=''/>
							</div>
							<div class="text">
								<h2>{list.productName}</h2>
								<p>긴 기장이 매력적인 스커트</p>
								<button><i class="fas fa-check"></i>사러가기</button>
							</div>
						</div>
					})}
					</div>
				</div>
			</section>
		</div>
	);
};

export default ProductList;