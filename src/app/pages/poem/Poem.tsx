import Wrapper from '@/app/components/shared/Wrapper'
import React from 'react'

function Poem() {
	return (
		<section className='text-white'>
			<Wrapper>
				<div className='relative z-20 flex justify-around mt-20 m-4 text-3xl font-serif' >


				</div>
				<div className='flex gap-5 relative z-20 flex-col lg:flex-row items-center lg:items-stretch'>
					<div className='flex flex-col items-center gap-3'>
						<h2 className='text-xl sm:text-2xl font-serif'>“The Windy Day”</h2>
						<div className='font-light md:text-xl shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] w-full  rounded-xl backdrop-blur-sm bg-white/5 text-center p-7 leading-relaxed'>
							It started this morning
							with the gentlest of breeze -
							barely enough to rustle
							the leaves in the trees.

							By noon it was blowing
							at more of a pace.
							Enough to spread objects
							all over the place.

							All afternoon, it blew
							with more and more might.
							Snapped branches and bushes
							disappearing from sight.

							It dragged me about,
							and pulled me around.
							Lifting both of my feet
							clear up off the ground.

							Eventually it dumped me
							from quite a great height,
							and I landed up here,
							still holding my kite.

							Which is how I’ll explain
							what happened to me,
							if I ever get down
							from the top of this tree.
						</div>
					</div>
					<div className='flex flex-col items-center gap-3'>
						<h2 className='text-xl sm:text-2xl font-serif'>“Saving For A Rainy Day” </h2>
						<div className='font-light flex-1  md:text-xl rounded-xl w-full  shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px]  relative z-20 backdrop-blur-sm  bg-white/5 text-center p-7 leading-relaxed'>
							I pretended all Summer,
							they didn’t exist,
							but with Autumn arriving,
							I’ll get out my list.

							There’s a puzzle on the shelf
							I’ll be fetching down soon,
							and a book at my bedside
							I haven’t opened since June.

							There are cobwebs need cleaning,
							toys under the bed,
							and more hair in my hairbrush,
							than there is on my head.

							There are socks spread widely
							all over the place,
							and clothes that need folding
							piled on each space.

							I have cousins to write to,
							and friends I should phone
							having missed a few birthdays:
							an omission I’ll own.

							I have a list full of tasks,
							It’s important to be saving
							for the next rainy day.
						</div>
					</div>
				</div>
			</Wrapper>
		</section>
	)
}

export default Poem
