// Filename - ./components/Navbar.js

import { FaBars } from "react-icons/fa";
import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.nav`
	background: #e1e5f2;
	height: 85px;
	display: flex;
	justify-content: center;
	padding: 10px;
`;

export const NavLink = styled(Link)`
	color: #003049;
	display: flex;
	font-family: Chalkduster, fantasy;
	justify-content: center;
	align-items: center;
	text-decoration: none;
	padding: 0 1rem;
	height: 100%;
	font-size: 15px;
	cursor: pointer;
	&.active {
		color: #778da9;
	}
`;

export const Bars = styled(FaBars)`
	display: flex;
	color: #808080;
	@media screen and (max-width: 768px) {
		display: flex;
		justify-content: space-between;
		font-size: 2rem;
		cursor: pointer;
	}
`;

export const NavMenu = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	@media screen and (max-width: 768px) {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
`;
