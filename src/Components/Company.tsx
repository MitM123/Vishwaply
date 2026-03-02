import { cn } from "@/lib/utils"
import { Marquee } from "./ui/marquee"
import Shaynex from '../assets/Shynex.png'
import sre from '../assets/sre.png'
import Matwud from '../assets/Matwud.png'


const companies = [
    {
        name: "Enox",
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyCM2WAm6UR-GFZe9Ena9bGTSgVxzA0ZfK_Q&s",
    },
    {
        name: "FedEx",
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7UpQ87B6piizUPRe5ha3rZSkuJWFoKf6m3Q&s",
    },
    {
        name: "Google",
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZnl0b4XJzfwqQhhGanYFEFrSj4VU0R6NDhw&s",
    },
    {
        name: "Amazon",
        logo: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Blum_brandboxmin_2.png",
    },
    {
        name: "sre",
        logo: sre,
    },
    {
        name: "Walmart",
        logo: Shaynex,
    },
    {
        name: "Matwud",
        logo: Matwud,
    },
    {
        name: "Siam",
        logo: "http://static.wixstatic.com/media/889c9d_49588d37d6a04556a0defece1f616ae3~mv2.jpg/v1/crop/x_0,y_4,w_881,h_393/fill/w_330,h_148,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/with%20tagline(1)BG%20(1)_edited.jpg",
    },
    {
        name: "Shopify",
        logo: "https://upload.wikimedia.org/wikipedia/commons/0/0e/Shopify_logo_2018.svg",
    },
    {
        name: "Uber",
        logo: "https://upload.wikimedia.org/wikipedia/commons/5/58/Uber_logo_2018.svg",
    },
    {
        name: "Netflix",
        logo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
    },
    {
        name: "Tesla",
        logo: "https://upload.wikimedia.org/wikipedia/commons/b/bd/Tesla_Motors.svg",
    },
]

const firstRow = companies.slice(0, companies.length / 2)
const secondRow = companies.slice(companies.length / 2)

const CompanyCard = ({
    logo,
    name,
}: {
    logo: string
    name: string
}) => {
    return (
        <div
            className={cn(
                "relative flex h-20 w-42 items-center justify-center overflow-hidden rounded-xl border p-6 transition-all duration-300",
                "border-gray-200 bg-white hover:scale-105",
                "dark:border-gray-800 dark:bg-gray-900",
                "shadow-sm hover:shadow-md"
            )}
        >
            <img
                className="h-10 w-auto max-w-full object-contain opacity-90 hover:opacity-100 transition-all duration-300"
                alt={name}
                src={logo}
            />
        </div>
    )
}

const Company = () => {
    return (
        <div className="relative font-secondary flex w-full flex-col items-center  justify-center overflow-hidden bg-[#FAF9F6] dark:bg-gray-950 py-28">
            <div className="mb-4 text-center px-4 ">

                <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 dark:text-white mb-3">
                    Building the future with industry leaders
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-400">
                    Join 50,000+ companies transforming their industries with us.
                </p>
            </div>

            <div className="relative w-full mt-12">
                <Marquee pauseOnHover className="[--duration:30s] mb-6">
                    {firstRow.map((company) => (
                        <CompanyCard key={company.name} {...company} />
                    ))}
                </Marquee>
                <Marquee reverse pauseOnHover className="[--duration:30s]">
                    {secondRow.map((company) => (
                        <CompanyCard key={company.name} {...company} />
                    ))}
                </Marquee>

                {/* Gradient fade on edges */}
                <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent"></div>
                <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent"></div>
            </div>
        </div>
    )
}

export default Company