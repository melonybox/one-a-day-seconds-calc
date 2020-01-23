const onSubmit = () => {
  event.preventDefault()
  const resultPost = document.getElementById("mathResult")
  const timeType = event.target.timeType.value
  const timeValue = parseInt(event.target.timeNumber.value)
  let timeResult = 0

  if (timeType === "hours"){
    timeResult = (timeValue*60)*60
  } else {
    timeResult = timeValue*60
  }

  resultPost.innerText = `${timeValue} ${timeType} is ${timeResult} seconds.`
}

document.addEventListener('DOMContentLoaded', () => {
  const timeTypeForm = document.getElementById("selectTime")
  const timeForm = document.getElementById("mathForm")

  const timeTypeOptions = [
    {text: "Hours", value: "hours"},
    {text: "Minutes", value: "minutes"}
  ]

  timeTypeOptions.forEach(item => {
    const el = document.createElement("option")
    el.text = item.text
    el.value = item.value
    timeTypeForm.appendChild(el)
  })


  timeForm.addEventListener("submit", onSubmit)

})
