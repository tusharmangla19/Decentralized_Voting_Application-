function ElectionCommision({ state, account }) {
	const startVoting = async (e) => {
		e.preventDefault();
		const { contract } = state;
		const startTime = e.target[0].value;
		const endTime = e.target[1].value;
		try {
			await contract.methods.voteTime(startTime, endTime).send({
				from: account,
				gas: 100000,
			});
			alert("Voting started");
			window.location.reload();
		} catch (err) {
			alert(err);
		}
	};
	async function emergency() {
		const { contract } = state;
		try {
			await contract.methods.emergency().send({
				from: account,
				gas: "1000000",
			});
			alert("Emergency Declared");
			window.location.reload();
		} catch (error) {
			alert(error);
		}
	}
	async function result() {
		const { contract } = state;
		try {
			await contract.methods.result().send({
				from: account,
				gas: "1000000",
			});
			alert("Result declared");
			window.location.reload();
		} catch (error) {
			alert(error);
		}
	}
	return (
		<>
			<div>
				<form className="form" onSubmit={startVoting}>
					{/* <label className="label2" htmlFor="start"> */}
					{/* Start Time:
					</label>
					<input className="innerBoxVote" type="text" id="start"></input>

					<label className="label2" htmlFor="end">
						End Time:
					</label> */}
					{/* <input className="innerBoxVote" type="text" id="end"></input>

					<button className="regBtn" type="submit">
						Voting Start
					</button> */}
				</form>
			</div>
			<div className="space">
				{/* <button className="emerBtn" onClick={emergency}>
					Emergency
				</button> */}
				<button className="resBtn" onClick={result}>
					Result
				</button>
			</div>
		</>
	);
}
export default ElectionCommision;
