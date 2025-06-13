"use client"

import { motion, type Variants } from "framer-motion"
import Form from "./Form"

const bluryEffect: Variants = {
    initial: {
        opacity: 0,
        filter: "blur(10px)",
        scale: 0.95
    },
    animate: {
        opacity: 1,
        filter: "blur(0)",
        scale: 1,
        transition: {
            duration: 1
        }
    }
}

const anim = (variants: Variants) => ({
    variants,
    initial: "initial",
    whileInView: "animate",
    viewport: {
        once: true
    }
})

export default function Reservation() {
    return (
        <section className="container-box2 mt-24 md:mt-betweenSectionMd xl:mt-betweenSection py-14 xl:py-20">
            <motion.div
                className="space-y-4 md:space-y-5 text-center px-5 md:px-0"
                {...anim(bluryEffect)}
            >
                <h2 className="heading-4 md:heading-3 xl:heading-2 font-dancing-script">Reservation</h2>
            </motion.div>
            {/* Ati - 0818991310 */}
            {/* (Mohon konfirmasi sebelum 2 Juli 2025)*/}
            <motion.div className="text-center" {...anim(bluryEffect)}>
                <p className="text-sm md:text-base font-roboto-slab">
                    Untuk reservasi, silakan hubungi
                </p>
                <p className="text-sm md:text-base font-roboto-slab">
                    Ati - 0818991310
                </p>
                <p className="text-sm md:text-base font-roboto-slab" style={{ fontSize: "0.575rem" }}>
                    (Mohon konfirmasi sebelum 2 Juli 2025)
                </p>
            </motion.div>
        </section>
    )
}