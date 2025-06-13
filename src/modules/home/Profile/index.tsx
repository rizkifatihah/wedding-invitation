import { type Variants } from "framer-motion"
import * as Motion from "@/components/Motion"

import ProgressiveImage from "@/components/ProgressiveImage"

const variants: Variants = {
    initial: {
        opacity: 0,
        y: "40px",
    },
    animate: {
        opacity: 1,
        y: 0,
    }
}

const anim = ({ duration, delay }: { duration: number, delay: number }) => ({
    variants: variants,
    initial: "initial",
    whileInView: "animate",
    viewport: {
        once: true,
        margin: "-20%",
    },
    transition: {
        duration,
        type: "spring",
        delay
    }
})

export default function Profile() {

    return (
        <section className="container-box2 mt-24 md:mt-betweenSectionMd xl:mt-betweenSection grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-3 xl:gap-0">
            <div className="order-none md:order-1 flex flex-col justify-center items-center space-y-5 xl:space-y-7">
                <Motion.Box className="text-center space-y-5 md:space-y-7" {...anim({ duration: 1, delay: .2 })}>
                    <h3 className="heading-4 md:heading-3 font-dancing-script font-bold">
                        Ati
                    </h3>
                    <div className="space-y-2">
                        <p className="text-xs md:text-sm font-roboto-slab">Hariyati</p>
                    </div>
                </Motion.Box>
                <Motion.Heading className="heading-4 md:heading-3 font-dancing-script font-bold"  {...anim({ duration: 1, delay: .3 })}>&</Motion.Heading>
                <Motion.Box className="text-center space-y-5 md:space-y-7" {...anim({ duration: 1, delay: .4 })}>
                    <h3 className="heading-4 md:heading-3 font-dancing-script font-bold">
                        Wicak
                    </h3>
                    <div className="space-y-2">
                        <p className="text-xs md:text-sm font-roboto-slab">Wicaksono</p>
                    </div>
                </Motion.Box>
            </div>
            
        </section>
    )
}