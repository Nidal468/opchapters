'use client'
import styles from "@/styles/page.module.css"
import Image from "next/image"
import { useState } from "react";
import Bar from "./bar"
export default function Images(props: any) {
    const chapters = props.data;
    const param = props.param;
    const isData = props.src;
    const [res, setRes] = useState("10vw,20vw")
    function Low() {
        setRes("20vw, 30vw")
    }
    function Mid() {
        setRes("25vw, 35vw")
    }
    function High() {
        setRes("30vw, 40vw")
    }
    return (
        <div className="w-full flex items-center justify-start flex-col">
            <Bar lowRes={Low} midRes={Mid} highRes={High}/>
            <div className={styles.page}>
                {chapters.length > 0 && chapters[parseInt(param) - 1] && chapters[parseInt(param) - 1].images && (
                    <div key={chapters[parseInt(param) - 1].id}>
                        {chapters[parseInt(param) - 1].images.map((image: any, index: number) => (
                            <div className={styles.pageimage} key={index}>
                                <Image
                                    fill={true}
                                    src={`/images/${isData}/chapter${param}/${index}.jpg`}
                                    alt={`chapter ${index}`}
                                    loading="lazy"
                                    sizes={res}
                                />
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}