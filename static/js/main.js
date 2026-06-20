
// Dynamic navbar and theme toggle injection
document.addEventListener("DOMContentLoaded", () => {
    const cookies = document.cookie.split("; ").reduce((acc, current) => {
        const [name, value] = current.split("=");
        if (name) acc[name] = value;
        return acc;
    }, {});

    const isAdmin = cookies["admin_logged_in"] === "true";
    const isUser = cookies["user_logged_in"] === "true";

    const navLinks = document.querySelector(".nav-links");

    if (isAdmin) {
        if (navActions) {
            navActions.innerHTML = `
                <a href="/admin/dashboard" class="login-link">Dashboard</a>
                <a href="/logout" class="register-btn">Logout</a>
            `;
        }
        if (navLinks) {
            // Remove static mobile login/register links
            const mobileActions = navLinks.querySelectorAll(".mobile-action");
            mobileActions.forEach(el => el.remove());

            // Add dynamic mobile links
            const dashLink = document.createElement("a");
            dashLink.href = "/admin/dashboard";
            dashLink.className = "mobile-action";
            dashLink.innerText = "Dashboard";

            const logoutLink = document.createElement("a");
            logoutLink.href = "/logout";
            logoutLink.className = "mobile-action mobile-register-btn";
            logoutLink.innerText = "Logout";

            navLinks.appendChild(dashLink);
            navLinks.appendChild(logoutLink);
        }
    } else if (isUser) {
        if (navActions) {
            navActions.innerHTML = `
                <a href="/logout" class="register-btn">Logout</a>
            `;
        }
        if (navLinks) {
            // Remove static mobile login/register links
            const mobileActions = navLinks.querySelectorAll(".mobile-action");
            mobileActions.forEach(el => el.remove());

            // Add dynamic mobile logout link
            const logoutLink = document.createElement("a");
            logoutLink.href = "/logout";
            logoutLink.className = "mobile-action mobile-register-btn";
            logoutLink.innerText = "Logout";

            navLinks.appendChild(logoutLink);
        }
    }



    // Auto-fade flash messages
    const flashMessages = document.querySelectorAll(".flash-message");
    flashMessages.forEach(msg => {
        setTimeout(() => {
            msg.style.transition = "opacity 0.5s ease, transform 0.5s ease";
            msg.style.opacity = "0";
            msg.style.transform = "translateY(-10px)";
            setTimeout(() => msg.remove(), 500);
        }, 5000);
    });
});