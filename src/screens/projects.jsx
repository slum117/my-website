import Topbar from "../components/topbar";
import Sidebar from "../components/sidebar";

function ProjectsPage() {
    const Projects = [
        {
            title: "Portfolio Website",
            description: "A basic website describing myself created using React.js, tailwindcss, and a little bit of javascript",
            link:"https://github.com/"
        },
        {
            title: "Yelp Machine Learning Prediction Model",
            description: "A basic neural network model made from google's tensor flow in order to predict the rating for business with more than 20 reviews using all the reviews available for that business",
            link: "https://github.com/"
        },
        {
            title: "N-Queens Problem",
            description: "A genetic algorithm created to position queens in a chess board in such a way that they are not in the immediate attack path of another queen",
            link: "https://github.com/"
        },
        {
            title: "Squirrel Game",
            description: "A small unfinished game programmed using the codenameone framework, with the objective of the player competing with other squirrels to score more points while avoiding birds",
            link: "https://github.com/"
        },

    ]
    return(
        <div>
            <Topbar/>
            <div className="flex">
                <Sidebar/>
                <div className='w-screen bg-surface h-full min-h-screen text-on-primary'>
                    <div className='w-11/12 mx-auto sm:mt-20 mt-12 text-4xl'>
                        Projects
                    </div>
                    {/* <div className="flex flex-wrap mx-auto w-11/12 justify-center align-middle"> */}
                    <div className="flex flex-wrap mx-auto w-11/12 justify-center align-middle">
                        {Projects.map((project, index)=>{
                            return(
                                <div className="2xl:w-1/5 xl:w-1/4 sm:w-1/3 w-screen mt-12 bg-primary border rounded-md ml-4 mr-4 mb-4">
                                     <h1 className="text-2xl">{project.title}</h1>
                                     <div className="bg-secondary"><a className="text-sm text-blue-400"href={project.link}>Github</a></div>
                                     <p className=" text-xl pt-2">{project.description}</p>
                                </div>
                                // <div className="2xl:w-1/5 xl:w-1/4 sm:w-1/3 w-screen mt-12 bg-primary border rounded-md ml-4 mr-4 mb-4">
                                //     <h1 className="text-2xl">{project.title}</h1>
                                //     <div className="bg-secondary"><a className="text-sm text-blue-400"href={project.link}>Github</a></div>
                                //     <p className=" text-xl pt-2">{project.description}</p>
                                // </div>
                            )
                        })}
                        
                        
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default ProjectsPage;