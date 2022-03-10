/* This example requires Tailwind CSS v2.0+ */
const people = [{"name":"Brittany Snyder","role":"Coder","imageUrl":"https://randomuser.me/api/portraits/thumb/women/8.jpg"},{"name":"Jorge Carter","role":"Coder","imageUrl":"https://randomuser.me/api/portraits/thumb/men/8.jpg"},{"name":"Ming Heidstra","role":"Coder","imageUrl":"https://randomuser.me/api/portraits/thumb/men/56.jpg"},{"name":"Mathias Schwalbe","role":"Coder","imageUrl":"https://randomuser.me/api/portraits/thumb/men/82.jpg"},{"name":"Victoria Gibson","role":"Coder","imageUrl":"https://randomuser.me/api/portraits/thumb/women/89.jpg"},{"name":"Gabriel Castro","role":"Coder","imageUrl":"https://randomuser.me/api/portraits/thumb/men/22.jpg"},{"name":"Ernest Crawford","role":"Coder","imageUrl":"https://randomuser.me/api/portraits/thumb/men/61.jpg"},{"name":"Múcio Mendes","role":"Coder","imageUrl":"https://randomuser.me/api/portraits/thumb/men/83.jpg"},{"name":"Torbjørn Heggedal","role":"Coder","imageUrl":"https://randomuser.me/api/portraits/thumb/men/86.jpg"},{"name":"Leila Martins","role":"Coder","imageUrl":"https://randomuser.me/api/portraits/thumb/women/53.jpg"},{"name":"Gustav Møller","role":"Coder","imageUrl":"https://randomuser.me/api/portraits/thumb/men/13.jpg"},{"name":"Maeva Martin","role":"Coder","imageUrl":"https://randomuser.me/api/portraits/thumb/women/24.jpg"},{"name":"Tilia Grande","role":"Coder","imageUrl":"https://randomuser.me/api/portraits/thumb/women/88.jpg"},{"name":"Olivia Hopkins","role":"Coder","imageUrl":"https://randomuser.me/api/portraits/thumb/women/89.jpg"},{"name":"Ethan Walker","role":"Coder","imageUrl":"https://randomuser.me/api/portraits/thumb/men/21.jpg"}]
  
  export default function Members() {
    return (
      <div className="bg-white">
        <div className="max-w-7xl mx-auto py-12 px-4 text-center sm:px-6 lg:px-8 lg:py-24">
          <div className="space-y-8 sm:space-y-12">
            <div className="space-y-5 sm:mx-auto sm:max-w-xl sm:space-y-4 lg:max-w-5xl">
              <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">The People</h2>
              <p className="text-xl text-gray-500">
                Meet some of our exciting members
              </p>
            </div>
            <ul
              role="list"
              className="mx-auto grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-4 md:gap-x-6 lg:max-w-5xl lg:gap-x-8 lg:gap-y-12 xl:grid-cols-6"
            >
              {people.map((person) => (
                <li key={person.name}>
                  <div className="space-y-4">
                    <img className="mx-auto h-20 w-20 rounded-full lg:w-24 lg:h-24" src={person.imageUrl} alt="" />
                    <div className="space-y-2">
                      <div className="text-xs font-medium lg:text-sm">
                        <h3>{person.name}</h3>
                        <p className="text-indigo-600">{person.role}</p>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
  