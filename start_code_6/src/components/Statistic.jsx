const Statistic = ({courseResults}) => {
	const scores = courseResults.map((result) => result.score);
	const average = scores.reduce((acc, score) => acc + score, 0) / scores.length;
	const min = Math.min(...scores);
	const max = Math.max(...scores);

  return (
		<>
			<h3 className="course-statistics">Course Statistics</h3>
			<div className="statistic-state">
     		<div className="stats">
					<span className="label">Average</span>
					<span className="value">{average.toFixed(2)}</span>
				</div>

				<div className="stats">
					<span className="label">Minimum</span>
					<span className="value">{min}</span>
				</div>

				<div className="stats">
					<span className="label">Maximum</span>
					<span className="value">{max}</span>
				</div>
    	</div>
		</>
  )
}

export default Statistic;