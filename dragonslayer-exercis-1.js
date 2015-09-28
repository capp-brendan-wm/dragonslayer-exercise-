var killing = true;
var youHit = Math.floor(Math.random() * 2);
var damageThisRound = Math.floor(Math.random() * 500 + 1);
var totalDamage = 0;

while (killing) {
    if (youHit) {
        console.log("You inflict a devestating slash against Teemo doing " + damageThisRound + " damage!");
        totalDamage += damageThisRound;

        if (totalDamage >= 4) {
            console.log("You have killed Teemo for first blood and now have a head start to be fed.");
            killing = false;
        } else {
            youHit = Math.floor(Math.random() * 2);
        }
    } else {
        console.log("Teemo destroys you using his mines and poisons darts, he will now destroy your team.");
        killing = false;
    }
}