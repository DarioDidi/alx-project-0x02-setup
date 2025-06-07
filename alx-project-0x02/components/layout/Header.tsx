import Link from "next/link"

const Header: React.FC = () => {
	return (
		<header className="">
			<div className="m-0 flex justify-center w-screen  py-6 px-4  bg-purple-400 shadow-md">
				<Link href="/home" className="px-3 font-bold text-gray-800 tracking-tight">
					Home
				</Link>
				<Link href="/about" className="font-bold text-gray-800 tracking-tight">
					About
				</Link>
			</div>
		</header>
	)
};

export default Header;
