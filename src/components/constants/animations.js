export const rightTansitionVarient = {
   
    visible:{
      x: 0,
      transition:{
        delay:0.7,
        type: "tween"
      }
    },
    hidden:{
      x: "100vw"
    }
  }

  export  const leftTransitionVarient = {
    
    visible:{
      x: 0,
      transition:{
        delay:0.7,
        type: "tween"
      }
    },
    hidden:{
      x: "-100vw"
    }
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
