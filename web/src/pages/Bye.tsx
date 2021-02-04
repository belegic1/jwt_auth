import React from 'react'
import { useByeQuery } from '../generated/graphql'


interface Props{}
const Bye:React.FC<Props> = () => {
    const {data,loading,error} = useByeQuery({
        fetchPolicy: 'network-only'
    })

    if (error) {
        console.log(error);
        
        return <div>err</div>
    }
    if (loading) {
        return <div>Loading..</div>
    }
    if (!data) {
        return <div>no data</div>
    }
    return (
        <div>
            {data.bye}
        </div>
    )
}

export default Bye
