import '../css/Dropdown.css';

const Dropdown = (props) => {
	
	
	return (
		<ul className='dropdown-content'>
			{
				props.productOption.map((option) => 
					<li onClick={()=>props.sendOption(option.productOptionId)}>{option.productColor} , {option.productSize}</li>	
			)}
		</ul>
	);
};

export default Dropdown;