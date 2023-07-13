import * as React from "react";
import {IoReorderThreeOutline} from 'react-icons/io5'
function Topbar() {
    const [open, setOpen] = React.useState(false);
    const Links = [
        { title: "Home", path:"/portfolio", key:"SideHome"},
        { title: "Projects", path:"/portfolio/Projects",key:"SideProjects"},
        { title: "LinkedIn", path:"https://www.linkedin.com/in/steven-lum-5b96a619b/",key:"SideLinkedIn"}
    ]
    return(
        <div className={`w-screen sticky top-0 pt-3 text-on-surface ${open ? "bg-primary" : "bg-surface"} sm:hidden block`}>
            <div className={`sm:hidden  flex justify-end`}>
                <div className="text-5xl mr-4">
                    <IoReorderThreeOutline onClick={()=>{console.log(open); setOpen(!open);}}/>
                </div>
            </div>    
            <div className={`${!open && "hidden"} duration-300 pb-2`}>
                    <ul className="pt-2">
                        {Links.map((link,index) => {
                            return(
                                <li key={link.key} className="text-on-primary pt-4 ml-6 text-lg pl-5">
                                    <span key={link.key + ".child"}><a href={`${link.path}`}>{link.title}</a></span>
                                </li>
                            )
                        })}
                        
                    </ul>
                </div>
        </div>
        
    )
}

export default Topbar;