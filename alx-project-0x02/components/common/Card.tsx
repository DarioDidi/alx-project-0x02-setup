import { type CardProps } from '../../interfaces';

const Card: React.FC<CardProps> = ({ title, content }) => {
	return (
		<div className='w-160 min-h-30 mx-auto my-4 p-6 bg-gray rounded-lg shadow-lg hover:rounded-2xl'>
			<div className='mb-4'>
				<h2 className='font-semibold text-purple-400'>
					{title}
				</h2>
			</div>

			<p className="text-gray-800">{content}</p>
		</div >
	);
};

export default Card;
