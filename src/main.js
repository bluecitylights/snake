import k from './kaboom'

import Snake from './scenes/Snake'
import GameOver from './scenes/GameOVer'

k.scene('snake', Snake)
k.scene('game-over', GameOver)

k.start('snake')
