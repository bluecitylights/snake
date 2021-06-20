import k from '../kaboom'

export default function controls() {
    const {
        keyPress
    } = k

    return {
        add() {
            keyPress('left', () => {
                if (!this.movement) {
                    console.error('missing movement component')
                    return
                }
                this.movement.left()
            }),

            keyPress('right', () => {
                if (!this.movement) {
                    console.error('missing movement component')
                    return
                }
                this.movement.right()
            }),

            keyPress('up', () => {
                if (!this.movement) {
                    console.error('missing movement component')
                    return
                }
                this.movement.up()
            }),

            keyPress('down', () => {
                if (!this.movement) {
                    console.error('missing movement component')
                    return
                }
                this.movement.down()
            })


        }
    }
}