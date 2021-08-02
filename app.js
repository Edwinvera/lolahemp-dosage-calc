//Dosage Recommendation List
const dosageArr = [
  {
    weight: "1-5",
    "reg-oil": {
      starting: "Starting dose: 1 Drop (twice daily)",
      max: "Max Dose: 3 Drops (twice daily)"
    },
    "extra-oil": {
      starting: "Starting dose: Not Recommended",
      max: "Max dose: Not Recommended"
    },
    "chews3mg": {
      starting: "Starting dose: 1/2 chew (once daily)",
      max: "Max dose: 1 chew (twice daily)"
    },
    "chews6mg": {
      starting: "Starting dose: Not Recommended",
      max: "Max dose: Not Recommended"
    }
  },
  {
    weight: "6-10",
    "reg-oil": {
      starting: "Starting dose: 2 drops (twice daily)",
      max: "Max dose: 1/4mL (twice daily)"
    },
    "extra-oil": {
      starting: "Starting dose: Not Recommended",
      max: "Max dose: Not Recommended"
    },
    "chews3mg": {
      starting: "Starting dose: 1/2 chew (twice daily)",
      max: "Max dose: 1 chew (twice daily)"
    },
    "chews6mg": {
      starting: "Starting dose: Not Recommended",
      max: "Max dose: Not Recommended"
    }
  },
  {
    weight: "11-25",
    "reg-oil": {
      starting: "Starting dose: 4-6 drops (twice daily)",
      max: "Max dose: 1/2mL (twice daily)"
    },
    "extra-oil": {
      starting: "Starting dose: 2-3 drops (twice daily)",
      max: "Max dose: 1/4ml (twice daily)"
    },
    "chews3mg": {
      starting: "Starting dose: 1 chew (once daily)",
      max: "Max dose: 1 chew (twice daily)"
    },
    "chews6mg": {
      starting: "Starting dose: 1/2 chew (once daily)",
      max: "Max dose: 1/2 chew (twice daily)"
    }
  },
  {
    weight: "26-50",
    "reg-oil": {
      starting: "Starting dose: 1/2mL (twice daily)",
      max: "Max dose: 1mL (twice daily)"
    },
    "extra-oil": {
      starting: "Starting dose: 4-6 drops (twice daily)",
      max: "Max dose: 1/2mL (twice daily)"
    },
    "chews3mg": {
      starting: "Starting dose: 1 chew (twice daily)",
      max: "Max dose: 2 chews (twice daily)"
    },
    "chews6mg": {
      starting: "Starting dose: 1/2 chew (twice daily)",
      max: "Max dose: 1 chew (twice daily)"
    }
  },
  {
    weight: "51-75",
    "reg-oil": {
      starting: "Starting dose: 3/4mL (twice daily)",
      max: "Max dose: 1.5mL (twice daily)"
    },
    "extra-oil": {
      starting: "Starting dose: 1/4mL (twice daily)",
      max: "Max dose: 1mL (twice daily)"
    },
    "chews3mg": {
      starting: "Starting dose: 1.5 chews (twice daily)",
      max: "Max dose: 2 chews (twice daily)"
    },
    "chews6mg": {
      starting: "Starting dose: 1 chew (twice daily)",
      max: "Max dose: 1.5 chews (twice daily)"
    }
  },
  {
    weight: "76-100",
    "reg-oil": {
      starting: "Starting dose: 1mL (twice daily)",
      max: "Max dose: 2mL (twice daily)"
    },
    "extra-oil": {
      starting: "Starting dose: 1/2mL (twice daily)",
      max: "Max dose: 1.5mL (twice daily)"
    },
    "chews3mg": {
      starting: "Starting dose: 2 chews (twice daily)",
      max: "Max dose: 3 chews (twice daily)"
    },
    "chews6mg": {
      starting: "Starting dose: 1.5 chews (twice daily)",
      max: "Max dose: 2 chews (twice daily)"
    }
  },
  {
    weight: "100",
    "reg-oil": {
      starting: "Starting dose: 1.5mL (twice daily)",
      max: "Max dose: 2.5mL (twice daily)"
    },
    "extra-oil": {
      starting: "Starting dose: 1mL (twice daily)",
      max: "Max dose: 2mL (twice daily)"
    },
    "chews3mg": {
      starting: "Starting dose: 3 chews (twice daily)",
      max: "Max dose: 4 chews (twice daily)"
    },
    "chews6mg": {
      starting: "Starting dose: 2 chews (twice daily)",
      max: "Max dose: 3 chews (twice daily)"
    }
  }
]

const button = document.getElementById("btn")
const selectWeight = document.getElementById("select-weight")
const selectProduct = document.getElementById("select-product")

//lightbox
const lightbox = document.getElementById("lightbox")

//Dosage Calculator
button.addEventListener('click', function () {
  const valueWeight = selectWeight.options[selectWeight.selectedIndex].value
  const valueProduct = selectProduct.options[selectProduct.selectedIndex].value
  lightbox.classList.add("active")

  dosageArr.forEach(item => {
    if (valueWeight === item.weight) {
      lightbox.innerHTML+= `<p style= "text-align: center; font-size: 25px">"Lolahemp recommends: ${item[valueProduct].starting} and/or ${item[valueProduct].max}<p>`

      console.log(item[valueProduct].starting)
      console.log(item[valueProduct].max)
    }
  })
})

lightbox.addEventListener('click', event => {
  if (event.target !== e.currentTarget)
    return lightbox.classList.remove('active')
})