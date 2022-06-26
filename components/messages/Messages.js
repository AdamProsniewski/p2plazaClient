import { useEffect, useState} from 'react'
import Gun from 'gun/gun'
import 'gun/sea'
import Ajv from "ajv"
import Message from '../message/Message'
import Create from '../create/Create'
import Router from 'next/router';
const ajv = new Ajv()
ajv.addKeyword('isNotEmpty', {
  type: 'string',
  validate: function (schema, data) {
    return typeof data === 'string' && data.trim() !== ''
  },
  errors: false
})
const schema = {
  type: "object",
  properties: {
    name: {type: "string", "isNotEmpty": true},
    message: {type: "string", "isNotEmpty": true,}
  },
  required: ["name","message"],
}
// initialize gun locally
// sync with as many peers as you would like by passing in an array of network uris
const gun = Gun({
    peers: [
      'http://localhost:3030/gun'
    ]
  })
  //Getting logged user
  const user = gun.user().recall({ sessionStorage: true });
  var username = ''

  //user.get('alias').on(v => username = v)

  gun.on('auth', async(event) => {
    console.log('checking')
    const alias = await user.get('alias'); // username string
    username = alias;

    console.log(`signed in as ${alias}`);
    return username
  });

export default function Messages(){
    // the form state manages the form input for creating a new message
  const [formState, setForm] = useState({
    name: '', message: '', category: '', description: ''
  })

  const [messagesState, setMessages] = useState([])
  //.once - every time new message comes through it passes it to dispatch - updates the local state
  useEffect(() => {
    console.log('running initial')
    const Allmessages = gun.get('messages')
    Allmessages.map().once(m => {
      console.log('running once')
      setMessages(
        oldArray => [...oldArray, {
          name: m.name,
          message: m.message,
          category: m.category,
          description: m.description,
          createdAt: m.createdAt}]
      )
    })
  }, [])


  function validation(message){
    const validate = ajv.compile(schema)
    const validated = validate(message)
    if (!validated) console.log(validate.errors)
    return validated
  }


  // set a new message in gun, update the local state to reset the form field
  function saveMessage() {
    const messages = gun.get('messages')
    const newmessage = {
      name: username,
      message: formState.message,
      category: formState.category,
      description: formState.description,
      createdAt: Date(Date.now()).toString().replace('(uniwersalny czas koordynowany)', '')
    }
    const valid = validation(newmessage)
    if(valid){
      messages.set({
        ...newmessage
      })
      setForm({
        name: '', message: '',category: '', description: ''
      })
      console.log('saving message')
    }
    
  }

  function onChange(e) {
    setForm({ ...formState, [e.target.name]: e.target.value  })
  }

//   function backupData() {

//     var a = {};
//     for (var i = 0; i < localStorage.length; i++) {
//       var k = localStorage.key(i);
//       var v = localStorage.getItem(k);
//       a[k] = v;
//     }
//     var s = JSON.stringify(a);
//     console.log(s);
//     return s;
//   }

//   function writeLocalStorage(data) {
//     localStorage.clear()
//     var o = JSON.parse(data);
//     for (var property in o) {
//         if (o.hasOwnProperty(property)) {
//             localStorage.setItem(property, o[property]);
//         }
//     }
// }
  const [isOpen, setIsOpen] = useState(false);
 
  const togglePopup = () => {
  setIsOpen(!isOpen);
}

  return (
    <div style={{ padding: 30 }}>
      {/* <input
        onChange={onChange}
        placeholder="Name"
        name="name"
        value={formState.name}
      />
      <input
        onChange={onChange}
        placeholder="Message"
        name="message"
        className="my-3 border-none bg-transparent outline-none focus:outline-none rounded-2xl bg-gray-50 px-4 ring-2 ring-gray-200"
        value={formState.message}
      /> */}
      {/* <button onClick={saveMessage} className="bg-pink-800 px-5 py-3 text-sm shadow-sm font-medium tracking-wider  text-pink-100 rounded-full hover:shadow-2xl hover:bg-pink-900">Send Message </button> */}

  <div>
    <button onClick={togglePopup} className="bg-pink-800 px-5 py-3 text-sm shadow-sm font-medium tracking-wider  text-pink-100 rounded-full hover:shadow-2xl hover:bg-pink-900">Message </button>
    {isOpen && <Create
      handleClose={togglePopup}
      onChange = {onChange}
      saveMessage = {saveMessage}
      state = {formState}
    />}
  </div>

      {
        messagesState.map(message => (
          <Message 
            key = {message.createdAt}
            {...message}
          />
        ))
      }
    </div>
  );
}