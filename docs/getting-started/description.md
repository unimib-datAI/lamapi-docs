---
sidebar_position: 2
---

# Description

# Description

To illustrate the process of entity linking using a knowledge graph, let's consider a specific table from the provided dataset. This table, which we'll refer to as "Celebrity Birth Data," contains four columns: Name, Birthplace, Country, and Date of Birth. Here are a few sample rows from the table:

| Name                   | Birthplace    | Country       | Date of Birth   |
|------------------------|---------------|---------------|-----------------|
| Zooey Deschanel        | Los Angeles   | United States | January 17, 1980|
| Sarah McLachlan        | Halifax       | Canada        | January 28, 1968|
| Macaulay Carson Culkin | New York      | United States | August 26, 1980 |
| Leonardo DiCaprio      | Los Angeles   | United States | November 11, 1974|

The objective of entity linking in this context is to connect each piece of data in the table (like names, birthplaces, and countries) to corresponding entities in a knowledge graph such as Wikidata.

1. **Named Entity Recognition (NER):** Initially, we employ NER to identify entities within the table. In our example, NER would recognize "Zooey Deschanel," "Los Angeles," "United States," and "January 17, 1980" as entities in the first row.

2. **Searching the Knowledge Graph:** Next, we query the knowledge graph using these identified entities. For instance, when we search for "Zooey Deschanel," the knowledge graph might return an entity with a unique identifier (e.g., Q191719). This identifier signifies the exact entry in the knowledge graph representing Zooey Deschanel.

3. **Linking Entities:** Once we have the identifiers, we link the table data to the corresponding entries in the knowledge graph. For example, the row containing Zooey Deschanel’s information in our table would be linked to the Q191719 entry in the knowledge graph.

4. **Enriching Data:** With the links established, we can now augment our table with additional information from the knowledge graph. This might include details like Zooey Deschanel's filmography, awards, and other biographical data not originally in our table.

5. **Repeat for Other Entities:** This process is repeated for each entity in the table - other individuals, their birthplaces, countries, and dates of birth.

In summary, entity linking for the "Celebrity Birth Data" table involves identifying and linking each entity (names, places, countries, dates) to a corresponding entry in a knowledge graph. This linkage not only validates the data but also enriches it with a wealth of additional information, enabling more nuanced analysis and insights.


# Example of Input

```js
[
  {
    "datasetName": "Dataset1",
    "tableName": "Test2",
    "header": [
      "col1",
      "col2",
      "col3",
      "Date of Birth"
    ],
    "rows": [
      {
        "idRow": 1,
        "data": [
          "Zooey Deschanel",
          "Los Angeles",
          "United States",
          "January 17, 1980"
        ]
      },
      {
        "idRow": 2,
        "data": [
          "Sarah Mclachlan",
          "Halifax",
          "Canada",
          "January 28, 1968"
        ]
      },
      {
        "idRow": 3,
        "data": [
          "Macaulay Carson Culkin",
          "New York",
          "United States",
          "August 26, 1980"
        ]
      },
      {
        "idRow": 4,
        "data": [
          "Leonardo DiCaprio",
          "Los Angeles",
          "United States",
          "November 11, 1974"
        ]
      }
    ],
    "semanticAnnotations": {
      "cea": [],
      "cta": [],
      "cpa": []
    },
    "metadata": {
      "column": [
        {
          "idColumn": 0,
          "tag": "NE"
        },
        {
          "idColumn": 1,
          "tag": "NE"
        },
        {
          "idColumn": 2,
          "tag": "NE"
        },
        {
          "idColumn": 3,
          "tag": "LIT",
          "datatype": "DATETIME"
        }
      ]
    },
    "kgReference": "wikidata"
  }
]
```



# Example of Output

