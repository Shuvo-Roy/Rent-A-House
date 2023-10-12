export default function UserInfo({user}) {
    return (
      <div className="flex flex-col items-center">
        <div className="flex flex-col px-4 sm:px-0">
          <h3 className="text-base font-semibold leading-7 text-gray-900">User Information</h3>
        </div>
        <div className="mt-6 border-t border-gray-300">
          <dl className="divide-y divide-gray-300">
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-gray-900">Full name</dt>
              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{user.name}</dd>
            </div>
            
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-gray-900">Email address</dt>
              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{user.email}</dd>
            </div>
          </dl>
        </div>
      </div>
    )
  }