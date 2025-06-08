import { UserProps } from "@/interfaces";

const UserCard: React.FC<UserProps> = ({ name, email, address }) => {
	return (
		<div className="w-full max-w-xl mx-auto my-6 p-6 bg-white rounded-lg shadow-lg hover:shadow-xl shadow-purple-400 transition-shadow duration-300">
			<h3 className="text-2xl font-bold">{name}</h3>
			<p>Email: {email}</p>
			<p>Address: {address}</p>
		</div>
	);
};

export default UserCard;
