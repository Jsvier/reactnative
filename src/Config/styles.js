import metrics from './metrics'

const IMAGE_WIDTH = metrics.DEVICE_WIDTH * 0.8

export const authContainer = {
    flex: 1,
    flexDirection: 'column',
    width: metrics.DEVICE_WIDTH,
    height: metrics.DEVICE_HEIGHT,
    paddingTop: 24,
    backgroundColor: 'white'       
};

export const authLogoImg = {
    flex: 1,
    height: null,
    width: IMAGE_WIDTH,
    alignSelf: 'center',
    resizeMode: 'contain',
    marginVertical: 30
  }

  export const authBottom = {
    backgroundColor: 'white'
  }
  
  export const logincontainer = {
    paddingHorizontal: metrics.DEVICE_WIDTH * 0.1
  }
   
  export const loginform = {
    marginTop: 20
  }
    
  export const loginfooter = {
    height: 100,
    justifyContent: 'center'
  }

  export const  homecontainer = {
      flex: 1,
      backgroundColor: '#ddd',
      paddingTop: 20
  }