"use client"

import { useState } from 'react'
import Wrapper from '../shared/Wrapper'
import Link from 'next/link'
import Image from 'next/image'
import logo from "../../../../public/Images/web-logo.png"
import humbergerUnclicked from "../../../../public/Images/clickIcon.png"
import humbergerClicked from "../../../../public/Images/crossIcon.png"
// import Safety from '../../pages/safety/page'

const Header = () => {
	const [isClick, setIsClick] = useState(false);

	const clicked = () => {
		setIsClick(!isClick)
	}
	return (
		<div className={`bg-black/40 text-zinc-300 sticky z-30`}>
			<Wrapper>
				<header className=''>
					<div className='flex justify-between items-center p-2'>
						<div className='flex flex-col items-center hover:cursor-pointer'>
							<Link href={"/"}><Image width={40} src={logo} alt='Weather Logo ' /></Link>
							<label className='text-sm font-medium' htmlFor="">Day and Night</label>
						</div>
						<div className='sm:block hidden'>
							<ul className='flex gap-x-6 mr-4'>
								<li className='hover:font-medium hover:underline focus:text-blue-950'><Link href={"/"}>Weather</Link></li>
								<Link className='hover:font-medium hover:underline' href={"../../pages/safety"}>Safety</Link>

								<li className='hover:font-medium hover:underline focus:text-blue-950'><Link href={"../../pages/about"}>About</Link></li>
							</ul>
						</div>
						<div onClick={clicked} className='sm:hidden block hover:cursor-pointer'>
							{isClick ? (
								<Image width={40} src={humbergerClicked} alt='Cross' />
							) : (
								<Image width={40} src={humbergerUnclicked} alt='Click' />
							)}
						</div>
					</div>
					{isClick && <div>
						<ul className='flex flex-col items-center gap-3 bg-black p-3'>

							<li className='hover:font-medium hover:underline focus:text-blue-950'>
								<Link onClick={clicked} href={"/"}>Weather</Link>
							</li>
							<p className='bg-red-600 w-1/2 h-0.5 '></p>
							<li className='hover:font-medium hover:underline'>
								<Link onClick={clicked} href={"../../pages/safety"}>Safety</Link>
							</li>
							<p className='bg-red-600 w-1/2 h-0.5 '></p>
							<li className='hover:font-medium hover:underline focus:text-blue-950'>
								<Link onClick={clicked} href={"../../pages/about"}>About</Link>
							</li>
							<p className='bg-red-600 w-1/2 h-0.5 '></p>
						</ul>
					</div>}
				</header>
			</Wrapper>
		</div>
	)
}

export default Header
