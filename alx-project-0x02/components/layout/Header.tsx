import Link from "next/link"

const Header: React.FC = () => {
	return (
		<header className="bg-gray-200">
			<div className="m-0 flex justify-center w-screen  py-6 px-4 shadow-md">
				<Link href="/home" className="px-3 font-bold text-gray-800 tracking-tight">
					Home
				</Link>
				<Link href="/about" className="px-3 font-bold text-gray-800 tracking-tight">
					About
				</Link>
				<Link href="/posts" className="px-3 font-bold text-gray-800 tracking-tight">
					Posts
				</Link>
				<Link href="/users" className="px-3 font-bold text-gray-800 tracking-tight">
					Users
				</Link>
			</div>
		</header>
	)
};

export default Header;
