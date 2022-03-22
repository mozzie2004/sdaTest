import { useEffect } from "react";
import { useState } from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import Container from "./components/Container";
import Header from "./components/Header";
import QuestionSection from "./components/QuestionSection";
import ResultBlock from "./components/ResultBlock";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: ${p => p.theme.bg};
  }
`;


function App() {

  const [lightTheme, setLightTheme] = useState(false);

  const [questionArr, setQuestionArr] = useState([
    {
      question: 'What is your name',
      answer: ''
    },
    {
      question: 'What is your female',
      answer: ''
    },
    {
      question: 'What is your hobby',
      answer: ''
    }
  ])

  const [step, setStep] = useState(0);
  const [showResult, setShowResult] = useState(false);

  useEffect(() => {
    if (localStorage.getItem('light')) {
      setLightTheme(true)
    }
  }, [])

  const theme = {
    bg: lightTheme ?  '#FFF' : '#EAEAEA',
    secondaryBg: lightTheme ? '#EAEAEA' : '#000',
    textColor: lightTheme ? '#000046' : '#FFF'
  }

  const onToggleTheme = () => {
		if (localStorage.getItem('light')) {
			setLightTheme(false)
      localStorage.removeItem('light')
		} else {
			setLightTheme(true)
      localStorage.setItem('light', true)
		}
	}

  const onNextQuestion = () => {
    if (step === questionArr.length - 1) {
      setShowResult(true);
      setStep(0)
    } else {
      setStep(state => state + 1)
    }
  }

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header onToggleTheme={onToggleTheme} />
      <Container>
        {
          showResult ? 
          <ResultBlock results={questionArr} setResults={setQuestionArr} setShowResults={setShowResult} /> : 
          questionArr.map((item, i) => {
            return i === step ?  (
            <QuestionSection 
              key={i}
              question={item.question}
              value={item.answer}
              setValue={text => setQuestionArr(state => state.map((el, j) => j === i ? {...el, answer: text} : el))} 
              onNext={onNextQuestion}
              buttonTitle={i === questionArr.length - 1 ? 'Show result' : 'Next'}
            />
            ) : ''
          })
        }
      </Container>
    </ThemeProvider>
  );
}

export default App;
