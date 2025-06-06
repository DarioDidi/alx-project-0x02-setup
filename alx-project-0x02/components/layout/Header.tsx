import Link from "next/link"

const Header: React.FC = () => {
	return (
		<header>
			<div className="w-full bg-gray-400 shadow-md">
				<Link href="/" className="text-3xl md:text-5xl font-bold text-gray-800 tracking-tight">
					Home
				</Link>
			</div>
		</header>
	)
}
