function StartScreen({ numOfQuestion, dispatch }) {
  return (
    <div className="start">
      <h2>Welcome To The React Quiz!</h2>
      <h3>{numOfQuestion} question to test your React mastery</h3>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "clicked" })}
      >
        Let's start
      </button>
    </div>
  );
}

export default StartScreen;
