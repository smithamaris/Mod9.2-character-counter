import React from "react";

// types/index.ts
export interface TextStats {
  characterCount: number;
  wordCount: number;
  readingTime: number; // in minutes
}
 
export interface StatsDisplayProps {
  stats: TextStats;
  showReadingTime?: boolean;
}

// Show counts and stats

function StatsDisplay({stats, showReadingTime = true}: StatsDisplayProps) {
  
    return (
        <div>
          <h3>Text Input</h3>
          <div>
            <p>Characters: {stats.characterCount}</p>
            <p>Words: {stats.wordCount}</p>     

            {showReadingTime && <p>Reading Time: {stats.readingTime.toFixed(2)} min</p>}
          </div>
        </div>        
    );
}

export default StatsDisplay;


