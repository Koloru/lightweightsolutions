import { FaStar } from "react-icons/fa";

function CardLong({ name, category, img, onClick, width = 900 }) {
	return (
		<div
			className='flex column card-container'
			style={{ backgroundImage: `url(${img})`, maxWidth: width, width: '100%' }}
			onClick={onClick}
		>
			<div className='card-title'>{name}</div>

			<div
				className='flex justify-between'
				style={{ width: "100%", justifyContent: "space-between" }}
			>
				<div className='card-category'>{category}</div>
				<div className='card-ratings'>
					<span className='flex flex-vertical-center rating'>
						<FaStar className='rating-icon' style={{ color: "#FBC94A" }} />
						<span className='rating-number'>5.0</span>
					</span>
				</div>
			</div>
			<div className='gradient' />
		</div>
	);
}

export default CardLong;
