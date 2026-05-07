box = {
    name: "Box",
    color: "red",
    addEventListener: function(eventName) {
        this.color = eventName;
        return `Hello, I am a ${this.color} box named ${this.name}.`;
    }
}


console.log(box.addEventListener("blue"));
