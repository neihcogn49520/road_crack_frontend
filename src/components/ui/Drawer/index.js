import 'react-modern-drawer/dist/index.css';
import Drawer from 'react-modern-drawer';

export default function DrawerForm({ drawerTitle, isOpen, toggleOpen, children }) {
  return (
    <Drawer
      open={isOpen}
      onClose={toggleOpen}
      direction='right'
      size={800}
    >
      <div className='bg-sky-600 w-full h-14 px-3'>
        <h1 className='  font-semibold inline-flex text-left text-2xl px-4 py-2 text-white'>{drawerTitle}</h1>
        <button onClick={toggleOpen} className='float-right py-3 inline-flex items-center '>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      <div className='p-5'>{children}</div>
    </Drawer>
  )
}