


const GlowCard = ({card, children}) => {

// const cardRefs = useRef<Array<HTMLDivElement | null>>([]);

// const handleMouseMove = (index) => (e) => {
//         const card = cardRefs.current[index];
//         if (!card) return;

//         const rect = card.getBoundingClientRect();
//         const mouseX = e.clientX - rect.left - rect.width / 2;
//         const mouseY = e.clientY - rect.top - rect.height / 2;

//         let angle = Math.atan2(mouseY, mouseX) * (180 / Math.PI);

//         angle = (angle + 360) % 360; 

//         card.style.setProperty('--start', String(angle + 60))
// }

  return (
    <div  
    
    className='card card-border timeline-card rounded-xl p-10'>
      <div className='glow' />
      <div className="flex items-center gap-1 mb-5">
        {Array.from({length:5}, (_, i) => (
            <img src="/images/star.png" key={i} alt="star" className='size-5' />
        ))}
      </div>

      <div className="mb-5">
        <p className='text-white-50 text-md '>{card.review}</p>
      </div>

      {children}
    </div>
  )
}

export default GlowCard
