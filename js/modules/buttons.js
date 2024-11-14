export function initializeBtns() {
    
    const startBtn = document.querySelector('.app__btns--start');
    const pauseBtn = document.querySelector('.app__btns--pause');
    const passBtn = document.querySelector('.app__btns--pass');
    //BUTTONS STARTS
    const defaultBtn = document.querySelector('.app__options--btns-pomodoro')
    const shortBreakBtn = document.querySelector('.app__options--btns-short')
    const longBreakBtn = document.querySelector('.app__options--btns-break')
    const changeFocusDom = document.querySelector('.tasks__options--title-name')

    //Options Default Break
    const optionBtns = document.querySelectorAll('.app__options--btns')
    optionBtns.forEach(element=>{
        element.addEventListener('click',(event)=>{
            optionBtns.forEach(element =>{
            element.classList.remove('app__options--btns-active')})
            event.currentTarget.classList.add ('app__options--btns-active')
        })
        
    })
        //SOUND
    const celebrationSound = new Audio ('/assets/celebrationSound.mp3')
    const workSound = new Audio ('/assets/zzz.mp3')

    function playCelebrationSound(duration){
        celebrationSound.currentTime = 0
        celebrationSound.play()
        setTimeout(() => {
            celebrationSound.pause()
            celebrationSound.currentTime = 0
        }, duration * 1000);
    }


    //Timer

    const updateTime = document.querySelector('.app__timer--count')
    let intervalID = null

    function updateDisplay (minutes,seconds){
        updateTime.textContent= `${String(minutes).padStart(2,'0')}:${String(seconds).padStart(2,'0')}`
    }
        //TIME FOR POMODORO

        function defaultDislay(){
            toggleBtns(true,false,false)
            clearInterval(intervalID)
            timeSeconds = 0
        }
       defaultBtn.addEventListener('click', () => {
        changeFocusDom.innerHTML='Time to Focus!'
        
        defaultDislay()
        updateDisplay(25,0)
    });
       shortBreakBtn.addEventListener('click', () => {
        changeFocusDom.innerHTML='Time for a Break!'
        defaultDislay()
        updateDisplay(5,0)
       })
       longBreakBtn.addEventListener('click', () => {
        changeFocusDom.innerHTML='Time for a Long Break!'
        defaultDislay()
        updateDisplay(15,0)
        
    })
        
    const toggleBtns = (start, pause, pass) =>{
        startBtn.classList.toggle('app__btns--disable', !start)
        pauseBtn.classList.toggle('app__btns--disable', !pause)
        passBtn.classList.toggle('app__btns--disable', !pass)
    }

    //DISPLAY 
    let timeMinutes = 25
    let timeSeconds = 0

  function timer(){
    intervalID = setInterval(()=>{
    if (timeSeconds == 0){
        if (timeMinutes == 0){
            clearInterval(intervalID)
            toggleBtns(true,false,false)
                if(defaultBtn.classList.contains('app__options--btns-active')){
                    defaultBtn.classList.remove('app__options--btns-active')
                    shortBreakBtn.classList.add('app__options--btns-active')
                    playCelebrationSound(1)
                    alert('Time for a Short Break')
                    updateDisplay(5,0)}
                else if (shortBreakBtn.classList.contains('app__options--btns-active')){
                    shortBreakBtn.classList.remove('app__options--btns-active')
                    defaultBtn.classList.add('app__options--btns-active')
                    workSound.play()
                    alert('Time for a Work')
                    updateDisplay(25,0)}
                else if (longBreakBtn.classList.contains('app__options--btns-active')){
                    longBreakBtn.classList.remove('app__options--btns-active')
                    defaultBtn.classList.add('app__options--btns-active')
                    workSound.play()
                    alert('Time for a Work')
                    updateDisplay(25,0)}
                    
            return
        }
        timeMinutes --
        timeSeconds = 59
    }
    else {
        timeSeconds --
    }
    updateDisplay(timeMinutes,timeSeconds)
  
  },1000)}

    //START THE TIMER
    startBtn.addEventListener('click',()=>{
        toggleBtns(false,true,true)
        if (updateTime.textContent =='25:00'){
            timeMinutes = 25
        }
            else if (updateTime.textContent =='05:00'){
            timeMinutes = 5
        }
        else if (updateTime.textContent =='15:00'){
            timeMinutes = 15
        }
        timer()
    })

    pauseBtn.addEventListener('click',()=>{
        toggleBtns(true,false,false)
        if (intervalID){
            clearInterval(intervalID)
        }
    })
    let count = 1
    const countDom = document.querySelector('.tasks__options--title-count')
    
    passBtn.addEventListener('click',()=>{
        toggleBtns(true,false,false)
        if (intervalID){
            clearInterval(intervalID)
        }
        
            if (defaultBtn.classList.contains('app__options--btns-active')){
                defaultBtn.classList.remove('app__options--btns-active')
                shortBreakBtn.classList.add('app__options--btns-active')
                timeMinutes = 5
                timeSeconds = 0
                count ++    
                changeFocusDom.innerHTML='Time for a Break!'
                countDom.innerHTML=`#${count}`
                playCelebrationSound(5)
                updateDisplay(timeMinutes,timeSeconds)
            }
            else if (shortBreakBtn.classList.contains('app__options--btns-active')){
                shortBreakBtn.classList.remove('app__options--btns-active')
                defaultBtn.classList.add('app__options--btns-active')
                timeMinutes = 25
                timeSeconds = 0
                changeFocusDom.innerHTML='Time to Focus!'
                workSound.play()
                updateDisplay(timeMinutes,timeSeconds)
                
            }
            else if (longBreakBtn.classList.contains('app__options--btns-active')){
                longBreakBtn.classList.remove('app__options--btns-active')
                defaultBtn.classList.add('app__options--btns-active')
                timeMinutes = 25
                timeSeconds = 0
                changeFocusDom.innerHTML='Time to Focus!'
                workSound.play()
                updateDisplay(timeMinutes,timeSeconds)
            }
    })


    

    }
  
  



  

