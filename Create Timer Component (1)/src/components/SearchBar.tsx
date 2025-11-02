import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { Input } from './ui/input';

export const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // Open Google search in current tab
      window.location.href = `https://www.google.com/search?q=${encodeURIComponent(searchQuery.trim())}`;
    }
  };

  return (
    <form onSubmit={handleSearch} className="w-full max-w-2xl">
      <div className="relative">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
        <Input
          type="text"
          placeholder="Search the web"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full pl-12 pr-4 py-6 rounded-full border-transparent bg-muted/30 hover:bg-muted/50 focus-visible:bg-card focus-visible:border-border transition-all"
        />
      </div>
    </form>
  );
};
