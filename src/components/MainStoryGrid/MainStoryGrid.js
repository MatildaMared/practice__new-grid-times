import React from "react";
import styled from "styled-components/macro";

import { MAIN_STORY, OPINION_STORIES, SECONDARY_STORIES } from "../../data";

import SectionTitle from "../SectionTitle";
import MainStory from "../MainStory";
import SecondaryStory from "../SecondaryStory";
import OpinionStory from "../OpinionStory";
import Advertisement from "../Advertisement";
import { QUERIES } from "../../constants";

const MainStoryGrid = () => {
	return (
		<Wrapper>
			<MainStorySection>
				<MainStory {...MAIN_STORY} />
			</MainStorySection>

			<SecondaryStorySection>
				<StoryList>
					{SECONDARY_STORIES.map((story, index) => (
						<SecondaryStory key={story.id} {...story} />
					))}
				</StoryList>
			</SecondaryStorySection>

			<OpinionSection>
				<SectionTitle>Opinion</SectionTitle>
				<StoryList>
					{OPINION_STORIES.map((story, index) => (
						<OpinionStory key={story.id} {...story} />
					))}
				</StoryList>
			</OpinionSection>

			<AdvertisementSection>
				<Advertisement />
			</AdvertisementSection>
		</Wrapper>
	);
};

const Wrapper = styled.div`
	display: grid;
	grid-template-areas:
		"main-story"
		"secondary-stories"
		"opinion-stories"
		"advertisement";
	gap: 48px;
	margin-bottom: 48px;

	@media ${QUERIES.tabletAndUp} {
		grid-template-areas:
			"main-story secondary-stories"
			"advertisement advertisement"
			"opinion-stories opinion-stories";
		grid-template-columns: 2fr 1fr;
		grid-column-gap: 0;
	}

	@media ${QUERIES.laptopAndUp} {
		grid-template-areas:
			"main-story secondary-stories opinion-stories"
			"main-story advertisement advertisement";
		grid-template-columns: 6fr 4fr 3fr;
		grid-row-gap: 16px;
	}
`;

const MainStorySection = styled.section`
	grid-area: main-story;

	@media ${QUERIES.tabletAndUp} {
		padding-right: 16px;
		border-right: 1px solid var(--color-gray-300);
		margin-right: 16px;
	}
`;

const StoryList = styled.div`
	display: flex;
	flex-direction: column;

	& > *:not(:last-of-type) {
		border-bottom: 1px solid var(--color-gray-300);
		padding-bottom: 16px;
	}

	& > *:not(:first-of-type) {
		padding-top: 16px;
	}
`;

const SecondaryStorySection = styled.section`
	grid-area: secondary-stories;

	@media ${QUERIES.laptopAndUp} {
		padding-right: 16px;
		border-right: 1px solid var(--color-gray-300);
		margin-right: 16px;
	}
`;

const OpinionSection = styled.section`
	grid-area: opinion-stories;

	${StoryList} {
		@media ${QUERIES.tabletOnly} {
			display: grid;
			gap: 32px;
			grid-template-columns: repeat(4, 1fr);

			& > *:not(:last-of-type),
			& > *:not(:first-of-type) {
				border: none;
				padding: 0;
			}
		}
	}
`;

const AdvertisementSection = styled.section`
	grid-area: advertisement;

	@media ${QUERIES.laptopAndUp} {
		border-top: 1px solid var(--color-gray-300);
		padding-top: 16px;
	}
`;

export default MainStoryGrid;
