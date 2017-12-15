
const apiKey = 'xV6gZCtDtphTIIFt07RzSvqNXCiXTJcco9vL0SUdl5LcceKSFMgVSK0Sny_cP0yZyKDcOzE5yB59SE4fpLmEwgB2-DitLnG8ZZ3W8ioDeD-vE6lEnvO_yqBItTUzWnYx';

const Yelp = {
  search: function(term, location, sortBy) {
    return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
      headers: {
        Authorization: `Bearer ${apiKey}`
      }
    }).then(response => {
      return response.json();
    }).then(jsonResponse => {
      if (jsonResponse.businesses) {
        return jsonResponse.businesses.map(business => {
            console.log(business);
        return {
              id: business.id,
              imageSrc: business.image_url,
              name: business.name,
              address: business.location.address1,
              city: business.location.city,
              state: business.location.state,
              zipCode: business.location.zip_code,
              category: business.categories[0].title,
              rating: business.rating,
              reviewCount: business.review_count,
            }
      })
    }
  })
}
};

export default Yelp;
