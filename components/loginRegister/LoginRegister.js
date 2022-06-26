//import {useState} from 'react'
import Form from "./Form"
import Gun from 'gun/gun'
import 'gun/sea'
//import 'gun/axe'
import Router from 'next/router';



var gun = Gun({
  peers: [
    'http://localhost:3030/gun'
  ]
});
var user = gun.user().recall({ sessionStorage: true });
export default function LoginRegister() {
  const login = (data) => {
    //console.log(data);
    user.auth(data.email, data.password, function (ack) {
      console.log("Authorised!");
    });
    Router.push('/')
  }
  const register = (data) => {
    // console.log(data);
    user.create(data.email, data.password, function (ack) {
      console.log("Created!", ack.pub)
      user.auth(data.email, data.password, function (ack) {
        console.log("Authorised!");
      });
    });
    Router.push('/')
  }

  // Current User's username
  //const [usernameState, setusername] = useState('')
  var username = ''

  //user.get('alias').on(v => username = v)

  gun.on('auth', async(event) => {
    console.log('checking')
    const alias = await user.get('alias'); // username string
    username = alias;

    console.log(`signed in as ${alias}`);
  });

  return (
    <div style={{ display: 'flex' }}>
      <Form
        func={login}
        type={'login'}
      />
      <Form
        func={register}
        type={'register'}
      />
    </div>
  )
}