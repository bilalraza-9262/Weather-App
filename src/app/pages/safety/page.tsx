import Wrapper from "@/app/components/shared/Wrapper"


const safetyData = [

	{
		id:1,
		title: "Thunderstorms and Lightning:",
		description: "All thunderstorms produce lightning and are dangerous. If you hear the sound of thunder, then you are in danger from lightning. Lightning kills between 75 to 100 people each year and being outdoors in the most dangerous place to be. Always listen to the radio and television for the latest information and instructions for your area. When thunder roars, go indoors. Lightning can strike even if it's not raining.Avoid open fields, high ground, and bodies of water during a thunderstorm.Stay inside a sturdy building and away from windows during a lightning storm."
	},
	{
		id:2,
		title: "Tornadoes:",
		description: "In an average year, 1000 tornadoes are reported, resulting in 80 deaths and over 1,500 injuries. Tornadoes have been reported in every state and can happen at any time of the year. Take tornadoes seriously, because with winds blowing at 200 mph or more, they can destroy just about anything in its path. Always listen to the radio and television for the latest information and instructions for your area Have a designated tornado shelter in your home, such as a basement or storm cellar. If a tornado warning is issued, seek shelter immediately. If you're caught outdoors, find a low-lying area like a ditch and cover your head."
	},
	{
		id:3,
		title: "Floods:",
		description: "Flash floods are the #1 weather-related killer in the U.S. Nearly half of flash flood deaths are auto related. Know beforehand if your area is a flood risk. Always listen to the radio and television for the latest information and instructions for your area. Avoid driving or walking through floodwaters. Turn around, don't drown. Move to higher ground if you are in a flood-prone area. Keep an emergency kit ready with essential supplies."
	},
	{
		title: "Hurricanes:",
		description: "Hurricane season officially starts June 1st and lasts until November 30th. Hurricanes can sometimes spawn tornadoes. If you live in a hurricane prone area, make sure you know where all of the evacuation routes are. Always listen to the radio and television for the latest information and instructions for your area. Evacuate if authorities recommend it. Follow evacuation routes and don't ignore evacuation orders. Board up windows and secure outdoor furniture before the storm hits. Stay informed about the hurricane's progress through reliable sources."
	}
]

const Safety = () => {
	return (
		<Wrapper>
			<div className="fixed top-0 bottom-0 left-0 right-0 bg-black/20 z-10" />
			<div className='bg-black/40 rounded-xl shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] relative z-20 m-5 p-4'>

				{safetyData.map((val) => (
					<div key={val.id} className=" m-6 p-5 bg-white/5 backdrop-blur-sm text-center text-white text-[9px] sm:text-lg font-extralight leading-relaxed">
						<h2 className="text-sm sm:text-xl font-medium m-3 underline">{val.title}</h2>
						<p>{val.description}</p>
					</div>
				)


				)}

			</div>
		</Wrapper>
	)
}

export default Safety
