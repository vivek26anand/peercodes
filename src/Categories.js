/* This example requires Tailwind CSS v2.0+ */
import { useEffect } from 'react';
import { CheckIcon } from '@heroicons/react/outline';
import ScrollReveal from 'scrollreveal';
const features = [
  {
    name: 'Clubs',
    description: 'Join 20+ Clubs ranging from competitive coding to web devlopment.',
  },
  { name: 'One On One', description: 'Interact One On One with mentors of various clubs.' },
  {
    name: 'Hangout',
    description: 'Chill in the voice chat , listen to music , talk about your interests, watch videos together and more.',
  },
  { name: 'Events', description: 'Join 100+ events we organise every year.' },
  { name: 'Mock Interviews', description: 'Practice For you interview with mock questions developed by experts.' },
  { name: 'Topic Boards', description: 'Find what you need with advanced filters, bulk actions, and quick views.' },
  { name: 'Hackathons', description: 'Compete in our weekly Hackathons' },
  { name: 'Seminars', description: 'Attended seminars we do in collaboration with companies' },
]

export default function Categories() {
  useEffect(() => {
    ScrollReveal({reset: true}).reveal('.reveal-300',{ delay: 300 });
    ScrollReveal({reset: true}).reveal('.reveal-400',{ delay: 400 });
    ScrollReveal({reset: true}).reveal('.reveal-500',{ delay: 500 });
  }, [])
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-24 lg:px-8 lg:grid lg:grid-cols-3 lg:gap-x-8">
        <div>
          <h2 className="reveal-300 text-base font-semibold text-indigo-600 uppercase tracking-wide">Everything you need</h2>
          <p className="reveal-400 mt-2 text-3xl font-extrabold text-gray-900">All-in-one Community</p>
          <p className="reveal-400 mt-4 text-lg text-gray-500">
            from learning to placement
          </p>
        </div>
        <div className="mt-12 lg:mt-0 lg:col-span-2">
          <dl className="space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 sm:grid-rows-4 sm:grid-flow-col sm:gap-x-6 sm:gap-y-10 lg:gap-x-8">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <dt className='reveal-400'>
                  <CheckIcon className="absolute h-6 w-6 text-green-500" aria-hidden="true" />
                  <p className="ml-9 text-lg leading-6 font-medium text-gray-900">{feature.name}</p>
                </dt>
                <dd className="reveal-500 mt-2 ml-9 text-base text-gray-500">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
