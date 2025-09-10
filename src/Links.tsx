import "./Links.css";

const LinkList: { label: string; href: string; }[] = [
	{ label: "Google Latin v13", href: "/lato-font-test/index.html" },
	{ label: "Google Latin v24", href: "/lato-font-test/sample-google-latin-v24.html" },
	{ label: "Lato Latin regular", href: "/lato-font-test/sample-lato-latin-regular.html" },
	{ label: "Lato Latin regular+italic", href: "/lato-font-test/sample-lato-latin-regular-italic.html" },
	{ label: "Lato regular", href: "/lato-font-test/sample-lato-regular.html" },
	{ label: "Lato regular+italic", href: "/lato-font-test/sample-lato-regular-italic.html" },
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
