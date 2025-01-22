import { useState } from 'react';
import { TextField, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useSearchStore } from '../storeZustand/authStore';

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const addSearch = useSearchStore((state) => state.addSearch);
  const setSearchResults = useSearchStore((state) => state.setSearchResults);
  const products = useSearchStore((state) => state.products);

  const handleSearch = () => {
    addSearch(query);
    console.log('Buscando productos para:', query);

    if (query.trim() === '') {
      setSearchResults(products); // Restablecer a todos los productos si la consulta está vacía
    } else {
      const results = products.filter(item => item.title.toLowerCase().includes(query.toLowerCase()));
      setSearchResults(results);
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  const handleChange = (e) => {
    setQuery(e.target.value);
    if (e.target.value.trim() === '') {
      setSearchResults(products); // Restablecer a todos los productos si la consulta está vacía
    } else {
      handleSearch();
    }
  };

  return (
    <div className="flex items-center justify-center w-w-60 mt-3 ">
      <TextField
        variant="standard"
        placeholder="Buscar productos..."
        value={query}
        onChange={handleChange}
        onKeyPress={handleKeyPress}
        className="flex-grow max-h-14 "
      />
      <IconButton onClick={handleSearch} color="primary">
        <SearchIcon />
      </IconButton>
    </div>
  );
};

export default SearchBar;