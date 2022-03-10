const people = [
  {"name":"Vaneet Bhagat","role":"Moderator","imageUrl":"https://randomuser.me/api/portraits/thumb/men/12.jpg"},
  {"name":"Ananya Halder","role":"Event Manager","imageUrl":"https://randomuser.me/api/portraits/thumb/women/28.jpg"},
  {"name":"Kamala Naik","role":"Mentor","imageUrl":"https://randomuser.me/api/portraits/thumb/women/31.jpg"},
  {"name":"Jeremy Bowman","role":"Placement Mentor","imageUrl":"https://randomuser.me/api/portraits/thumb/men/51.jpg"},
  {"name":"Dhruv Narayan","role":"Moderator","imageUrl":"https://randomuser.me/api/portraits/thumb/men/69.jpg"}]
  
  export default function CoreTeam() {
    return (
      <div className="bg-white">
        <div className="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3 lg:gap-8">
            <div className="space-y-5 sm:space-y-4">
              <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">Meet our Core Team</h2>
              <p className="text-xl text-gray-500">
                People who keep peerCodes active and our community healthy
              </p>
            </div>
            <div className="lg:col-span-2">
              <ul role="list" className="space-y-12 sm:grid sm:grid-cols-2 sm:gap-12 sm:space-y-0 lg:gap-x-8">
                {people.map((person) => (
                  <li key={person.name}>
                    <div className="flex items-center space-x-4 lg:space-x-6">
                      <img className="w-16 h-16 rounded-full lg:w-20 lg:h-20" src={person.imageUrl} alt="" />
                      <div className="font-medium text-lg leading-6 space-y-1">
                        <h3>{person.name}</h3>
                        <p className="text-indigo-600">{person.role}</p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
  