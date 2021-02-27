"use strict";

function Post(author, text, date) {
    this.author = author;
    this.text = text;
    this.date = date;
}

Post.prototype.edit = function (text) {
    this.text = text;
}

function AttachedPost(author, text, date) {
    Post.call(this, author, text, date);
    this.highlighted = false;
}

AttachedPost.prototype = Object.create(Post.prototype);
AttachedPost.prototype.constructor = AttachedPost;
AttachedPost.prototype.makeTextHighlighted = function () {
    this.highlighted = true;
}

let myPost = new Post("Ivan", "Hello world!!", "01.02.2021");
console.log(myPost.text);
myPost.edit("Hi there!");
console.log(myPost.text);

let myAttachedPost = new AttachedPost("Ali", "This is my world!", "01.03.2021");
console.log(myAttachedPost.text + " " + myAttachedPost.author + " " + myAttachedPost.highlighted);
myAttachedPost.edit("I'm champion!!");
myAttachedPost.makeTextHighlighted();
console.log(myAttachedPost.text + " " + myAttachedPost.author + " " + myAttachedPost.highlighted);