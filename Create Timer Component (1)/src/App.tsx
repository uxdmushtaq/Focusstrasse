import { useState } from 'react';
import { Timer } from './components/Timer';
import { SearchBar } from './components/SearchBar';
import { AnimatedBackground } from './components/AnimatedBackground';
import { CloudSun } from 'lucide-react';
// Logo image - for deployment, place in public/assets/ directory
const focusStrasseLogo = '/assets/focus-strasse-logo.png';

type WhiteNoiseType = 'waves' | 'rain' | 'mountains' | 'forest';

export default function App() {
  const [selectedNoise, setSelectedNoise] = useState<WhiteNoiseType | null>(null);
  const [timerDuration, setTimerDuration] = useState(25 * 60); // 25 minutes in seconds

  // Get current date
  const now = new Date();
  
  // Format date
  const dateOptions: Intl.DateTimeFormatOptions = { 
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  };
  const dateString = now.toLocaleDateString('en-US', dateOptions);

  // Mock temperature data
  // In a real app, you would fetch this from a weather API like OpenWeatherMap
  // Example: https://api.openweathermap.org/data/2.5/weather?q=CityName&appid=YOUR_API_KEY&units=metric
  const temperature = 22; // Placeholder temperature in Celsius
  const WeatherIcon = CloudSun; // Icon representing weather condition (CloudSun for partly cloudy)

  return (
    <div className="size-full flex flex-col bg-background relative overflow-hidden">
      {/* Animated background effects */}
      <div className="absolute inset-0 z-0">
        <AnimatedBackground selectedNoise={selectedNoise} />
      </div>

      {/* Logo in top left corner */}
      <div className="absolute top-8 left-0 z-50 pl-8">
        <img 
          src={focusStrasseLogo} 
          alt="Focus Strasse" 
          className="h-10 w-auto"
        />
      </div>

      {/* Main content area */}
      <div className="flex-1 flex flex-col items-center justify-start pt-32 px-8 pb-8 relative z-10">
        {/* Temperature and date */}
        <div className="mb-12 text-center opacity-40" style={{ fontFamily: 'Inter, sans-serif' }}>
          <div className="text-sm mb-1 tracking-wide uppercase text-muted-foreground" style={{ fontWeight: 300, letterSpacing: '0.1em' }}>
            {dateString}
          </div>
          <div className="flex items-center justify-center gap-2">
            <div className="text-2xl tabular-nums tracking-tight" style={{ fontWeight: 300 }}>
              {temperature}°C
            </div>
            <WeatherIcon className="h-5 w-5 text-muted-foreground" />
          </div>
        </div>

        {/* Search bar */}
        <div className="mb-16 w-full flex justify-center">
          <SearchBar />
        </div>

        {/* Timer */}
        <div className="w-full flex justify-center">
          <Timer 
            initialTime={timerDuration}
            selectedNoise={selectedNoise}
            onNoiseChange={setSelectedNoise}
            onDurationChange={setTimerDuration}
          />
        </div>
      </div>

      {/* Footer links */}
      <div className="absolute bottom-6 left-0 right-0 z-50 flex justify-center gap-6 opacity-60">
        <a 
          href="#about" 
          className={`text-sm transition-colors ${
            selectedNoise === 'forest'
              ? 'text-white hover:text-gray-300'
              : 'text-black hover:text-gray-700'
          }`}
          style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500 }}
        >
          About
        </a>
        <a 
          href="https://instagram.com" 
          target="_blank"
          rel="noopener noreferrer"
          className={`text-sm transition-colors ${
            selectedNoise === 'forest'
              ? 'text-white hover:text-gray-300'
              : 'text-black hover:text-gray-700'
          }`}
          style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500 }}
        >
          Instagram
        </a>
        <a 
          href="https://twitter.com" 
          target="_blank"
          rel="noopener noreferrer"
          className={`text-sm transition-colors ${
            selectedNoise === 'forest'
              ? 'text-white hover:text-gray-300'
              : 'text-black hover:text-gray-700'
          }`}
          style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500 }}
        >
          Twitter
        </a>
      </div>
    </div>
  );
}
