import { useState } from "react";
import ColorInput from "./ColorInput";

function ColorPicker() {
    const [color, setColor] = useState('white');

    const handleColorChange = (newColor: string) => {
        setColor(newColor);
    };

    return (
        <div>
            <h2>Color Picker: {color}</h2>

            <ColorInput
                onColorChange={handleColorChange}
            />

            <div style={{backgroundColor: color, height: '20px', marginTop: '10px'}}>
                {color}
            </div>
        </div>
    );
}

export default ColorPicker;