import store from '@/store'

interface Wall {
  points: [number, number][]
}

export interface Map {
  walls: Wall[]
}
const map: Map = {
  walls: [
    {
      points: [
        [0, 0],
        [500, 0],
        [500, 500],
        [450, 500],
        [450, 470],
        [410, 470],
        [410, 450],
        [470, 450],
        [470, 30],
        [0, 30],
        [0, 0],
      ],
    },
  ],
}

interface WallLines {
  top: WallLine[]
  bottom: WallLine[]
  left: WallLine[]
  right: WallLine[]
}

interface WallLine {
  position: number
  lenght: [number, number]
}
const wallLines = null

export function runderMap(): void {
  store.commit('setMap', map)
  const mapCanvas: any = document.getElementById('map')
  const ctx = mapCanvas.getContext('2d')
  map.walls.forEach((wall) => {
    ctx.beginPath()
    ctx.moveTo(wall.points[0][0], wall.points[0][1])
    wall.points.slice(1).forEach((point) => {
      ctx.lineTo(point[0], point[1])
    })
    ctx.fill()
    ctx.closePath()
  })
}

export function isInside(
  x: number,
  y: number,
  points: Array<Array<number>>
): boolean {
  const Xs = points.map((i: Array<number>) => i[0]),
    Ys = points.map((i: Array<number>) => i[1])
  let isInside = false
  if (
    x > Math.max(...Xs) ||
    x < Math.min(...Xs) ||
    y > Math.max(...Ys) ||
    y < Math.min(...Ys)
  ) {
    return isInside
  }
  for (let i = 0, j = points.length - 1; i < points.length; j = i++) {
    const x1 = points[j][0],
      x2 = points[i][0],
      y1 = points[j][1],
      y2 = points[i][1]
    if (y1 > y != y2 > y && x < ((x2 - x1) * (y - y1)) / (y2 - y1) + x1) {
      isInside = !isInside
    }
  }
  return isInside
}
