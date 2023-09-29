import React from 'react'
import { Link } from 'react-router-dom'

export default function Loginsignup() {
    return (
        <div className="outer-box">
            <div className="inner-box">
                <header className="signup-header">
                    <h1>Signup</h1>
                    <p>It just takes 30 seconds</p>
                </header>
                <main className="signup-body">
                    <form>
                        <p>
                            <label for="fullname">Full Name</label>
                            <input type="text" id="fullname" placeholder="Enter Your Firstname" required/>
                        </p>
                        <p>
                            <label for="email">Your Email</label>
                            <input type="email" id="email" placeholder="Enter Your Email" required/>
                        </p>
                        <p>
                            <label for="password">Your Password</label>
                            <input type="password" id="password" placeholder="at least 8 characters" required/>
                        </p>
                        <p>
                            <input type="submit" id="submit" value="Create Account"/>
                        </p>
                    </form>
                </main>
                <footer className="signup-footer">
                    <p>Already have an Account?<Link>Login</Link></p>
                </footer>
            </div>
            <div className="circle c1"></div>
            <div className="circle c2"></div>
        </div>
    )
}
