import CardTall from "./CardTall";
import CardLong from "./CardLong";

function CurrentTrending({ series }) {
	return (
		<div className='flex' style={{ marginTop: 30 }}>
			<div className='left column'>
				<CardTall
					name={series?.name}
					category={series?.category}
					img={series?.img}
				/>

				<div className='synopsis'>{series?.synopsis}</div>
			</div>

			<div className='right column'>
				<div className='section-title'>
					{series?.episodes.length !== 0 ? (
						<>
							<h2>Episodes</h2>
							<div className='season'>Season 1</div>
						</>
					) : (
						<></>
					)}
				</div>

				{series?.episodes.length !== 0 ? (
					series?.episodes.map((series, key) => {
						return (
							<div key={key} className='episode flex-vertical-center'>
								<CardLong width={600} img={series.img} />
								<div className='episode-text column flex'>
									<p className='episode-number'>Episode {series.number}</p>
									<div className='episode-synopsis'>{series.synopsis}</div>
								</div>
							</div>
						);
					})
				) : (
					<></>
				)}
			</div>
		</div>
	);
}

export default CurrentTrending;
