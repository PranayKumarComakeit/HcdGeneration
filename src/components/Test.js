import React from 'react'
import toast, { Toaster } from 'react-hot-toast';
const notify = () => 

{
    console.log('hello');
    toast.success('Always at the bottom', {
        position: 'bottom-center',
      });
}
function Test() {
  return (
    <><button onClick={notify}>Make me a toast</button></>
      )
}

export default Test