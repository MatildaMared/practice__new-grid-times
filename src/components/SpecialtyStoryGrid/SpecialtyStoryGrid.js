import React from "react";
import styled from "styled-components/macro";

import { MARKET_DATA, SPORTS_STORIES } from "../../data";
import { QUERIES } from "../../constants";

import MarketCard from "../MarketCard";
import SectionTitle from "../SectionTitle";
import MiniStory from "../MiniStory";

const SpecialtyStoryGrid = () => {
	return (
		<Wrapper>
			<MarketsSection>
				<SectionTitle
					cornerLink={{
						href: "/markets",
						content: "Visit Markets data »",
					}}
				>
					Markets
				</SectionTitle>
				<MarketCards>
					{MARKET_DATA.map((data) => (
						<MarketCard key={data.tickerSymbol} {...data} />
					))}
				</MarketCards>
			</MarketsSection>
			<SportsSection>
				<SectionTitle
					cornerLink={{
						href: "/sports",
						content: "Visit Sports page »",
					}}
				>
					Sports
				</SectionTitle>
				<SportsStories>
					{SPORTS_STORIES.map((data) => (
						<MiniStory key={data.id} {...data} />
					))}
				</SportsStories>
			</SportsSection>
		</Wrapper>
	);
};

const Wrapper = styled.div`
	display: grid;
	gap: 48px;

	@media ${QUERIES.desktopAndUp} {
		grid-template-columns: repeat(2, 1fr);
		gap: 0;
	}
`;

const MarketsSection = styled.section`
	@media ${QUERIES.desktopAndUp} {
		margin-right: 16px;
		padding-right: 16px;
		border-right: 1px solid var(--color-gray-300);
	}
`;

const MarketCards = styled.div`
	display: grid;
	gap: 16px;
	grid-template-columns: repeat(auto-fill, minmax(min(175px, 100%), 1fr));
`;

const SportsSection = styled.section`
	@media ${QUERIES.tabletAndUp} {
		max-width: 100%;
		overflow-x: scroll;
	}
`;

const SportsStories = styled.div`
	display: grid;
	gap: 16px;
	grid-template-columns: repeat(auto-fill, minmax(min(175px, 100%), 1fr));

	@media ${QUERIES.tabletAndUp} {
		grid-template-columns: repeat(auto-fill, minmax(min(200px, 100%), 1fr));
		max-width: 100%;
		overflow-x: scroll;
	}
`;

export default SpecialtyStoryGrid;
