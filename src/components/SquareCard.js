import { FaStar } from "react-icons/fa";

function SquareCard({ image }) {
	return (
		<div className="square-card">
            <img src={image} className="image" />
		</div>
	);
}

export default SquareCard;
