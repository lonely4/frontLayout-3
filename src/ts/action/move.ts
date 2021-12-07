import store from '@/store'
// 步长
const setStep = 10
// 某方向最小位置值
const minPosition = 0
// 某方向最大位置值
const maxPosition = 480

export function loadAction(): void {
  window.addEventListener('keydown', keydown)
}

function keydown(event: any): void {
  const playerEl = store.state.playerEl
  if (event.defaultPrevented) {
    return // 如果已取消默认操作，则不应执行任何操作
  }
  let handled = false
  if (event.key !== undefined) {
    handled = keyAction(event.key, playerEl)
  } else if (event.keyCode !== undefined) {
    handled = keyAction(event.keyCode.toString(), playerEl)
  }
  if (handled) {
    // 如果事件已处理，则禁止“双重操作”
    event.preventDefault()
  }
}

function keyAction(keyCode: string, el: any): boolean {
  switch (keyCode) {
    case 'w':
      el.style.top = moveAUnit(el.style.top, 'reduce')
      break
    case 's':
      el.style.top = moveAUnit(el.style.top, 'add')
      break
    case 'a':
      el.style.left = moveAUnit(el.style.left, 'reduce')
      break
    case 'd':
      el.style.left = moveAUnit(el.style.left, 'add')
      break
    default:
      return false
  }
  return true
}
function moveAUnit(
  nowP: string,
  direction: string,
  step: number = setStep
): string {
  if (direction === 'add') {
    const newP = (parseInt(nowP) | 0) + step
    return (newP > maxPosition ? nowP : newP) + 'px'
  }
  const newP = (parseInt(nowP) | 0) - step
  return (newP < minPosition ? nowP : newP) + 'px'
}

function impactCheck(direction: string, nowP: number): number {}

export function unloadAction(): void {
  window.removeEventListener('keydown', keydown)
}
