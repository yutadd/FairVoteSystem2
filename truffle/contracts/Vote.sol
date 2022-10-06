// SPDX-License-Identifier: MIT
pragma solidity >= 0.4 .22 < 0.9 .0;
//author Sakasima Yuta.
//This system can vote to target by only registed voter.
/*
1.自由なクライアントで操作できるよう、できる限りコントラクト上に情報を持たせる。
2.個人情報を紐づけられないようにするためにブロックチェーン上では、アドレスと投票先以外が不可視。
3.監視されている状況での投票を無効にできるように、reVoteを可能に。

事前に作成されたリストをもとに、アドレスを生成し、addVoterしてください。
どのアドレスが投票を行ったかはブロックチェーンエクスプローラーで確認できる。
vote関数では投票先が空文字であることを検査し、revoteでは再投票で、得票数が+-0になるので投票のかさ増しはできない。

*/

contract Vote {
	address public owner;
	//投票が終了した時点での最大投票数を得たtargetID
	uint public winner;
	//投票が終了したか否か。
	bool public closed = true;
	//投票の対象のID一覧(Don't set 0 to targetID!!!!)
	string[] public targetList;
	//ターゲットの表示。(targetID,Display)
	mapping(string=> uint) public targetDisplay;
	//有権者のアドレス一覧
	address[] public voterList;
	//有権者の一覧voter_addres,targetID(-1:未投票)
	mapping(address => string) public voter;

	constructor() {
		owner = msg.sender;
	}
	function addTarget(string memory _display) public returns(bool){
		require(msg.sender == owner);
		bytes memory b=bytes(_display);
		for(uint a=0;a<b.length;a++){
			if(b[a]==0x3c||b[a]==0x27||b[a]==0x3e||b[a]==0x22)return false;
		}
		targetList.push(_display);
		targetDisplay[_display]=uint(0);
		return true;
	}
	function getAmountOfVotes(string memory _display) public view returns(uint){
		return targetDisplay[_display];
	}
	function getTargetArrayLength() public view returns(uint){
		return targetList.length;
	}
	function getTargetDisplay(uint _index) public view returns(string memory){
		return targetList[_index];
	}
	function addVoter(address _voter) public{
		require(msg.sender == owner);
			voterList.push(_voter);
			voter[_voter]="";
	}
	function getVoterArrayLength() public view returns(uint){
		return voterList.length;
	}
	function getVoterAddress(uint i) public view returns (address){
		return voterList[i];
	}
	function getVotedTarget(address _voter) public view returns (string memory){
		return voter[_voter];
	}
	function vote(string memory _target) public returns(bool) {
		if (keccak256(abi.encodePacked(voter[msg.sender])) == keccak256(abi.encodePacked(""))) {//revoteであることがあとからわかるように、revoteとvoteは別関数
			bool _exist;
			for (uint i = 0; i < targetList.length; i++) {
				if (keccak256(abi.encodePacked(targetList[i])) == keccak256(abi.encodePacked(_target))) {
					_exist = true;
					break;
				}
			}
			if (_exist) {
				targetDisplay[_target] += 1;
				voter[msg.sender] = _target;
				return true;
			}
			
		}
		return false;
	}
	//this function is exist for fair voting.
	function revote(string memory _target) public returns(bool){
		if (keccak256(abi.encodePacked(voter[msg.sender])) != keccak256(abi.encodePacked(""))) {//revoteであることがあとからわかるように、revoteとvoteは別関数
			bool _exist;
			for (uint i = 0; i < targetList.length; i++) {
				if (keccak256(abi.encodePacked(targetList[i])) == keccak256(abi.encodePacked(_target))) {
					_exist = true;
					break;
				}
			}
			if (_exist) {
				targetDisplay[voter[msg.sender]] -= 1;
				targetDisplay[_target] += 1;
				voter[msg.sender] = _target;
				return true;
			}
		}
		return false;
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