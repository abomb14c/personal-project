const mockData = {
    "league": {
        "id": "4353138d-4c22-4396-95d8-5f587d2df25c",
        "name": "NBA",
        "alias": "NBA"
    },
    "season": {
        "id": "7dcb5184-ab33-49fe-bd18-c4ca2b1cfc08",
        "year": 2017,
        "type": "REG"
    },
    "conferences": [
        {
            "id": "3960cfac-7361-4b30-bc25-8d393de6f62f",
            "name": "EASTERN CONFERENCE",
            "alias": "EASTERN",
            "divisions": [
                {
                    "id": "582d6502-9a93-4a8d-8785-69374d732875",
                    "name": "Atlantic",
                    "alias": "ATLANTIC",
                    "teams": [
                        {
                            "id": "583ecda6-fb46-11e1-82cb-f4ce4684ea4c",
                            "name": "Raptors",
                            "market": "Toronto",
                            "reference": "1610612761",
                            "rank": {
                                "conference": 1,
                                "division": 1,
                                "clinched": "conference"
                            }
                        },
                        {
                            "id": "583eccfa-fb46-11e1-82cb-f4ce4684ea4c",
                            "name": "Celtics",
                            "market": "Boston",
                            "reference": "1610612738",
                            "rank": {
                                "conference": 2,
                                "division": 2,
                                "clinched": "playoff_berth"
                            }
                        },
                        {
                            "id": "583ec87d-fb46-11e1-82cb-f4ce4684ea4c",
                            "name": "76ers",
                            "market": "Philadelphia",
                            "reference": "1610612755",
                            "rank": {
                                "conference": 3,
                                "division": 3,
                                "clinched": "playoff_berth"
                            }
                        },
                        {
                            "id": "583ec70e-fb46-11e1-82cb-f4ce4684ea4c",
                            "name": "Knicks",
                            "market": "New York",
                            "reference": "1610612752",
                            "rank": {
                                "conference": 11,
                                "division": 4,
                                "clinched": "eliminated"
                            }
                        },
                        {
                            "id": "583ec9d6-fb46-11e1-82cb-f4ce4684ea4c",
                            "name": "Nets",
                            "market": "Brooklyn",
                            "reference": "1610612751",
                            "rank": {
                                "conference": 12,
                                "division": 5,
                                "clinched": "eliminated"
                            }
                        }
                    ]
                },
                {
                    "id": "f3aaf23a-1ceb-46ef-8fef-9403692e801b",
                    "name": "Central",
                    "alias": "CENTRAL",
                    "teams": [
                        {
                            "id": "583ec773-fb46-11e1-82cb-f4ce4684ea4c",
                            "name": "Cavaliers",
                            "market": "Cleveland",
                            "reference": "1610612739",
                            "rank": {
                                "conference": 4,
                                "division": 1,
                                "clinched": "division"
                            }
                        },
                        {
                            "id": "583ec7cd-fb46-11e1-82cb-f4ce4684ea4c",
                            "name": "Pacers",
                            "market": "Indiana",
                            "reference": "1610612754",
                            "rank": {
                                "conference": 5,
                                "division": 2,
                                "clinched": "playoff_berth"
                            }
                        },
                        {
                            "id": "583ecefd-fb46-11e1-82cb-f4ce4684ea4c",
                            "name": "Bucks",
                            "market": "Milwaukee",
                            "reference": "1610612749",
                            "rank": {
                                "conference": 7,
                                "division": 3,
                                "clinched": "playoff_berth"
                            }
                        },
                        {
                            "id": "583ec928-fb46-11e1-82cb-f4ce4684ea4c",
                            "name": "Pistons",
                            "market": "Detroit",
                            "reference": "1610612765",
                            "rank": {
                                "conference": 9,
                                "division": 4,
                                "clinched": "eliminated"
                            }
                        },
                        {
                            "id": "583ec5fd-fb46-11e1-82cb-f4ce4684ea4c",
                            "name": "Bulls",
                            "market": "Chicago",
                            "reference": "1610612741",
                            "rank": {
                                "conference": 13,
                                "division": 5,
                                "clinched": "eliminated"
                            }
                        }
                    ]
                },
                {
                    "id": "54dc7348-c1d2-40d8-88b3-c4c0138e085d",
                    "name": "Southeast",
                    "alias": "SOUTHEAST",
                    "teams": [
                        {
                            "id": "583ecea6-fb46-11e1-82cb-f4ce4684ea4c",
                            "name": "Heat",
                            "market": "Miami",
                            "reference": "1610612748",
                            "rank": {
                                "conference": 6,
                                "division": 1,
                                "clinched": "division"
                            }
                        },
                        {
                            "id": "583ec8d4-fb46-11e1-82cb-f4ce4684ea4c",
                            "name": "Wizards",
                            "market": "Washington",
                            "reference": "1610612764",
                            "rank": {
                                "conference": 8,
                                "division": 2,
                                "clinched": "playoff_berth"
                            }
                        },
                        {
                            "id": "583ec97e-fb46-11e1-82cb-f4ce4684ea4c",
                            "name": "Hornets",
                            "market": "Charlotte",
                            "reference": "1610612766",
                            "rank": {
                                "conference": 10,
                                "division": 3,
                                "clinched": "eliminated"
                            }
                        },
                        {
                            "id": "583ed157-fb46-11e1-82cb-f4ce4684ea4c",
                            "name": "Magic",
                            "market": "Orlando",
                            "reference": "1610612753",
                            "rank": {
                                "conference": 14,
                                "division": 4,
                                "clinched": "eliminated"
                            }
                        },
                        {
                            "id": "583ecb8f-fb46-11e1-82cb-f4ce4684ea4c",
                            "name": "Hawks",
                            "market": "Atlanta",
                            "reference": "1610612737",
                            "rank": {
                                "conference": 15,
                                "division": 5,
                                "clinched": "eliminated"
                            }
                        }
                    ]
                }
            ]
        },
        {
            "id": "7fe7e212-de01-4f8f-a31d-b9f0a95731e3",
            "name": "WESTERN CONFERENCE",
            "alias": "WESTERN",
            "divisions": [
                {
                    "id": "12bf14ba-eb16-4c6f-8275-e801b6947c1e",
                    "name": "Northwest",
                    "alias": "NORTHWEST",
                    "teams": [
                        {
                            "id": "583ed056-fb46-11e1-82cb-f4ce4684ea4c",
                            "name": "Trail Blazers",
                            "market": "Portland",
                            "reference": "1610612757",
                            "rank": {
                                "conference": 3,
                                "division": 1,
                                "clinched": "division"
                            }
                        },
                        {
                            "id": "583ecfff-fb46-11e1-82cb-f4ce4684ea4c",
                            "name": "Thunder",
                            "market": "Oklahoma City",
                            "reference": "1610612760",
                            "rank": {
                                "conference": 4,
                                "division": 2,
                                "clinched": "playoff_berth"
                            }
                        },
                        {
                            "id": "583ece50-fb46-11e1-82cb-f4ce4684ea4c",
                            "name": "Jazz",
                            "market": "Utah",
                            "reference": "1610612762",
                            "rank": {
                                "conference": 5,
                                "division": 3,
                                "clinched": "playoff_berth"
                            }
                        },
                        {
                            "id": "583eca2f-fb46-11e1-82cb-f4ce4684ea4c",
                            "name": "Timberwolves",
                            "market": "Minnesota",
                            "reference": "1610612750",
                            "rank": {
                                "conference": 8,
                                "division": 4,
                                "clinched": "playoff_berth"
                            }
                        },
                        {
                            "id": "583ed102-fb46-11e1-82cb-f4ce4684ea4c",
                            "name": "Nuggets",
                            "market": "Denver",
                            "reference": "1610612743",
                            "rank": {
                                "conference": 9,
                                "division": 5,
                                "clinched": "eliminated"
                            }
                        }
                    ]
                },
                {
                    "id": "f074cb3e-90cf-42e1-8067-cdbcd99ec230",
                    "name": "Pacific",
                    "alias": "PACIFIC",
                    "teams": [
                        {
                            "id": "583ec825-fb46-11e1-82cb-f4ce4684ea4c",
                            "name": "Warriors",
                            "market": "Golden State",
                            "reference": "1610612744",
                            "rank": {
                                "conference": 2,
                                "division": 1,
                                "clinched": "division"
                            }
                        },
                        {
                            "id": "583ecdfb-fb46-11e1-82cb-f4ce4684ea4c",
                            "name": "Clippers",
                            "market": "Los Angeles",
                            "reference": "1610612746",
                            "rank": {
                                "conference": 10,
                                "division": 2,
                                "clinched": "eliminated"
                            }
                        },
                        {
                            "id": "583ecae2-fb46-11e1-82cb-f4ce4684ea4c",
                            "name": "Lakers",
                            "market": "Los Angeles",
                            "reference": "1610612747",
                            "rank": {
                                "conference": 11,
                                "division": 3,
                                "clinched": "eliminated"
                            }
                        },
                        {
                            "id": "583ed0ac-fb46-11e1-82cb-f4ce4684ea4c",
                            "name": "Kings",
                            "market": "Sacramento",
                            "reference": "1610612758",
                            "rank": {
                                "conference": 12,
                                "division": 4,
                                "clinched": "eliminated"
                            }
                        },
                        {
                            "id": "583ecfa8-fb46-11e1-82cb-f4ce4684ea4c",
                            "name": "Suns",
                            "market": "Phoenix",
                            "reference": "1610612756",
                            "rank": {
                                "conference": 15,
                                "division": 5,
                                "clinched": "eliminated"
                            }
                        }
                    ]
                },
                {
                    "id": "1d29f94c-9587-494b-a232-feb20a40eb4c",
                    "name": "Southwest",
                    "alias": "SOUTHWEST",
                    "teams": [
                        {
                            "id": "583ecb3a-fb46-11e1-82cb-f4ce4684ea4c",
                            "name": "Rockets",
                            "market": "Houston",
                            "reference": "1610612745",
                            "rank": {
                                "conference": 1,
                                "division": 1,
                                "clinched": "conference"
                            }
                        },
                        {
                            "id": "583ecc9a-fb46-11e1-82cb-f4ce4684ea4c",
                            "name": "Pelicans",
                            "market": "New Orleans",
                            "reference": "1610612740",
                            "rank": {
                                "conference": 6,
                                "division": 2,
                                "clinched": "playoff_berth"
                            }
                        },
                        {
                            "id": "583ecd4f-fb46-11e1-82cb-f4ce4684ea4c",
                            "name": "Spurs",
                            "market": "San Antonio",
                            "reference": "1610612759",
                            "rank": {
                                "conference": 7,
                                "division": 3,
                                "clinched": "playoff_berth"
                            }
                        },
                        {
                            "id": "583ecf50-fb46-11e1-82cb-f4ce4684ea4c",
                            "name": "Mavericks",
                            "market": "Dallas",
                            "reference": "1610612742",
                            "rank": {
                                "conference": 13,
                                "division": 4,
                                "clinched": "eliminated"
                            }
                        },
                        {
                            "id": "583eca88-fb46-11e1-82cb-f4ce4684ea4c",
                            "name": "Grizzlies",
                            "market": "Memphis",
                            "reference": "1610612763",
                            "rank": {
                                "conference": 14,
                                "division": 5,
                                "clinched": "eliminated"
                            }
                        }
                    ]
                }
            ]
        }
    ]
}

export default mockData