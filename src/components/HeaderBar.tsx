import GoogleLoginButton from "./GoogleLoginButton";


export default function HeaderBar() {
    return (
        <div className="header">
            <div className="logo">
                <img className="logo-img" src={'/img/logo.png'} />
                <div className="logo-title">Tasken<span className="blue">Do</span></div>
            </div>
            <GoogleLoginButton/>
        </div>
    )
}