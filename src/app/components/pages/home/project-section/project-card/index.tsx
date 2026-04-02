import { StackBadge } from "@/app/components/stack-badge";
import Image from "next/image";

const techs = ["React", "Tailwind", "Vite", "Axios", "Node.js", "Typescript", "MongoDB", "Express"];

export const ProjectCard = () => {
    return(

        <div className="h-full font-sans flex flex-col gap-2 lg:gap-4 w-75 lg:w-87.5 rounded-2xl bg-[#093C6B]/30 backdrop-blur-md hover:scale-105 transition-transform duration-300 cursor-pointer overflow-hidden">
            
            <div>
                <Image className="rounded-t-2xl" 
                    width={350} 
                    height={225} 
                    src="https://picsum.photos/seed/picsum/350/225" 
                    alt="Project Image" />
            </div>

            <div className="flex flex-col gap-4 px-4 pb-4 flex-1">

            <div className="flex flex-col gap-2 ">
                <h3 className="font-medium text-xl text-white">Spacefy</h3>

                <p className="text-base text-justify">Spacefy é uma plataforma de locação de espaços que conecta usuários a quadras esportivas, auditórios e imóveis para eventos.</p>
            </div>

            

            <div className="flex flex-wrap gap-x-2 gap-y-2">
                {techs.map((tech) => (
                    <StackBadge key={tech} name={tech} />
                ))}

            </div>
            
            </div>
        </div>
    )
}