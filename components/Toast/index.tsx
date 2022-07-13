/* eslint-disable import/no-anonymous-default-export */
import React from 'react'
import { ToastContainer as ReactToastifyContainer, toast, ToastOptions } from 'react-toastify'

export type ToastType = 'info' | 'success' | 'warning' | 'error'

const ToastContainer: React.FC = () => {
  return (
    <ReactToastifyContainer
      position="bottom-right"
      autoClose={2000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
    />
  )
}

const toastOptions: ToastOptions = {
  position: 'top-right',
  autoClose: 2000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
}

const notify = (type: ToastType, message: string) => {
  toast[type](message, toastOptions)
}

export default {
  ToastContainer,
  notify,
}
