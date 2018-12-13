

import metrics from '../../Config/metrics'

const IMAGE_WIDTH = metrics.DEVICE_WIDTH * 0.8

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    width: metrics.DEVICE_WIDTH,
    height: metrics.DEVICE_HEIGHT,
    paddingTop: 24,
    backgroundColor: 'white'
  },
  containerHome: {
    flex: 1,
    backgroundColor: '#ddd',
    paddingTop: 20
  },
  logoImg: {
    flex: 1,
    height: null,
    width: IMAGE_WIDTH,
    alignSelf: 'center',
    resizeMode: 'contain',
    marginVertical: 30
  },
  bottom: {
    backgroundColor: 'white'
  }
})