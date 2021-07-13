import styled from "styled-components";
import Match from "../Match";

const Wrapper = styled.div`
  height: fit-content;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 5%;
  justify-content: center;
`

const RoundWrapper = styled.div`
  height: fit-content;
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  
  h1 {
    font-size: 20px;
    font-weight: 500;
  }
`

const Round = (props) => {
    return (
        <RoundWrapper>
            <h1>Round {parseInt(props.id)+1}</h1>
            {
                props.matches.map((item, index) => <Match key={`${item}-${index}`} match={item}/>)
            }
        </RoundWrapper>
    )
}

const BracketGeneratorRR = () => {

    const bracket =
        {
            id: "0",
            rounds: [
                {
                    id: "0",
                    matches: [
                        {
                            id: "6",
                            players: [
                                {
                                    id: "234",
                                    first_name: "Jon",
                                    last_name: "Name"
                                },
                                {
                                    id: "234",
                                    first_name: "Jon",
                                    last_name: "Name"
                                }
                            ]
                        },
                        {
                            id: "6",
                            players: [
                                {
                                    id: "234",
                                    first_name: "Jon",
                                    last_name: "Name"
                                },
                                {
                                    id: "234",
                                    first_name: "Jon",
                                    last_name: "Name"
                                }
                            ]
                        },
                        {
                            id: "6",
                            players: [
                                {
                                    id: "234",
                                    first_name: "Jon",
                                    last_name: "Name"
                                },
                                {
                                    id: "234",
                                    first_name: "Jon",
                                    last_name: "Name"
                                }
                            ]
                        },
                    ]
                },
                {
                    id: "1",
                    matches: [
                        {
                            id: "6",
                            players: [
                                {
                                    id: "234",
                                    first_name: "Jon",
                                    last_name: "Name"
                                },
                                {
                                    id: "234",
                                    first_name: "Jon",
                                    last_name: "Name"
                                }
                            ]
                        },
                        {
                            id: "6",
                            players: [
                                {
                                    id: "234",
                                    first_name: "Jon",
                                    last_name: "Name"
                                },
                                {
                                    id: "234",
                                    first_name: "Jon",
                                    last_name: "Name"
                                }
                            ]
                        },
                        {
                            id: "6",
                            players: [
                                {
                                    id: "234",
                                    first_name: "Jon",
                                    last_name: "Name"
                                },
                                {
                                    id: "234",
                                    first_name: "Jon",
                                    last_name: "Name"
                                }
                            ]
                        },
                    ]
                },
                {
                    id: "2",
                    matches: [
                        {
                            id: "6",
                            players: [
                                {
                                    id: "234",
                                    first_name: "Jon",
                                    last_name: "Name"
                                },
                                {
                                    id: "234",
                                    first_name: "Jon",
                                    last_name: "Name"
                                }
                            ]
                        },
                        {
                            id: "6",
                            players: [
                                {
                                    id: "234",
                                    first_name: "Jon",
                                    last_name: "Name"
                                },
                                {
                                    id: "234",
                                    first_name: "Jon",
                                    last_name: "Name"
                                }
                            ]
                        },
                        {
                            id: "6",
                            players: [
                                {
                                    id: "234",
                                    first_name: "Jon",
                                    last_name: "Name"
                                },
                                {
                                    id: "234",
                                    first_name: "Jon",
                                    last_name: "Name"
                                }
                            ]
                        },
                    ]
                },
                {
                    id: "3",
                    matches: [
                        {
                            id: "6",
                            players: [
                                {
                                    id: "234",
                                    first_name: "Jon",
                                    last_name: "Name"
                                },
                                {
                                    id: "234",
                                    first_name: "Jon",
                                    last_name: "Name"
                                }
                            ]
                        },
                        {
                            id: "6",
                            players: [
                                {
                                    id: "234",
                                    first_name: "Jon",
                                    last_name: "Name"
                                },
                                {
                                    id: "234",
                                    first_name: "Jon",
                                    last_name: "Name"
                                }
                            ]
                        },
                        {
                            id: "6",
                            players: [
                                {
                                    id: "234",
                                    first_name: "Jon",
                                    last_name: "Name"
                                },
                                {
                                    id: "234",
                                    first_name: "Jon",
                                    last_name: "Name"
                                }
                            ]
                        },
                    ]
                },
                {
                    id: "4",
                    matches: [
                        {
                            id: "6",
                            players: [
                                {
                                    id: "234",
                                    first_name: "Jon",
                                    last_name: "Name"
                                },
                                {
                                    id: "234",
                                    first_name: "Jon",
                                    last_name: "Name"
                                }
                            ]
                        },
                        {
                            id: "6",
                            players: [
                                {
                                    id: "234",
                                    first_name: "Jon",
                                    last_name: "Name"
                                },
                                {
                                    id: "234",
                                    first_name: "Jon",
                                    last_name: "Name"
                                }
                            ]
                        },
                        {
                            id: "6",
                            players: [
                                {
                                    id: "234",
                                    first_name: "Jon",
                                    last_name: "Name"
                                },
                                {
                                    id: "234",
                                    first_name: "Jon",
                                    last_name: "Name"
                                }
                            ]
                        },
                    ]
                },
            ]
        }

    return (
        <Wrapper>
            {bracket.rounds.map((item, index) => <Round key={`${item}-${index}`} id={item.id} matches={item.matches}/>)}
        </Wrapper>
    )
}

export default BracketGeneratorRR