# E-Commerce System



### Description

This app fetches items from an API and displays their details. It makes use of OOP principles as well as custom error-handling in typescript.

## Getting Started

### Dependencies

"@types/node": "^24.10.1",
"typescript": "^5.9.3"

### Authors

Devon Jones
Github: [@Ashundere](https://github.com/Ashundere)

## Version History

0.1
-Initial Release


## Acknowledgments

JS MDN: https://developer.mozilla.org/en-US/docs/Web/JavaScript

CANVAS Lesson 6

DummyJSON: https://dummyjson.com

## Reflections

I implemented Typsecript features and OOP principles by creating a product class and using it to run methods on what I gathered from the API. I had a bit of difficulty because I didn't realize the information I recieved from the API was an object at first, and was trying to call it as if it was an array. However I was able to fix my mistake. I handled asynchronous operations by using async/await functions when fetching from the API, and used try-catch blocks as well as custom error classes to manage errors.