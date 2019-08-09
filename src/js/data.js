const small = [
  {
    "input": "small",
    "output": "output 1"
  },
  {
    "input": "",
    "output": ""
  },
]

const medium = [
  {
    "input": "medium",
    "output": "output 1"
  },
  {
    "input": "",
    "output": ""
  },
]

const large = [
  {
    "input": "large",
    "output": "output 1"
  },
  {
    "input": "",
    "output": ""
  },
]

const userCase = [
  {
    "input": "user case",
    "output": "output 1"
  },
  {
    "input": "",
    "output": ""
  },  
]

const data = [...userCase, ...small, ...medium, ...large]

export default data;