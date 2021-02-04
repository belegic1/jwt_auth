import React, { useEffect, useState } from 'react'
import { setAccessToken } from './accessToken'
import Routes from './Routes'


interface Props{}
const App:React.FC<Props> = () => {
    const [loading,setLoading] =  useState(true)

    useEffect(() => {
        fetch("http://localhost:4000/refresh_token", {
          method: "POST",
          credentials: "include",
        }).then(async (x) => {
          const { accessToken } = await x.json();
          setAccessToken(accessToken);
          setLoading(false);
        });

        // const getToken = async ()=>{
        //     const {data} = await axios.post(
        //       "http://localhost:4000/refresh_token",
        //       {
        //           credentials: 'include'
        //       }
        //     );
        //       setAccessToken(data.accessToken);
        //       setLoading(false)
        // }
        // getToken()
    }, [])

    if (loading) {
        return <div>Loadig....</div>
    }
    return (
        <Routes/>
    )
}

export default App
