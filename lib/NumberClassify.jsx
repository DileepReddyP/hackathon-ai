import * as tf from '@tensorflow/tfjs'

// sometimes this page errors, add an explanation for kids saying the errors are because
// of the AI needing to learn more or something

import { useState, useRef, useEffect } from 'react'

let canvas,
	ctx,
	request,
	result,
	model,
	mouseDown = false,
	pX,
	pY,
	x,
	y

const width = 28 * 5
const height = 28 * 5

async function setup() {
	await tf.ready()
	model = await tf.loadLayersModel('/my-model.json')
	requestAnimationFrame(draw)
}

function draw() {
	request = requestAnimationFrame(draw)

	if (pX == null || pY == null) {
		ctx.beginPath()
		ctx.fillStyle = '#ebedef'
		ctx.fillRect(0, 0, width, height)

		pX = x
		pY = y
	}

	// Set stroke weight to 10
	ctx.lineWidth = 20
	// Set stroke color to black
	ctx.strokeStyle = '#000000'
	// If mouse is pressed, draw line between previous and current mouse positions
	if (mouseDown === true) {
		ctx.beginPath()
		ctx.lineCap = 'round'
		ctx.moveTo(x, y)
		ctx.lineTo(pX, pY)
		ctx.stroke()
	}

	pX = x
	pY = y
}

function onMouseUpdate(e) {
	const pos = getMousePos(canvas, e)
	x = pos.x
	y = pos.y
}

function getMousePos(canvas, e) {
	const rect = canvas.getBoundingClientRect()
	return {
		x: e.clientX - rect.left,
		y: e.clientY - rect.top
	}
}

export default function NumberClassify() {
	const [label, setLabel] = useState('idk')
	const canvasRef = useRef(null)
	async function classifyCanvas() {
		console.log('here')
		const image = tf.browser
			.fromPixels(canvas, 1)
			.resizeNearestNeighbor([28, 28], true)
		// const imageData = ctx.getImageData(0, 0, width, height)
		// const uint8array = new Uint8Array(imageData.data.buffer)
		// const rgbaTens3d = tf.tensor3d(uint8array, [canvas.height, canvas.width, 4])
		// const rgbTens3d = tf.slice3d(rgbaTens3d, [0, 0, 0], [-1, -1, 1]) // strip alpha channel
		// const smallImg = tf.image.resizeBilinear(rgbTens3d, [28, 28]); // 192,192 is dictated by my model
		const stack = tf.stack([image])
		let op = model.predict(stack).dataSync()
		op = Array.from(op)
		let indexOfMaxValue = op.reduce(
			(iMax, x, i, arr) => (x > arr[iMax] ? i : iMax),
			0
		)
		console.log(indexOfMaxValue)
		result = indexOfMaxValue.toString()
	}

	async function onGuess(e) {
		mouseDown = false
		await classifyCanvas()
		setLabel(result)
	}

	function clearCanvas() {
		ctx.fillStyle = '#ebedef'
		ctx.fillRect(0, 0, width, height)
		setLabel('idk')
	}

	useEffect(() => {
		canvas = canvasRef.current
		ctx = canvas.getContext('2d')
		setup()
	}, [])

	return (
		<div className='card text-center'>
			<div className='card-header'>
				<h1>Draw a number in the box!</h1>
				<h3>This may be... {label}</h3>
			</div>
			<div className='card-body'>
				<canvas
					onMouseUp={() => (mouseDown = false)}
					onMouseDown={() => (mouseDown = true)}
					onMouseMove={onMouseUpdate}
					ref={canvasRef}
					height={height}
					width={width}
				></canvas>
			</div>
			<div className='card-footer'>
				<button
					className='btn btn-primary mx-2'
					onClick={clearCanvas}
					type='button'
				>
					Clear
				</button>
				<button
					className='btn btn-primary mx-2'
					onClick={onGuess}
					type='button'
				>
					Guess
				</button>
			</div>
		</div>
	)
}
