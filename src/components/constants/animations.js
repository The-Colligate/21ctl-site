export const navBarVarient = {
   
  visible:{
    y: 0,
    transition:{
      delay:0.2,
      type: "tween",
      duration:0.5,

    }
  },
  hidden:{
    y: "-100vh",
    
  }
}

export const delayVarient1 = {
   
  visible:{
    opacity: 1,
  },
  hidden:{
    opacity: 0,
  }
}


export const rightTansitionVarient = {
   
    visible:{
      x: 0,
      transition:{
        delay:0.7,
        type: "tween",
        duration:1,
       
      }
    },
    hidden:{
      x: "100vw",
      
    },
    whileInView:{ opacity: 1, transition:{
      delay:0.7,
      type: "tween",
      duration:1,
     
    } },
    viewport:{ once: true }
  }

  export  const leftTransitionVarient = {
    
    visible:{
      x: 0,
      transition:{
        delay:0.7,
        type: "tween",
        duration:1,
        
        when: "beforeChildren"
      }
    },
    hidden:{
      x: "-100vw",
      
    },
    // whileInView:{ opacity: 1, transition:{
    //   delay:0.7,
    //   type: "tween",
    //   duration:1,
     
    // } },
    // viewport:{ once: true }
  }

  export  const buttonVarient = {
    
    visible:{
      x: 0,
      transition:{
        delay:1.5,
        type: "spring",
        duration: 5,
        stiffness:80
      }
    },
    hidden:{
      x: "100vw"
    }
  }

  export const scrollVariant = {

    visible:{
      opacity:1,
      transition:{
        delay:1.5,
        type: "spring",
        duration: 5,
        stiffness:80
      }
    },
    hidden:{
      opacity: 0,
    },
    whileInView:{ opacity: 1 },
  viewport:{ once: true }
  }
