
import React, { useEffect, useState } from 'react'
import withLoading from './components/withLoading'
import UserList from './components/UserList'
import { use } from 'react';
// import Form from './components/Form'

const App = () => {

  const UserComponent = withLoading(UserList);

  const [users,setUsers] = useState([]);
  const [loading,setLoading] = useState(true);

  useEffect(()=>{

    setTimeout(()=>{
      setUsers(["Bhakti","Janvi","Shubham","Honey","Jayanti"]);
      setLoading(false);
    },5000)

  },[])

  return (
    <div>
        <h1>Flipcart</h1>
        {/* <Form/> */}

        <UserComponent isLoading={loading} users={users} />

    </div>
  )
}

export default App