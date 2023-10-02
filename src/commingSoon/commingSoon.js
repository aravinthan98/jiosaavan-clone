import image from '../assets/commingsoon.png';
import '../commingSoon/commingSoon.css'

function ComingSoonPage () {
    return (
        <div className='main-page'>
            <div className="comming-soon-page">
                <div className="coming-soon-image">
                    <img className='image-cs' src={image} alt="" />
                    
                    <div className="content">
                        Coming Soon
                    </div>
                </div>

            </div>
        </div>
    )
}

export default ComingSoonPage;