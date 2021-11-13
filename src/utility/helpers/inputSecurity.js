export function inputValidator(chars, maxLength) {
    if(chars.includes("{") | chars.includes("}") | chars.includes("[") | chars.includes(":") | chars.includes("$") | chars.includes("(") | chars.includes(")") | chars.includes(";") | chars.includes("+") | chars.includes("=") | chars.includes("<") | chars.includes(">")) {
      return true
    } else if(chars.length >= maxLength) {
      return true
    }
    
}


