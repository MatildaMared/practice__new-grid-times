import React from "react";
import styled from "styled-components/macro";
import { Menu, Search, User } from "react-feather";

import { QUERIES } from "../../constants";

import MaxWidthWrapper from "../MaxWidthWrapper";
import Logo from "../Logo";
import Button from "../Button";

const Header = () => {
	return (
		<HeaderContainer>
			<SuperHeader>
				<Row>
					<ActionGroup>
						<button>
							<Search size={24} />
						</button>
						<button>
							<Menu size={24} />
						</button>
					</ActionGroup>
					<ActionGroup>
						<button>
							<User size={24} />
						</button>
					</ActionGroup>
				</Row>
			</SuperHeader>
			<MainHeader>
				<ActionGroup>
					<button>
						<Search size={24} />
					</button>
					<button>
						<Menu size={24} />
					</button>
				</ActionGroup>
				<Logo />
				<Subscribe>
					<Button>Subscribe</Button>
					<a href="/">Already a user?</a>
				</Subscribe>
			</MainHeader>
		</HeaderContainer>
	);
};

const HeaderContainer = styled.header``;

const SuperHeader = styled.div`
	padding: 16px 0;
	background: var(--color-gray-900);
	color: white;

	@media ${QUERIES.desktopAndUp} {
		display: none;
	}
`;

const Subscribe = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 4px;
	display: none;

	a {
		text-decoration: underline;
		font-style: italic;
		font-size: 14px;
		color: var(--color-gray-900);
	}
`;

const Row = styled(MaxWidthWrapper)`
	display: flex;
	justify-content: space-between;
`;

const ActionGroup = styled.div`
	display: flex;
	gap: 24px;

	/*
    FIX: Remove the inline spacing that comes with
    react-feather icons.
  */
	svg {
		display: block;
	}
`;

const MainHeader = styled(MaxWidthWrapper)`
	display: flex;
	align-items: center;
	justify-content: center;
	margin-top: 32px;
	margin-bottom: 48px;

	${ActionGroup} {
		display: none;
	}

	@media ${QUERIES.desktopAndUp} {
		justify-content: space-between;

		${ActionGroup} {
			display: flex;
		}

		${Subscribe} {
			display: flex;
		}
	}
`;

export default Header;
