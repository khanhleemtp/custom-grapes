import React from 'react'
import { ViewGridAddIcon} from '@heroicons/react/outline'
type Props = {}

const Navbar: React.FC<Props> = ({children}) => {
  return (
    <div className='divide-y divide-gray-400'>
      <div className='h-16 border p-2 w-full'>
        <div className='flex justify-between items-center w-full h-full'>
        <div className='flex space-x-2 h-full'>
          <button className='h-full bg-gray-200 px-4 rounded-lg flex items-center space-x-1 hover:bg-gray-100'>
              <ViewGridAddIcon className='w-6 h-6 text-gray-600'/>
      <p className='font-semibold'>
            Library
      </p>
            </button>
          <div>Undo</div>
          <div>Redo</div>
        </div>
        <div className='flex space-x-2'>
          <div>PC</div>
          <div>Mobile</div>
          <div>Tablet</div>
        </div>
        <div className='flex space-x-2'>
          <div>History</div>
          <div>Preview</div>
        </div>
        </div>
      </div>
      <div>
      {children}
      </div>
    </div>
  )
}
export default Navbar