//javascript
const dosageArr = [
  {
    weight: "1-5",
    oil: {
      regularStarting: "Regular Strength Starting dose: 1 Drop (twice daily)",
      regularMax: "Regular Strength Max Dose: 3 Drops (twice daily)",
      extraStarting: "Extra strength starting dose: Not Recommended",
      extraMax: "Extra strength max dose: Not Recommended"
    },
    chews: {
      chew3mgStarting: "1/2 chew (once daily)",
      chew3mgMax: "1 chew (twice daily)",
      chew6mgStarting: "Not Recommended",
      chew6mgMax: "Not Recommended"
    }
  },
  {
    weight: "6-10",
    oil: {
      regularStarting: "2 drops (twice daily)",
      regularMax: "1/4mL (twice daily)",
      extraStarting: "Not Recommended",
      extraMax: "Not Recommended"
    },
    chews: {
      chew3mgStarting: "1/2 chew (twice daily)",
      chew3mgMax: "1 chew (twice daily)",
      chew6mgStarting: "Not Recommended",
      chew6mgMax: "Not Recommended"
    }
  },
  {
    weight: "11-25",
    oil: {
      regularStarting: "4-6 drops (twice daily)",
      regularMax: "1/2mL (twice daily)",
      extraStarting: "2-3 drops (twice daily)",
      extraMax: "1/4ml (twice daily)"
    },
    chews: {
      chew3mgStarting: "1 chew (once daily)",
      chew3mgMax: "1 chew (twice daily)",
      chew6mgStarting: "1/2 chew (once daily)",
      chew6mgMax: "1/2 chew (twice daily)"
    }
  },
  {
    weight: "26-50",
    oil: {
      regularStarting: "1/2mL (twice daily)",
      regularMax: "1mL (twice daily)",
      extraStarting: "4-6 drops (twice daily)",
      extraMax: "1/2mL (twice daily)"
    },
    chews: {
      chew3mgStarting: "1 chew (twice daily)",
      chew3mgMax: "2 chews (twice daily)",
      chew6mgStarting: "1/2 chew (twice daily)",
      chew6mgMax: "1 chew (twice daily)"
    }
  },
  {
    weight: "51-75",
    oil: {
      regularStarting: "3/4mL (twice daily)",
      regularMax: "1.5mL (twice daily)",
      extraStarting: "1/4mL (twice daily)",
      extraMax: "1mL (twice daily)"
    },
    chews: {
      chew3mgStarting: "1.5 chews (twice daily)",
      chew3mgMax: "2 chews (twice daily)",
      chew6mgStarting: "1 chew (twice daily)",
      chew6mgMax: "1.5 chews (twice daily)"
    }
  },
  {
    weight: "76-100",
    oil: {
      regularStarting: "1mL (twice daily)",
      regularMax: "2mL (twice daily)",
      extraStarting: "1/2mL (twice daily)",
      extraMax: "1.5mL (twice daily)"
    },
    chews: {
      chew3mgStarting: "2 chews (twice daily)",
      chew3mgMax: "3 chews (twice daily)",
      chew6mgStarting: "1.5 chews (twice daily)",
      chew6mgMax: "2 chews (twice daily)"
    }
  },
  {
    weight: "100",
    oil: {
      regularStarting: "1.5mL (twice daily)",
      regularMax: "2.5mL (twice daily)",
      extraStarting: "1mL (twice daily)",
      extraMax: "2mL (twice daily)"
    },
    chews: {
      chew3mgStarting: "3 chews (twice daily)",
      chew3mgMax: "4 chews (twice daily)",
      chew6mgStarting: "2 chews (twice daily)",
      chew6mgMax: "3 chews (twice daily)"
    }
  }
]

