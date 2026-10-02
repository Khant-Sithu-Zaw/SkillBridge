import React, { useState } from 'react'

const usePopup = () => {
  const [open,setOpen]=useState(false)
  const togglePopup = () => {
    setOpen(!open);
  }
  return { open, togglePopup };
}

export default usePopup