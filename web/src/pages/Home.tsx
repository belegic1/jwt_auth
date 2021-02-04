import React from 'react'
import { Link } from 'react-router-dom'
import { useUsersQuery } from '../generated/graphql'

interface Props{}

const Home:React.FC<Props> = () => {

    const {data} = useUsersQuery({fetchPolicy: 'network-only'})

    if (!data) {
        return <div>Loading...</div>
    }
    return (
        <div>
          <h1>Users:</h1>
          <ul>
              {data.users.map(x =>{
                  return(
                    <li key={x.id}>{x.email}, {x.id} </li>
                  )
              })}
          </ul>
        </div>
    )
}

export default Home
