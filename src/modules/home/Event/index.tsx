"use client"

import { GoDotFill } from "react-icons/go";
import { IoCalendarClearOutline } from "react-icons/io5";
import { BsClock } from "react-icons/bs";
import { PiMapPin } from "react-icons/pi";
import { motion, Variants } from 'framer-motion'

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

const fadeIn: Variants = {
    initial: {
        opacity: 0,
        y: "40px",
    },
    animate: (delay: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            duration: 1,
            type: "spring",
            delay
        }
    })
}

const stagger: Variants = {
    initial: {
        opacity: 0,
    },
    animate: {
        opacity: 1,
        transition: {
            duration: 1,
            delay: 0.2,
            staggerChildren: 1,
            type: "spring"
        },
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

export default function Event() {

    return (
        <section className="container-box2 
        xl:mt-betweenSection flex flex-col md:flex-row justify-between gap-14 md:gap-4" style={{ marginTop: "50px" }}>
            <div>
                <motion.h2
                    className="heading-4 md:heading-3 xl:heading-2 font-dancing-script font-bold px-4 md:px-0"
                    {...anim(bluryEffect)}
                >
                    Lokasi Acara
                </motion.h2>
                <div className="flex justify-start gap-x-2 md:gap-x-4 mt-betweenBoxMd xl:mt-betweenBox px-4 md:px-0">
                    <div className="space-y-4 md:space-y-6">
                        <motion.ul className="space-y-3 md:space-y-4" {...anim(stagger)}>
                            <Li delay={0.2}>
                                <IoCalendarClearOutline className="text-xl md:text-2xl" />
                                <p className="text-xs md:text-base font-roboto-slab">06 Juli 2025</p>
                            </Li>
                            <Li delay={0.4}>
                                <BsClock className="text-xl md:text-2xl" />
                                <p className="text-xs md:text-base font-roboto-slab">10:30 WIB - Selesai</p>
                            </Li>
                            <Li delay={0.6}>
                                <PiMapPin className="text-2xl md:text-3xl -translate-x-1" />
                                <p className="text-xs md:text-base font-roboto-slab -translate-x-2">
                                    <span className="font-bold">Magzi Ballroom</span>
                                    <br />Hotel Grand Kemang, Jakarta Selatan
                                </p>
                            </Li>
                        </motion.ul>
                    </div>
                </div>
            </div>
            <div className="w-full md:w-1/2 xl:w-[630px] h-[389px] md:h-[320px] xl:h-[389px]">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.061988103557!2d106.80821797499054!3d-6.255564293732918!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e698d26084302a9%3A0x834cbb87d50a4c3a!2sgrandkemang%20Jakarta!5e0!3m2!1sid!2sid!4v1749801081935!5m2!1sid!2sid"
                    width="100%"
                    height="100%"
                    allowFullScreen={false}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade" />
            </div>
        </section >
    )
}


const Li = ({ delay, children }: { children: React.ReactNode, delay: number }) => {

    const variants: Variants = {
        initial: {
            opacity: 0,
            x: "-50px"
        },
        animate: {
            opacity: 1,
            x: 0,
            transition: {
                delay,
                type: "spring",
                bounce: 0
            }
        }
    }

    return (
        <motion.li className="flex items-start gap-4 md:gap-6" {...anim(variants)}>
            {children}
        </motion.li>
    )
}