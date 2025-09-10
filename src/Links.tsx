import "./Links.css";

const LinkList: { label: string; href: string; }[] = [
	{ label: "Google Latin v13", href: "index.html" },
	{ label: "Google Latin v24", href: "sample-google-latin-v24.html" },
	{ label: "Lato Latin regular", href: "sample-lato-latin-regular.html" },
	{ label: "Lato Latin regular+italic", href: "sample-lato-latin-regular-italic.html" },
	{ label: "Lato regular", href: "sample-lato-regular.html" },
	{ label: "Lato regular+italic", href: "sample-lato-regular-italic.html" },
]

export function Links(): React.ReactNode {
	return (
		<>
			<div role="navigation">
				<ul className="nav">
					{LinkList.map(({ label, href }) => <li key={label}><a href={href}>{label}</a></li>)}
				</ul>
			</div>
		</>
	);
}
