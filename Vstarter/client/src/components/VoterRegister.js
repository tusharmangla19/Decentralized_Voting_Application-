// import VoterDisplay from "./VoterDisplay";
import Vote from "./Vote.js";
import CandidateDisplay from "./CandidateDisplay";
import VoterList from "./VoterList";
function VoterRegister({ state, account }) {
	const registerVoter = async (e) => {
		e.preventDefault();
		const { contract } = state;
		const name = e.target[0].value;
		const age = e.target[1].value;
		const gender = e.target[2].value;
		try {
			await contract.methods.voterRegister(name, age, gender).send({
				from: account,
				gas: 1000000,
			});
			alert("Voter Registration successful");
			window.location.reload();
		} catch (error) {
			alert(error);
		}
	};
	return (
		<div>
			<div className="btnContainer">
				<form className="form" onSubmit={registerVoter}>
					<label className="label2" htmlFor="name">
						Name:
					</label>
					<input className="innerBoxVote" type="text" id="name"></input>

					<label className="label2" htmlFor="age">
						Age:
					</label>
					<input className="innerBoxVote" type="text" id="age"></input>

					<label className="label2" htmlFor="gender">
						Gender:
					</label>
					<input className="innerBoxVote" type="text" id="gender"></input>

					<button className="regBtn" type="submit">
						Register
					</button>
				</form>
				{/* <VoterDisplay state={state}></VoterDisplay>
				<Vote state={state} account={account}></Vote> */}

				<Vote state={state} account={account}></Vote>
				<div className="s">
					<div className=" left">
						<CandidateDisplay state={state} />
					</div>
					<div className=" right">
						<VoterList state={state}></VoterList>
					</div>
				</div>
			</div>
		</div>
	);
}
export default VoterRegister;
