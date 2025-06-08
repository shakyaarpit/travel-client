import { ToastContainer, toast } from 'react-toastify';

export let handleError = (msg)=>{
    toast.error(msg,{position:'top-right'})
}

export let handleSuccess = (msg)=>{
    toast.success(msg,{position:'top-right'})
}
export let handleWarn = (msg)=>{
    toast.warn(msg,{position:'top-right'})
}