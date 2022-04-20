import { Disclosure } from '@headlessui/react'
import { ChevronLeftIcon } from "@heroicons/react/outline";
import  clsx  from 'clsx';




type Props = {}

const ListElementEditor = (props: Props) => {
  return (
    <div className='pr-4'>
    <Disclosure>
    {({ open }) => (
      <>
        <Disclosure.Button className='flex uppercase text-xl font-medium items-center justify-between p-4 border-b border-r w-full'>
          <div>layout</div>
          {/*
            Use the `open` render prop to rotate the icon when the panel is open
          */}
          <div className='w-6 h-6'>
          <ChevronLeftIcon
            className={clsx('h-full w-full', open && 'transform -rotate-90')}
          />
          </div>
        </Disclosure.Button>

        <Disclosure.Panel>Lorem ipsum</Disclosure.Panel>
      </>
    )}
  </Disclosure>
  <Disclosure>
    {({ open }) => (
      <>
        <Disclosure.Button className='flex uppercase text-xl font-medium items-center justify-between p-4 border-b border-r w-full'>
          <div>content</div>
          {/*
            Use the `open` render prop to rotate the icon when the panel is open
          */}
          <div className='w-6 h-6'>
          <ChevronLeftIcon
            className={clsx('h-full w-full transform transition-all', open && '-rotate-90')}
          />
          </div>
        </Disclosure.Button>

        <Disclosure.Panel className='flex justify-center items-center'>Lorem ipsum</Disclosure.Panel>
      </>
    )}
  </Disclosure>
    </div>
    )
}

export default ListElementEditor