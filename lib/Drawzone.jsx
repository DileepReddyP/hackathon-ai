// Copyright (c) 2019 ml5
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT
/* ===
ml5 Example
SketchRNN
=== */

import { useRef, useEffect, useState } from 'react'
import models from '../lib/models'
import Body from '../src/components/Body'

// The SketchRNN model
let model
// Start by drawing
let previousPen = 'down'
// Current location of drawing
let pX = null
let pY = null
let x = null
let y = null
let mouseX = null
let mouseY = null
// The current "stroke" of the drawing
let strokePath
let seedStrokes = []
let button
// Storing a reference to the canvas

const width = 480
const height = 480
let canvas, ctx
let mouseDown = false
let currentModel = 'cat'
async function setup(modelObj) {
	ctx = canvas.getContext('2d')
	ctx.fillStyle = '#ebedef'
	ctx.fillRect(0, 0, width, height)
	// Load the model
	// See a list of all supported models: https://github.com/ml5js/ml5-library/blob/master/src/SketchRNN/models.js
	model = await ml5.sketchRNN(modelObj, modelReady)

	requestAnimationFrame(draw)
}

function modelReady() {
	// sketchRNN will begin when the mouse is released
	canvas.addEventListener('mouseup', startSketchRNN)
}

// Reset the drawing
function clearDrawing() {
	clearCanvas()
	// clear seed strokes
	seedStrokes = []
	// Reset model
	model.reset()
}

// sketchRNN takes over
function startSketchRNN() {
	// Start where the mouse left off
	x = mouseX
	y = mouseY
	// Generate with the seedStrokes
	model.generate(seedStrokes, gotStroke)
}

const draw = (ctx = () => {
	requestAnimationFrame(draw)
	if (pX == null || pY == null) {
		pX = mouseX
		pY = mouseY
	}

	if (mouseDown) {
		// Set stroke weight to 10
		ctx.lineWidth = 10
		// Set stroke color to black
		ctx.strokeStyle = '#000000'
		// If mouse is pressed, draw line between previous and current mouse positions
		ctx.beginPath()
		ctx.lineCap = 'round'
		ctx.moveTo(mouseX, mouseY)
		ctx.lineTo(pX, pY)
		ctx.stroke()

		// Create a "stroke path" with dx, dy, and pen
		const userStroke = {
			dx: mouseX - pX,
			dy: mouseY - pY,
			pen: 'down'
		}
		// Add to the array
		seedStrokes.push(userStroke)
	}

	// If something new to draw
	if (strokePath) {
		// If the pen is down, draw a line
		if (previousPen === 'down') {
			ctx.beginPath()
			ctx.lineCap = 'round'
			ctx.moveTo(x, y)
			ctx.lineTo(x + strokePath.dx, y + strokePath.dy)
			ctx.stroke()
		}
		// Move the pen
		x += strokePath.dx
		y += strokePath.dy
		// The pen state actually refers to the next stroke
		previousPen = strokePath.pen

		// If the drawing is complete
		if (strokePath.pen !== 'end') {
			strokePath = null
			model.generate(gotStroke)
		}
	}

	// set the new pX and pY
	pX = mouseX
	pY = mouseY
})

// A new stroke path
function gotStroke(err, s) {
	strokePath = s
}

function clearCanvas() {
	ctx.fillStyle = '#ebedef'
	ctx.fillRect(0, 0, width, height)
}

function onMouseDown(e) {
	mouseDown = true
}

function onMouseUp(e) {
	mouseDown = false
}

function onMouseUpdate(e) {
	const pos = getMousePos(document.querySelector('canvas'), e)
	mouseX = pos.x
	mouseY = pos.y
}

function getMousePos(canvas, e) {
	const rect = canvas.getBoundingClientRect()
	return {
		x: e.clientX - rect.left,
		y: e.clientY - rect.top
	}
}

function Drawzone(props) {
	const canvasRef = useRef(null)
	/* ===
       ml5 Example
       SketchRNN
       === */

	useEffect(() => {
		// Copyright (c) 2019 ml5
		//
		// This software is released under the MIT License.
		// https://opensource.org/licenses/MIT
		canvas = canvasRef.current
		ctx = canvas.getContext('2d')
		setup(props.modelObj)

		// The model is ready
	})
	return (
		<div className='card text-center'>
			{/* needs a description of AI to attract kids here */}
			<div className='card-header'>
				<h1>Start drawing a {props.modelObj}!</h1>
			</div>
			<div className='card-body'>
				<canvas
					onMouseUp={onMouseUp}
					onMouseDown={onMouseDown}
					onMouseMove={onMouseUpdate}
					ref={canvasRef}
					height={480}
					width={480}
				></canvas>
			</div>
			<div className='card-footer'>
				<button
					className='btn btn-primary l-2'
					onClick={clearDrawing}
					type='button'
				>
					Clear
				</button>
			</div>
		</div>
	)
}

export default function DrawzonePopulate() {
	const [modelObj, setModelObj] = useState('cat')

	return (
		<>
			<div className='container text-center'>
				<form className='form-inline'>
					<label className='mr-3'>What do you want to draw</label>
					<div className='form-row align-items-center'>
						<div className='col-auto my-1'>
							<label
								className='mr-sm-2 sr-only'
								htmlFor='inlineFormCustomSelect'
							>
								ModelObject
							</label>
							<select
								className='custom-select mr-sm-2'
								id='inlineFormCustomSelect'
								onChange={(e) => setModelObj(e.target.value)}
							>
								<option selected>Choose...</option>
								{models.map((model) => (
									<option key={model} value={model}>
										{model}
									</option>
								))}
							</select>
						</div>
					</div>
				</form>
			</div>
			<Body model={<Drawzone modelObj={modelObj} />}></Body>
		</>
	)
}
