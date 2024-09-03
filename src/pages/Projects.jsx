import {projects} from "../constants";
import { Link } from 'react-router-dom'

const Projects = () => {
  return (
    <section className='max-container text-center'>
      <h1 className='head-text '>
        My <span className='blue-gradient_text font-semibold drop-shadow'>Projects</span>        
      </h1>

      <div className='mt-5 flex flex-col gap-3 text-slate-500'>
        <p>I've been working on projects I find interesting and techniques I like and want to work with. See my projects down below and feel free to look around in the codebase!</p>
      </div>

      <div className='flex flex-wrap my-20 gap.16 justify-center items-center'>
        {projects.map((project) => (
          <div className="lg:w-[400px] w-full mt-3" key={project.name}>
            <div className="block-container w-12 h-12">
              <div className={`btn-back rounded-x1 ${project.theme}`}/>
              <div className="btn-front rounded-xl flex justify-center items-center">
                <img src={project.iconUrl} alt="project icon" className="w-1/2 h-1/2 object-contain"/>
              </div>
            </div>

            <div className="mt-5 flex flex-col">
              <h4 className="text-2xl fontnt-poppins font-semibold">
                {project.name}
              </h4>
              <p className="mt-2 text-slate-500">
                {project.description}
              </p>
              <div className="mt-5 flex items-center gap-2 font-poppins">
                <Link 
                to={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-blue-600">
                  Github Link
                </Link>
                
              </div>
            </div>
          </div>
        ))}
      </div>

      <hr className="border-slate-200"/>
      </section>
  )
}

export default Projects