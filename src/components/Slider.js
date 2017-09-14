import React, {Component} from 'react'
import Swiper from 'react-native-swiper'
import {
  View,
  Image,
  Dimensions
} from 'react-native'

const {width} = Dimensions.get('window');

const Slide = props => (<View style={styles.container}>
    <Image style={styles.image} source={props.uri} />
  </View>
);

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  image: {
    flex: 1,
    width
  },
};

export default class Slider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      imagesSlider: [
        require('../images/2.jpg'),
        require('../images/3.jpg')
      ]
    }
  }

  render() {
    return (
      <Swiper
        autoplay
        height={240}
      >
        {
          this.state.imagesSlider.map((item, i) => <Slide
            uri={item}
            key={i}
          />)
        }
      </Swiper>
    )
  }
}
