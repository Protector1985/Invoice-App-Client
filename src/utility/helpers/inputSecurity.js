

   export function inputValidator(chars, length) {
      
        if(length < 90) {
            
            for(let i = 0 ; i < chars.length ; i ++) {
                console.log(chars[i])
               if(     chars[i] === ":" 
                    || chars[i] === "{" 
                    || chars[i] === "}" 
                    || chars[i] === "(" 
                    || chars[i] === ")" 
                    || chars[i] === "+" 
                    || chars[i] === "=" 
                    || chars[i] === "<" 
                    || chars[i] === ">" 
                    || chars[i] === "?" 
                    || chars[i] === "$" 
                    || chars[i] === "%" 
                    || chars[i] === "|") {
                return ({
                    allowed: false,
                    msg: `Invalid character '${chars[i]}'`,
                    str: chars.substring(0, chars.length - 2)

                })

            } 
            }
        
                
                
                
    
        
        } else {
            return ({
                allowed: false,
                msg: "Max input length exceeded"
            })
        }
    }





