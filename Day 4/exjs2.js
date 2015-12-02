objectA = {
    a: 1,
    b: 2
};

objectB = {
    a: 10,
    b: 20,
    c: "4380939"
};

function MergeRecursive(objectA, objectB) {

    for (var p in objectB) {
        try {
            if (objectB[p].constructor == Object) {
                objectA[p] = MergeRecursive(objectA[p], objectB[p]);

            }
            if (objectB[p].constructor != Object) {
                objectA[p] = objectB[p];
            }

        } catch (e)
        objectA[p] = objectB[p];



        return objectA;
    }
    MergeRecursive(objectA, objectB);
    console.log(objectA);

