import { ProjectCard } from "./project-card"


export const ProjectsSection = () => {

    return(
        <section className="mt-20 lg:mt-30 flex flex-col items-center lg:items-start lg:ml-25">

            <div className="flex flex-col items-center lg:items-start">
                
                <h3 className="text-4xl text-left w-full">Projetos</h3>

                <div className="mt-10 lg:mt-10 px-4 lg:px-10">
                    <div className=" mt-10 lg:mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 items-stretch">
                        <ProjectCard />
                        <ProjectCard />
                        <ProjectCard />
                        <ProjectCard />
                    </div>
                </div>
            </div>
        </section>
    )}