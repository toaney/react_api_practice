import React, { useEffect, useState } from 'react';
import axios from 'axios';

const User = () => {
  let [ userData, setUserData ] = useState('');
  // const getUsers = () => {
  //   return axios.get("https://randomuser.me/api/")
  //     // handle success
  //     .then( data => {
  //       console.log(data)
  //     })
  //     .catch( err => {
  //       console.log(err)
  //     })
  // }

  // async function asyncUsers(){
  //   let promise = new Promise((resolve, reject) => {
  //     resolve()
  //   })
  // }

  // let asyncUser = async () => {
  //   let response = await fetch("https://randomuser.me/api/");
  //   let user = await response.json();
  //   console.log(user);
  //   setUserData(JSON.stringify(user.results[0], null, 2))
  // };

  // let fetchUser = () => {
  //   fetch(
  //     "https://randomuser.me/api/", 
  //     {
  //       method: "GET"
  //     }
  //   )
  //   .then(res => res.json())
  //   .then(response => {
  //     console.log(response)
  //     setUserData(JSON.stringify(response.results[0], null, 2))
  //   })
  //   .catch(error => console.log(error));
  // }

  // const fetchUser = () => {
  //   fetch(https://randomuser.me/api/, )
  // }
  

  let fetchUser = async () => {
    let res = await fetch("https://randomuser.me/api/");
    let user = await res.json();
    console.log(res);
    setUserData(JSON.stringify(user))
  }

  useEffect( () => {
    fetchUser();
  }, [])

  return(
    <>
    <h4>User</h4>
    <p>{userData}</p>
    </>
  )
}

export default User;