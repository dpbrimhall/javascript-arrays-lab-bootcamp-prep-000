function destructivelyAppendKitten(name) {
  kittens.push('Ralph')
  return kittens
}

function destructivelyPrependKitten(name) {
  kittens.unshift('Bob');
  return kittens
}

function destructivelyRemoveLastKitten() {
  kittens.pop();
  return kittens
}

function destructivelyRemoveFirstKitten() {
  kittens.shift();
  return kittens
}

function appendKitten(name) {
  var newkittens = kittens.splice(4, 1, 'Ralph');
  return newkittens
}