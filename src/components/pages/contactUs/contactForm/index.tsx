import React from 'react'
import styles from './contactForm.module.scss'
import Image from 'next/image'
import RightIcon from '@/components/assets/svg/right-round.svg'
export default function ContactForm() {
  return (
    <div className={styles.contactForm}>
      <div className={styles.text}>
        <h2>Do you have any questions?</h2>
        <h3>Contact us!</h3>
      </div>
      <div className={styles.formData}>
        <h4>Fill out the form</h4>
        <div className={styles.input}>
          <label>
            Your name <span>*</span>
          </label>
          <input type='text' />
        </div>
        <div className={styles.input}>
          <label>
            Email <span>*</span>
          </label>
          <input type='text' />
        </div>
        <div className={styles.input}>
          <label>
            Your message <span>*</span>
          </label>
          <input type='text' />
        </div>
        <div className={styles.text}>
          <p>
            By sending this form I confirm that I have read and accept the <u>Privacy Policy</u>
          </p>
        </div>
        <div className={styles.button}>
          <button>
            Send a message
            <div className={styles.submitFormIcon}>
              <Image src={RightIcon.src} alt='RightIcon' layout='fill' />
            </div>
          </button>
        </div>
      </div>
    </div>
  )
}
