import Image from 'next/image'
import styles from './Login.module.css'

export default function Login() {
    return(
        <>
        <div className={styles.master}>
            <div className={styles.container}>
                <div className={styles.login}>
                    <div className={styles.logo}><Image src={'/images/logo.png'} width={180} height={55}/></div>
                    <input/>
                    <input/>
                    <button className={styles.loginButton}>Log In</button>
                </div>
                <div className={styles.alt}>
                    <p className={styles.or}>OR</p>
                    <div className={styles.facebook}>
                        <Image src={'/images/facebook.png'} width={16} height={16}/>
                        <p>Log in with Facebook</p>
                    </div>
                    <p className={styles.forgotPass}>Forgot password?</p>
                </div>
            </div>
            <div className={styles.signup}>
                <p>Don't have an account? <span className={styles.bold}>Sign up</span></p>
            </div>
            <p>Get the App.</p>
            <div>
                <Image src={'/images/applestore.png'} width={153} height={45}/>
                <Image src={'/images/googleplay.png'} width={153} height={45}/>
            </div>
        </div>
        </>
    )
}