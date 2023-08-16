import "react-chat-elements/dist/main.css";
import { MessageBox } from "react-chat-elements";

import { IoMdSend } from "react-icons/io";

function App() {
  return (
    <div className="h-[100vh] flex justify-center items-center">
      <div className="bg-blue-200 h-[100vh] w-[60vh] flex flex-col justify-between">
        <div className="flex flex-col gap-5 pt-3">
          <MessageBox position={"left"} type={"text"} title={"John"} text="Hi !" />
          <MessageBox position={"right"} type={"text"} title={"Doe"} text="Hi, How are you?" />
        </div>

        <div>
          <form>
            <div className="relative">
              <input type="search" id="default-search" className="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 border border-gray-300 focus:outline-none" placeholder="Type a Message" required />
              <button type="submit" className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-3 ">
                <IoMdSend />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
