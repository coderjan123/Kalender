import { useState, useEffect } from 'react';
import Tagkalender from './assets/components/Tagkalender';
import './App.css';

function App() {
  function getDaysInMonth(year, month) {
    // Monat ist 0-basiert (0 = Januar, 11 = Dezember)
    return new Date(year, month + 1, 0).getDate();
  }
  const date = new Date();
  const months = ["Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"];


  // Beispiel: Anzahl der Tage im Mai 2025
  const year = 2025;
  const month = date.getMonth()  // Mai (Monate sind 0-basiert)
  const daysInMonth = getDaysInMonth(year, month);

  const daysArray = []


    for (let i = 1; i <= daysInMonth; i++) {
      daysArray.push(i); // Die Zahl i wird zum Array hinzugefügt
    }

// Zustand mit dem Array der Tage aktualisieren

  

  return (
    <div>
      <div className='TopBar'>
        <p className='Kalender'>Kalender</p>
        <p className='Monat'>{months[month]}</p>
      </div>
      <div className='Tage-Grid'>
        {daysArray.map((tag) => (
          <Tagkalender key={tag} Tag={tag} />
        ))}
        
      </div>


    </div>
  );
}

export default App;
