export function generateErrorMessage(fieldInputErrors) {
  
  
  if(
    fieldInputErrors.fromStreet === "ERROR" ||
    fieldInputErrors.fromCity === "ERROR"||
    fieldInputErrors.fromZip=== "ERROR"||
    fieldInputErrors.fromCountry=== "ERROR"||
    fieldInputErrors.toName=== "ERROR" ||
    fieldInputErrors.toEmail=== "ERROR"||
    fieldInputErrors.toStreet=== "ERROR"||
    fieldInputErrors.toCity=== "ERROR"||
    fieldInputErrors.toZip=== "ERROR"||
    fieldInputErrors.toCountry=== "ERROR"||
    fieldInputErrors.toProject=== "ERROR"||
    fieldInputErrors.isoDate === "ERROR"||
    fieldInputErrors.itemArrayIndexErrors.length > 0) {

      return "There are errors in the form above. Please correct and re-submit!"
    }
  }