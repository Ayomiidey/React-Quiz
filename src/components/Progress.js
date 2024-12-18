function Progress({ index, numOfQuestion, points, maxPossiblePoints, answer }) {
  return (
    <div>
      <header className="progress">
        <progress max={numOfQuestion} value={index + Number(answer !== null)} />
        <p>
          Question <strong>{index + 1}</strong>/{numOfQuestion}
        </p>
        <p>
          <strong>{points}</strong>/{maxPossiblePoints}
        </p>
      </header>
    </div>
  );
}

export default Progress;
