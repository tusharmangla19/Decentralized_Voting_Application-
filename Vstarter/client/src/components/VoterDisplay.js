import React, { useEffect } from "react";

const VoterDisplay = ({ state }) => {
	useEffect(() => {
		const { contract } = state;
		async function fetchVoters() {
			const voters = await contract.methods.voterList().call();
			console.log(voters);
		}
		contract && fetchVoters();
	}, [state]);
};

export default VoterDisplay;
