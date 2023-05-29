class Dog {
    constructor(data) {
        Object.assign(this, data)
    }

    bark() {
        console.log('Woof!')
    }
}

export { Dog }