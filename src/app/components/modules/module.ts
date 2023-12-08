interface Weather {
	main:
	{
		feels_like: number,
		temp: number,
		humidity: number
	},

	weather: [
		{
			main: string,
			icon: number
		},
	],
	wind: {
		speed: number
	},
	name: string
}