import './App.css';
import { Links } from "./Links";

function App() {
	return (
		<>
			<Links />

			<SampleBlock size={14} weight={300} />
			<SampleBlock size={14} weight={400} />
			<SampleBlock size={14} weight={700} />
			<SampleBlock size={14} weight={900} />

			<br />

			<SampleBlock size={16} weight={300} />
			<SampleBlock size={16} weight={400} />
			<SampleBlock size={16} weight={700} />
			<SampleBlock size={16} weight={900} />

			<br />

			<SampleBlock size={24} weight={300} />
			<SampleBlock size={24} weight={400} />
			<SampleBlock size={24} weight={700} />
			<SampleBlock size={24} weight={900} />
		</>
	);
}

export default App;

function SampleBlock(props: { size: number, weight: number; }): React.ReactNode {
	const cn = `f-lato w-${props.weight} s-${props.size}`;
	return (
		<div style={{ maxWidth: 600, marginBottom: 2 }}>
			<h4 className={cn}>{props.size}px / {props.weight}</h4>
			<p className={cn}>a b c d e f g h i j k l m n o p q r s t u v w x y z</p>
			<p className={cn}>A B C D E F G H I J K L M N O P Q R S T U V W X Y Z</p>
			<p className={`${cn} italic`}>a b c d e f g h i j k l m n o p q r s t u v w x y z</p>
		</div>
	);
}
