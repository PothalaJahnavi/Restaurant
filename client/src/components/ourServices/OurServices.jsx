import React from 'react'
import './ourServices.css'
const OurServices = () => {
  return (
    <div className='our-services'>
      <h1 style={{textAlign:"center",color:"red"}}>SERVICES</h1>
      <div className="all-services">
        <div className="service">
          <h1 className='heading' style={{color:"orange"}}>All You Can Eat</h1>
          <img src="https://zipinventory.com/assets/images/topiccluster/all-you-can-eat-1607720499-5566-800-92106c8fb.webp" alt="" className='service-image' />
          <p className='service-subheading' >Although it sounds similar to buffet service, the all you can eat model consists of specific promotions rather than a consistent option. For example,We offer an occasional Never Ending Pasta Bowl where customers can enjoy bottomless dishes. 
</p>
        </div>
        <div className="service">
            <h1 style={{color:"orange"}}>We Don't Make Our Guests to wait</h1>
            <img src="https://zipinventory.com/assets/images/topiccluster/2-dont-make-guests-wait-1607720500-4603-800-a3add1ea1.webp" alt="" className='service-image'/>
          <p className='service-subheading' >We have enough staff on-hand to seat, takes orders, fulfill requests, bus tables, and complete transactions.Here Servers prioritize the speed of service without sacrificing quality. If certain meals are taking longer than expected, guests will be notified in advance so they can determine if they want to switch their order.</p>
        </div>
      </div>
    </div>
  )
}

export default OurServices
