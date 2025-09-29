// Advantage of using an arrow function as a callback (inside setTimeout) to preserve the outer scope's this.

const obj = {
    value: 42,
    regular: function () {
        setTimeout(function () {
            console.log(`Regular function 'this': ${this.value}`);
        }, 1000);
    },

    arrow: function () {
        setTimeout(() => console.log(`Arrow function 'this': ${this.value}`), 1000);
    }
};

obj.regular();    // ❌ Traditional function loses 'this' inside setTimeout callback
obj.arrow();      // ✅ Arrow function preserves 'this' from the outer 'regular' function