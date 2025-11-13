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
    const [activeText, setActiveText] = useState<{
        heading: string;
        byLine: string;
        style?: any;
    } | null>(null);
    const [animateKey, setAnimateKey] = useState<number>(0); // re-trigger animation

    const fps = 50;
    const pxPerFrame = 10;

    // 🧱 Overlay text timeline with styling and animation
    const overlayTexts = [
        {
            start: 0,
            end: 3,
            heading: "Empowering Businesses with Smart Cloud Solutions",
            byLine: "Welcome to Webberstop.",
            style: {
                color: "white",
                backgroundColor: "none",
                position: { bottom: "5%", align: "center" },
                width: "100%",
                animation: "fade-in-up",
            },
        },
        {
            start: 3,
            end: 5,
            heading: "Your Trusted Cloud Partner in India",
            byLine: "Scalable • Secure • Managed",
            style: {
                color: "white",
                backgroundColor: "none",
                position: { bottom: "5%", align: "center" },
                width: "100%",
                animation: "fade-in-up",
            },
        },
        {
            start: 5,
            end: 9,
            heading: "Cloud Server & Storage Solutions",
            byLine: "High-Performance, Reliable, Always Available",
            style: {
                color: "white",
                backgroundColor: "none",
                position: { bottom: "5%", align: "right" },
                width: "100%",
                animation: "fade-in-right",
            },
        },
        {
            start: 9.5,
            end: 14.5,
            heading: "Cloud Management & Automation",
            byLine: "Optimize, Monitor & Control Your Cloud Infrastructure",
            style: {
                color: "white",
                backgroundColor: "rgba(0, 0, 0, 0.3)",
                position: { bottom: "5%", align: "right" },
                width: "100%",
                animation: "fade-in-right",
            },
        },
        {
            start: 14.5,
            end: 18,
            heading: "Managed Security Services",
            byLine: "24/7 Threat Monitoring, SOC, AV & Ransomware Protection",
            style: {
                color: "white",
                backgroundColor: "none",
                position: { top: "1%", align: "center" },
                width: "100%",
                animation: "fade-in-down",
            },
        },
        {
            start: 18,
            end: 23,
            heading: "24/7 Cloud Support",
            byLine: "Easy Access | Affordable Pricing",
            style: {
                color: "white",
                backgroundColor: "rgba(0, 0, 0, 0.3)",
                position: { bottom: "5%", align: "right" },
                width: "100%",
                animation: "fade-in-up",
            },
        },
    ];

    useEffect(() => {
        setTimeout(() => {
            window.scrollTo({ top: 2, behavior: "instant" });
        }, 100);
    }, []);

    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        const handleLoadedMetadata = () => {
            setDuration(video.duration);
        };
        video.addEventListener("loadedmetadata", handleLoadedMetadata);

        const handleScroll = () => {
            if (!video || duration === 0) return;

            const scrollY = window.scrollY;
            const frame = scrollY / pxPerFrame;
            const time = frame / fps;

            video.currentTime = Math.min(time, duration);

            const current = overlayTexts.find((t) => time >= t.start && time < t.end);
            if (current && current.heading !== activeText?.heading) {
                setActiveText(current);
                setAnimateKey((prev) => prev + 1); // re-trigger animation
            } else if (!current) {
                setActiveText(null);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            video.removeEventListener("loadedmetadata", handleLoadedMetadata);
            window.removeEventListener("scroll", handleScroll);
        };
    }, [duration, activeText]);

    // 🧩 Dynamic inline styles based on JSON
    const getOverlayStyle = (styleObj: any = {}) => {
        const { color, backgroundColor, position = {}, width } = styleObj;
        const posStyle: any = {};

        if (position.top) posStyle.top = position.top;
        if (position.bottom) posStyle.bottom = position.bottom;
        if (position.left) posStyle.left = position.left;
        if (position.right) posStyle.right = position.right;

        if (position.align === "center") {
            posStyle.left = "50%";
            posStyle.transform = "translateX(-50%)";
            posStyle.textAlign = "center";
        }
        if (position.align === "right") {
            posStyle.textAlign = "right";
        }

        return {
            position: "absolute",
            color: color || "inherit",
            backgroundColor: backgroundColor === "none" ? "transparent" : backgroundColor,
            width: width || "auto",
            ...posStyle,
        };
    };

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
                    <div
                        key={animateKey} // re-render to restart animation
                        className="overlayTextPosition" // position only
                        style={getOverlayStyle(activeText.style)}
                    >
                        <div
                            className={`overlayText ${activeText.style?.animation || ""}`} // animation only
                        >
                            <div className="headingTypography oT_Heading1">
                                <span>{activeText.heading}</span>
                            </div>
                            <div className="headingTypography oT_Heading2">
                                <span>{activeText.byLine}</span>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </main>
    );
}
