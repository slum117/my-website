import Sidebar from '../components/sidebar';
import profile from '../assets/profile1.jpg';
import Topbar from '../components/topbar';
function Home() {
  return (
    <div>
      <Topbar />
      <div className='flex'>
        
      <Sidebar />
      <div className='w-screen bg-surface h-full min-h-screen'>
        <div className='w-11/12 bg-primary mx-auto sm:mt-20 mt-12 text-on-primary border'>
            <div className='text-2xl font-semibold ml-2 py-2'>About Me</div>
            <div className='text-xl py-5 flex items-center justify-center bg-secondary'>
              <div className='flex justify-center items-center'>
                <img className="rounded-full w-32" src={profile} alt='this is me'/>
                <div className='ml-9 w-64'>My name is Steven Lum. I graduated from Sacramento State in 2022.</div>
              </div>
            </div>
        </div>
          <div className='w-11/12 bg-primary mx-auto mt-20 text-on-primary border'>
            <div className='text-2xl font-semibold py-2 ml-2'>
              Skills and Qualities
            </div>
            <div className=' bg-secondary ml-4 py-2'>
                Languages:Java, Python, C, SQL, Javascript, CSS, HTML<br/>
                Frameworks:Express.js, Node.js, Bootstrap, tailwindcss<br/>
                Tools: Git, Jira, Vim, Pandas, Numpy
            </div>
          </div>
          
          {/* <div className='w-11/12 bg-primary mx-auto mt-8 text-on-primary border'>
          </div> */}
          
          <div className='text-sm text-on-surface w-11/12 mx-auto justify-end flex'>
            Inspired by &nbsp;<a href="https://charlesstover.com/">https://charlesstover.com/</a>
          </div>

        </div>
      </div>

    </div>
  )
}

export default Home;


