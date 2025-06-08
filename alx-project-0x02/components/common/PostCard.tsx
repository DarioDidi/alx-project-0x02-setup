import { PostProps } from "@/interfaces";

const PostCard: React.FC<PostProps> = ({ userId, title, content }) => {
	return (
		<div className="border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
			<h3 className="text-xl font-semibold mb-2">{title}</h3>
			<p className="text-gray-600 mb-2">{content}</p>
			<p className="text-gray-500 text-sm">User ID: {userId}</p>
		</div>
	);
};

export default PostCard;
