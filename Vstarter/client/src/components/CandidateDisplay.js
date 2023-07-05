import React, { useState, useEffect } from "react";

const CandidateDisplay = ({ state }) => {
	const [candidates, setCandidates] = useState([]);
	useEffect(() => {
		const { contract } = state;
		async function fetchCandidates() {
			const candidates = await contract.methods.candidateList().call();
			console.log(candidates);
			setCandidates(candidates);
		}
		contract && fetchCandidates();
	}, [state]);
	const candidateUI = candidates.map((candidate) => {
		return (
			<ul>
				<li>
					<p>
						<span>Name: {candidate.name}, </span>
						<span>ID {candidate.candidateId}, </span>
						<span>Votes {candidate.votes} </span>
					</p>

					<p>{}</p>
				</li>
			</ul>
		);
	});
	return <>{candidateUI}</>;
};

export default CandidateDisplay;
