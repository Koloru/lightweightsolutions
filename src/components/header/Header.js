function Header() {
	return (
		<div className='flex space-between'>
			{/* Logo/Home Button */}
			<div className='logo'>AnimeBinge</div>

			{/* navigation section */}
			<ul className='nav flex'>
				<li className='nav-item'>
					<a href='#'>Home</a>
				</li>
				<li className='nav-item'>
					<a href='#'>Discover</a>
				</li>
				<li className='nav-item'>
					<a href='#'>About us</a>
				</li>
				<li className='nav-item' style={{ marginLeft: "3.5rem" }}>
					<a href='#' className='button'>
						Sign Up
					</a>
				</li>
				<li className='nav-item' style={{ marginLeft: "1rem" }}>
					<a href='#' className='button button-blue'>
						Log In
					</a>
				</li>
			</ul>
		</div>
	);
}

export default Header;
