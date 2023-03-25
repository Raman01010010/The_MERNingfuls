import './Welcompage.css'
export default function Welcomepage(){
    return(
        <>
        
        <div className="waveWrapper waveAnimation">
  <div className="waveWrapperInner bgTop">

  <div class="card-deck">
  <span>
  <div class="card bg-primary">
    <div class="card-body text-center">
      <p class="card-text" style={{color:'white',fontSize:"40px"}}>
        <h1>Mental health Biggest Problem</h1>
      </p>
    </div>
  </div>
  <div class="card bg-primary">
    <div class="card-body text-center">
      <p class="card-text" style={{color:'white',fontSize:"40px"}}>
        <h1>Mental health Biggest Problem</h1>
      </p>
    </div>
  </div>
  </span>
</div> 
    <div
      className="wave waveTop"
      style={{
        backgroundImage:
          'url("http://front-end-noobs.com/jecko/img/wave-top.png")'
      }}
    />
  </div>
  <div className="waveWrapperInner bgMiddle">
    
    <div
      className="wave waveMiddle"
      style={{
        backgroundImage:
          'url("http://front-end-noobs.com/jecko/img/wave-mid.png")'
      }}
    />
  </div>
  <div className="waveWrapperInner bgBottom">
    
    <div
      className="wave waveBottom"
      style={{
        backgroundImage:
          'url("http://front-end-noobs.com/jecko/img/wave-bot.png")'
      }}
    />
   
  </div>
 
</div>

        
        
        
        
        </>
    )
}