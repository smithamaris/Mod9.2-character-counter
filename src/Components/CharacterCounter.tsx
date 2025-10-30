import { useState } from "react";
import TextInput from "./TextInput";
import StatsDisplay, { type TextStats } from "./StatsDisplay";


// types/index.ts
export interface CharacterCounterProps {
  minWords?: number;
  maxWords?: number;
  targetReadingTime?: number; // in minutes
}



// function to count words, characters, and reading time
function getStats (text: string): TextStats {
  const characters = text.length;
  const words = text.trim() === "" ? 0 : text.trim().split(/\s+/).length;
  const readingTime = words / 100;
  return { characterCount: characters, wordCount: words, readingTime };
}

function CharacterCounter({ minWords = 0, maxWords = 100, targetReadingTime = 1 }: CharacterCounterProps) {
  const [text, setText] = useState("");

  const stats = getStats(text);

  //---------------------------------------------------------------------------------------------------------- Come back to it
  const handleChange = (newText: string) => {
    setText(() => newText);
  };



  return (

    <div style={{ maxWidth: 700, margin: "5px auto", padding: 5, background: "#ddbebeff", borderRadius: 3 }}>

      <h2>Character Counter</h2>

      {/* <TextInput onTextChange={setText} /> */}

      <StatsDisplay stats= {stats} showReadingTime={true} />
      <hr />
      <TextInput onTextChange={handleChange} initialValue={text} />

      <div>

        <div>
          {stats.wordCount} / {maxWords} words
          {stats.wordCount >= minWords && <span style={{ color: "green", marginLeft: 8 }}> Min: 25 | Max: 100</span>}
        </div>
      </div>      
    </div>
          
  );
}



export default CharacterCounter;
