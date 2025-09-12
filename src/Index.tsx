import Avatar from "@mui/material/Avatar";
import Divider from "@mui/material/Divider";
import Link from "@mui/material/Link";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import React from "react";
import type { Theme } from "@mui/material";
import Typography from "@mui/material/Typography";

const makePath = (fileName: string): string => `/lato-font-test/${fileName}`;
const Pages: { label: string; href: string; description?: string; avatar: "lato" | "google" | "mui" }[] = [
	{
		label: "Google Lato Latin v13",
		href: makePath("sample-google-latin-v13.html"),
		description: "Current WHS version - from google",
		avatar: "google"
	},
	{
		label: "Google Lato Latin v24",
		href: makePath("sample-google-latin-v24.html"),
		description: "Current google version - lato 1.something",
		avatar: "google"
	},
	{
		label: "Lato Latin upright",
		href: makePath("sample-lato-latin-upright.html"),
		description: "Actual lato 2",
		avatar: "lato"
	},
	{
		label: "Lato Latin upright+italic",
		href: makePath("sample-lato-latin-upright-italic.html"),
		description: "Actual lato 2",
		avatar: "lato"
	},
	{
		label: "Lato upright",
		href: makePath("sample-lato-upright.html"),
		description: "Actual lato 2",
		avatar: "lato"
	},
	{
		label: "Lato upright+italic",
		href: makePath("sample-lato-upright-italic.html"),
		description: "Actual lato 2",
		avatar: "lato"
	},

	{
		label: "Mui + Google Lato Latin v13",
		href: makePath("sample-mui-google-lato-latin-v13.html"),
		description: "Mui wrapped - Current WHS version (google v13)",
		avatar: "mui"
	},
	{
		label: "Lato Latin Optimized",
		href: makePath("sample-mui-lato-latin-optimized.html"),
		description: "Mui wrapped - Actual lato latin 2",
		avatar: "mui"
	},
	{
		label: "Lato Optimized",
		href: makePath("sample-mui-lato-optimized.html"),
		description: "Mui wrapped - Actual lato 2",
		avatar: "mui"
	},
];

const setAvatarColors = (input: string) => (theme: Theme): {bgcolor: string; color: string} => ({
	bgcolor: input,
	color: theme.palette.getContrastText(input),
})

function FancyAvatar(props: { avatar: "lato" | "google" | "mui" }): React.ReactNode {
	return (
		<ListItemAvatar >
			{props.avatar === "google"
				? <Avatar sx={setAvatarColors("#0f9d58")}>G</Avatar>
				: props.avatar === "lato"
					? <Avatar sx={setAvatarColors("#616161")}>L</Avatar>
					: <Avatar sx={setAvatarColors("#3399ff")}>M</Avatar>}
		</ListItemAvatar>
	);
}

export function Index(): React.ReactNode {
	return (
		<div style={{ margin: 16 }}>
			<Typography variant="h5" component="h1">Sample Pages</Typography>
			<List sx={{ maxWidth: 400, mt: 1, ml: 0 }}>
				{Pages.map((props) => <SampleListItem key={props.label} {...props} />)}
			</List>
		</div>
	);
}


interface SampleListItemProps {
	href: string;
	label: string;
	avatar: "mui" | "lato" | "google";
	description?: string;
}

function SampleListItem({ href, label, avatar, description }: SampleListItemProps): React.ReactNode {
	return (
		<>
			<ListItem key={'list-item'} alignItems="flex-start" disableGutters>
				<FancyAvatar avatar={avatar} />
				<ListItemText
					primary={label}
					secondary={(
						<>
							<Link href={href}>Sample page</Link>
							{Boolean(description) && (
								<>
									<Typography sx={{ mt: .2, display: "block" }} variant="caption" component="span">{description}</Typography>
								</>
							)}
						</>
					)}
				/>
			</ListItem>
			<Divider key={`list-divider`} variant="inset" component="li" />
		</>
	);
}
