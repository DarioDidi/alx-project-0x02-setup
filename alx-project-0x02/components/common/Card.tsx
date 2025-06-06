import { CardProps } from '../../interfaces';

const Card: React.FC<CardProps> = ({ title, content }) => {
	return (
		<div className='max-w-full mx-auto my-4 bg-gray rounded-lg shadow-lg hover:rounded-2xl'>
			<div className='mb-4'>
				<h2 className='font-semibold text-purple-400'>
					{title}
				</h2>
			</div>

			<p className="text-gray-600 text-center">{content}</p>
		</div>
	)
}

export default Card;
