function myFriend(friends) {
    if (Array.isArray(friends) == false) {
        return 'please write your one of the friends name'
    }
  let bosom = friends[0];
  for (const friend of friends) {
    if (friend.length > bosom.length) {
      bosom = friend;
    }
  }
  return bosom;
}

const friends = ["shakil", "sumon", "sabbir", "roni", "towkir", "tazmir"];
const myChoice = myFriend(1665666);
console.log(myChoice);
