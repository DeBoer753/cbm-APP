// REACT:
// import react from 'react'

// COMPONENTS: 
import Footer from '../../components/5-Footer/Footer'

// CSS: 
import styles from './SocialMedia.module.css'

// IMGS:
import banner from '../../imgs/banner5TemplateCBM.png'

// SERVICES
export default function SocialMedia() {
  return (

  <div>
    <img className={styles.banner} src={banner} alt="" srcset="" />

    <main className={styles.socialMediaMain}>
        <div className={styles.socialMediaHeaderBox}>
            <h1>Need Help With Social Media?</h1>

            <h2>Welcome to Your Path to Social Media Success</h2>

            <p>In today's digital age, social media stands as one of the most influential industries in the world. 
              It's not just about sharing moments; it's about connecting with your audience, building your brand, 
              and seizing endless opportunities. But It can be a daunting world. Trying to figure out how to create 
              engaging and beautiful content, and formulate a social media strategy by yourself can be overwhelming.</p>

            <h4>That's where we come in.</h4>

            <p>At Chris Blossom Media, we understand the challenges and complexities of the digital landscape. 
              We're here to be your partner in navigating the ever-evolving social media sphere. Our expertise isn't 
              just about taking stunning photos and crafting compelling stories; it's about tailoring each piece of content 
              to resonate with your unique audience. We'll help you build your brand's presence, engage your followers, 
              and drive meaningful connections that go beyond the screen. Explore our range of social media content and pricing 
              options below. Let's work together to transform your social media into a powerful tool for growth.</p>

            <h4>Previous Work</h4>
            <img src="" alt="" srcset="" />
        </div>
    </main>

    <Footer />

  </div>
  )
}   