import { FaStar, FaHeart, FaPlay, FaCircle } from "react-icons/fa";

import Header from "./Header";

function Main() {
	return (
		<div
			className='hero-background flex column space-between '
			style={{ gap: "1.2rem", height: "120vh"}}
		>
			<Header />

			<div className='flex column hero' style={{ gap: "1.2rem" }}>
				<h1 className='main-heading'>Kimetsu No Yaiba</h1>

				<div className='flex column'>
					<span className='flex flex-vertical-center rating'>
						<FaStar className='rating-icon' style={{ color: "#FBC94A" }} />
						<span className='rating-number'>5.0</span>
						<span className='category'>
							Category: Adventure fiction, Dark fantasy, Martial Arts
						</span>
					</span>
				</div>

				<p className='description'>
					Demon Slayer: Kimetsu no Yaiba is a Japanese manga series written and
					illustrated by Koyoharu Gotouge. It follows teenage Tanjiro Kamado,
					who strives to become a demon slayer after his family was slaughtered
					and his younger sister Nezuko turned into a demon.
				</p>

				<div
					className='flex flex-vertical-center text-center actions'
					style={{ gap: "0.6rem" }}
				>
					<a
						href='#'
						className='button button-blue flex flex-vertical-center font15'
						style={{ gap: "0.6rem" }}
					>
						<FaPlay className='bg-blue' />
						Watch Now!
					</a>
					<a className='button flex flex-vertical-center'>
						<FaHeart className='heart' style={{ color: "#fff" }} />
					</a>
				</div>
			</div>


    {/* bottom right section */}
			<div className='hero-sections flex space-between'>
				<ul className='flex hero-sections-links'>
					<li>
						<a className='hero-section-link' href='#'>
							Overview
						</a>
					</li>
					<li>
						<a className='hero-section-link' href='#'>
							Episodes
						</a>
					</li>
					<li>
						<a className='hero-section-link' href='#'>
							Details
						</a>
					</li>
				</ul>

				<ul className='flex flex-vertical-center hero-symbols-right'>
					<li>
						<div className='bar'></div>
					</li>
					<li>
						<FaCircle />
					</li>
					<li>
						<FaCircle />
					</li>
					<li>
						<FaCircle />
					</li>
				</ul>
			</div>
		</div>
	);
}

export default Main;
