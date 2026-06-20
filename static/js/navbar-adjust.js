// navbar-adjust.js
// Dynamically adjusts the InfoHub navbar links depending on whether the site
// is running via Flask (port 5000) or statically (Live Server / file protocol).

function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return decodeURIComponent(parts.pop().split(';').shift());
    return null;
}

document.addEventListener("DOMContentLoaded", () => {
    // Detect Flask vs Static
    const isFlask = window.location.port === "5000";

    const homeLinks = document.querySelectorAll(".nav-link-home");
    const projectsLinks = document.querySelectorAll(".nav-link-projects");
    const aboutLinks = document.querySelectorAll(".nav-link-about");
    const blogLinks = document.querySelectorAll(".nav-link-blog");
    const contactLinks = document.querySelectorAll(".nav-link-contact");
    const loginLinks = document.querySelectorAll(".nav-link-login");
    const registerLinks = document.querySelectorAll(".nav-link-register");
    const brandLink = document.querySelector(".navbar .brand");

    if (isFlask) {
        homeLinks.forEach(el => el.setAttribute("href", "/"));
        projectsLinks.forEach(el => el.setAttribute("href", "/projects"));
        aboutLinks.forEach(el => el.setAttribute("href", "/about"));
        blogLinks.forEach(el => el.setAttribute("href", "/blog"));
        contactLinks.forEach(el => el.setAttribute("href", "/contact"));

        const adminLoggedIn = getCookie("admin_logged_in") === "true";
        const userLoggedIn = getCookie("user_logged_in") === "true";

        if (adminLoggedIn) {
            // Update mobile menu links (.nav-links)
            const navLinksContainer = document.querySelector(".nav-links");
            if (navLinksContainer) {
                const toRemove = navLinksContainer.querySelectorAll(".nav-link-login, .nav-link-register");
                toRemove.forEach(el => el.remove());
                
                navLinksContainer.insertAdjacentHTML("beforeend", `
                    <a href="/admin/dashboard" class="mobile-action">Dashboard</a>
                    <a href="/logout" class="mobile-action mobile-register-btn">Logout</a>
                `);
            }

            // Update desktop header buttons (.nav-actions)
            const navActionsContainer = document.querySelector(".nav-actions");
            if (navActionsContainer) {
                navActionsContainer.innerHTML = `
                    <a href="/admin/dashboard" class="login-link">Dashboard</a>
                    <a href="/logout" class="register-btn">Logout</a>
                `;
            }
        } else if (userLoggedIn) {
            const userName = getCookie("user_name") || "User";

            // Update mobile menu links (.nav-links)
            const navLinksContainer = document.querySelector(".nav-links");
            if (navLinksContainer) {
                const toRemove = navLinksContainer.querySelectorAll(".nav-link-login, .nav-link-register");
                toRemove.forEach(el => el.remove());
                
                navLinksContainer.insertAdjacentHTML("beforeend", `
                    <span class="mobile-action welcome-text" style="color: var(--text-soft); font-size: 16px; font-weight: 600; padding: 13px 10px;">Hello, ${userName}</span>
                    <a href="/logout" class="mobile-action mobile-register-btn">Logout</a>
                `);
            }

            // Update desktop header buttons (.nav-actions)
            const navActionsContainer = document.querySelector(".nav-actions");
            if (navActionsContainer) {
                navActionsContainer.innerHTML = `
                    <span class="welcome-text" style="color: var(--text-muted); font-size: 15px; font-weight: 600; margin-right: 15px;">Hello, ${userName}</span>
                    <a href="/logout" class="register-btn">Logout</a>
                `;
            }
        } else {
            loginLinks.forEach(el => el.setAttribute("href", "/login"));
            registerLinks.forEach(el => el.setAttribute("href", "/register"));
        }
    } else {
        homeLinks.forEach(el => el.setAttribute("href", "../../templates/index.html"));
        projectsLinks.forEach(el => el.setAttribute("href", "../../templates/projects.html"));
        aboutLinks.forEach(el => el.setAttribute("href", "../../templates/about.html"));
        blogLinks.forEach(el => el.setAttribute("href", "../../templates/blog.html"));
        contactLinks.forEach(el => el.setAttribute("href", "../../templates/contact.html"));
        loginLinks.forEach(el => el.setAttribute("href", "../../templates/login.html"));
        registerLinks.forEach(el => el.setAttribute("href", "../../templates/register.html"));
    }

    if (brandLink) {
        brandLink.style.cursor = "pointer";
        brandLink.addEventListener("click", () => {
            window.location.href = isFlask ? "/" : "../../templates/index.html";
        });
    }
});
