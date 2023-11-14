app.get('/search', (req, res) => {
    const searchQuery = req.query.search; // Get the search query from the URL parameter
  
    // You can use the 'searchQuery' to filter and search for products in your data
  
    // For example, you can filter products based on the search query and send the filtered data to a new page
    // Replace this with your actual filtering logic
    const filteredProducts = yourFilteringFunction(searchQuery);
  
    // Render a new page with the filtered results
    res.render('search-results', { products: filteredProducts, query: searchQuery });
  });
  