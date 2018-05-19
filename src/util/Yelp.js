const apiKey = 'zKPeV0OgF5PmpbeWDk8YRzzM0CE7cjIOKFYYVY0Bt4AWxCI3covnXlm5y7-Gt_pfofpnsLmdR_5EYLsuRayUa4kCIKDUkPZ8ouHvaxWNYc5H4C6tu6cCParsU1__WnYx';
const Yelp = {
  search(term, location, sortBy) {
    return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
      headers: {
        Authorization: `Bearer ${apiKey}`
      }
    }).then(response => {
      return response.json();
    }).then(jsonResponse => {
      if(jsonResponse.businesses) {
        return jsonResponse.businesses.map( business => ({
            id: business.id,
            imageSrc: business.image_url,
            name: business.name,
            address: business.location.address1,
            city: business.location.city,
            state: business.location.state,
            zipCode: business.location.zip_code,
            category: business.categories[0].title,
            rating: business.rating,
            reviewCount: business.review_count

        }));
      }
    });
  }
};

export default Yelp;
