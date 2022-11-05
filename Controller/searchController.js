const { Client } = require('@elastic/enterprise-search')
const client = new Client({
  url: 'https://share-case.ent.asia-south1.gcp.elastic-cloud.com',
  auth: {
    token: 'private-habihuu4y4ofifijiymc8g6i'
  }
})

const apiKey = "private-habihuu4y4ofifijiymc8g6i";

const search = async (req, res) => {
  const engineName = "stocks";
  const query = req.params.company;
  const searchFields = { title: {} };
  const resultFields = { title: { raw: {} } };
  const options = { search_fields: searchFields, result_fields: resultFields };

  // Without paging

  
  const response = await client.app.search({
    engine_name: engineName,
    body: {
      query: query,
    }
  })

  let data =[]
  for(let i=0;i<response.results.length;i++){
    data.push(response.results[i].securityid.raw)
  }

  res.send(data);
};

module.exports = {
  search,
};
