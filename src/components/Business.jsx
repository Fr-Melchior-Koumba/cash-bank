import React from 'react'
import { features } from '../constants';
import styles, { layout } from '../styles';
import Button from './Button';



const Business = () => {
  return (
    <section id="features" className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>Votre argent en toute <br className='sm:block hidden' /> sécurité</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500</p>

        <Button styles='mt-10'/>
      </div>


      <div className={`${layout.sectionImg} flex-col`}>
        {features.map((feature, index) => (
          <div key={feature.id} className={`flex flex-row p-6 rounded-[20px] ${index !== features.length -1 ? 'mb-6' : 'mb-0'} feature-card`}>
            <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
              <img src={feature.icon} alt="icon" className='w-[50%] h-[50%] object-contain'/>
            </div>
            <div className='flex-1 flex flex-col ml-3'>
              <h4 className='font-poppins font-semibold capitalize text-white text-[18px] leading-[23px] mb-1'>{feature.title}</h4>
              <p className='font-poppins font-normal text-dimWhite text-[16px] leading-[24px] mb-1'>{feature.content}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Business