//javascript

const petSize = {
  xxSmall: {
    weight: "1-5lbs",
    oil: {
      regularStrength: {
        startingDose: "1 drop (twice daily)",
        maxDose: "3 drops (twice daily)",
      },
      extraStrength: {
        startingDose: "Not Recommended",
        maxDose: "Not Recommended"
      }
    },
    chews: {
      chew3mg: {
        startingDose: "Starting Dosage: 1/2 chew (once daily)",
        maxDose: "Max Dosage: 1 chew (twice daily)"
      },
      chew6mg: {
        startingDose: "Not Recommended",
        maxDose: "Not Recommended"
      }
    }
  },
  xSmall: {
      weight: "6-10lbs",
    oil: {
      regularStrength: {
        startingDose: "2 drops (twice daily)",
        maxDose: "1/4mL (twice daily)",
      },
      extraStrength: {
        startingDose: "Not Recommended",
        maxDose: "Not Recommended"
      }
    },
    chews: {
      chew3mg: {
        startingDose: "Starting: 1/2 chew (twice daily)",
        maxDose: "1 chew (twice daily)"
      },
      chew6mg: {
        startingDose: "Not Recommended",
        maxDose: "Not Recommended"
      }
    }
  },
  small: {
      weight: "11-25lbs",
      oil: {
        regularStrength: {
          startingDose: "4-6 drops (twice daily)",
          maxDose: "1/2mL (twice daily)",
        },
        extraStrength: {
          startingDose: "2-3 drops (twice daily)",
          maxDose: "1/4ml (twice daily)",
        }
      },
      chews: {
          chew3mg: {
              startingDose: "1 chew (once daily)",
              maxDose: "1 chew (twice daily)"
              },
          chew6mg: {
              startingDose: "1/2 chew (once daily)",
              maxDose: "1/2 chew (twice daily)"
          }
      }
  },
  medium: {
      weight: "26-50lbs",
      oil: {
        regularStrength: {
          startingDose: "1/2ml (twice daily)",
          maxDose: "1ml (twice daily)",
        },
        extraStrength: {
          startingDose: "4-6 drops (twice daily)",
          maxDose: "1/2ml (twice daily)",
        }
      },
      chews: {
          chew3mg: {
              startingDose: "1 chew (twice daily)",
              maxDose: "2 chews (twice daily)"
              },
          chew6mg: {
              startingDose: "1/2 chew (twice daily)",
              maxDose: "1 chew (twice daily)"
          }
      }
  },
  large: {
      weight: "51-75lbs",
      oil: {
        regularStrength: {
          startingDose: "3/4ml (twice daily)",
          maxDose: "1.5ml (twice daily)",
        },
        extraStrength: {
          startingDose: "1/4ml (twice daily)",
          maxDose: "1ml (twice daily)",
        }
      },
      chews: {
          chew3mg: {
              startingDose: "1.5 chews (twice daily)",
              maxDose: "2 chews (twice daily)"
              },
          chew6mg: {
              startingDose: "1 chew (twice daily)",
              maxDose: "1.5 chews (twice daily)"
          }
      }
  },
  xLarge: {
      weight: "76-100lbs",
      oil: {
        regularStrength: {
          startingDose: "1ml (twice daily)",
          maxDose: "2ml (twice daily)",
        },
        extraStrength: {
          startingDose: "1/2ml (twice daily)",
          maxDose: "1.5ml (twice daily)",
        }
      },
      chews: {
          chew3mg: {
              startingDose: "2 chews (twice daily)",
              maxDose: "3 chews (twice daily)"
              },
          chew6mg: {
              startingDose: "1.5 chews (twice daily)",
              maxDose: "2 chews (twice daily)"
          }
      }
  },
  xxLarge: {
      weight: "100+lbs",
      oil: {
        regularStrength: {
          startingDose: "1.5ml (twice daily)",
          maxDose: "2.5ml (twice daily)",
        },
        extraStrength: {
          startingDose: "1ml (twice daily)",
          maxDose: "2ml (twice daily)",
          }
      },
      chews: {
          chew3mg: {
              startingDose: "3 chews (twice daily)",
              maxDose: "4 chews (twice daily)"
          },
          chew6mg: {
              startingDose: "2 chews (twice daily)",
              maxDose: "3 chews (twice daily)"
          }
      }
  }
}

console.log(petSize.xxSmall)

// let petWeight;
// let product;
// let result;