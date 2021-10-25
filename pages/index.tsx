export default function Home() {
  return (
    <div className="h-screen w-screen flex justify-center items-center bg-gray-200">
      <form className="w-4/12 bg-white flex flex-col rounded-md	p-4 py-8 shadow-xl">
        <input className="rounded border border-blue-200 p-1" placeholder="Your name" type="text" />
        <input className="rounded border border-blue-200 p-1 mt-4" placeholder="Your email" type="text" />
        <textarea className="rounded border border-blue-200 p-1 mt-4" placeholder="Write your message..." />
        <button className="rounded bg-blue-500 text-white p-3 mt-4 font-bold hover:bg-blue-700 duration-500">
          SEND MESSAGE
        </button>
      </form>
    </div>
  )
}
