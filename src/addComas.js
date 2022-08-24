const addComas = (number) => {
    number = number.toString().split('')
    let j = 0
    for(let i = number.length ; i>0 ; i--) {
        if(j%3 === 0 && j !== 0) {
            number[i] = `.${number[i]}`
        }
        j = j+1
    }
    return number.toString().replace(/,/ig,'').replace(/\./g,',')
  }

export default addComas
