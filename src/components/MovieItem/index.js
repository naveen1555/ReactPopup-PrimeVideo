import {IoMdClose} from 'react-icons/io'
import ReactPlayer from 'react-player'
import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'
import './index.css'

const MovieItem = props => {
  const {movieDetails} = props

  const {thumbnailUrl, videoUrl} = movieDetails

  return (
    <>
      <Popup
        modal
        trigger={
          <img src={thumbnailUrl} alt="thumbnail" className="thumbnail-image" />
        }
        className="pop-up-information"
      >
        {close => (
          <div className="modal-container">
            <button
              type="button"
              className="close-button"
              onClick={() => close()}
            >
              <IoMdClose size="25" color="#231f20" />
            </button>
            <div className="video-player-container">
              <ReactPlayer url={videoUrl} controls className="video-player" />
            </div>
          </div>
        )}
      </Popup>
    </>
  )
}

export default MovieItem
