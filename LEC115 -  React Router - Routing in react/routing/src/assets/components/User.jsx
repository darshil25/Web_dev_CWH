import React from 'react'
import { useParams } from 'react-router-dom'

const User = () => {
  const params = useParams()
  return (
    <div>I am User and my name is {params.username}</div>
  )
}

export default User