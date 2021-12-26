import {useState} from "react";
import { Transition } from '@tailwindui/react'

function App() {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
    <div className="App flex justify-center items-center h-full min-h-screen">
      <button className="bg-gray-50 border-2 rounded-md border-indigo-500 text-indigo-500 py-2 px-8 hover:bg-indigo-500 hover:text-white transition-all hover:shadow-lg" onClick={() => setShowModal(!showModal)}>Click Me</button>
    </div>
    <Transition
     show={showModal}
     enter="transition-opacity duration-300"
     enterFrom="opacity-0"
     enterTo="opacity-100"
     leave="transition-opacity duration-300"
     leaveFrom="opacity-100"
     leaveTo="opacity-0">
        <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none bg-gray-100">
          <div className=" opacity-60 fixed inset-0 z-40 bg-black"></div>
            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:mx-0 mx-2 z-50">
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <div className="flex justify-between">
                      <div className="text-lg leading-6 font-medium text-gray-900">
                        React Popup with Tailwind CSS
                      </div>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 cursor-pointer hover:text-indigo-500" onClick = {() => setShowModal(false)} viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="mt-2">
                      <p className="text-sm text-gray-500">
                        Are you sure you want to deactivate your account? All of your data will be permanently removed.
                        This action cannot be undone. Are you sure you want to deactivate your account? All of your data will be permanently removed. This action cannot be undone.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <button
                  type="button"
                  className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:ml-3 sm:w-auto sm:text-sm"
                  onClick={() => setShowModal(false)}
                >
                  Close
                </button>
                <button
                  type="button"
                  className="mt-3 w-full inline-flex justify-center rounded-md border border-indigo-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-indigo-700 hover:bg-gray-50 focus:outline-none focus:ring-1 focus:ring-offset-1 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                  onClick={() => setShowModal(false)}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
      </Transition>
    </>
  );
}

export default App;
