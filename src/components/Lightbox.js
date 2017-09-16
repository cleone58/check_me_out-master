import React, {Component} from 'react';
import Lightbox from 'react-image-lightbox';

const images = [
  'img/myTube copy.png',
  'img/pViewBreeze.png',
  'img/pViewBreeze2.png',
  'img/pViewBreeze3.png',
  'img/pViewBreeze4.png',
  'img/pViewBreeze5.png',
  'img/pViewBreeze6.png',
  'img/pViewBreeze7.png',
  'img/the_know.jpeg',
  'img/my_weather.png',
  'img/my_albums.png',

];

export default class LightboxExample extends Component {
  constructor(props) {
    super(props);

    this.state = {
      photoIndex: 0,
      isOpen: false,
    };
  }

  render() {
    const {
      photoIndex,
      isOpen,
    } = this.state;

    return (
      <div>
        <button type="button" onClick={() => this.setState({isOpen: true})}>
          Open Lightbox
        </button>

        {isOpen &&
          <Lightbox
            mainSrc={images[photoIndex]}
            nextSrc={images[(photoIndex + 1) % images.length]}
            prevSrc={images[(photoIndex + images.length - 1) % images.length]}
            onCloseRequest={() => this.setState({isOpen: false})}
            onMovePrevRequest={() =>
              this.setState({
                photoIndex: (photoIndex + images.length - 1) % images.length,
              })}
            onMoveNextRequest={() =>
              this.setState({
                photoIndex: (photoIndex + 1) % images.length,
              })}
          />}
      </div>
    );
  }
}
