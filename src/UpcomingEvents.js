/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react'
import {
  CalendarIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  DotsHorizontalIcon,
  LocationMarkerIcon,
} from '@heroicons/react/solid'
import { Menu, Transition } from '@headlessui/react'

const events = [
  {
    id: 1,
    date: 'March 15th, 2022',
    time: '5:00 PM',
    datetime: '2022-03-15T17:00',
    name: 'Coding Champ',
    imageUrl:
      'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y29kaW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    location: 'Online',
  },
]

export default function UpcomingEvents() {
  return (
    <div className='max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-24 lg:px-8 text'>
      <h2 className="text-lg font-semibold text-gray-900">Upcoming Events</h2>
      <div className="lg:grid lg:grid-cols-12 lg:gap-x-16">
        <ol className="mt-4 divide-y divide-gray-100 text-sm leading-6 lg:col-span-7 xl:col-span-8">
          {events.map((meeting) => (
            <li key={meeting.id} className="relative flex space-x-6 py-6 xl:static">
              <img src={meeting.imageUrl} alt="" className="h-14 w-14 flex-none rounded-full" />
              <div className="flex-auto">
                <h3 className="pr-10 font-semibold text-gray-900 xl:pr-0">{meeting.name}</h3>
                <dl className="mt-2 flex flex-col text-gray-500 xl:flex-row">
                  <div className="flex items-start space-x-3">
                    <dt className="mt-0.5">
                      <span className="sr-only">Date</span>
                      <CalendarIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                    </dt>
                    <dd>
                      <time dateTime={meeting.datetime}>
                        {meeting.date} at {meeting.time}
                      </time>
                    </dd>
                  </div>
                  <div className="mt-2 flex items-start space-x-3 xl:mt-0 xl:ml-3.5 xl:border-l xl:border-gray-400 xl:border-opacity-50 xl:pl-3.5">
                    <dt className="mt-0.5">
                      <span className="sr-only">Location</span>
                      <LocationMarkerIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                    </dt>
                    <dd>{meeting.location}</dd>
                  </div>
                </dl>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </div>
  )
}
