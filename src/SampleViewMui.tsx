import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { useState } from "react";

export function SampleViewMui() {
	const [size, setSize] = useState(16);
	return (
		<Box sx={{
			display: "flex",
			flexDirection: "column",
			flexWrap: "nowrap",
			px: 1
		}}>
			<div style={{ marginBottom: "16px" }}>
				<input
					type="number"
					min={10}
					max={96}
					step={1}
					value={size}
					onChange={(e) => setSize(parseInt(e.target.value, 10))} />
			</div>

			<Stack direction="column" gap="16px">
				<SampleBlockMui size={size} weight={300} />
				<SampleBlockMui size={size} weight={400} />
				<SampleBlockMui size={size} weight={600} />
				<SampleBlockMui size={size} weight={700} />
				<SampleBlockMui size={size} weight={900} />
			</Stack>
		</Box>
	);
}

function SampleBlockMui(props: { size: number; weight: number; }): React.ReactNode {
	const sizeWeight: React.CSSProperties = {
		fontSize: Math.max(0, Math.min(96, props.size)),
		fontWeight: Math.max(300, Math.min(900, props.weight)),
	};
	return (
		<Paper className="sample-block" variant="outlined" sx={{
			flexDirection: "column",
			display: "inline-flex",
			width: props.size < 22 ? "600px" : "auto",
			p: 1,
			gap: "8px",
		}}>
			<Typography variant="caption" sx={(theme) => ({
				display: "inline-block",
				fontFamily: "monospace",
				p: .5,
				mx: -1, mt: -1, mb: 2,
				borderTopLeftRadius: theme.shape.borderRadius,
				borderTopRightRadius: theme.shape.borderRadius,
				backgroundColor: "#f0f0f0",
			})}>{`${props.size}px / ${props.weight}px`}</Typography>

			<div>
				<Typography sx={{ ...sizeWeight }}>
					a b c d e f g h i j k l m n o p q r s t u v w x y z
				</Typography>
				<Typography sx={{ ...sizeWeight, fontStyle: "italic" }}>
					a b c d e f g h i j k l m n o p q r s t u v w x y z
				</Typography>
				<Typography sx={{ ...sizeWeight }}>
					A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
				</Typography>
				<Typography sx={{ ...sizeWeight, fontStyle: "italic" }}>
					A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
				</Typography>
				<Typography sx={{ ...sizeWeight }}>
					0 1 9 2 3 4 5 6 7 8 9 - , . ! @ # $ % ^ & * _ +
				</Typography>
			</div>

			<Typography variant="h4" sx={{ ...sizeWeight }}>Şifrenizi Güncelleyin</Typography>
		</Paper>
	);
}
