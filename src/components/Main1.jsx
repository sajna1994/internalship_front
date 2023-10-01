import React from 'react'
import Header from './Header'


const Main1 = (props) => {
  return (
    <div>
<Header/>
{props.child}
    </div>
  )
}

export default Main1