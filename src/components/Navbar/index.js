import React from "react";
import { Nav, NavLink, NavMenu } from "./NavbarElements";

const Navbar = () => {
	return (
		<>
			<Nav>
				<NavMenu>
					{/* <NavLink to="/home" activeStyle>
						Home
					</NavLink> */}
					<NavLink to="/match" activeStyle>
						Random Match 
					</NavLink>
					
				</NavMenu>
			</Nav>
		</>
	);
};

export default Navbar;
