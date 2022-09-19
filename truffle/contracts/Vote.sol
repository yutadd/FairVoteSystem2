// SPDX-License-Identifier: MIT
pragma solidity >= 0.4 .22 < 0.9 .0;
//author yutadd
//This system can vote to target by only registed voter.

contract Vote {
	address public owner;
	
	//投票が終了した時点での最大投票数を得たtargetID
	uint public winner;
	//投票が終了したか否か。
	bool public closed = true;
	//投票の対象のID一覧(Don't set targetID 0!!!!)
	uint[] public targetList;
	//投票の対象の一覧targetID,amount
	mapping(uint => uint) public target;
	//有権者のアドレス一覧
	address[] public voterList;
	//有権者の一覧voter_addres,targetID(-1:未投票)
	mapping(address => int) public voter;
	/*
事前に作成されたリストをもとに、アドレスを生成し、addVoterしてください。
どのアドレスが投票を行ったかはブロックチェーンエクスプローラーで確認できる。
ブロックチェーン上では、アドレスと投票先以外が不可視なので、owner以外は投票と個人情報を紐づけられない。
また、監視されている状況での投票を無効にできるように、reVoteが可能になっています。
*/
	constructor() {
		owner = msg.sender;
	}
	function addTarget(uint _targetID) public{
		require(msg.sender == owner);
		targetList.push(_targetID);
		target[_targetID]=uint(0);
	}
	function getNumberOfVotes(uint i) public view returns(uint){
		return target[i];
	}
	function getTargetArrayLength() public view returns(uint){
		return targetList.length;
	}
	function getTargetID(uint i) public view returns(uint){
		return targetList[i];
	}
	function addVoter(address _voter) public {
		require(msg.sender == owner);
			voterList.push(_voter);
			voter[_voter]=-1;
	}
	function getVoterArrayLength() public view returns(uint){
		return voterList.length;
	}
	function getVoterAddress(uint i) public view returns (address){
		return voterList[i];
	}
	function getVotedTarget(address _voter) public view returns (int){
		return voter[_voter];
	}
	function vote(uint _target) public {
		if (voter[msg.sender] == -1) {
			bool _exist;
			for (uint i = 0; i < targetList.length; i++) {
				if (targetList[i] == _target) {
					_exist = true;
				}
			}
			if (_exist) {
				target[_target] += 1;
				voter[msg.sender] = int(_target);
			}
		}
	}
	//this function is exist for fair voting.
	function revote(uint _target) public {
		if (voter[msg.sender] != 0) {
			bool _exist;
			for (uint i = 0; i < targetList.length; i++) {
				if (targetList[i] == _target) {
					_exist = true;
				}
			}
			if (_exist) {
				target[uint(voter[msg.sender])] -= 1;
				target[_target] += 1;
				voter[msg.sender] = int(_target);
			}
		}
	}

	function close() public {
		require(msg.sender == owner);
		closed = true;
	}
	function open() public {
		require(msg.sender == owner);
		closed = false;
	}
}