import React, { useState } from "react";
import Iframe from "react-iframe";
import { TbMessageChatbot } from "react-icons/tb";

export default function Sec_nav() {
    const [disp, setDisp] = useState(false);
    return (
        <div style={{ position: "fixed", top: 0, zIndex: 100, }} className="ml-[80%] mt-56 bg-transparent">
            {disp?
            (<Iframe url="https://copilotstudio.microsoft.com/environments/Default-f75c8e0a-6f5f-4490-82be-b4ca7dcf6f32/bots/cr5ec_copilot/webchat?_version_=2"
                id=""
                display="block"
                className="h-96 w-72  border bg-white  z-[100]"
                position="fixed"

            />):""}
            
            <TbMessageChatbot className="mt-96 w-14 h-14 ml-60 text-red-700" onClick={() => { setDisp(!disp) }} />
        </div>
    )
}