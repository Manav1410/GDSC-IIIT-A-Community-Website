import React from "react";
import { Link } from "react-router-dom";
import { Typography } from "@material-ui/core";
import Headings from "../../Components/Page_headings";
import HeadingButton from "../../Components/Heading_button";
import EventCards from "../../Components/EventCard/index.js";
import event_illustration from "../../Assets/Events_page_illustration.svg";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import "./Events.css";
import LeaderBoard from "../../Components/LeaderBoard/LeaderBoard";
import Even from "./Even";
import styles from "./EventPage.module.css";
function Events() {
	return (
		<section
			className="Events_section"
			style={{
				// width: "100vw",
				overflowX: "hidden",
				display: "flex",
				flexDirection: "column",
				justifyContent: "center",
				// alignItems: "center",
				paddingBottom: "6vh",
			}}
		>
			<Even />
			<Headings
				LargeHeading="Events"
				SmallHeading="Whats happening..."
				Text="Here at DSC IIIT Allahabad we put the fun in functions and events. Attend Study Jams/ Hackathons/ Developer Conferences to learn more about the latest technologies."
				PageIllustration={event_illustration}
			/>
			<div className="heading_plusBtn">
				<h2 style={{ fontWeight: "600", fontFamily: "Open Sans,Poppins,sans-serif", color: "#1b2733" }} className="heading">
					Upcoming Events
				</h2>
				<Fab color="primary" aria-label="add">
					<Link
						to="../events/new_event"
						style={{
							color: "white",
							height: "100%",
							width: "100%",
							margin: "0",
							display: "grid",
							placeItems: "center",
						}}
					>
						<AddIcon />
					</Link>
				</Fab>
			</div>
			<EventCards upcoming={true} />
			<HeadingButton
				LargeHeading="Interested in being a Speaker at one of our events?"
				SmallHeading="Just drop us your Proposal."
				ButtonText="Get In Touch"
			/>
			<div className="heading_plusBtn">
				<h2 style={{ fontWeight: "600", fontFamily: "Open Sans,Poppins,sans-serif", color: "#1b2733" }} className="heading">
					Past Events
				</h2>
				<Fab color="primary" aria-label="add">
					<Link
						to="../events/new_event"
						style={{
							color: "white",
							height: "100%",
							width: "100%",
							margin: "0",
							display: "grid",
							placeItems: "center",
						}}
					>
						<AddIcon />
					</Link>
				</Fab>
			</div>
			<EventCards upcoming={false} />
		</section>
	);
}

export default Events;
