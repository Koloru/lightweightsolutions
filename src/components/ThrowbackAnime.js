import CardLong from "./CardLong";
import throwbackAnime from '../data/throwbackAnime';
import SquareCard from "./SquareCard";

function ThrowbackAnime() {
	return (
		<div className='trending'>
			<h2 className='flex trending-header'>
				Throwback Anime!
			</h2>

			<div className="trending-containers flex cards">
                {throwbackAnime.map((anime, key) => (
                    <SquareCard
                        key={key}
                        image={anime.image}
                    />
                ))}
            </div>
		</div>
	);
}

export default ThrowbackAnime;

// {series[0].name}
