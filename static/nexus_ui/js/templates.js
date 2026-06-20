const categories = [
    {
        id: "login",
        icon: "🔐",
        title: "Login Pages",
        desc: "Modern login page designs with clean UI."
    },
    {
        id: "password",
        icon: "🔑",
        title: "Password Pages",
        desc: "Forgot password and reset password UI templates."
    },
    {
        id: "landing",
        icon: "🚀",
        title: "Landing Pages",
        desc: "Startup, SaaS, and product landing pages."
    },
    {
        id: "dashboard",
        icon: "📊",
        title: "Dashboard UI",
        desc: "Admin dashboard and analytics UI layouts."
    },
    {
        id: "ecommerce",
        icon: "🛒",
        title: "E-Commerce UI",
        desc: "Modern online store layouts and checkout designs."
    },
    {
        id: "mobile",
        icon: "📱",
        title: "Mobile App UI",
        desc: "Beautiful mobile app screens and responsive templates."
    },
    {
        id: "portfolio",
        icon: "👤",
        title: "Portfolio Pages",
        desc: "Personal portfolio and developer profile pages."
    },
    {
        id: "contact",
        icon: "📩",
        title: "Contact Forms",
        desc: "Beautiful contact form UI designs."
    }
];

const templates = {
    login: [
        {
            id: "modern-glass-login",
            icon: "🎨",
            name: "Modern Glass Login",
            desc: "Clean glass style login page.",
            image: "images/modern.png",
            code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Glass Login</title>

  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: "Segoe UI", sans-serif;
    }

    body {
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      background:
        linear-gradient(135deg, #2563eb, #7c3aed);
      overflow: hidden;
    }

    body::before,
    body::after {
      content: "";
      position: absolute;
      width: 280px;
      height: 280px;
      border-radius: 50%;
      background: rgba(255, 255, 255, 0.25);
      filter: blur(10px);
    }

    body::before {
      top: -80px;
      left: -60px;
    }

    body::after {
      bottom: -90px;
      right: -70px;
    }

    .login-card {
      width: 380px;
      padding: 38px 34px;
      border-radius: 22px;
      background: rgba(255, 255, 255, 0.16);
      border: 1px solid rgba(255, 255, 255, 0.35);
      backdrop-filter: blur(18px);
      -webkit-backdrop-filter: blur(18px);
      box-shadow: 0 25px 60px rgba(0, 0, 0, 0.25);
      color: #fff;
      z-index: 1;
    }

    .login-card h2 {
      text-align: center;
      font-size: 30px;
      margin-bottom: 8px;
      font-weight: 700;
    }

    .login-card p {
      text-align: center;
      font-size: 14px;
      opacity: 0.85;
      margin-bottom: 30px;
    }

    .input-box {
      margin-bottom: 18px;
    }

    .input-box label {
      display: block;
      font-size: 14px;
      margin-bottom: 7px;
      opacity: 0.9;
    }

    .input-box input {
      width: 100%;
      padding: 14px 15px;
      border: none;
      outline: none;
      border-radius: 12px;
      background: rgba(255, 255, 255, 0.22);
      color: #fff;
      font-size: 15px;
      border: 1px solid rgba(255, 255, 255, 0.25);
    }

    .input-box input::placeholder {
      color: rgba(255, 255, 255, 0.75);
    }

    .options {
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 13px;
      margin: 5px 0 22px;
    }

    .options label {
      display: flex;
      gap: 6px;
      align-items: center;
    }

    .options a {
      color: #fff;
      text-decoration: none;
      font-weight: 500;
    }

    .options a:hover {
      text-decoration: underline;
    }

    .login-btn {
      width: 100%;
      padding: 14px;
      border: none;
      border-radius: 12px;
      background: #fff;
      color: #2563eb;
      font-size: 16px;
      font-weight: 700;
      cursor: pointer;
      transition: 0.25s;
    }

    .login-btn:hover {
      transform: translateY(-2px);
      box-shadow: 0 12px 25px rgba(0, 0, 0, 0.25);
    }

    .signup-text {
      text-align: center;
      margin-top: 24px;
      font-size: 14px;
    }

    .signup-text a {
      color: #fff;
      font-weight: 700;
      text-decoration: none;
    }

    @media (max-width: 450px) {
      .login-card {
        width: 90%;
        padding: 32px 24px;
      }

      .login-card h2 {
        font-size: 26px;
      }
    }
  </style>
</head>

<body>
  <div class="login-card">
    <h2>Welcome Back</h2>
    <p>Login to continue to your dashboard</p>

    <form>
      <div class="input-box">
        <label>Email</label>
        <input type="email" placeholder="Enter your email" required />
      </div>

      <div class="input-box">
        <label>Password</label>
        <input type="password" placeholder="Enter your password" required />
      </div>

      <div class="options">
        <label>
          <input type="checkbox" />
          Remember me
        </label>
        <a href="#">Forgot password?</a>
      </div>

      <button type="submit" class="login-btn">Login</button>

      <div class="signup-text">
        Don’t have an account? <a href="#">Sign up</a>
      </div>
    </form>
  </div>
</body>
</html>`
        },
        {
            id: "dark-login",
            icon: "🌙",
            name: "Dark Login Page",
            desc: "Dark theme login design.",
            image: "images/dark.png",
            code: `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Dark Login</title>

<style>
*{
    margin:0;
    padding:0;
    box-sizing:border-box;
    font-family:'Segoe UI',sans-serif;
}

body{
    min-height:100vh;
    display:flex;
    justify-content:center;
    align-items:center;
    background:#0f172a;
}

.login-container{
    width:400px;
    background:#1e293b;
    padding:40px;
    border-radius:20px;
    border:1px solid #334155;
    box-shadow:0 20px 40px rgba(0,0,0,0.4);
}

.login-container h1{
    color:#fff;
    text-align:center;
    margin-bottom:10px;
    font-size:32px;
}

.subtitle{
    color:#94a3b8;
    text-align:center;
    margin-bottom:30px;
    font-size:14px;
}

.input-group{
    margin-bottom:20px;
}

.input-group label{
    display:block;
    color:#cbd5e1;
    margin-bottom:8px;
    font-size:14px;
}

.input-group input{
    width:100%;
    padding:14px;
    background:#0f172a;
    border:1px solid #334155;
    border-radius:12px;
    color:#fff;
    font-size:15px;
    outline:none;
    transition:.3s;
}

.input-group input:focus{
    border-color:#3b82f6;
}

.input-group input::placeholder{
    color:#64748b;
}

.options{
    display:flex;
    justify-content:space-between;
    align-items:center;
    margin-bottom:25px;
    font-size:14px;
}

.options label{
    color:#94a3b8;
}

.options a{
    color:#3b82f6;
    text-decoration:none;
}

.options a:hover{
    text-decoration:underline;
}

.login-btn{
    width:100%;
    padding:14px;
    border:none;
    border-radius:12px;
    background:#2563eb;
    color:#fff;
    font-size:16px;
    font-weight:600;
    cursor:pointer;
    transition:.3s;
}

.login-btn:hover{
    background:#1d4ed8;
}

.divider{
    text-align:center;
    color:#64748b;
    margin:25px 0;
    position:relative;
}

.divider::before,
.divider::after{
    content:'';
    position:absolute;
    top:50%;
    width:40%;
    height:1px;
    background:#334155;
}

.divider::before{
    left:0;
}

.divider::after{
    right:0;
}

.signup{
    text-align:center;
    color:#94a3b8;
    font-size:14px;
}

.signup a{
    color:#3b82f6;
    text-decoration:none;
    font-weight:600;
}

.signup a:hover{
    text-decoration:underline;
}

@media(max-width:480px){
    .login-container{
        width:90%;
        padding:30px;
    }
}
</style>
</head>

<body>

<div class="login-container">

    <h1>Sign In</h1>
    <p class="subtitle">Access your account securely</p>

    <form>

        <div class="input-group">
            <label>Email Address</label>
            <input type="email" placeholder="Enter your email">
        </div>

        <div class="input-group">
            <label>Password</label>
            <input type="password" placeholder="Enter your password">
        </div>

        <div class="options">
            <label>
                <input type="checkbox">
                Remember me
            </label>
            <a href="#">Forgot Password?</a>
        </div>

        <button class="login-btn">Login</button>

        <div class="divider">OR</div>

        <div class="signup">
            Don't have an account?
            <a href="#">Create Account</a>
        </div>

    </form>

</div>

</body>
</html>`
        },
        {
            id: "minimal-login",
            icon: "✨",
            name: "Minimal Login Form",
            desc: "Simple and clean login UI.",
            image: "images/simple.png",
            code: `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Minimal Login Form</title>

<style>
*{
    margin:0;
    padding:0;
    box-sizing:border-box;
    font-family:Arial, sans-serif;
}

body{
    height:100vh;
    display:flex;
    justify-content:center;
    align-items:center;
    background:#f8fafc;
}

.login-box{
    width:350px;
    background:#fff;
    padding:40px;
    border-radius:12px;
    border:1px solid #e5e7eb;
}

.login-box h2{
    text-align:center;
    margin-bottom:8px;
    color:#111827;
}

.login-box p{
    text-align:center;
    color:#6b7280;
    font-size:14px;
    margin-bottom:30px;
}

.input-group{
    margin-bottom:18px;
}

.input-group label{
    display:block;
    margin-bottom:6px;
    font-size:14px;
    color:#374151;
}

.input-group input{
    width:100%;
    padding:12px;
    border:1px solid #d1d5db;
    border-radius:8px;
    outline:none;
    font-size:14px;
}

.input-group input:focus{
    border-color:#2563eb;
}

.login-btn{
    width:100%;
    padding:12px;
    border:none;
    border-radius:8px;
    background:#2563eb;
    color:#fff;
    font-size:15px;
    cursor:pointer;
}

.login-btn:hover{
    background:#1d4ed8;
}

.footer{
    text-align:center;
    margin-top:18px;
    font-size:14px;
    color:#6b7280;
}

.footer a{
    color:#2563eb;
    text-decoration:none;
}
</style>
</head>

<body>

<div class="login-box">
    <h2>Login</h2>
    <p>Sign in to your account</p>

    <form>
        <div class="input-group">
            <label>Email</label>
            <input type="email" placeholder="Enter your email">
        </div>

        <div class="input-group">
            <label>Password</label>
            <input type="password" placeholder="Enter your password">
        </div>

        <button type="submit" class="login-btn">
            Sign In
        </button>

        <div class="footer">
            Don't have an account?
            <a href="#">Register</a>
        </div>
    </form>
</div>

</body>
</html>`
        },
        {
            id: "gradient-login",
            icon: "🌈",
            name: "Gradient Login Page",
            desc: "Colorful gradient login layout.",
            image: "images/grade.png",
            code: `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Gradient Login Page</title>

<style>
*{
    margin:0;
    padding:0;
    box-sizing:border-box;
    font-family:'Segoe UI',sans-serif;
}

body{
    min-height:100vh;
    display:flex;
    justify-content:center;
    align-items:center;
    background:linear-gradient(
        135deg,
        #4f46e5,
        #7c3aed,
        #ec4899
    );
}

.login-card{
    width:380px;
    padding:40px;
    background:#ffffff;
    border-radius:20px;
    box-shadow:0 20px 50px rgba(0,0,0,0.15);
}

.login-card h1{
    text-align:center;
    color:#111827;
    margin-bottom:8px;
    font-size:32px;
}

.login-card p{
    text-align:center;
    color:#6b7280;
    margin-bottom:30px;
    font-size:14px;
}

.input-group{
    margin-bottom:18px;
}

.input-group label{
    display:block;
    margin-bottom:8px;
    color:#374151;
    font-size:14px;
    font-weight:500;
}

.input-group input{
    width:100%;
    padding:14px;
    border:2px solid #e5e7eb;
    border-radius:12px;
    outline:none;
    font-size:15px;
    transition:0.3s;
}

.input-group input:focus{
    border-color:#7c3aed;
}

.options{
    display:flex;
    justify-content:space-between;
    align-items:center;
    margin-bottom:24px;
    font-size:14px;
}

.options a{
    color:#7c3aed;
    text-decoration:none;
}

.login-btn{
    width:100%;
    padding:14px;
    border:none;
    border-radius:12px;
    background:linear-gradient(
        135deg,
        #4f46e5,
        #7c3aed,
        #ec4899
    );
    color:#fff;
    font-size:16px;
    font-weight:600;
    cursor:pointer;
    transition:0.3s;
}

.login-btn:hover{
    transform:translateY(-2px);
}

.signup{
    text-align:center;
    margin-top:24px;
    color:#6b7280;
    font-size:14px;
}

.signup a{
    color:#7c3aed;
    font-weight:600;
    text-decoration:none;
}

@media(max-width:450px){
    .login-card{
        width:90%;
        padding:30px;
    }
}
</style>
</head>
<body>

<div class="login-card">

    <h1>Welcome Back</h1>
    <p>Sign in to continue</p>

    <form>

        <div class="input-group">
            <label>Email Address</label>
            <input type="email" placeholder="Enter your email">
        </div>

        <div class="input-group">
            <label>Password</label>
            <input type="password" placeholder="Enter your password">
        </div>

        <div class="options">
            <label>
                <input type="checkbox">
                Remember me
            </label>
            <a href="#">Forgot Password?</a>
        </div>

        <button type="submit" class="login-btn">
            Login
        </button>

        <div class="signup">
            Don't have an account?
            <a href="#">Create Account</a>
        </div>

    </form>

</div>

</body>
</html>`
        },
        {
            id: "split-login",
            icon: "🖥️",
            name: "Split Screen Login",
            desc: "Image and form side-by-side login.",
            image: "images/split.png",
            code: `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Split Screen Login</title>

<style>
*{
    margin:0;
    padding:0;
    box-sizing:border-box;
    font-family:'Segoe UI',sans-serif;
}

body{
    min-height:100vh;
    background:#f4f7fb;
}

.container{
    display:flex;
    min-height:100vh;
}

/* Left Side Image */
.left-panel{
    flex:1;
    background:url('https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200')
    center/cover no-repeat;
    position:relative;
}

.left-panel::before{
    content:"";
    position:absolute;
    inset:0;
    background:rgba(37,99,235,0.75);
}

.overlay{
    position:absolute;
    inset:0;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    text-align:center;
    color:#fff;
    padding:40px;
    z-index:1;
}

.overlay h1{
    font-size:48px;
    margin-bottom:15px;
}

.overlay p{
    font-size:18px;
    max-width:500px;
    line-height:1.6;
}

/* Right Side Form */
.right-panel{
    flex:1;
    display:flex;
    justify-content:center;
    align-items:center;
    background:#fff;
}

.login-box{
    width:100%;
    max-width:420px;
    padding:40px;
}

.login-box h2{
    font-size:34px;
    color:#111827;
    margin-bottom:10px;
}

.login-box p{
    color:#6b7280;
    margin-bottom:30px;
}

.input-group{
    margin-bottom:18px;
}

.input-group label{
    display:block;
    margin-bottom:8px;
    color:#374151;
    font-size:14px;
}

.input-group input{
    width:100%;
    padding:14px;
    border:1px solid #d1d5db;
    border-radius:10px;
    outline:none;
    font-size:15px;
}

.input-group input:focus{
    border-color:#2563eb;
}

.options{
    display:flex;
    justify-content:space-between;
    align-items:center;
    margin-bottom:24px;
    font-size:14px;
}

.options a{
    text-decoration:none;
    color:#2563eb;
}

.login-btn{
    width:100%;
    padding:14px;
    border:none;
    border-radius:10px;
    background:#2563eb;
    color:#fff;
    font-size:16px;
    font-weight:600;
    cursor:pointer;
    transition:.3s;
}

.login-btn:hover{
    background:#1d4ed8;
}

.signup{
    text-align:center;
    margin-top:20px;
    color:#6b7280;
}

.signup a{
    color:#2563eb;
    text-decoration:none;
    font-weight:600;
}

/* Mobile */
@media(max-width:900px){

    .container{
        flex-direction:column;
    }

    .left-panel{
        min-height:300px;
    }

    .overlay h1{
        font-size:36px;
    }

    .right-panel{
        padding:40px 20px;
    }
}
</style>
</head>
<body>

<div class="container">

    <!-- Left Side -->
    <div class="left-panel">
        <div class="overlay">
            <h1>Welcome Back</h1>
            <p>
                Access your dashboard, manage projects,
                and stay connected with your team from anywhere.
            </p>
        </div>
    </div>

    <!-- Right Side -->
    <div class="right-panel">
        <div class="login-box">

            <h2>Sign In</h2>
            <p>Enter your credentials to continue</p>

            <form>

                <div class="input-group">
                    <label>Email Address</label>
                    <input type="email" placeholder="Enter your email">
                </div>

                <div class="input-group">
                    <label>Password</label>
                    <input type="password" placeholder="Enter your password">
                </div>

                <div class="options">
                    <label>
                        <input type="checkbox">
                        Remember me
                    </label>
                    <a href="#">Forgot Password?</a>
                </div>

                <button class="login-btn">
                    Login
                </button>

                <div class="signup">
                    Don't have an account?
                    <a href="#">Create Account</a>
                </div>

            </form>

        </div>
    </div>

</div>

</body>
</html>`
        }
    ],
    password: [
        {
            id: "forgot-password",
            icon: "🔑",
            name: "Forgot Password",
            desc: "Forgot password recovery page.",
            image: "images/forgot.png",
            code: `<!DOCTYPE html>
                < html lang="en" >
                <head>
                    <meta charset="UTF-8">
                        <meta name="viewport" content="width=device-width, initial-scale=1.0">
                            <title>Forgot Password</title>

                            <style>
                                *{
                                    margin:0;
                                padding:0;
                                box-sizing:border-box;
                                font-family:'Segoe UI',sans-serif;
}

                                body{
                                    min - height:100vh;
                                display:flex;
                                justify-content:center;
                                align-items:center;
                                background:#f8fafc;
                                padding:20px;
}

                                .forgot-card{
                                    width:100%;
                                max-width:420px;
                                background:#fff;
                                padding:40px;
                                border-radius:16px;
                                border:1px solid #e5e7eb;
                                box-shadow:0 10px 30px rgba(0,0,0,0.08);
}

                                .icon{
                                    width:70px;
                                height:70px;
                                margin:0 auto 20px;
                                border-radius:50%;
                                background:#eff6ff;
                                display:flex;
                                align-items:center;
                                justify-content:center;
                                font-size:30px;
}

                                h2{
                                    text - align:center;
                                color:#111827;
                                margin-bottom:10px;
}

                                .description{
                                    text - align:center;
                                color:#6b7280;
                                font-size:14px;
                                line-height:1.6;
                                margin-bottom:30px;
}

                                .input-group{
                                    margin - bottom:20px;
}

                                .input-group label{
                                    display:block;
                                margin-bottom:8px;
                                color:#374151;
                                font-size:14px;
                                font-weight:500;
}

                                .input-group input{
                                    width:100%;
                                padding:14px;
                                border:1px solid #d1d5db;
                                border-radius:10px;
                                outline:none;
                                font-size:15px;
}

                                .input-group input:focus{
                                    border - color:#2563eb;
}

                                .reset-btn{
                                    width:100%;
                                padding:14px;
                                border:none;
                                border-radius:10px;
                                background:#2563eb;
                                color:#fff;
                                font-size:15px;
                                font-weight:600;
                                cursor:pointer;
                                transition:.3s;
}

                                .reset-btn:hover{
                                    background:#1d4ed8;
}

                                .back-login{
                                    text - align:center;
                                margin-top:20px;
}

                                .back-login a{
                                    color:#2563eb;
                                text-decoration:none;
                                font-size:14px;
                                font-weight:500;
}
                            </style>
                        </head>
                        <body>

                            <div class="forgot-card">

                                <div class="icon">🔒</div>

                                <h2>Forgot Password?</h2>

                                <p class="description">
                                    No worries. Enter your email address and we'll send you
                                    a password reset link.
                                </p>

                                <form>

                                    <div class="input-group">
                                        <label>Email Address</label>
                                        <input
                                            type="email"
                                            placeholder="Enter your email"
                                            required
                                        >
                                    </div>

                                    <button type="submit" class="reset-btn">
                                        Send Reset Link
                                    </button>

                                </form>

                                <div class="back-login">
                                    <a href="#">← Back to Login</a>
                                </div>

                            </div>

                        </body>
                    </html>`
        },
        {
            id: "reset-password",
            icon: "🔄",
            name: "Reset Password",
            desc: "Reset account password page.",
            image: "images/reset.png",
            code: `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Reset Password</title>

<style>
*{
    margin:0;
    padding:0;
    box-sizing:border-box;
    font-family:'Segoe UI',sans-serif;
}

body{
    min-height:100vh;
    display:flex;
    justify-content:center;
    align-items:center;
    background:#f4f7fb;
    padding:20px;
}

.reset-card{
    width:100%;
    max-width:450px;
    background:#fff;
    padding:40px;
    border-radius:16px;
    border:1px solid #e5e7eb;
    box-shadow:0 12px 35px rgba(0,0,0,0.08);
}

.icon{
    width:70px;
    height:70px;
    margin:0 auto 20px;
    border-radius:50%;
    background:#eff6ff;
    display:flex;
    align-items:center;
    justify-content:center;
    font-size:30px;
}

h2{
    text-align:center;
    color:#111827;
    margin-bottom:10px;
}

.subtitle{
    text-align:center;
    color:#6b7280;
    font-size:14px;
    line-height:1.6;
    margin-bottom:30px;
}

.input-group{
    margin-bottom:18px;
}

.input-group label{
    display:block;
    margin-bottom:8px;
    color:#374151;
    font-size:14px;
    font-weight:500;
}

.input-group input{
    width:100%;
    padding:14px;
    border:1px solid #d1d5db;
    border-radius:10px;
    outline:none;
    font-size:15px;
    transition:0.3s;
}

.input-group input:focus{
    border-color:#2563eb;
}

.password-note{
    color:#6b7280;
    font-size:13px;
    margin-bottom:20px;
}

.reset-btn{
    width:100%;
    padding:14px;
    border:none;
    border-radius:10px;
    background:#2563eb;
    color:#fff;
    font-size:15px;
    font-weight:600;
    cursor:pointer;
    transition:0.3s;
}

.reset-btn:hover{
    background:#1d4ed8;
}

.back-link{
    text-align:center;
    margin-top:20px;
}

.back-link a{
    color:#2563eb;
    text-decoration:none;
    font-size:14px;
    font-weight:500;
}
</style>
</head>
<body>

<div class="reset-card">

    <div class="icon">🔑</div>

    <h2>Reset Password</h2>

    <p class="subtitle">
        Create a new password for your account.
        Make sure it is strong and secure.
    </p>

    <form>

        <div class="input-group">
            <label>New Password</label>
            <input
                type="password"
                placeholder="Enter new password"
                required
            >
        </div>

        <div class="input-group">
            <label>Confirm Password</label>
            <input
                type="password"
                placeholder="Confirm new password"
                required
            >
        </div>

        <div class="password-note">
            Password should contain at least 8 characters,
            including letters and numbers.
        </div>

        <button type="submit" class="reset-btn">
            Update Password
        </button>

    </form>

    <div class="back-link">
        <a href="#">← Back to Login</a>
    </div>

</div>

</body>
</html>`
        },
        {
            id: "otp-verification",
            icon: "💬",
            name: "OTP Verification",
            desc: "One-time password verification page.",
            image: "images/otp.png",
            code: `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>OTP Verification</title>

<style>
*{
    margin:0;
    padding:0;
    box-sizing:border-box;
    font-family:'Segoe UI',sans-serif;
}

body{
    min-height:100vh;
    display:flex;
    justify-content:center;
    align-items:center;
    background:#f4f7fb;
    padding:20px;
}

.otp-card{
    width:100%;
    max-width:430px;
    background:#fff;
    padding:40px;
    border-radius:16px;
    border:1px solid #e5e7eb;
    box-shadow:0 12px 35px rgba(0,0,0,0.08);
    text-align:center;
}

.icon{
    width:70px;
    height:70px;
    margin:0 auto 20px;
    border-radius:50%;
    background:#eff6ff;
    display:flex;
    align-items:center;
    justify-content:center;
    font-size:30px;
}

h2{
    color:#111827;
    margin-bottom:10px;
}

.subtitle{
    color:#6b7280;
    font-size:14px;
    line-height:1.6;
    margin-bottom:30px;
}

.otp-inputs{
    display:flex;
    justify-content:space-between;
    gap:10px;
    margin-bottom:24px;
}

.otp-inputs input{
    width:52px;
    height:56px;
    text-align:center;
    font-size:22px;
    font-weight:600;
    border:1px solid #d1d5db;
    border-radius:12px;
    outline:none;
    transition:0.3s;
}

.otp-inputs input:focus{
    border-color:#2563eb;
    box-shadow:0 0 0 3px rgba(37,99,235,0.12);
}

.verify-btn{
    width:100%;
    padding:14px;
    border:none;
    border-radius:10px;
    background:#2563eb;
    color:#fff;
    font-size:15px;
    font-weight:600;
    cursor:pointer;
    transition:0.3s;
}

.verify-btn:hover{
    background:#1d4ed8;
}

.resend{
    margin-top:20px;
    font-size:14px;
    color:#6b7280;
}

.resend a{
    color:#2563eb;
    text-decoration:none;
    font-weight:600;
}

.back-link{
    margin-top:14px;
}

.back-link a{
    color:#2563eb;
    text-decoration:none;
    font-size:14px;
    font-weight:500;
}

@media(max-width:420px){
    .otp-card{
        padding:30px 24px;
    }

    .otp-inputs input{
        width:44px;
        height:50px;
        font-size:20px;
    }
}
</style>
</head>
<body>

<div class="otp-card">

    <div class="icon">📩</div>

    <h2>OTP Verification</h2>

    <p class="subtitle">
        Enter the 6-digit code sent to your email address.
    </p>

    <form>

        <div class="otp-inputs">
            <input type="text" maxlength="1">
            <input type="text" maxlength="1">
            <input type="text" maxlength="1">
            <input type="text" maxlength="1">
            <input type="text" maxlength="1">
            <input type="text" maxlength="1">
        </div>

        <button type="submit" class="verify-btn">
            Verify OTP
        </button>

    </form>

    <div class="resend">
        Didn’t receive the code?
        <a href="#">Resend OTP</a>
    </div>

    <div class="back-link">
        <a href="#">← Back to Login</a>
    </div>

</div>

</body>
</html>`
        },
        {
            id: "change-password",
            icon: "🔒",
            name: "Change Password",
            desc: "Change account password page.",
            image: "images/changepass.png",
            code: `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Change Password</title>

<style>
*{
    margin:0;
    padding:0;
    box-sizing:border-box;
    font-family:'Segoe UI',sans-serif;
}

body{
    min-height:100vh;
    display:flex;
    justify-content:center;
    align-items:center;
    background:#f4f7fb;
    padding:20px;
}

.password-card{
    width:100%;
    max-width:460px;
    background:#fff;
    padding:40px;
    border-radius:16px;
    border:1px solid #e5e7eb;
    box-shadow:0 12px 35px rgba(0,0,0,0.08);
}

.icon{
    width:70px;
    height:70px;
    margin:0 auto 20px;
    border-radius:50%;
    background:#eff6ff;
    display:flex;
    justify-content:center;
    align-items:center;
    font-size:30px;
}

h2{
    text-align:center;
    color:#111827;
    margin-bottom:10px;
}

.subtitle{
    text-align:center;
    color:#6b7280;
    font-size:14px;
    line-height:1.6;
    margin-bottom:30px;
}

.input-group{
    margin-bottom:18px;
}

.input-group label{
    display:block;
    margin-bottom:8px;
    color:#374151;
    font-size:14px;
    font-weight:500;
}

.input-group input{
    width:100%;
    padding:14px;
    border:1px solid #d1d5db;
    border-radius:10px;
    outline:none;
    font-size:15px;
    transition:0.3s;
}

.input-group input:focus{
    border-color:#2563eb;
    box-shadow:0 0 0 3px rgba(37,99,235,0.12);
}

.password-note{
    background:#f8fafc;
    border:1px solid #e5e7eb;
    color:#6b7280;
    font-size:13px;
    line-height:1.5;
    padding:12px;
    border-radius:10px;
    margin-bottom:22px;
}

.change-btn{
    width:100%;
    padding:14px;
    border:none;
    border-radius:10px;
    background:#2563eb;
    color:#fff;
    font-size:15px;
    font-weight:600;
    cursor:pointer;
    transition:0.3s;
}

.change-btn:hover{
    background:#1d4ed8;
}

.back-link{
    text-align:center;
    margin-top:20px;
}

.back-link a{
    color:#2563eb;
    text-decoration:none;
    font-size:14px;
    font-weight:500;
}

@media(max-width:480px){
    .password-card{
        padding:30px 24px;
    }
}
</style>
</head>
<body>

<div class="password-card">

    <div class="icon">🔐</div>

    <h2>Change Password</h2>

    <p class="subtitle">
        Update your account password to keep your profile secure.
    </p>

    <form>

        <div class="input-group">
            <label>Current Password</label>
            <input type="password" placeholder="Enter current password" required>
        </div>

        <div class="input-group">
            <label>New Password</label>
            <input type="password" placeholder="Enter new password" required>
        </div>

        <div class="input-group">
            <label>Confirm New Password</label>
            <input type="password" placeholder="Confirm new password" required>
        </div>

        <div class="password-note">
            Use at least 8 characters with a mix of letters, numbers,
            and symbols for better security.
        </div>

        <button type="submit" class="change-btn">
            Change Password
        </button>

    </form>

    <div class="back-link">
        <a href="#">← Back to Dashboard</a>
    </div>

</div>

</body>
</html>`
        },
        {
            id: "password-success",
            icon: "✅",
            name: "Password Success",
            desc: "Password changed successfully confirmation page.",
            image: "images/updatepass.png",
            code: `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Password Changed</title>

<style>
*{
    margin:0;
    padding:0;
    box-sizing:border-box;
    font-family:'Segoe UI',sans-serif;
}

body{
    min-height:100vh;
    display:flex;
    justify-content:center;
    align-items:center;
    background:#f4f7fb;
    padding:20px;
}

.success-card{
    width:100%;
    max-width:450px;
    background:#fff;
    padding:45px 40px;
    border-radius:18px;
    border:1px solid #e5e7eb;
    box-shadow:0 15px 40px rgba(0,0,0,0.08);
    text-align:center;
}

.success-icon{
    width:90px;
    height:90px;
    margin:0 auto 25px;
    border-radius:50%;
    background:#ecfdf5;
    color:#16a34a;
    display:flex;
    align-items:center;
    justify-content:center;
    font-size:42px;
    font-weight:bold;
}

h1{
    color:#111827;
    font-size:30px;
    margin-bottom:12px;
}

.message{
    color:#6b7280;
    font-size:15px;
    line-height:1.7;
    margin-bottom:30px;
}

.login-btn{
    display:inline-block;
    width:100%;
    padding:14px;
    border-radius:10px;
    background:#2563eb;
    color:#fff;
    text-decoration:none;
    font-size:15px;
    font-weight:600;
    transition:.3s;
}

.login-btn:hover{
    background:#1d4ed8;
}

.info{
    margin-top:20px;
    font-size:13px;
    color:#9ca3af;
}

@media(max-width:480px){
    .success-card{
        padding:35px 25px;
    }

    h1{
        font-size:26px;
    }
}
</style>
</head>
<body>

<div class="success-card">

    <div class="success-icon">
        ✓
    </div>

    <h1>Password Updated</h1>

    <p class="message">
        Your password has been changed successfully.
        You can now log in using your new password.
    </p>

    <a href="#" class="login-btn">
        Back to Login
    </a>

    <div class="info">
        Account security updated successfully.
    </div>

</div>

</body>
</html>`
        }
    ],
    landing: [
        {
            id: "saas-landing",
            icon: "🚀",
            name: "SaaS Landing",
            desc: "Modern software-as-a-service landing page.",
            image: "images/saas.png",
            code: ""
        },
        {
            id: "startup-landing",
            icon: "🏢",
            name: "Startup Landing",
            desc: "Professional startup business landing page.",
            image: "images/startup.png",
            code: ""
        },
        {
            id: "ai-product-landing",
            icon: "🤖",
            name: "AI Product Landing",
            desc: "Futuristic AI product showcase landing page.",
            image: "images/ai.png",
            code: ""
        },
        {
            id: "agency-landing",
            icon: "💼",
            name: "Agency Landing",
            desc: "Creative agency services and work showcase.",
            image: "images/agency.png",
            code: ""
        },
        {
            id: "portfolio-landing",
            icon: "🎨",
            name: "Portfolio Landing",
            desc: "Elegant landing page for personal or agency portfolios.",
            image: "images/portfolio_landing.png",
            code: ""
        }
    ],
    dashboard: [
        {
            id: "admin-dashboard",
            icon: "⚙️",
            name: "Admin Dashboard",
            desc: "General admin control panel dashboard.",
            image: "images/admin.png",
            code: ""
        },
        {
            id: "analytics-dashboard",
            icon: "📊",
            name: "Analytics Dashboard",
            desc: "Data-driven analytics dashboard with charts.",
            image: "images/analytics.png",
            code: ""
        },
        {
            id: "crm-dashboard",
            icon: "👥",
            name: "CRM Dashboard",
            desc: "Customer relationship management dashboard.",
            image: "images/crm.png",
            code: ""
        },
        {
            id: "finance-dashboard",
            icon: "💳",
            name: "Finance Dashboard",
            desc: "Financial transactions and statistics dashboard.",
            image: "images/finance.png",
            code: ""
        },
        {
            id: "project-dashboard",
            icon: "📋",
            name: "Project Dashboard",
            desc: "Project management and progress tracking dashboard.",
            image: "images/project.png",
            code: ""
        }
    ],
    ecommerce: [
        {
            id: "home-store",
            icon: "🏠",
            name: "Home Store",
            desc: "E-commerce homepage with featured products.",
            image: "images/home_store.png",
            code: ""
        },
        {
            id: "product-page",
            icon: "🏷️",
            name: "Product Page",
            desc: "Detailed product description and gallery page.",
            image: "images/product.png",
            code: ""
        },
        {
            id: "cart-page",
            icon: "🛒",
            name: "Cart Page",
            desc: "Shopping cart summary and item details page.",
            image: "images/cart.png",
            code: ""
        },
        {
            id: "checkout-page",
            icon: "💳",
            name: "Checkout Page",
            desc: "Order details and payment checkout page.",
            image: "images/checkout.png",
            code: ""
        },
        {
            id: "order-success",
            icon: "🎉",
            name: "Order Success",
            desc: "E-commerce order placement success page.",
            image: "images/order_success.png",
            code: ""
        }
    ],
    mobile: [
        {
            id: "mobile-login",
            icon: "🔐",
            name: "Login Screen",
            desc: "Mobile app login layout.",
            image: "images/mobile_login.png",
            code: ""
        },
        {
            id: "mobile-signup",
            icon: "📝",
            name: "Signup Screen",
            desc: "Mobile app registration screen.",
            image: "images/mobile_signup.png",
            code: ""
        },
        {
            id: "mobile-home",
            icon: "🏠",
            name: "Home Screen",
            desc: "Mobile application main dashboard/home screen.",
            image: "images/mobile_home.png",
            code: ""
        },
        {
            id: "mobile-profile",
            icon: "👤",
            name: "Profile Screen",
            desc: "User profile details screen.",
            image: "images/mobile_profile.png",
            code: ""
        },
        {
            id: "mobile-settings",
            icon: "⚙️",
            name: "Settings Screen",
            desc: "App settings and preferences screen.",
            image: "images/mobile_settings.png",
            code: ""
        }
    ],
    portfolio: [
        {
            id: "developer-portfolio",
            icon: "💻",
            name: "Developer Portfolio",
            desc: "Professional portfolio website for software engineers.",
            image: "images/developer.png",
            code: ""
        },
        {
            id: "designer-portfolio",
            icon: "🎨",
            name: "Designer Portfolio",
            desc: "Visual portfolio template for designers and creatives.",
            image: "images/designer.png",
            code: ""
        },
        {
            id: "freelancer-portfolio",
            icon: "💼",
            name: "Freelancer Portfolio",
            desc: "Freelancer service showcase and hire-me page.",
            image: "images/freelancer.png",
            code: ""
        },
        {
            id: "creative-portfolio",
            icon: "✨",
            name: "Creative Portfolio",
            desc: "Bold and creative layout for media professionals.",
            image: "images/creative.png",
            code: ""
        },
        {
            id: "personal-portfolio",
            icon: "👤",
            name: "Personal Portfolio",
            desc: "Minimalist personal bio and project showcase.",
            image: "images/personal.png",
            code: ""
        }
    ],
    contact: [
        {
            id: "simple-contact",
            icon: "📝",
            name: "Simple Contact Form",
            desc: "Clean and minimalist contact form.",
            image: "images/simple_contact.png",
            code: ""
        },
        {
            id: "modern-contact",
            icon: "✉️",
            name: "Modern Contact Form",
            desc: "Sleek contact form UI with hover animations.",
            image: "images/modern_contact.png",
            code: ""
        },
        {
            id: "business-contact",
            icon: "🏢",
            name: "Business Contact Form",
            desc: "Corporate inquiry form with company details.",
            image: "images/business_contact.png",
            code: ""
        },
        {
            id: "support-form",
            icon: "🛠️",
            name: "Support Form",
            desc: "Customer support ticket creation form.",
            image: "images/support.png",
            code: ""
        },
        {
            id: "feedback-form",
            icon: "💬",
            name: "Feedback Form",
            desc: "User feedback and rating submission form.",
            image: "images/feedback.png",
            code: ""
        }
    ]
};

const categoryGrid = document.getElementById("categoryGrid");

if (categoryGrid) {
    categoryGrid.innerHTML = categories.map(cat => `
    <div class="card">
      <span>${cat.icon}</span>
      <h3>${cat.title}</h3>
      <p>${cat.desc}</p>
      <a href="category.html?type=${cat.id}">View Templates</a>
    </div>
  `).join("");
}

const templateGrid = document.getElementById("templateGrid");

if (templateGrid) {
    const params = new URLSearchParams(window.location.search);
    const type = params.get("type");

    const category = categories.find(cat => cat.id === type);
    const selectedTemplates = templates[type] || [];

    document.getElementById("categoryTitle").innerText = category ? category.title : "Templates";
    document.getElementById("categoryDesc").innerText = category ? category.desc : "";

    templateGrid.innerHTML = selectedTemplates.length ? selectedTemplates.map(temp => `
                    <div class="card">
                        <span>${temp.icon}</span>
                        <h3>${temp.name}</h3>
                        <p>${temp.desc}</p>

                        <div class="template-actions">

                            <a href="preview.html?type=${type}&id=${temp.id}" class="eye-link">
                                <i class="fa-solid fa-eye"></i>
                            </a>

                            <a href="code.html?type=${type}&id=${temp.id}" class="code-link">
                                <i class="fa-solid fa-code"></i>
                            </a>

                        </div>
                    </div>
                    `).join("") : `
                    <div class="card">
                        <h3>No templates added yet</h3>
                        <p>Add templates inside js/templates.js</p>
                    </div>
                    `;
}

const previewImage = document.getElementById("previewImage");

if (previewImage) {
    const params = new URLSearchParams(window.location.search);
    const type = params.get("type");
    const id = params.get("id");

    const temp = templates[type]?.find(item => item.id === id);

    if (temp) {
        document.getElementById("previewTitle").innerText = temp.name;
        previewImage.src = temp.image;
    }
}

const templateCode = document.getElementById("templateCode");

if (templateCode) {
    const params = new URLSearchParams(window.location.search);
    const type = params.get("type");
    const id = params.get("id");

    const temp = templates[type]?.find(item => item.id === id);

    if (temp) {
        document.getElementById("codeTitle").innerText = temp.name + " Code";
        templateCode.innerText = temp.code;
    }
}

function copyCode() {
    const code = document.getElementById("templateCode").innerText;
    navigator.clipboard.writeText(code);
    alert("Code copied!");
}