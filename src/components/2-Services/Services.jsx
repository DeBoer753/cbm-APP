// REACT:
import { Link } from 'react-router-dom'

// IMGS:
import socialMedia from '../../imgs/socialImg.png'
import photography from '../../imgs/gearImg.png'
import video from '../../imgs/droneImg.png'

// CSS: 
import styles from './Services.module.css'

// SERVICES: 
export default function Services() {
    return (
        <div>

            <div className={styles.servicesHeaderBox}>
                <h1>"Providing professional media production to the bay area since 2020"</h1>
                <div>
                    <hr />
                        <h2>Services</h2>
                    <hr />
                </div>
            </div>

            <main className={styles.servicesMain}>
                <div className={styles.servicesContent}>
                    <section>
                        <div>
                            <img src={socialMedia} alt="" srcset="" />
                            <h3>Social Media</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandaetur adipisicing elit. Rep amet consectetur adipisicing elit. Repudiandaeudiandae tur adipisicing elit. Repudiandae quasi elit. Repudiandae quasi</p>
                        </div>
                        <div>
                            <Link to='/socialmedia'><button>View Work</button></Link>
                        </div>
                    </section>
                    <section>
                        <div>
                            <img src={photography} alt="" srcset="" />
                            <h3>Photography</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicin et consectetur adipisicinet consectetur adipisicing elit. Repudiandae quasi elit. Repudiandae quasi</p>
                        </div>
                        <div>
                            <Link to='/photography'><button>View Work</button></Link>
                        </div>
                    </section>
                    <section>
                        <div>
                            <img src={video} alt="" srcset="" />
                            <h3>Video</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae  amet consectetur adipisicing elit. Repudiandae  amet consectetur adipisicing elit. Repudiandae quasi elit. Repudiandae quasi  </p>
                        </div>
                        <div>
                            <Link to='/video'><button>View Work</button></Link>
                        </div>
                    </section>
                </div>
            </main>

        </div>
    )
}