import './App.css';
import { Links } from "./Links";
import { useState } from "react";

function App() {
	const [size, setSize] = useState(14);
	return (
		<div style={{
			display: "flex",
			flexDirection: "column",
			flexWrap: "nowrap",
			alignItems: "center",
			minWidth: 600,
		}}>
			<Links />
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

export default App;

function SampleBlock(props: { size: number, weight: number; }): React.ReactNode {
	const sizeWeight: React.CSSProperties = {
		fontSize: props.size,
		fontWeight: props.weight,
	};
	return (
		<div className="sample-block" style={{
			display: "inline-flex",
			flexDirection: "column",
			width: 600,
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
			<p style={sizeWeight}>a b c d e f g h i j k l m n o p q r s t u v w x y z</p>
			<p style={sizeWeight}>A B C D E F G H I J K L M N O P Q R S T U V W X Y Z</p>

			<p style={sizeWeight} className={`italic`}>a b c d e f g h i j k l m n o p q r s t u v w x y z</p>
			<div style={{ marginTop: 16, ...sizeWeight }}>
				<div style={{ fontSize: 36, letterSpacing: "-.13px", lineHeight: 1.2, ...sizeWeight }}>Şifrenizi Güncelleyin</div>
			</div>
			<div style={{ marginTop: 16, ...sizeWeight }}>
				<p>Sezgin Ataç (born 21 March 1998)[1] is a Turkish long-distance runner. He competed in the men's race at the 2020 World Athletics Half Marathon Championships held in Gdynia, Poland.[2]</p>
				<p>In 2019, he competed in the men's event at the 2019 European 10,000m Cup held in London, United Kingdom. In the same year, he finished in 17th place in the men's 10,000 metres event at the 2019 European Athletics U23 Championships held in Gävle, Sweden.[3]</p>
			</div>
		</div>
	);
}
