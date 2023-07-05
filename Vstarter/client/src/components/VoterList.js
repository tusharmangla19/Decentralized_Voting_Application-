import { useState, useEffect } from "react";
function VoterList({ state }) {
	const [voters, setVoters] = useState([]);

	useEffect(() => {
		const { contract } = state;
		async function votersDisplay() {
			const voters = await contract.methods.voterList().call();
			console.log(voters);
			setVoters(voters);
		}

		contract && votersDisplay();
	}, [state]);

	return (
		<>
			<ul>
				{voters.map((voter) => {
					return (
						<li key={voter.voterId}>
							<span>{voter.name},</span>
							<span>{voter.age},</span>
							<span>{voter.gender},</span>
							<span>{voter.voterId},</span>
							<span>{voter.voterAddress},</span>
						</li>
					);
				})}
			</ul>
		</>
	);
}
export default VoterList;
