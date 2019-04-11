//Your code here
function justInvoke(f) {
  return f();
}

function setThisWithCall(f, thisValue, arg) {
  return f.call(thisValue, arg);
}

function setThisWithApply(f, thisValue, myArg) {
  return f.apply(thisValue, myArg);
}

function returnNewFunctionOf(functionToBeCopied, thisValue) {
  const copy = functionToBeCopied.bind(thisValue);
  return copy;
}
