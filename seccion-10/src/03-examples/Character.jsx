import { useLayoutEffect, useRef, useState } from "react"

export const Character = ({name = "", image = ""}) => {

  const pRef = useRef()
  const [boxSize, setBoxSize] = useState({width: 0, height: 0})

  useLayoutEffect(() => {
    const {height, width} = pRef.current.getBoundingClientRect()
    setBoxSize({height, width})
  }, [name])

  return (
    <>
      <div className="text-center">
        <img ref={pRef} src={image} className="rounded" alt="..." />
        <blockquote className="text-center mt-4">
          <footer className="blockquote-footer" style={{fontSize: '24px'}}>{name}</footer>
          <code>{JSON.stringify(boxSize)}</code>
        </blockquote>
      </div>
    </>
  )
}
