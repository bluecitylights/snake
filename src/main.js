import k from './kaboom'
import Snake from './scenes/Snake'

k.scene('test', () => {
    console.log('test scene loaded')
})

k.scene('snake', Snake)

k.start('snake')