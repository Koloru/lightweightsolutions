import { FaStar } from "react-icons/fa";

function CardTall({ name, category, img }) {
	return (
		<div
			className='card-container tall cover flex column'
			style={{ backgroundImage: `url(${img})` }}
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
			<div className='gradient'></div>
		</div>
	);
}

export default CardTall;
