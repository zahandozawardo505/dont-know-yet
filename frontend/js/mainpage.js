// Tailwind config — custom colors, sizes, and fonts for PlayZone
tailwind.config = {
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                // Page backgrounds
                "page-bg":    "#fcf9f8",
                "page-alt":   "#f0edec",
                "page-dark":  "#181c1e",

                // Text colors
                "ink":        "#1c1b1b",
                "ink-muted":  "#44474e",
                "ink-light":  "#75777f",

                // Brand / accent
                "accent":     "#0058bc",
                "accent-hover": "#0070eb",
                "accent-soft":  "#d8e2ff",
                "accent-light": "#0070eb",

                // Borders / dividers
                "line":       "#c5c6cf",
                "line-strong":"#75777f",

                // Surfaces
                "surface":     "#fcf9f8",
                "surface-alt": "#f0edec",
                "surface-dark":"#181c1e",
                "surface-muted":"#f6f3f2",

                // Utility
                "white-wash": "#ffffff",
                "error-red":  "#ba1a1a",
            },

            spacing: {
                "content-max": "1280px",  // max page width
            },

            maxWidth: {
                "content": "1280px",
            },

            borderRadius: {
                DEFAULT: "0.25rem",
                lg:      "0.5rem",
                xl:      "0.75rem",
                full:    "9999px",
            },

            fontFamily: {
                sans: ["Inter", "sans-serif"],
            },
        },
    },
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault()
        const target = document.querySelector(this.getAttribute('href'))
        if (target) target.scrollIntoView({ behavior: 'smooth' })
    })
})