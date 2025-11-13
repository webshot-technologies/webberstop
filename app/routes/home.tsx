import type { Route } from "./+types/home";
import React, { useEffect, useRef, useState } from "react";

export function meta({ }: Route.MetaArgs) {
    return [
        { title: "React Animation Starter" },
        { name: "description", content: "React starter with GSAP & Framer Motion" },
    ];
}

export default function Home() {
    const videoRef = useRef<HTMLVideoElement | null>(null);
    const [duration, setDuration] = useState<number>(0);
    const [activeText, setActiveText] = useState<{ heading: string; byLine: string } | null>(null);

    const fps = 50;
    const pxPerFrame = 10;

    // Define overlay text timeline
    const overlayTexts = [
        { start: 0, end: 3, heading: "Empowering Businesses with Smart Cloud Solutions", byLine: "Welcome to Webberstop." },
        { start: 3, end: 6, heading: "Your Trusted Cloud Partner in India", byLine: "Scalable • Secure • Managed" },
        { start: 6, end: 9, heading: "Cloud Server & Storage Solutions", byLine: "High-Performance, Reliable, Always Available" },
        { start: 9, end: 12, heading: "Cloud Management & Automation", byLine: "Optimize, Monitor & Control Your Cloud Infrastructure" },
        { start: 12, end: 15, heading: "Managed Security Services", byLine: "24/7 Threat Monitoring, SOC, AV & Ransomware Protection" },
        { start: 15, end: 17, heading: "MultiCloud & Migration Services", byLine: "Seamless Movement, Maximum Uptime" },
        { start: 17, end: 19, heading: "Datacenter Build & Management", byLine: "" },
        { start: 19, end: 23, heading: "24/7 Cloud Support | Easy Access | Affordable Pricing", byLine: "" },
    ];

    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        // Set duration after metadata is loaded
        const handleLoadedMetadata = () => {
            setDuration(video.duration);
            console.log(`Video duration: ${video.duration}s`);
        };

        video.addEventListener("loadedmetadata", handleLoadedMetadata);

        // Scroll handler
        const handleScroll = () => {
            if (!video || duration === 0) return;

            const scrollY = window.scrollY;
            const frame = scrollY / pxPerFrame;
            const time = frame / fps;

            video.currentTime = Math.min(time, duration);

            const current = overlayTexts.find(t => time >= t.start && time < t.end);
            if (current && current.heading !== activeText?.heading) {
                setActiveText(current);
            }
        };

        window.addEventListener("scroll", handleScroll);

        // Cleanup
        return () => {
            video.removeEventListener("loadedmetadata", handleLoadedMetadata);
            window.removeEventListener("scroll", handleScroll);
        };
    }, [duration]);

    return (
        <main>
            <div className="spacer"></div>
            <div className="video_Wrapper">
                <div className="video_container">
                    <video
                        ref={videoRef}
                        muted
                        playsInline
                        preload="auto"
                        style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    >
                        <source src="/Video/g1crf20.mp4" type="video/mp4" />
                        Your browser does not support HTML5 video.
                    </video>
                </div>
            </div>

            {/* Overlay Text */}
            <div className="overlayTextContainer">
                {activeText && (
                    <div className="overlayText">
                        <div className="headingTypography oT_Heading1">{activeText.heading}</div>
                        <div className="headingTypography oT_Heading2">{activeText.byLine}</div>
                    </div>
                )}
            </div>
        </main>
    );
};