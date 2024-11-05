import { useState } from "react";
export default function Navbar() {

    const [displayNav, setDisplayNav] = useState(true);

    return (
        <div className="text-white flex justify-between p-4">
            <div className="logo px-4">
                <span className="text-xl font-normal">HOMES FIRST</span><br />
                <span className="text-xs font-light">LUXURY CLEANING</span>
            </div>

            <nav className="flex">
                <ul className={`flex mt-2 ${displayNav ? "hidden" : ""}`}>
                    <li className="mx-6 mt-2">HOME</li>
                    <li className="mx-6 mt-2">ABOUT</li>
                    <li className="mx-6 mt-2">CONTACT</li>
                </ul>
                <button onClick={() => { setDisplayNav(!displayNav) }}>
                    <img src="/menu.png" alt="menu" className="w-6 mx-5"/>
                </button>
            </nav>
        </div>
    );
}
