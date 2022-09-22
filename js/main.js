import { Modal } from './modal.JS'
import { AlertError } from './alert-error.js'
import { CalculateIMC, notNumber } from './utils.js'

inputHeight.oninput = () => AlertError.Close()
inputWeight.oninput = () => AlertError.Close()

const form = document.querySelector('form')
const inputWeight = document.querySelector('#weight')
const inputHeight = document.querySelector('#height')

form.onsubmit = event => {
  event.preventDefault()

  const weight = inputWeight.value
  const height = inputHeight.value

  const weightOrHeightIsNotANumber = notNumber(height) || notNumber(weight)

  if (weightOrHeightIsNotANumber) {
    AlertError.Open()

    return
  }

  const result = CalculateIMC(weight, height)
  displayResultMessage(result)

}

function displayResultMessage(result) {
  const message = `Seu IMC é de ${result}`

  Modal.Message.innerText = message

  Modal.Open()
} 
