import { useState } from "react";

import CardLong from "./CardLong";
import CurrentTrending from './CurrentTrending'

function Trending({ series }) {
	const [activeSeries, setActiveSeries] = useState();

	return (
		<div className='trending'>
			{(activeSeries !== undefined) ?
				<>
					<div style={{ fontSize: 28 }} onClick={() => setActiveSeries(undefined)}>Go Back</div>
					<CurrentTrending series={series[activeSeries]}/>
				</>
				: 
				<>
					<h2 className='flex trending-header'>
						Trending
						<span className='yellow'>this week</span>
					</h2>

					<div className="flex cards">
						{series.map((series, key) => (
							<CardLong
								key={key}
								name={series.name}
								synopsis={series.synopsis}
								category={series.category}
								img={series.img}
								onClick={() => setActiveSeries(key)}
							/>
						))}
					</div>
				</>
			}
		</div>
	);
}

export default Trending;