```js
[
{
  "datasetName": "Dataset1",
  "tableName": "Test2",
  "header": [
    "col1",
    "col2",
    "col3",
    "Date of Birth"
  ],
  "rows": [
    {
      "idRow": 1,
      "data": [
        "Zooey Deschanel",
        "Los Angeles",
        "United States",
        "January 17, 1980"
      ]
    },
    {
      "idRow": 2,
      "data": [
        "Sarah Mclachlan",
        "Halifax",
        "Canada",
        "January 28, 1968"
      ]
    },
    {
      "idRow": 3,
      "data": [
        "Macaulay Carson Culkin",
        "New York",
        "United States",
        "August 26, 1980"
      ]
    },
    {
      "idRow": 4,
      "data": [
        "Leonardo DiCaprio",
        "Los Angeles",
        "United States",
        "November 11, 1974"
      ]
    }
  ],
  "semanticAnnotations": {
    "cea": [
      {
        "idColumn": 0,
        "idRow": 1,
        "entity": [
          {
            "id": "Q191719",
            "name": "zooey deschanel",
            "type": [
              {
                "id": "Q33999",
                "name": "actor"
              },
              {
                "id": "Q488205",
                "name": "singer-songwriter"
              },
              {
                "id": "Q639669",
                "name": "musician"
              },
              {
                "id": "Q2405480",
                "name": "voice actor"
              },
              {
                "id": "Q177220",
                "name": "singer"
              },
              {
                "id": "Q36834",
                "name": "composer"
              },
              {
                "id": "Q10798782",
                "name": "television actor"
              },
              {
                "id": "Q10800557",
                "name": "film actor"
              },
              {
                "id": "Q9648008",
                "name": "banjoist"
              },
              {
                "id": "Q55960555",
                "name": "recording artist"
              },
              {
                "id": "Q5",
                "name": "human"
              }
            ],
            "description": "american actress, model, and singer-songwriter",
            "match": true,
            "delta": 0.993,
            "score": 1
          },
          {
            "id": "Q204672",
            "name": "emily deschanel",
            "type": [
              {
                "id": "Q33999",
                "name": "actor"
              },
              {
                "id": "Q10800557",
                "name": "film actor"
              },
              {
                "id": "Q10798782",
                "name": "television actor"
              },
              {
                "id": "Q3282637",
                "name": "film producer"
              },
              {
                "id": "Q578109",
                "name": "television producer"
              },
              {
                "id": "Q5",
                "name": "human"
              }
            ],
            "description": "american actress, television producer, and film producer",
            "match": false,
            "delta": null,
            "score": 0.007
          },
          {
            "id": "Q3171703",
            "name": "jean deschanel",
            "type": [
              {
                "id": "Q5",
                "name": "human"
              },
              {
                "id": "Q82955",
                "name": "politician"
              }
            ],
            "description": "french politician",
            "match": false,
            "delta": null,
            "score": 0.003
          }
        ]
      },
      {
        "idColumn": 1,
        "idRow": 1,
        "entity": [
          {
            "id": "Q104994",
            "name": "los angeles",
            "type": [
              {
                "id": "Q13212489",
                "name": "county of California"
              }
            ],
            "description": "county in california, united states",
            "match": false,
            "delta": 0.042,
            "score": 0.99
          },
          {
            "id": "Q65",
            "name": "los angeles",
            "type": [
              {
                "id": "Q13218391",
                "name": "charter city"
              },
              {
                "id": "Q1093829",
                "name": "city in the United States"
              },
              {
                "id": "Q50330360",
                "name": "second largest city"
              },
              {
                "id": "Q515",
                "name": "city"
              },
              {
                "id": "Q208511",
                "name": "global city"
              },
              {
                "id": "Q1637706",
                "name": "million city"
              },
              {
                "id": "Q200250",
                "name": "metropolis"
              },
              {
                "id": "Q174844",
                "name": "megacity"
              },
              {
                "id": "Q745456",
                "name": "business cluster"
              },
              {
                "id": "Q1549591",
                "name": "big city"
              }
            ],
            "description": "largest city in california, united states of america",
            "match": false,
            "delta": null,
            "score": 0.948
          },
          {
            "id": "Q665249",
            "name": "los angeles",
            "type": [
              {
                "id": "Q1428357",
                "name": "submarine class"
              }
            ],
            "description": "class of nuclear-powered fast attack submarines of the united states navy",
            "match": false,
            "delta": null,
            "score": 0.375
          }
        ]
      },
      {
        "idColumn": 2,
        "idRow": 1,
        "entity": [
          {
            "id": "Q30",
            "name": "united states",
            "type": [
              {
                "id": "Q3624078",
                "name": "sovereign state"
              },
              {
                "id": "Q1520223",
                "name": "constitutional republic"
              },
              {
                "id": "Q5255892",
                "name": "democratic republic"
              },
              {
                "id": "Q512187",
                "name": "federal republic"
              },
              {
                "id": "Q1489259",
                "name": "superpower"
              },
              {
                "id": "Q6256",
                "name": "country"
              },
              {
                "id": "Q99541706",
                "name": "historical unrecognized state"
              },
              {
                "id": "Q113489728",
                "name": "OECD country"
              }
            ],
            "description": "country in north america",
            "match": true,
            "delta": 0.484,
            "score": 1
          },
          {
            "id": "Q1545509",
            "name": "united states",
            "type": [
              {
                "id": "Q697196",
                "name": "ocean liner"
              },
              {
                "id": "Q2055880",
                "name": "passenger ship"
              }
            ],
            "description": "american ocean liner",
            "match": false,
            "delta": null,
            "score": 0.516
          },
          {
            "id": "Q3965121",
            "name": "united states",
            "type": [
              {
                "id": "Q5398426",
                "name": "television series"
              }
            ],
            "description": "television series",
            "match": false,
            "delta": null,
            "score": 0.14
          }
        ]
      },
      {
        "idColumn": 3,
        "idRow": 1,
        "entity": []
      },
      {
        "idColumn": 0,
        "idRow": 2,
        "entity": [
          {
            "id": "Q224650",
            "name": "sarah mclachlan",
            "type": [
              {
                "id": "Q177220",
                "name": "singer"
              },
              {
                "id": "Q486748",
                "name": "pianist"
              },
              {
                "id": "Q855091",
                "name": "guitarist"
              },
              {
                "id": "Q1327329",
                "name": "multi-instrumentalist"
              },
              {
                "id": "Q1028181",
                "name": "painter"
              },
              {
                "id": "Q482980",
                "name": "author"
              },
              {
                "id": "Q3282637",
                "name": "film producer"
              },
              {
                "id": "Q488205",
                "name": "singer-songwriter"
              },
              {
                "id": "Q55960555",
                "name": "recording artist"
              },
              {
                "id": "Q5",
                "name": "human"
              }
            ],
            "description": "canadian musician, singer, and songwriter",
            "match": true,
            "delta": 0.95,
            "score": 0.975
          },
          {
            "id": "Q108537260",
            "name": "sarah mclachlan",
            "type": [
              {
                "id": "Q5",
                "name": "human"
              },
              {
                "id": "Q1650915",
                "name": "researcher"
              }
            ],
            "description": "uk public health and psychology researcher",
            "match": false,
            "delta": null,
            "score": 0.025
          },
          {
            "id": "Q1953844",
            "name": "murray mclachlan",
            "type": [
              {
                "id": "Q22808320",
                "name": "Wikimedia human name disambiguation page"
              }
            ],
            "description": "wikimedia disambiguation page",
            "match": false,
            "delta": null,
            "score": 0.004
          }
        ]
      },
      {
        "idColumn": 1,
        "idRow": 2,
        "entity": [
          {
            "id": "Q2630280",
            "name": "halifax",
            "type": [
              {
                "id": "Q11774771",
                "name": "county of Nova Scotia"
              },
              {
                "id": "Q18810091",
                "name": "census division of Canada"
              },
              {
                "id": "Q82794",
                "name": "geographic region"
              }
            ],
            "description": "county in nova scotia, canada",
            "match": false,
            "delta": 0.105,
            "score": 0.741
          },
          {
            "id": "Q2141",
            "name": "halifax",
            "type": [
              {
                "id": "Q515",
                "name": "city"
              },
              {
                "id": "Q1388464",
                "name": "regional municipality in Canada"
              },
              {
                "id": "Q21507383",
                "name": "provincial or territorial capital city in Canada"
              },
              {
                "id": "Q1549591",
                "name": "big city"
              },
              {
                "id": "Q1907114",
                "name": "metropolitan area"
              }
            ],
            "description": "capital and largest city of the province of nova scotia, canada",
            "match": false,
            "delta": null,
            "score": 0.636
          },
          {
            "id": "Q2026751",
            "name": "halifax",
            "type": [
              {
                "id": "Q15127012",
                "name": "town in the United States"
              },
              {
                "id": "Q62049",
                "name": "county seat"
              }
            ],
            "description": "town in halifax county, north carolina, united states",
            "match": false,
            "delta": null,
            "score": 0.073
          }
        ]
      },
      {
        "idColumn": 2,
        "idRow": 2,
        "entity": [
          {
            "id": "Q16",
            "name": "canada",
            "type": [
              {
                "id": "Q223832",
                "name": "dominion of the British Empire"
              },
              {
                "id": "Q202686",
                "name": "Commonwealth realm"
              },
              {
                "id": "Q3624078",
                "name": "sovereign state"
              },
              {
                "id": "Q6256",
                "name": "country"
              },
              {
                "id": "Q43702",
                "name": "federation"
              },
              {
                "id": "Q113489728",
                "name": "OECD country"
              }
            ],
            "description": "country in north america",
            "match": true,
            "delta": 0.382,
            "score": 1
          },
          {
            "id": "Q33673",
            "name": "canada",
            "type": [
              {
                "id": "Q33742",
                "name": "natural language"
              },
              {
                "id": "Q1288568",
                "name": "modern language"
              }
            ],
            "description": "dravidian language",
            "match": false,
            "delta": null,
            "score": 0.618
          },
          {
            "id": "Q102226934",
            "name": "canada",
            "type": [
              {
                "id": "Q3303500",
                "name": "video production company"
              }
            ],
            "description": "catalan visual content production company",
            "match": false,
            "delta": null,
            "score": 0.157
          }
        ]
      },
      {
        "idColumn": 3,
        "idRow": 2,
        "entity": []
      },
      {
        "idColumn": 0,
        "idRow": 3,
        "entity": [
          {
            "id": "Q84010293",
            "name": "macaulay culkin filmography",
            "type": [
              {
                "id": "Q1371849",
                "name": "filmography"
              }
            ],
            "description": "filmography",
            "match": false,
            "delta": 0.303,
            "score": 0.347
          },
          {
            "id": "Q7279190",
            "name": "rachel carson playground",
            "type": [
              {
                "id": "Q22698",
                "name": "park"
              }
            ],
            "description": "public park in queens, new york",
            "match": false,
            "delta": null,
            "score": 0.044
          },
          {
            "id": "Q109305006",
            "name": "jre #1153 - macaulay culkin",
            "type": [
              {
                "id": "Q61855877",
                "name": "podcast episode"
              }
            ],
            "description": "episode of the joe rogan experience",
            "match": false,
            "delta": null,
            "score": 0.04
          }
        ]
      },
      {
        "idColumn": 1,
        "idRow": 3,
        "entity": [
          {
            "id": "Q1384",
            "name": "new york",
            "type": [
              {
                "id": "Q35657",
                "name": "U.S. state"
              }
            ],
            "description": "state of the united states of america",
            "match": false,
            "delta": 0.092,
            "score": 0.996
          },
          {
            "id": "Q60",
            "name": "new york",
            "type": [
              {
                "id": "Q208511",
                "name": "global city"
              },
              {
                "id": "Q2264924",
                "name": "port settlement"
              },
              {
                "id": "Q1093829",
                "name": "city in the United States"
              },
              {
                "id": "Q515",
                "name": "city"
              },
              {
                "id": "Q1549591",
                "name": "big city"
              },
              {
                "id": "Q51929311",
                "name": "largest city"
              },
              {
                "id": "Q15063611",
                "name": "city in the state of New York"
              },
              {
                "id": "Q1637706",
                "name": "million city"
              },
              {
                "id": "Q200250",
                "name": "metropolis"
              },
              {
                "id": "Q174844",
                "name": "megacity"
              }
            ],
            "description": "most populous city in the united states of america",
            "match": false,
            "delta": null,
            "score": 0.904
          },
          {
            "id": "Q683705",
            "name": "new york",
            "type": [
              {
                "id": "Q1768043",
                "name": "metropolitan statistical area"
              }
            ],
            "description": "most populous metropolitan area in the united states",
            "match": false,
            "delta": null,
            "score": 0.507
          }
        ]
      },
      {
        "idColumn": 2,
        "idRow": 3,
        "entity": [
          {
            "id": "Q30",
            "name": "united states",
            "type": [
              {
                "id": "Q3624078",
                "name": "sovereign state"
              },
              {
                "id": "Q1520223",
                "name": "constitutional republic"
              },
              {
                "id": "Q5255892",
                "name": "democratic republic"
              },
              {
                "id": "Q512187",
                "name": "federal republic"
              },
              {
                "id": "Q1489259",
                "name": "superpower"
              },
              {
                "id": "Q6256",
                "name": "country"
              },
              {
                "id": "Q99541706",
                "name": "historical unrecognized state"
              },
              {
                "id": "Q113489728",
                "name": "OECD country"
              }
            ],
            "description": "country in north america",
            "match": true,
            "delta": 0.428,
            "score": 0.999
          },
          {
            "id": "Q1545509",
            "name": "united states",
            "type": [
              {
                "id": "Q697196",
                "name": "ocean liner"
              },
              {
                "id": "Q2055880",
                "name": "passenger ship"
              }
            ],
            "description": "american ocean liner",
            "match": false,
            "delta": null,
            "score": 0.571
          },
          {
            "id": "Q3965121",
            "name": "united states",
            "type": [
              {
                "id": "Q5398426",
                "name": "television series"
              }
            ],
            "description": "television series",
            "match": false,
            "delta": null,
            "score": 0.1
          }
        ]
      },
      {
        "idColumn": 3,
        "idRow": 3,
        "entity": []
      },
      {
        "idColumn": 0,
        "idRow": 4,
        "entity": [
          {
            "id": "Q38111",
            "name": "leonardo dicaprio",
            "type": [
              {
                "id": "Q33999",
                "name": "actor"
              },
              {
                "id": "Q10800557",
                "name": "film actor"
              },
              {
                "id": "Q28389",
                "name": "screenwriter"
              },
              {
                "id": "Q10798782",
                "name": "television actor"
              },
              {
                "id": "Q3282637",
                "name": "film producer"
              },
              {
                "id": "Q2259451",
                "name": "stage actor"
              },
              {
                "id": "Q3578589",
                "name": "environmentalist"
              },
              {
                "id": "Q5",
                "name": "human"
              }
            ],
            "description": "american actor and film producer",
            "match": true,
            "delta": 0.992,
            "score": 0.994
          },
          {
            "id": "Q110442989",
            "name": "uvariopsis dicaprio",
            "type": [
              {
                "id": "Q16521",
                "name": "taxon"
              }
            ],
            "description": "species of tropical evergreen tree",
            "match": false,
            "delta": null,
            "score": 0.002
          },
          {
            "id": "Q25783703",
            "name": "mal:leonardo dicaprio",
            "type": [
              {
                "id": "Q11266439",
                "name": "Wikimedia template"
              }
            ],
            "description": "wikimedia template",
            "match": false,
            "delta": null,
            "score": 0.002
          }
        ]
      },
      {
        "idColumn": 1,
        "idRow": 4,
        "entity": [
          {
            "id": "Q104994",
            "name": "los angeles",
            "type": [
              {
                "id": "Q13212489",
                "name": "county of California"
              }
            ],
            "description": "county in california, united states",
            "match": false,
            "delta": 0.054,
            "score": 0.99
          },
          {
            "id": "Q65",
            "name": "los angeles",
            "type": [
              {
                "id": "Q13218391",
                "name": "charter city"
              },
              {
                "id": "Q1093829",
                "name": "city in the United States"
              },
              {
                "id": "Q50330360",
                "name": "second largest city"
              },
              {
                "id": "Q515",
                "name": "city"
              },
              {
                "id": "Q208511",
                "name": "global city"
              },
              {
                "id": "Q1637706",
                "name": "million city"
              },
              {
                "id": "Q200250",
                "name": "metropolis"
              },
              {
                "id": "Q174844",
                "name": "megacity"
              },
              {
                "id": "Q745456",
                "name": "business cluster"
              },
              {
                "id": "Q1549591",
                "name": "big city"
              }
            ],
            "description": "largest city in california, united states of america",
            "match": false,
            "delta": null,
            "score": 0.936
          },
          {
            "id": "Q665249",
            "name": "los angeles",
            "type": [
              {
                "id": "Q1428357",
                "name": "submarine class"
              }
            ],
            "description": "class of nuclear-powered fast attack submarines of the united states navy",
            "match": false,
            "delta": null,
            "score": 0.378
          }
        ]
      },
      {
        "idColumn": 2,
        "idRow": 4,
        "entity": [
          {
            "id": "Q30",
            "name": "united states",
            "type": [
              {
                "id": "Q3624078",
                "name": "sovereign state"
              },
              {
                "id": "Q1520223",
                "name": "constitutional republic"
              },
              {
                "id": "Q5255892",
                "name": "democratic republic"
              },
              {
                "id": "Q512187",
                "name": "federal republic"
              },
              {
                "id": "Q1489259",
                "name": "superpower"
              },
              {
                "id": "Q6256",
                "name": "country"
              },
              {
                "id": "Q99541706",
                "name": "historical unrecognized state"
              },
              {
                "id": "Q113489728",
                "name": "OECD country"
              }
            ],
            "description": "country in north america",
            "match": true,
            "delta": 0.389,
            "score": 1
          },
          {
            "id": "Q1545509",
            "name": "united states",
            "type": [
              {
                "id": "Q697196",
                "name": "ocean liner"
              },
              {
                "id": "Q2055880",
                "name": "passenger ship"
              }
            ],
            "description": "american ocean liner",
            "match": false,
            "delta": null,
            "score": 0.611
          },
          {
            "id": "Q3965121",
            "name": "united states",
            "type": [
              {
                "id": "Q5398426",
                "name": "television series"
              }
            ],
            "description": "television series",
            "match": false,
            "delta": null,
            "score": 0.14
          }
        ]
      },
      {
        "idColumn": 3,
        "idRow": 4,
        "entity": []
      }
    ],
    "cpa": [
      {
        "idSourceColumn": "0",
        "idTargetColumn": "1",
        "predicate": "P19"
      },
      {
        "idSourceColumn": "0",
        "idTargetColumn": "2",
        "predicate": "P27"
      },
      {
        "idSourceColumn": "1",
        "idTargetColumn": "0",
        "predicate": "P150"
      },
      {
        "idSourceColumn": "1",
        "idTargetColumn": "2",
        "predicate": "P17"
      },
      {
        "idSourceColumn": "2",
        "idTargetColumn": "1",
        "predicate": "P840"
      }
    ],
    "cta": [
      {
        "idColumn": 0,
        "types": [
          "Q5"
        ]
      },
      {
        "idColumn": 1,
        "types": [
          "Q515"
        ]
      },
      {
        "idColumn": 2,
        "types": [
          "Q3624078"
        ]
      }
    ]
  },
  "metadata": {
    "column": [
      {
        "idColumn": 0,
        "tag": "NE"
      },
      {
        "idColumn": 1,
        "tag": "NE"
      },
      {
        "idColumn": 2,
        "tag": "NE"
      },
      {
        "idColumn": 3,
        "tag": "LIT",
        "datatype": "DATETIME"
      }
    ]
  },
  "status": "DONE",
  "nrows": 4
}
]
```