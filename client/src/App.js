import React from "react";
// import GlobalStyles from "./GlobalStyles";
import { getQuestions } from "./api/getQuestions";
import QuestionBubble from "./components/QuestionBubble";

// function App () {
//   const [ questions, getQuestions ] = useState(null);
// }

// useEffect(() => {
//   async function getQuestions() {

//   }
// })

class App extends getQuestions {
  constructor() {
    super();
    this.state = {
      questionBank: [],
    };
  }
  // Function to get question from ./api/getQuestions
  getQuestions = () => {
    getQuestions().then((question) => {
      this.setState({
        questionBank: question,
      });
    });
  };
  // componentDidMount function to get question
  componentDidMount() {
    this.getQuestions();
  }

  render() {
    return (
      <div>
        <h1>Mascota</h1>
        {this.state.questionBank.length > 0 &&
          this.state.questionBank.map(({ question, id }) => (
            <QuestionBubble question={question} key={id} />
          ))}
      </div>
    );
  }
}
export default App;
