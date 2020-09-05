import React, { useState, useEffect } from 'react'

export default function User({ id }) {

   useEffect(() => {
      console.log('Manik')
   }, [])

   const [state, setstate] = useState(null)

   async function get() {
      const resp = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
      const data = await resp.json()
      setstate(data.title)
   }

   useEffect(() => {
      get()
   }, [])

   return (
      <div>
         {!state && <p>Loading......</p>}
         {state && <p>{state}</p>}
      </div>
   )
}
