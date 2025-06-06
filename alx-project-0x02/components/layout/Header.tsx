import Link from "next/link"

const Header: React.FC = () => {
	return (
		<header>
			<div className=" container flex w-full bg-gray-400 shadow-md">
				<Link href="/home" className="text-3xl md:text-5xl font-bold text-gray-800 tracking-tight">
					Home
				</Link>
				<Link href="/about" className="text-3xl md:text-5xl font-bold text-gray-800 tracking-tight">
					About
				</Link>
			</div>
		</header>
	)
}
