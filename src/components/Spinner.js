import React from 'react'
import loader from './loader.gif'
const Spinner = () => {
  return (
    <div class="h-100 d-flex align-items-center justify-content-center">
      <div>
        <img src={loader} alt="loading..." />
      </div>
    </div>
  )
}

export default Spinner