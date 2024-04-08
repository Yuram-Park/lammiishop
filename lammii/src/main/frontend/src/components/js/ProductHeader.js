import '../css/ProductHeader.css';
import { useEffect, useState } from 'react';

function ProductHeader() {

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
		</div>
	);
}

export default ProductHeader;