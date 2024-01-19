// import React from 'react'
// import { useLoaderData } from 'react-router-dom'

// function Github() {
//     const data = useLoaderData()
//     // const [data, setData] = useState([])
//     // useEffect(()=>{
//     //     fetch('https://api.github.com/users/LuckyBairwa')
//     //     .then(response =>{
//     //         response.json()
//     //     })
//     //     .then (data =>{
//     //         console.log(data);
//     //         setData(data)
//     //     })
//     // },[])
//   return (
//     <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>Github followers: {data.followers}
//     <img src={data.avatar_url} alt="Git Picture" width={300} />
//     </div>
    
//   )
// }

// export default Github



import React from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData()

    return (
        <div className='text-center m-4 text-white p-4 text-3xl bg-teal-600'>
            Github followers: {data.followers}
            <div className='flex justify-center items-center'>
              <img src={data.avatar_url} alt="Git Avatar" width={300}  className="mt-4 rounded-full hover:ring-2 ring-blue-500 transition-all duration-300" />
            </div>
            
        </div>
    )
}

export default Github




export const githubInfoLoader = async() =>{
  const response = await fetch('https://api.github.com/users/LuckyBairwa')
  return response.json()
}





