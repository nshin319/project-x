import React from 'react';

interface CardProps {
	children: React.ReactNode;
	title?: string;
}

function Card({children, title}: CardProps) {
	return (
		<div className="bg-white rounded-lg shadow-md p-6">
		{title && (
			<h2 className="text-xl font-bold mb-4 text-gray-800">
				{title}
			</h2>
		)}
		{children}
		</div>
	);
}

export  default Card;
