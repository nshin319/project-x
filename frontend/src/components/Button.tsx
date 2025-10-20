import React from 'react';

interface ButtonProps {
	children: React.ReactNode;
	onClick: () => void;
	color?: 'blue' | 'red' | 'gray';
	disabled?: boolean;
}

function Button({
	children,
	onClick,
	color = 'blue',
	disabled = false
}: ButtonProps) {
	const colorClasses = {
		blue: 'bg-blue-500 hover:bg-blue-600 text-white',
		red: 'bg-red-500 hover:bg-red-600 text-white',
		gray: 'bg-gray-500 hover:bg-gray-600 text-white'
	};

	return (
		<button
			onClick={onClick}
			disabled={disabled}
			className={`
				${colorClasses[color]}
				text-white px-6 py-3 rounded-lg
				disabled: bg-gray-300 disabled:cursor-not-allowed
				transiton-colors font-medium
			`}
			>
			{children}
		</button>
	);
}

export  default Button;
