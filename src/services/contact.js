let monObservable = new Observable((observer) => {
    let listOfFriends = ["Damien", "Thomas", "Jean-Claude Dusse"];
    listOfFriends.forEach((friend) => {
        observer.next(friend);
    })
    observer.complete();
});