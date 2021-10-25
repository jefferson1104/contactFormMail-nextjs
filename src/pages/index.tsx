import { FormEvent, useState } from "react";
import toast, { Toaster } from 'react-hot-toast';
import { api } from "../services/api";

export default function Home() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  function sendEmail(event: FormEvent) {
    event.preventDefault();

    const formData = {
      name,
      email,
      message
    }

    api.post('/mail', formData)
    .then((response) => {
      console.log(response);
      setName('');
      setEmail('');
      setMessage('');
      toast.success('Email successfully sent!');
    })
    .catch((error) => {
      console.log(error);
      toast.error("An error has occurred!")
    });  
  };

  return (
    <div className="h-screen w-screen flex justify-center items-center bg-gray-200">
      <form 
        className="w-4/12 bg-white flex flex-col rounded-md	p-4 py-8 shadow-xl"
        onSubmit={sendEmail}
      >
        <input 
          className="rounded border border-blue-200 p-1" 
          placeholder="Your name" 
          type="text"
          value={name} 
          onChange={event => setName(event.target.value)} 
        />

        <input 
          className="rounded border border-blue-200 p-1 mt-4" 
          placeholder="Your email" 
          type="email" 
          value={email} 
          onChange={event => setEmail(event.target.value)} 
        />
        <textarea 
          className="rounded border border-blue-200 p-1 mt-4" 
          placeholder="Write your message..." 
          value={message} 
          onChange={event => setMessage(event.target.value)} 
        />

        <button 
          className="rounded bg-blue-500 text-white p-3 mt-4 font-bold hover:bg-blue-700 duration-500"
          type="submit"
        >
          SEND MESSAGE
        </button>
        <Toaster
          position="top-center"
          reverseOrder={false}
        />
      </form>
    </div>
  )
}
