import React from 'react'
import Wrapper from '../shared/Wrapper'
import Link from 'next/link'
import Image from 'next/image'
import logo from "../../../../public/Images/web-logo.png"
import Safety from '../../pages/safety/page'

const Header = () => {
	return (
		<div className='bg-black/40 text-zinc-300 sticky z-30'>
			<Wrapper>
				<header className=''>
					<div className='flex justify-between items-center p-2'>
						<div className='flex flex-col items-center'>
							<Image width={40} src={logo} alt='Weather Logo ' />
							<label className='text-sm font-medium' htmlFor="">Day and Night</label>
						</div>
						<div>
							<ul className='flex gap-x-6 mr-4'>
								<li className='hover:font-medium hover:underline focus:text-blue-950'><Link href={"/"}>Weather</Link></li>
								<Link className='hover:font-medium hover:underline' href={"../../pages/safety"}>Safety</Link>
								<li className='hover:font-medium hover:underline focus:text-blue-950'><Link href={"../../pages/about"}>About</Link></li>
							</ul>
						</div>
					</div>
				</header>
			</Wrapper>
		</div>
	)
}

export default Header