// const dosage = {
//   xxSmall: {
//     weight: "1-5",
//     oil: {
//       regularStrength: {
//         startingDose: "1 drop (twice daily)",
//         maxDose: "3 drops (twice daily)",
//       },
//       extraStrength: {
//         startingDose: "Not Recommended",
//         maxDose: "Not Recommended"
//       }
//     },
//     chews: {
//       chew3mg: {
//         startingDose: "1/2 chew (once daily)",
//         maxDose: "1 chew (twice daily)"
//       },
//       chew6mg: {
//         startingDose: "Not Recommended",
//         maxDose: "Not Recommended"
//       }
//     }
//   },
//   xSmall: {
//       weight: "6-10",
//     oil: {
//       regularStrength: {
//         startingDose: "2 drops (twice daily)",
//         maxDose: "1/4mL (twice daily)",
//       },
//       extraStrength: {
//         startingDose: "Not Recommended",
//         maxDose: "Not Recommended"
//       }
//     },
//     chews: {
//       chew3mg: {
//         startingDose: "1/2 chew (twice daily)",
//         maxDose: "1 chew (twice daily)"
//       },
//       chew6mg: {
//         startingDose: "Not Recommended",
//         maxDose: "Not Recommended"
//       }
//     }
//   },
//   small: {
//       weight: "11-25",
//       oil: {
//         regularStrength: {
//           startingDose: "4-6 drops (twice daily)",
//           maxDose: "1/2mL (twice daily)",
//         },
//         extraStrength: {
//           startingDose: "2-3 drops (twice daily)",
//           maxDose: "1/4ml (twice daily)",
//         }
//       },
//       chews: {
//           chew3mg: {
//               startingDose: "1 chew (once daily)",
//               maxDose: "1 chew (twice daily)"
//               },
//           chew6mg: {
//               startingDose: "1/2 chew (once daily)",
//               maxDose: "1/2 chew (twice daily)"
//           }
//       }
//   },
//   medium: {
//       weight: "26-50",
//       oil: {
//         regularStrength: {
//           startingDose: "1/2ml (twice daily)",
//           maxDose: "1ml (twice daily)",
//         },
//         extraStrength: {
//           startingDose: "4-6 drops (twice daily)",
//           maxDose: "1/2ml (twice daily)",
//         }
//       },
//       chews: {
//           chew3mg: {
//               startingDose: "1 chew (twice daily)",
//               maxDose: "2 chews (twice daily)"
//               },
//           chew6mg: {
//               startingDose: "1/2 chew (twice daily)",
//               maxDose: "1 chew (twice daily)"
//           }
//       }
//   },
//   large: {
//       weight: "51-75",
//       oil: {
//         regularStrength: {
//           startingDose: "3/4ml (twice daily)",
//           maxDose: "1.5ml (twice daily)",
//         },
//         extraStrength: {
//           startingDose: "1/4ml (twice daily)",
//           maxDose: "1ml (twice daily)",
//         }
//       },
//       chews: {
//           chew3mg: {
//               startingDose: "1.5 chews (twice daily)",
//               maxDose: "2 chews (twice daily)"
//               },
//           chew6mg: {
//               startingDose: "1 chew (twice daily)",
//               maxDose: "1.5 chews (twice daily)"
//           }
//       }
//   },
//   xLarge: {
//       weight: "76-100",
//       oil: {
//         regularStrength: {
//           startingDose: "1ml (twice daily)",
//           maxDose: "2ml (twice daily)",
//         },
//         extraStrength: {
//           startingDose: "1/2ml (twice daily)",
//           maxDose: "1.5ml (twice daily)",
//         }
//       },
//       chews: {
//           chew3mg: {
//               startingDose: "2 chews (twice daily)",
//               maxDose: "3 chews (twice daily)"
//               },
//           chew6mg: {
//               startingDose: "1.5 chews (twice daily)",
//               maxDose: "2 chews (twice daily)"
//           }
//       }
//   },
//   xxLarge: {
//       weight: "100",
//       oil: {
//         regularStrength: {
//           startingDose: "1.5ml (twice daily)",
//           maxDose: "2.5ml (twice daily)",
//         },
//         extraStrength: {
//           startingDose: "1ml (twice daily)",
//           maxDose: "2ml (twice daily)",
//           }
//       },
//       chews: {
//           chew3mg: {
//               startingDose: "3 chews (twice daily)",
//               maxDose: "4 chews (twice daily)"
//           },
//           chew6mg: {
//               startingDose: "2 chews (twice daily)",
//               maxDose: "3 chews (twice daily)"
//           }
//       }
//   }
// }

const button = document.getElementById("btn")

const selectWeight = document.getElementById("select-weight")
const selectProduct = document.getElementById("select-product")

button.addEventListener('click', function () {
  const valueWeight = selectWeight.options[selectWeight.selectedIndex].value
  const valueProduct = selectProduct.options[selectProduct.selectedIndex].value

  dosageArr.forEach(item => {
    if (valueWeight === item.weight) {
      console.log(item[valueProduct].regularStarting)
      console.log(item[valueProduct].regularMax)
      console.log(item[valueProduct].extraStarting)
      console.log(item[valueProduct].extraMax)
    }
  })
})
