
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
        <div className="w-full">
            <textarea
                className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder={placeholder}
                value={text}
                onChange={e => setText(e.target.value)}
                rows={6}
            />
        </div>        
    );
}



export default TextInput;
