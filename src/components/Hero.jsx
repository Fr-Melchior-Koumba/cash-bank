import React from 'react'
import styles from '../styles'
import { discount, logo, robot} from '../assets';
import GetStarted from './GetStarted';


const Hero = () => {
  return (
    <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        <div className='flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2'>
          <img src={discount} alt="discount" 
          className='w-[32px] h-[32px]'/>
         <p className={`${styles.paragraph} ml-2 uppercase`}>
          <span className='text-white'>20%</span> De Réduction pour {" "}
            <span className='text-white'>1 Mois</span>          
         </p>
        </div>

        <div className='flex flex-row justify-between items-center w-full'>
          <h1 className='flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[75px]'>
              Prochaine <br className='sm:block hidden'/> {" "}
              <span className='text-gradient'>Génération</span> <br />
          </h1>  

          <div className='ss:flex hidden md:mr-4 mr-0'>
            <GetStarted />
          </div>
        </div>  

        <h1 className='font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100px] leading-[75px] w-full'>
          De paiement.
        </h1>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
      </div>   

      <div className={`${styles.flexCenter} flex-1 flex md:my-0 my-10 relative`}>
      <img src={robot} alt="robot-img" className='w-[100%] h-[100%] relative z-[5]' />
        <div className='absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient' />
      </div>  

      <div className={`${styles.flexCenter} ss:hidden`}>
        <GetStarted />
      </div>
    </section>
  )
}

export default Hero