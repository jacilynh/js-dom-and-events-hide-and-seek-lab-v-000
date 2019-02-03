// Define a function which accepts a selector and returns the first element that matches.
function getFirstSelector(selector) {
  return document.querySelector(selector);
}

// pulls a `.target` out of `#nested`
function nestedTarget() {
  return document.querySelector(#nested.target);
}

// increases the ranks in all of the .ranked-lists by n. (You might need to make use of [`parseInt()`][parseint]
// function increaseRankBy(n)

// pulls out the most deeply nested child from div#grand-node. (Remember, you can iterate over elements and call querySelector() and querySelectorAll() on them. This is challenging to implement correctly, but not beyond your ability!)
// function deepestChild()