document.addEventListener('DOMContentLoaded', () => {
    function init() {

        wait(2000).then(() => {
            clearText()
            typeText('Hello, ').then(typeLoop)
        })

        function typeLoop() {
            typeText('Students!')
                .then(() => wait(3000))
                .then(() => removeText('Students!'))
                .then(() => typeText('World!'))
                .then(() => wait(3000))
                .then(() => removeText('World!'))
                .then(typeLoop)
        }
    }


    function clearText() {
        text = ''
        updateNode()
    }

    function typeText(text) {
        return new Promise(resolve => {

            function type([character, ...text]) {
                typeCharacter(character)
                    .then(() => {
                        if (text.length) type(text)
                        else resolve()
                    })
            }

            type(text)
        })
    }


    function updateNode() {
        elementNode.innerText = text
    }

    function wait(time) {
        if (time === undefined) {
            const randomMsInterval = 100 * Math.random()
            time = randomMsInterval < 50 ? 10 : randomMsInterval
        }

        return new Promise(resolve => {
            setTimeout(() => {
                requestAnimationFrame(resolve)
            }, time)
        })
    }

    function typeCharacter(character) {
        return new Promise(resolve => {
            pushCharacter(character)
            wait().then(resolve)
        })
    }

    function removeCharacter() {
        return new Promise(resolve => {
            popCharacter()
            wait().then(resolve)
        })
    }

    function removeText({length: amount}) {
        return new Promise(resolve => {

            function remove(count) {
                removeCharacter()
                    .then(() => {
                        if (count > 1) remove(count - 1)
                        else resolve()
                    })
            }

            remove(amount)
        })
    }

    function pushCharacter(character) {
        text += character
        updateNode()
    }

    function popCharacter() {
        text = text.slice(0, text.length - 1)
        updateNode()
    }

    // Source code

    const elementNode = document.getElementById('type-text')
    let text = ''

    init()

})


