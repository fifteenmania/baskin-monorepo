import gsap from "gsap"
import { forwardRef, MutableRefObject, ReactNode, useEffect, useRef, useState } from "react";

interface BoxProps {
  key: number,
  displayNum: number,
  callback: () => void
}

function DisappearingBox({displayNum, callback} : BoxProps) { 
  const el = useRef(null)
  const tl = useRef<ReturnType<typeof gsap.timeline> | null>(null)
  useEffect(() => {
    tl.current = gsap.timeline()
        .to(el.current, {x: 200, opacity: 0, duration: 1.5})
        .call(callback)
  }, [callback])
  return (
    <div className="absolute x-0 y-0" ref={el}>
      {displayNum}
    </div>
  )
}


function BoxQueue() {
  const [queue, setQueue] = useState<BoxProps[]>([]);
  const [count, setCount] = useState(0);
  const addBox = (key: number) => {
    const newBox = {
      key,
      displayNum: count,
      callback: () => removeBox(key)
    }
    setQueue(queue => [...queue, newBox])
  }
  const removeBox = (key: number) => {
    setQueue(queue => queue.filter(boxProps => boxProps.key !== key))
  }
  const onButtonClick = () => {
    addBox(count)
    setCount((count) => count + 1)
  }
  return <div className="relative">
    <button onClick={onButtonClick}>click me!</button>
    {queue.map((boxProps, index) => (
      <DisappearingBox key={boxProps.key} displayNum={boxProps.displayNum} callback={boxProps.callback} />
    ))}
  </div>
}



export default function GameBoard() {
  return <div className="w-16 h-16 text-2xl bg-slate-500">
    <BoxQueue />
  </div>
}
