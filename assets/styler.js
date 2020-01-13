import {
  Text,
  StyleSheet,
  Image,
  Dimensions
} from 'react-native';


const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);

const Conteiner = StyleSheet.create({
  container: {
    width: screenWidth,
    height: screenHeight,
  }
})



const styles = StyleSheet.create({
  Mainscreen: {
    height: screenHeight,
    width: screenWidth
  },
  conten: {
    width: screenWidth,
    height: screenHeight,
    justifyContent: 'center',
    backgroundColor: 'rgba(115,255,24,0.1)'
  },
  text: {
    fontSize: 30,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginBottom: 20
  },
  textLogo: {
    color: '#fff',
    alignSelf: 'center',
    fontWeight: 'bold',
    fontSize: 45
  },
  logo: {
    alignSelf: 'center'
  },
  textcopy: {
    color: '#fff',
    alignSelf: 'center',
    fontSize: 15,
    backgroundColor: 'rgba(0,0,0,0.4)',
    borderRadius: 75,
    padding: 7,
    margin: 5,
    shadowColor: "#fff",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,

    elevation: 10,
  },
  copy: {
    marginTop: 200,
    flexDirection: 'row',
    alignSelf: 'center',
  },
  isloading: {
    marginTop: 100,

  },
  input: {
    margin: 20,
    backgroundColor: '#eee',
    borderRadius: 100,
    paddingLeft: 30
  }
})

const styleFooter = StyleSheet.create({
  footer: {
    backgroundColor: '#fff'
  },
  icon: {
    color: '#ddd',
    fontSize: 25
  }
})
const styleHeader = StyleSheet.create({
  header: {
    backgroundColor: '#fff',
    marginTop: 20
  },
  logo: {
    width: 45,
    height: 25
  },
  left: {
    flexDirection: 'row'
  },
  textLogo: {
    fontWeight: 'bold',
    fontSize: 15,
    alignSelf: 'center'
  }
})

const styleHome = {
  content: {
    padding: 20,
    flexDirection: 'row',
  },
  ads: {
    width: 300,
    height: 170,
    margin: 5,
    borderRadius: 15
  },
  category: {
    backgroundColor: '#27AE60',
    width: 50,
    height: 50,
    borderRadius: 100,
    overflow: 'hidden',
    justifyContent: 'center',
    marginRight: 50
  },
  iconCategory: {
    fontSize: 25,
    alignSelf: 'center',
    color: '#fff'
  }
}

const iconStyle = StyleSheet.create({
  black: {
    fontSize: 30,
    color: "#000"
  }
})

const Cardstyle = StyleSheet.create({
  card: {
    padding: 5,
    shadowColor: "#fff",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,

    elevation: 6,
    backgroundColor: '#fff',
    width: 147, height: 100,
    borderRadius: 10,
    overflow: 'hidden'
  },
  cardTwo: {
    justifyContent: 'center',
    padding: 10,
    shadowColor: "#fff",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,

    elevation: 4,
    backgroundColor: '#fff',
    width: 300,
    height: 130,
    borderRadius: 10,
    overflow: 'hidden',
    margin: 5
  }
})
const Labelconten = StyleSheet.create({
  large: {
    fontSize: 20,
    fontWeight: 'bold',
    margin: 10
  }
})

const StoryBox = StyleSheet.create({
  box: {
    marginTop: 20,
    justifyContent: 'space-between',
    flex: 1,
    marginBottom: 50
  },
  image: {
    width: 130,
    height: 130,
    margin: '2%',
    alignSelf: 'center',
    borderRadius: 10
  }
})
export { styles, Conteiner, styleFooter, styleHeader, styleHome, iconStyle, Cardstyle, Labelconten, StoryBox };
