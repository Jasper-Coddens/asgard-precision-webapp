"use client"

import { useEffect } from "react";

const InstagramEmbed = () => {
  useEffect(() => {
    // Load Instagram embed script
    const script = document.createElement("script");
    script.src = "https://www.instagram.com/embed.js";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);

    return () => {
        document.body.removeChild(script);
      };
    }, []);

    return (
        <div className="min-w-[640px]">
        <blockquote
        className="instagram-media"
        data-instgrm-permalink="https://www.instagram.com/jasper_coddens"
        data-instgrm-version="12"
        style={{
          background: "#FFF",
          border: 0,
          borderRadius: "3px",
          boxShadow: "0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)",
          margin: "1px",
          maxWidth: "840px",
          minWidth: "326px",
          padding: 0,
          width: "99.375%",
        }}
        >
        <div style={{ padding: "16px" }}>
          <a
            id="main_link"
            href="https://www.instagram.com/jasper_coddens"
            style={{
              background: "#FFFFFF",
              lineHeight: 0,
              padding: "0 0",
              textAlign: "center",
              textDecoration: "none",
              width: "100%",
            }}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
              <div
                style={{
                  backgroundColor: "#F4F4F4",
                  borderRadius: "50%",
                  height: "40px",
                  width: "40px",
                  marginRight: "14px",
                }}
              ></div>
              <div style={{ display: "flex", flexDirection: "column", flexGrow: 1 }}>
                <div
                  style={{
                    backgroundColor: "#F4F4F4",
                    borderRadius: "4px",
                    height: "14px",
                    marginBottom: "6px",
                    width: "100px",
                  }}
                ></div>
                <div
                  style={{
                    backgroundColor: "#F4F4F4",
                    borderRadius: "4px",
                    height: "14px",
                    width: "60px",
                  }}
                ></div>
              </div>
            </div>
          </a>
        </div>
      </blockquote>
      </div>
    );
}

export default InstagramEmbed;