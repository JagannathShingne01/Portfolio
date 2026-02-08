import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { blogs } from "@/lib/data";
import { useInView } from "react-intersection-observer";
import { useContext, useEffect } from "react";
import { ActiveSectionContex } from "@/context/active-context";

export default function BlogSection() {
    const { ref, inView } = useInView();
    const { setActiveSection, timeOfLastClick } = useContext(ActiveSectionContex)
    console.log(inView)
    console.log(timeOfLastClick)
    console.log(ActiveSectionContex)
    useEffect(() => {
        if (inView && Date.now() - timeOfLastClick > 1000) {
            setActiveSection("Blogs")
        }
    }, [inView, setActiveSection, timeOfLastClick]);
    return (
        <section ref={ref} id="blog" className="relative py-24 scroll-mt-32">
            {/* Background blur */}
            <div  className="absolute inset-0 -z-10">
                <div className="absolute top-1/3 left-1/4 h-72 w-72 rounded-full bg-gray-300/20 dark:bg-white/5 blur-3xl" />
                <div className="absolute bottom-1/4 right-1/4 h-72 w-72 rounded-full bg-gray-300/20 dark:bg-white/5 blur-3xl" />
            </div>

            <div className="max-w-7xl mx-auto px-4">
                {/* Section header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 dark:text-white/90">
                        Blogs & Articles
                    </h2>
                    <p className="mt-3 text-gray-500 dark:text-white/60">
                        Technical blogs I’ve published on dev.to
                    </p>
                </motion.div>

                {/* Blog cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogs.map((blog, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.15 }}
                            className="group rounded-2xl border border-gray-200/60 dark:border-white/10 bg-white/60 dark:bg-white/5 backdrop-blur shadow-sm hover:shadow-lg transition"
                        >
                            <Link href={blog.url} target="_blank">
                                <div className="overflow-hidden rounded-t-2xl">
                                    <Image
                                        src={blog.image}
                                        alt={blog.title}
                                        width={600}
                                        height={400}
                                        className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                </div>

                                <div className="p-5">
                                    <h3 className="text-lg font-medium text-gray-800 dark:text-white/90 group-hover:text-gray-900 dark:group-hover:text-white transition">
                                        {blog.title}
                                    </h3>
                                    <p className="mt-2 text-sm text-gray-500 dark:text-white/60">
                                        Read on dev.to →
                                    </p>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
