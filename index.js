const cats = [
    "Milo", "Otis", "Garfield"
]


function destructivelyAppendCat(catName) {
    cats.push(catName)
}

function destructivelyPrependCat(catName) {
    cats.unshift(catName)
}

function destructivelyRemoveLastCat(catName) {
    cats.pop(catName)
}

function destructivelyRemoveFirstCat(catName) {
    cats.shift(catName)
}

function appendCat(catName) {
    const newCats = [...cats, catName]
    return newCats;
}

function prependCat(catName) {
    const newCats = [catName, ...cats]
    return newCats;
}

function removeLastCat() {
    return cats.slice(0, cats.length - 1)
    
}

function removeFirstCat() {
    return cats.slice(1)
}


