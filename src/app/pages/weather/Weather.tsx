"use client"
import Image from 'next/image'
import Wrapper from '@/app/components/shared/Wrapper'
import React, { FormEvent, useState } from 'react'
import { BsSearch } from "react-icons/bs"
import axios from "axios"
import Poem from '../poem/Poem'


const Weather = () => {


	const [weatherData, setweatherData] = useState<Weather>()
	const [city, setCity] = useState("")
	const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${process.env.NEXT_PUBLIC_WEATHER_KEY}`;
	const [isAllow, setIsAllow] = useState<boolean>(true)
	const [isCorrect, setIsCorrect] = useState<boolean>(false)

	// form submit function
	const formHandler = (e: FormEvent) => {
		e.preventDefault();
	
		
		// callApi()
		axios.get(url).then(res => {

			setweatherData(res.data);
			// console.log(res.data);
			setIsAllow(false);
			setIsCorrect(false)

		}).catch((err) => {
			
			setIsAllow(false);
			setIsCorrect(true)
		})
	
		setCity('')

	}
	if (isAllow) {

		return (
			<Wrapper>
				<div className="fixed top-0 bottom-0 left-0 right-0  bg-black/40 z-10" />
				<div className='p-3'>
					<section className=" text-white border relative z-20 border-gray-400 rounded-2xl w-full sm:w-1/2 mx-auto m-5">
						<form className='flex justify-between p-3 ' onSubmit={formHandler}>
							<input
								placeholder='Search City here!'
								className='bg-transparent border-none focus:outline-none text-xl w-full' type="text"
								onChange={(e) => setCity(e.target.value)}
							/>
							<button type='submit'>
								<BsSearch size={20} />
							</button>
						</form>
					</section>
				</div>
				<div className='p-3'>
					<Poem />
				</div>
			</Wrapper>
		)
	} else if (isCorrect) {

		return (
			<Wrapper>
				<div className="fixed top-0 bottom-0 left-0 right-0 bg-black/40 z-10" />
				<section className="text-white border relative z-20 border-gray-400 rounded-2xl w-full sm:w-1/2 mx-auto m-5">
					<form className='flex justify-between p-3 ' onSubmit={formHandler}>
						<input
							placeholder='Search City here!'
							className='bg-transparent border-none focus:outline-none text-xl w-full' type="text"
							onChange={(e) => setCity(e.target.value)}
						/>
						<button type='submit'>
							<BsSearch size={20} />
						</button>
					</form>
				</section>
				<div className='flex justify-center text-center items-center backdrop-blur-sm relative z-20 w-1/2 m-auto my-20 h-80 text-4xl sm:text-6xl text-red-800 bg-black/30  shadow-2xl '><p className=''>City Not found ⚠︎</p></div>
			</Wrapper>
		)

	} else {
		return (
			<div>
				<div className="fixed top-0 bottom-0 left-0 right-0 bg-black/40 z-10" />
				<div className='relative z-20 p-3'>
					<Wrapper>
						<section className="text-white w-full sm:w-1/2 border border-gray-400 rounded-2xl mx-auto m-5">
							<form className='flex  justify-between p-3 ' onSubmit={formHandler}>
								<input
									placeholder='Search City here!'
									className='bg-transparent border-none focus:outline-none text-xl w-full' type="text"
									onChange={(e) => setCity(e.target.value)}
								/>
								<button type='submit'>
									<BsSearch size={20} />
								</button>
							</form>
						</section>

						{/* upper part */}
						<section className="text-white space-x-10 flex justify-evenly m-11 items-center">
							<div className='flex flex-col items-center '>
								<Image
									src={`http://openweathermap.org/img/wn/${weatherData?.weather[0].icon}@2x.png`}
									alt='/'
									width='100'
									height='100'
								/>
								<p className='text-2xl'>{weatherData?.weather[0].main}</p>
							</div>
							<div className="text-6xl sm:text-8xl">{((weatherData!.main.temp-32)* (5/9) ).toFixed(2)}&#176;</div>
						</section>

						{/* botoom part */}
						<section className="text-white rounded-xl w-full sm:w-1/2 mt-32 m-auto  bg-black/40 p-7 text-xl font-light">
							<p className='text-center text-2xl m-2 mb-11'>Weather in <span className='font-medium'>{weatherData?.name}</span></p>
							<div className='flex justify-between flex-col gap-5 md:flex-row m-3 mt-6'>
								<div className="flex flex-col items-center">
									<p>{weatherData?.main.humidity}%</p>
									<p>Humidity</p>
								</div>
								<div className="flex flex-col items-center">
									<p>{weatherData?.main.feels_like.toFixed(0)}&#176;</p>
									<p>Feels Like</p>
								</div>
								<div className="flex flex-col items-center">
									<p>{weatherData?.wind.speed} MPH</p>
									<p>Speed</p>
								</div>
							</div>
						</section>
					</Wrapper>
				</div>
			</div>

		)
	}
}

export default Weather
