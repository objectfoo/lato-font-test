import { useState } from "react";
import "./SampleView.css";

export function SampleView() {
	const [size, setSize] = useState(16);
	return (
		<div style={{
			display: "flex",
			flexDirection: "column",
			flexWrap: "nowrap",
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

			<div style={{ display: "flex", flexDirection: "column" }}>
				<SampleBlock size={size} weight={300} />
				<SampleBlock size={size} weight={400} />
				<SampleBlock size={size} weight={700} />
				<SampleBlock size={size} weight={900} />
			</div>
		</div>
	);
}

function SampleBlock(props: { size: number, weight: number; }): React.ReactNode {
	const sizeWeight: React.CSSProperties = {
		fontSize: Math.max(0, Math.min(96, props.size)),
		fontWeight: Math.max(300, Math.min(900, props.weight)),
	};
	return (
		<div className="sample-block" style={{
			display: "inline-flex",
			flexDirection: "column",
			width: props.size < 22 ? 600 : "auto",
			marginBottom: 16,
			padding: 8,
			border: `1px solid #bababa`,
			borderRadius: "4px",
		}}>
			<h4 style={{
				display: "inline-block",
				fontWeight: 12,
				fontFamily: "monospace",
				padding: "4px",
				backgroundColor: "#f0f0f0",
				margin: "-8px -8px 16px -8px",
				borderRadius: "4px",
			}}>{props.size}px / {props.weight}</h4>
			<p style={sizeWeight}>a b c d e f g h i j k l m n o p q r s t u v w x y z </p>
			<p style={sizeWeight} className="italic">a b c d e f g h i j k l m n o p q r s t u v w x y z</p>
			<p style={sizeWeight}>A B C D E F G H I J K L M N O P Q R S T U V W X Y Z</p>
			<p style={sizeWeight} className="italic">A B C D E F G H I J K L M N O P Q R S T U V W X Y Z</p>
			<p style={sizeWeight}>0 1 9 2 3 4 5 6 7 8 9 - , . ! @ # $ % ^ & * _ +</p>

			<div style={{ marginTop: 16, ...sizeWeight }}>
				<div style={{ fontSize: 36, letterSpacing: "-.13px", lineHeight: 1.2, ...sizeWeight }}>Şifrenizi Güncelleyin</div>
			</div>
		</div>
	);
}
