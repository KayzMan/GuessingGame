import {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import ActionButton from './ActionButton';
import NumericInput from 'react-native-numeric-input';

class GuessingGame extends Component {
  state = {
    guess: 1,
    hint: 'hint:',
    lives: '❤ ❤ ❤ ❤ ❤ ❤',
    attemptsLeft: 5,
    gameOver: false,
    correctNum: this.getRandomNumber(),
    won: false,
  };
  render() {
    return (
      <View style={styles.container}>
        <Text style={[styles.text, styles.headerText]}>
          Guess a number between 1 and 100
        </Text>
        <View style={styles.inputBox}>
          <NumericInput
            type="plus-minus"
            style={styles.inputBox}
            value={this.state.guess}
            onChange={this.onTextChanged}
            iconSize={40}
            step={1}
            totalHeight={60}
            totalWidth={350}
            valueType="integer"
            rounded
            textColor="black"
            iconStyle={{color: 'white', fontSize: 30}}
            inputStyle={{fontSize: 45}}
            leftButtonBackgroundColor="orange"
            rightButtonBackgroundColor="green"
            maxValue={100}
            minValue={1}
            reachMinDecIconStyle={{color: 'orange'}}
            reachMaxIncIconStyle={{color: 'green'}}
          />
        </View>
        <View style={[styles.text, styles.helperText]}>
          <Text
            style={
              this.state.won
                ? [styles.text, styles.hintWinText]
                : [styles.text, styles.hint]
            }>
            {this.state.hint}
          </Text>
          <Text style={[styles.text, styles.lives]}>
            Lives: {this.state.lives}
          </Text>
        </View>
        <View style={styles.buttons}>
          <ActionButton
            text="Check"
            onPress={this.handlePress}
            style={{
              text: [styles.buttonText],
              button: styles.button,
            }}
            clickedColor="#9040ff"
          />
          <ActionButton
            text="Replay"
            onPress={this.handleRestart}
            style={{
              text: [styles.buttonText],
              button: [styles.button, styles.replayBtn],
            }}
            clickedColor="#ffa080"
          />
        </View>
      </View>
    );
  }
  onTextChanged = guess => {
    if (guess) {
      this.setState({guess});
    }
  };
  renderLives() {
    let count = this.state.attemptsLeft;
    let lives = '';
    for (let i = 1; i <= count; i++) {
      lives += '❤ ';
    }
    this.setState({lives});
  }
  getRandomNumber() {
    let num = Math.ceil(Math.random() * 100 + 1);
    return num;
  }

  handlePress = () => {
    if (!this.state.gameOver) {
      this.renderLives();
      if (this.state.attemptsLeft > 0) {
        let {guess} = this.state;
        let {correctNum} = this.state;
        if (guess === correctNum) {
          this.setState({hint: 'You Won!', gameOver: true, won: true});
        } else {
          if (guess < correctNum) {
            this.setState({
              hint: 'hint: Guess higher than that 😜',
              attemptsLeft: this.state.attemptsLeft - 1,
            });
            this.renderLives();
          } else if (guess > correctNum) {
            this.setState({
              hint: 'hint: Guess lower than that 😜',
              attemptsLeft: this.state.attemptsLeft - 1,
            });
            this.renderLives();
          }
        }
      } else {
        this.setState({hint: 'Out of lives 💔', gameOver: true});
      }
    }
  };
  handleRestart = () => {
    this.setState({
      hint: 'hint:',
      lives: '❤ ❤ ❤ ❤ ❤ ❤',
      attemptsLeft: 5,
      gameOver: false,
      won: false,
      guess: 1,
      correctNum: this.getRandomNumber(),
    });
  };
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    height: '100%',
    width: '100%',
    alignItems: 'center',
  },
  text: {
    color: '#555',
  },
  headerText: {
    textAlign: 'center',
    fontSize: 22,
    marginTop: 20,
    fontWeight: 'bold',
  },
  inputBox: {
    marginVertical: 35,
  },
  hint: {
    textAlign: 'center',
    fontSize: 25,
    margin: 15,
  },
  hintWinText: {
    textAlign: 'center',
    fontSize: 30,
    margin: 15,
    color: 'green',
  },
  lives: {
    textAlign: 'center',
    margin: 15,
    fontSize: 22,
  },
  buttons: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '100%',
  },
  button: {
    marginTop: 20,
    backgroundColor: '#5040ff',
    borderRadius: 5,
    paddingVertical: 15,
    paddingHorizontal: 50,
  },
  replayBtn: {
    backgroundColor: '#ffa010',
  },
  buttonText: {
    fontSize: 20,
    color: '#eee',
  },
});

export default GuessingGame;
