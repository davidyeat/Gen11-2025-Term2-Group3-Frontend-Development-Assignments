import Statistic from "./Statistic";

const Scores = ({courseName, courseResults}) => {
  return (
    <div className="scores">
      <h1>{courseName}</h1>
      <table>
        <thead>
          <tr>
            <th>First name</th>
            <th>Last name</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          {courseResults.map((result, index) => (
            <tr key={index}>
              <td>{result.firstName}</td>
              <td>{result.lastName}</td>
              <td className={result.score < 50 ? "warning" : ""}>{result.score}</td>
            </tr>
          ))}
        </tbody>
      </table>
      
      <Statistic courseResults={courseResults}/>
    </div>
  )
}

export default Scores;