import React from 'react'

const data = [
	{
		id: 1,
		title: "Introduction",
		description: "This WMO project on world city forecasts is to explore the wider exchange and availability of official weather information on the Internet. In view of this, a WMO-sponsored website - Day And Night (DAN) is established as a centralized source on the Internet for media to access official weather information issued by National Meteorological and Hydrological Services (NMHSs) efficiently and effectively. The DAN website is developed and maintained by the Hong Kong Observatory (HKO) of Hong Kong, Chin This global website presents OFFICIAL weather observations, weather forecast climatological information for selected cities supplied by NMHSs worldwide. The NMHSs official weather observations in their respective countries. Links to their official we service websites and tourism board/organization are also provided whenever available. We icons are shown alongside worded forecasts in this version to facilitate visual inspection. The media are welcome to make information presented in this website available to the pu When doing so, credit to the respective NMHSs should be given. By September 2023, WWIS provided official weather information for 3458 cities in which cities are available with forecast from 139 Members while 2216 cities are available climatological information from 171 Members. Suggestions to enrich the contents of this we are welcome."
	},
	{
		id: 2,
		title: "Background",
		description: "The Commission of Basic Systems (CBS) of World Meteorological Organization (WMO) at its Twelfth Session at Geneva, 27 November - 8 December 2000 discussed the need to strengthen the recognition of the public weather services that NMHSs provide through the setting up of a pilot project. The Commission agreed that a Collecting Center should be designated to collect weather forecasts supplied by participating NMHSs. The Collecting Center would generate an integrated product of major city forecasts around the world and make it available for use by all WMO Members for dissemination to the public and the medi A WMO-sponsored website - DAN is set up to display the weather information suppli participating NMHSs. The Commission agreed that Hong Kong, China, would take the lead in further developing the above concept and act as the Collecting Center. By February 2005, four language versions emerged viz. English, Arabic, Chinese and Portug At the CBS 13th Session at St. Petersburg, 23 February - 3 March 2005, the Commission agre turn the pilot project into an operational component of the Public Weather Services Prog and that the current host Members, viz. China; Hong Kong, China; Macao, China; and Oman,  continue to maintain the Chinese, English, Portuguese and Arabic versions of the DAN we respectively. The Commission also designated Hong Kong, China to serve as the coordinat DAN operation in collaboration with other WMO Membe In September 2006, Spain joined the other 4 hosts and launched the Spanish version for p access. In January 2007, France launched the French version, making the total language versions to six. In March 2009, Germany launched the German version, making the total language versions to seven. In August 2009, Italy launched the Italian version, making the total language versions to eight. In 2011, the MyWorldWeather was launched on iPhone. In March 2011, Russian Federation launched the Russian version, making the total lan versions to nine. In December 2011, Poland launched the Polish version, making the total language versions to ten. In January 2013, the Hong Kong Observatory (HKO) launched a trial version of the MyWorldWe on Android platform, which supports multiple languages including English, Spanish and Polish. In March 2013, the seven languages version of MyWorldWeather app was launched on both i and Android platforms. In August 2013, a new version of MyWorldWeather app was launched on both iPhone and And Portuguese, Polish and Spanish. In May 2014, the HKO announces that the Data Collection or Production Centre (DCPC commenced operations for the World Weather Information Service. In June, 2014, the HKO announced the launch of a newly website together with mobile sit the World Weather Information Service. In December 2015, the Hong Kong Observatory (HKO) and Korea Meteorological Administration  launched the Korean version, making the total language versions to eleven. In January 2016, a new version of MyWorldWeather app was launched on Android platfo support for Italian language."
	},
	{
		id: 3,
		title: "Objectives",
		description: "To develop and enhance the methodologies for the international exchange of public forecasts issued by NMHSs via the Internet. To provide a centralized source of official weather information on the Internet; To encourage the international media and the public to make good use of official weath information provided by NMHSs. and To enhance the visibility of NMHSs, especially those of developing countries, so as  strengthen the public recognition of the weather services they provide."
	},
]


function About() {
	return (
		<div>
			<div className="fixed top-0 bottom-0 left-0 right-0 bg-black/20 z-10" />
			<div className='relative z-20 m-5 p-4'>
				{data.map((val) => (
					<div key={val.id} className="text-white m-6 p-5 bg-black/40 rounded-xl shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] backdrop-blur-md text-[10px] md:text-lg font-light leading-relaxed">
						<h2 className="text-xl sm:text-2xl text-center font-medium m-3 underline">{val.title}</h2>
						<p>{val.description}</p>
					</div>
				))}
			</div>
		</div>
	)
}

export default About
