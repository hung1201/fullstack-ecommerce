
import './Backdrop.css'

const Backdrop = ({show,click})=>{
    if(show){
        return <div className="backdrop" onClick={click}></div>
    }
    else return null
}

export default Backdrop;