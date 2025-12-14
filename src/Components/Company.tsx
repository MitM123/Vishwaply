import { cn } from "@/lib/utils"
import { Marquee } from "./ui/marquee"

const companies = [
    {
        name: "Airbnb",
        logo: "https://upload.wikimedia.org/wikipedia/commons/6/69/Airbnb_Logo_Bélo.svg",
    },
    {
        name: "FedEx",
        logo: "https://upload.wikimedia.org/wikipedia/commons/9/9d/FedEx_Express.svg",
    },
    {
        name: "Google",
        logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
    },
    {
        name: "Amazon",
        logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
    },
    {
        name: "HubSpot",
        logo: "https://upload.wikimedia.org/wikipedia/commons/3/3f/HubSpot_Logo.svg",
    },
    {
        name: "Walmart",
        logo: "https://upload.wikimedia.org/wikipedia/commons/c/ca/Walmart_logo.svg",
    },
    {
        name: "Microsoft",
        logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
    },
    {
        name: "Adobe",
        logo: "https://upload.wikimedia.org/wikipedia/commons/8/8d/Adobe_Corporate_Logo.svg",
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
                className="h-8 w-auto max-w-full object-contain opacity-90 hover:opacity-100 transition-all duration-300" 
                alt={name}
                src={logo}
            />
        </div>
    )
}

const Company = () => {
    return (
        <div className="relative font-secondary flex w-full flex-col items-center  justify-center overflow-hidden bg-gray-50 dark:bg-gray-950 py-16">
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
                <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-gray-50 dark:from-gray-950 to-transparent"></div>
                <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-gray-50 dark:from-gray-950 to-transparent"></div>
            </div>
        </div>
    )
}

export default Company