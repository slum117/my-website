import * as React from "react";

import { RiArrowLeftDoubleFill } from "react-icons/ri";

function Sidebar() {
    const [open, setOpen] = React.useState(false);
    const Links = [
        { title: "Home", path:"#/", key:"SideHome"},
        { title: "Projects", path:"#/Projects",key:"SideProjects"},
        { title: "LinkedIn", path:"https://www.linkedin.com/in/steven-lum-5b96a619b/",key:"SideLinkedIn"}
    ]
        // return(
        //     <div className="sticky top-0 col-span-3 h-screen w-3/12 justify-center bg-pink-200"></div>
        // );
    return(
        <div className="sm:flex h-full min-h-screen sticky top-0 hidden">
            <div className={`bg-primary text-on-primary h-screen p-5 pt-8 relative ${open ? "w-20" : "w-72"} duration-300`}>
                <RiArrowLeftDoubleFill className={`bg-white text-primary text-3xl rounded-full cursor-pointer absolute -right-3 top-9 border border-nav ${open && "rotate-180"}`} onClick={()=>setOpen(!open)}/>
                <h1 className={`text-2xl ${open && "scale-0"} duration-300 font-bold`}>Links</h1>
                <div className={`${open && "hidden"} duration-300 mt-9`}>
                    <ul className="pt-2">
                        {Links.map((link,index) => {
                            return(
                                <li key={link.key} className="text-on-primary pt-4 ml-6 text-lg">
                                    <span key={link.key + ".child"}><a href={`${link.path}`}>{link.title}</a></span>
                                </li>
                            )
                        })}
                        
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Sidebar;

// {Links.map((link,index) => (
//     <>
//         <li key={index} className="text-on-primary pt-4 ml-6 text-lg">
//             <span key={link.key + index +".child"}><a href={`${link.path}`}>{link.title}</a></span>
//         </li>
//     </>
// ))}