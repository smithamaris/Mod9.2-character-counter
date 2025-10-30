
import { useState, useEffect } from "react";


// types/index.ts
export interface TextInputProps {
  onTextChange: (text: string) => void;
  placeholder?: string;
  initialValue?: string;
}

function TextInput({onTextChange, placeholder = 'Start typing your content here...', initialValue = ""}: TextInputProps) {
    const [text, setText] = useState(initialValue);

    // when they type, call the parent function
    useEffect(() => {
        onTextChange(text);
    }, [text, onTextChange]);
    
    return (
        <div>
            <input
        value={text}
        onChange={e => setText(e.target.value)}
        placeholder={placeholder}
        />
        </div>
        
    );
}



export default TextInput;
