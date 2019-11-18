import React from 'react';
import { Navbar, Container, Row, Col } from 'react-bootstrap';
import { FaShoppingCart } from 'react-icons/fa';

import './header.scss';
import logo from '../logo.svg';

const Header = props => {
	return (
		<header>
			<Container className="header">
				<Row className="justify-content-space-between">
					<Col xs={3} md={2} lg={1} className="p-0">
						<Navbar className="px-sm-0">
							<Navbar.Brand href="/" className="p-0">
								<img alt="" src={logo} height="60" className="logo d-inline-block align-top" />
							</Navbar.Brand>
						</Navbar>
					</Col>
					<Col className="p-0">
						<h1>{'Book my Movie ticket'}</h1>
					</Col>
					<Col xs={3} md={2} lg={1} className="p-0 cart-icon">
						<FaShoppingCart />
						<span className="pill">{props.cartCount}</span>
					</Col>
				</Row>
			</Container>
		</header>
	);
};

export default Header;
