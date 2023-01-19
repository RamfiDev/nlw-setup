const form = document.querySelector("#form-habits")
const nlwSetup = new NLWSetup(form)

const data = {
  run: ["01-02", "01-04"],
  water: ["01-01", "01-03", "01-04"],
  food: ["01-02", "01-03"],
  sleep: ["01-01", "01-03"],
}

nlwSetup.setData(data)
nlwSetup.load()
