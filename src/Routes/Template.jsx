import React from "react";

export function Template({ image, title, description }) {
    return (
        <div style={{ maxWidth: "600px", margin: "2rem auto", padding: "2rem", fontFamily: "sans-serif", display: "flex", flexDirection: "column", alignItems: "center", gap: "1.5rem" }}>
            {image && (
                <img src={image} alt={title || "Template image"} style={{ width: "100%", maxHeight: "300px", objectFit: "contain", borderRadius: "0.25rem" }} />
            )}

            {title && (
                <h1 style={{ fontSize: "1.5rem", fontWeight: "600", margin: 0, textAlign: "center" }}>{title}</h1>
            )}

            {description && (
                <p style={{ fontSize: "1rem", lineHeight: "1.5", textAlign: "center", margin: 0 }}>{description}</p>
            )}
        </div>
    );
}